import { type Either, isRight } from "fp-ts/Either";

import type { Stream } from "../uri";

/**
 * Extracts from a {@link Stream} all the `Right` elements.
 *
 * All the `Right` elements are extracted in order.
 *
 * @export
 * @template E The error type.
 * @template A The value type.
 * @param {Stream<Either<E, A>>} fa The input stream.
 * @return {Stream<A>} The output stream.
 *
 * @__PURE__
 */
export function rights<E, A>(fa: Stream<Either<E, A>>): Stream<A> {
	return function* _rights() {
		for (const e of fa()) {
			if (isRight(e)) {
				yield e.right;
			}
		}
	};
}
