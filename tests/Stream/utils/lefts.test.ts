import { left, right } from "fp-ts/Either";
import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { lefts } from "@/Stream/utils/lefts";

describe("Stream/utils/lefts", () => {
	it("collects Left values preserving their order", () => {
		const stream = fromIterable([left("error-1"), right(2), left("error-2")]);
		expect(toArray(lefts(stream))).toEqual(["error-1", "error-2"]);
	});

	it("returns an empty stream when no Left values exist", () => {
		const stream = fromIterable([right(1), right(2)]);
		expect(toArray(lefts(stream))).toEqual([]);
	});
});
