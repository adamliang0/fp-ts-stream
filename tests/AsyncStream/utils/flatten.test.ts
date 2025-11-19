import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import * as AS from "@/AsyncStream";

import { chunkedStream, collect } from "../helpers";

describe("AsyncStream/utils/flatten", () => {
	it("concatenates nested streams while keeping ordering per upstream chunk", async () => {
		const streamOfStreams = AS.fromIterable([
			AS.fromIterable([1, 2]),
			AS.fromIterable([3, 4]),
			AS.of(5),
		]);

		await expect(pipe(streamOfStreams, AS.flatten, collect)).resolves.toEqual([
			1, 2, 3, 4, 5,
		]);
	});

	it("handles empty inputs without emitting values", async () => {
		await expect(pipe(AS.empty, AS.flatten, collect)).resolves.toEqual([]);
	});

	it("waits for each inner stream to finish before moving forward", async () => {
		const firstBatch = chunkedStream([
			{ delayMs: 10, values: ["a"] },
			{ delayMs: 0, values: ["b"] },
		]);
		const secondBatch = chunkedStream([{ delayMs: 0, values: ["c"] }]);

		const streamOfStreams = AS.fromIterable([firstBatch, secondBatch]);
		await expect(pipe(streamOfStreams, AS.flatten, collect)).resolves.toEqual([
			"a",
			"b",
			"c",
		]);
	});
});
