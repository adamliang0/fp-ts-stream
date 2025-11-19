import { describe, expect, it } from "vitest";

import { toArray } from "@/Stream/conversions";
import { makeBy } from "@/Stream/utils/make-by";

describe("Stream/utils/make-by", () => {
	it("creates streams by calling the builder for each index", () => {
		const stream = makeBy(4, (i) => i * i);
		expect(toArray(stream)).toEqual([0, 1, 4, 9]);
	});

	it("normalizes negative lengths to positive integers", () => {
		const stream = makeBy(-3, () => "x");
		expect(toArray(stream)).toEqual(["x", "x", "x"]);
	});
});
