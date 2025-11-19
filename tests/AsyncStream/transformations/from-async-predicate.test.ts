import { describe, expect, it, vi } from "vitest";

import { fromAsyncPredicate } from "@/AsyncStream/transformations/from-async-predicate";

import { collect } from "../helpers";

describe("AsyncStream/transformations/from-async-predicate", () => {
	it("emits the input when the predicate eventually resolves truthy", async () => {
		const predicate = vi.fn(async (value: number) => {
			await Promise.resolve();
			return value > 0;
		});

		await expect(collect(fromAsyncPredicate(predicate)(41))).resolves.toEqual([
			41,
		]);
		expect(predicate).toHaveBeenCalledWith(41);
	});

	it("returns an empty stream otherwise", async () => {
		const predicate = vi.fn(async () => false);
		await expect(collect(fromAsyncPredicate(predicate)(-1))).resolves.toEqual(
			[],
		);
		expect(predicate).toHaveBeenCalledTimes(1);
	});
});
