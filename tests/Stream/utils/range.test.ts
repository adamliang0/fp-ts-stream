import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import { toArray } from "@/Stream/conversions";
import { range } from "@/Stream/utils/range";
import { takeLeft } from "@/Stream/utils/take-left";

describe("Stream/utils/range", () => {
	it("creates a finite range when both bounds are provided", () => {
		expect(pipe(range(2, 6), toArray)).toEqual([2, 3, 4, 5]);
	});

	it("supports open-ended ranges that can be safely truncated downstream", () => {
		const firstFive = pipe(range(0), takeLeft(5), toArray);
		expect(firstFive).toEqual([0, 1, 2, 3, 4]);
	});
});
