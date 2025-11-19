import { none, some } from "fp-ts/Option";
import { describe, expect, it } from "vitest";

import { fromOption } from "@/AsyncStream/transformations/from-option";

import { collect } from "../helpers";

describe("AsyncStream/transformations/from-option", () => {
	it("wraps Some values and replays them on demand", async () => {
		const stream = fromOption(some("active"));

		await expect(collect(stream)).resolves.toEqual(["active"]);
		await expect(collect(stream)).resolves.toEqual(["active"]);
	});

	it("returns an empty stream when given None", async () => {
		await expect(collect(fromOption(none))).resolves.toEqual([]);
	});
});
