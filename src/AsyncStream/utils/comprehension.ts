import { constTrue } from "fp-ts/function";
import type { ReadonlyNonEmptyArray } from "fp-ts/ReadonlyNonEmptyArray";

import type { AsyncStream } from "../uri";
import type { MaybeAsync } from "./maybe-async";

type UnwrapOutputs<
	SA extends ReadonlyArray<AsyncStream<unknown>>,
	Output extends ReadonlyArray<unknown> = [],
> = SA extends readonly [
	AsyncStream<infer H>,
	...infer R extends ReadonlyArray<AsyncStream<unknown>>,
]
	? UnwrapOutputs<R, [...Output, H]>
	: Output;

type OutputMapper<T extends ReadonlyArray<AsyncStream<unknown>>, R> = (
	...args: UnwrapOutputs<T>
) => MaybeAsync<R>;

type Condition<T extends ReadonlyArray<AsyncStream<unknown>>> = OutputMapper<
	T,
	boolean
>;

/**
 * {@link AsyncStream} comprehension.
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
 * @return {AsyncStream<R>} The output async stream.
 *
 * @__PURE__
 */
export function comprehension<
	R,
	I extends ReadonlyNonEmptyArray<AsyncStream<unknown>>,
>(input: I, f: OutputMapper<I, R>, g?: Condition<I>): AsyncStream<R> {
	return async function* _comprehension() {
		type Args = UnwrapOutputs<I>;

		// Make sure the default is seen as a Condition<I>
		const guard: Condition<I> = (g ??
			((..._xs: Args) => constTrue())) as Condition<I>;

		async function* go(
			streams: ReadonlyArray<AsyncStream<unknown>>,
			collected: Args,
			depth: number,
		): AsyncGenerator<R> {
			if (streams.length === 0) {
				if (await guard(...collected)) {
					const r = await f(...collected);
					yield r;
				}
				return;
			}

			const [head, ...tail] = streams;

			for await (const a of head()) {
				// TS can’t track that depth is a valid index for Args,
				// so we narrow index and value only.
				collected[depth as keyof Args] = a as Args[number];
				yield* go(tail, collected, depth + 1);
			}
		}

		// Initialize the tuple we’ll fill as we traverse the streams
		const collected = new Array(input.length).fill(
			undefined,
		) as unknown as Args;

		yield* go(input, collected, 0);
	};
}
