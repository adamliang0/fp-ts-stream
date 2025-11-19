import { describe, expect, it } from "vitest";

import * as AS from "@/AsyncStream";

import { chunkedStream, collect, deferred } from "./helpers";

describe("AsyncStream/conversions", () => {
	it("consumes async iterables and preserves emission order", async () => {
		const asyncIterable = {
			async *[Symbol.asyncIterator]() {
				yield "boot";
				await Promise.resolve();
				yield "ready";
			},
		};

		await expect(collect(AS.fromAsyncIterable(asyncIterable))).resolves.toEqual(
			["boot", "ready"],
		);
	});

	it("fromPromises yields as soon as individual promises settle", async () => {
		const first = deferred<number>();
		const second = deferred<number>();

		const pending = collect(AS.fromPromises([first.promise, second.promise]));
		second.resolve(2);
		await Promise.resolve();
		first.resolve(1);

		await expect(pending).resolves.toEqual([2, 1]);
	});

	it("fromPromisesSeq enforces sequential ordering even if a later promise wins", async () => {
		const slow = deferred<number>();
		const fast = deferred<number>();

		const pending = collect(AS.fromPromisesSeq([slow.promise, fast.promise]));
		fast.resolve(2);
		await Promise.resolve();
		slow.resolve(1);

		await expect(pending).resolves.toEqual([1, 2]);
	});

	it("toStream snapshots async emissions so they can be replayed synchronously", async () => {
		const asyncSource = chunkedStream([
			{ values: ["a", "b"] },
			{ delayMs: 5, values: ["c"] },
		]);

		const syncStream = await AS.toStream(asyncSource)();

		const firstPass = Array.from(syncStream());
		const secondPass = Array.from(syncStream());

		expect(firstPass).toEqual(["a", "b", "c"]);
		expect(secondPass).toEqual(["a", "b", "c"]);
	});
});
