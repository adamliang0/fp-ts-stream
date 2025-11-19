import { type FromIO1, fromIOK as fromIOFromIOK } from "fp-ts/FromIO";
import type { IO } from "fp-ts/IO";

import { type AsyncStream, URI } from "../uri";

/**
 * Creates an {@link AsyncStream} from an {@link IO} instance.
 *
 * @export
 * @template A The value type.
 * @param {IO<A>} fa The io instance.
 * @return {AsyncStream<A>} The async stream output.
 *
 * @category conversions
 * @__PURE__
 */
export function fromIO<A>(fa: IO<A>): AsyncStream<A> {
	return async function* _fromIO() {
		yield fa();
	};
}

/**
 * The `FromIO` category instance for {@link AsyncStream}.
 */
export const FromIO: FromIO1<URI> = {
	URI,
	fromIO,
};

/**
 * @category lifting
 */
export const fromIOK = fromIOFromIOK(FromIO);
