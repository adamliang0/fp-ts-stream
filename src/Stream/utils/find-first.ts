import { flow } from "fp-ts/function";
import type { Option } from "fp-ts/Option";
import { not, type Predicate } from "fp-ts/Predicate";
import type { Refinement } from "fp-ts/Refinement";

import type { Stream } from "../uri";
import { dropLeftWhile } from "./drop-left-while";
import { head } from "./head";

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Option<B>} A function that takes a stream
 * to search.
 *
 * @__PURE__
 */
export function findFirst<A, B extends A>(
	refinement: Refinement<A, B>,
): (fa: Stream<A>) => Option<B>;

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fa: Stream<A>) => Option<B>} A function that takes
 * a stream to search.
 *
 * @__PURE__
 */
export function findFirst<A>(
	predicate: Predicate<A>,
): <B extends A>(fb: Stream<B>) => Option<B>;

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => Option<A>} A function that takes
 * a stream to search.
 *
 * @__PURE__
 */
export function findFirst<A>(
	predicate: Predicate<A>,
): (fa: Stream<A>) => Option<A>;
export function findFirst<A>(
	predicate: Predicate<A>,
): (fa: Stream<A>) => Option<A> {
	return flow(dropLeftWhile(not(predicate)), head);
}
