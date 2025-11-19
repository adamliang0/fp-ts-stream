import { describe, expect, it } from "vitest";

import { fromIterable as fromSyncIterable } from "@/Stream/conversions";
import { fromStream } from "@/AsyncStream/transformations/from-stream";

import { collect } from "../helpers";

describe("AsyncStream/transformations/from-stream", () => {
	it("adapts synchronous streams so they can participate in async pipelines", async () => {
		const syncStream = fromSyncIterable([1, 2, 3]);
		const asyncStream = fromStream(syncStream);

		await expect(collect(asyncStream)).resolves.toEqual([1, 2, 3]);
		await expect(collect(asyncStream)).resolves.toEqual([1, 2, 3]);
	});
});
