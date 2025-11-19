import { describe, expect, it } from "vitest";

import * as AS from "@/AsyncStream";

import { collect } from "../../AsyncStream/helpers";

describe("AsyncStream/utils/range", () => {
	it("creates bounded numeric ranges", async () => {
		await expect(collect(AS.range(3, 6))).resolves.toEqual([3, 4, 5]);
	});

	it("supports open-ended ranges that can be truncated downstream", async () => {
		await expect(collect(AS.range(0), { limit: 4 })).resolves.toEqual([
			0, 1, 2, 3,
		]);
	});
});
