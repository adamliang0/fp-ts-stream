import type { Applicative1 } from "fp-ts/Applicative";
import { pipe } from "fp-ts/function";

import { chain } from "./chain";
import { Functor } from "./functor";
import { Pointed } from "./pointed";
import { type AsyncStream, URI } from "./uri";
import type { MaybeAsync } from "./utils/maybe-async";

/**
 * The `ApplicativeSeq` category instance for {@link AsyncStream}.
 */
export const ApplicativeSeq: Applicative1<URI> = {
	URI,
	ap: _apSeq,
	map: Functor.map,
	of: Pointed.of,
};

function _apSeq<A, B>(
	fab: AsyncStream<(a: A) => MaybeAsync<B>>,
	fa: AsyncStream<A>,
): AsyncStream<B> {
	return pipe(
		fab,
		chain((f) => Functor.map(fa, f as (a: A) => B)), // map also handles promises
	);
}
