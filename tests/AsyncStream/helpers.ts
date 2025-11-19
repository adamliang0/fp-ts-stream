import { pipe } from "fp-ts/function";

import { toArray } from "@/AsyncStream/conversions";
import type { AsyncStream } from "@/AsyncStream/uri";
import { takeLeft } from "@/AsyncStream/utils/take-left";

type CollectOptions = {
	readonly limit?: number;
};

/**
 * Resolves an {@link AsyncStream} into an array for assertions.
 *
 * Supports optionally limiting how many elements should be pulled from the
 * source so tests can safely consume infinite streams.
 */
export async function collect<A>(
	stream: AsyncStream<A>,
	options?: CollectOptions,
): Promise<A[]> {
	if (typeof options?.limit === "number") {
		return toArray(pipe(stream, takeLeft(options.limit)));
	}

	return toArray(stream);
}

/**
 * Simple utility that exposes a promise plus its resolve/reject callbacks so
 * tests can deterministically control when asynchronous work finishes.
 */
export function deferred<A>() {
	let resolve!: (value: A | PromiseLike<A>) => void;
	let reject!: (reason?: unknown) => void;

	const promise = new Promise<A>((res, rej) => {
		resolve = res;
		reject = rej;
	});

	return { promise, resolve, reject };
}

const wait = (ms: number) =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});

type Chunk<A> = {
	readonly delayMs?: number;
	readonly values: ReadonlyArray<A>;
};

/**
 * Builds an {@link AsyncStream} that emits batches of values after optional
 * delays. Useful for simulating IO like paginated API calls.
 */
export function chunkedStream<A>(
	chunks: ReadonlyArray<Chunk<A>>,
): AsyncStream<A> {
	return async function* _chunkedStream() {
		for (const { delayMs, values } of chunks) {
			if (typeof delayMs === "number" && delayMs > 0) {
				await wait(delayMs);
			}

			for (const value of values) {
				yield value;
			}
		}
	};
}
