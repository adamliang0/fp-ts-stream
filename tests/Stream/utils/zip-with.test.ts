import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { range } from "@/Stream/utils/range";
import { zipWith } from "@/Stream/utils/zip-with";

describe("Stream/utils/zip-with", () => {
	it("combines two finite streams and truncates to the shorter length", () => {
		const combined = pipe(
			zipWith(
				fromIterable([1, 2, 3]),
				fromIterable([10, 20]),
				(left, right) => left + right,
			),
			toArray,
		);

		expect(combined).toEqual([11, 22]);
	});

	it("can zip an infinite stream with a finite stream without hanging", () => {
		const labeled = pipe(
			zipWith(range(0), fromIterable(["A", "B", "C"]), (index, label) => ({
				index,
				label,
			})),
			toArray,
		);

		expect(labeled).toEqual([
			{ index: 0, label: "A" },
			{ index: 1, label: "B" },
			{ index: 2, label: "C" },
		]);
	});
});
