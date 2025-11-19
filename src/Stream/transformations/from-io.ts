import { type FromIO1, fromIOK as fromIOFromIOK } from "fp-ts/FromIO";
import type { IO } from "fp-ts/IO";

import { type Stream, URI } from "../uri";

/**
 * Creates an {@link Stream} from an {@link IO} instance.
 *
 * @export
 * @template A The value type.
 * @param {IO<A>} fa The io instance.
 * @return {Stream<A>} The stream output.
 *
 * @category conversions
 * @__PURE__
 */
export function fromIO<A>(fa: IO<A>): Stream<A> {
	return function* _fromIO() {
		yield fa();
	};
}

/**
 * The `FromIO` category instance for {@link Stream}.
 */
export const FromIO: FromIO1<URI> = {
	URI,
	fromIO,
};

/**
 * @category lifting
 */
export const fromIOK = fromIOFromIOK(FromIO);
