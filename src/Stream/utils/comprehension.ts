import { constTrue } from "fp-ts/function";
import type { ReadonlyNonEmptyArray } from "fp-ts/ReadonlyNonEmptyArray";

import type { Stream } from "../uri";

type UnwrapOutputs<
	SA extends ReadonlyArray<Stream<unknown>>,
	Output extends ReadonlyArray<unknown> = [],
> = SA extends readonly [
	Stream<infer H>,
	...infer R extends ReadonlyArray<Stream<unknown>>,
]
	? UnwrapOutputs<R, [...Output, H]>
	: Output;

type OutputMapper<T extends ReadonlyArray<Stream<unknown>>, R> = (
	...args: UnwrapOutputs<T>
) => R;

type Condition<T extends ReadonlyArray<Stream<unknown>>> = OutputMapper<
	T,
	boolean
>;

/**
 * {@link Stream} comprehension.
 *
 * ```
 * { f(x, y, ...) | x ← xs, y ← ys, ..., g(x, y, ...) }
 * ```
 *
 * @export
 * @template R The output type.
 * @template I The input parameters array type.
 * @param {I} input The input streams.
 * @param {OutputMapper<I, R>} f The output mapper function.
 * @param {Condition<I>} [g] Optional condition function.
 * @return {Stream<R>} The output stream.
 *
 * @__PURE__
 */
export function comprehension<
	R,
	I extends ReadonlyNonEmptyArray<Stream<unknown>>,
>(input: I, f: OutputMapper<I, R>, g?: Condition<I>): Stream<R> {
	return function* _comprehension() {
		type Args = UnwrapOutputs<I>;

		// No union / inference weirdness: both branches are Condition<I>
		const guard: Condition<I> = g ? g : (..._xs: Args) => constTrue();

		function* go(
			streams: ReadonlyArray<Stream<unknown>>,
			collected: Args,
			depth: number,
		): Generator<R> {
			if (streams.length === 0) {
				if (guard(...collected)) {
					yield f(...collected);
				}
				return;
			}

			const [head, ...tail] = streams;

			for (const a of head()) {
				// TS still can’t track which stream corresponds to which index,
				// so we localize the unsafety to these two assertions.
				collected[depth as keyof Args] = a as Args[number];
				yield* go(tail, collected, depth + 1);
			}
		}

		// Single localized cast from an `unknown[]` to the tuple type
		const collected = new Array(input.length).fill(
			undefined,
		) as unknown as Args;

		yield* go(input, collected, 0);
	};
}
