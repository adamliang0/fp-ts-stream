import { flow } from "fp-ts/function";
import { flatten, isSome, type Option } from "fp-ts/Option";
import { map as mapTask, type Task } from "fp-ts/Task";

import { map } from "../functor";
import type { AsyncStream } from "../uri";
import { findFirst } from "./find-first";
import type { MaybeAsync } from "./maybe-async";

/**
 * Given a selector function which takes an element and returns
 * a {@link Task} of an {@link Option}, this function applies the selector to
 * each element of the array and returns the first `Some` result.
 * Otherwise it returns `None`.
 *
 * @export
 * @template A The value type.
 * @template B The mapped value type.
 * @param {(a: A) => Option<B> | Promise<Option<B>>} f The mapping function.
 * @return {(fa: AsyncStream<A>) => Task<Option<B>>} A function that takes an
 * async stream and returns an option of `B`.
 *
 * @__PURE__
 */
export function findFirstMap<A, B>(
	f: (a: A) => MaybeAsync<Option<B>>,
): (fa: AsyncStream<A>) => Task<Option<B>> {
	return flow(map(f), findFirst(isSome), mapTask(flatten));
}
