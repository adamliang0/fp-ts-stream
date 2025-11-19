import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { intersperse } from "@/Stream/utils/intersperse";

describe("Stream/utils/intersperse", () => {
	it("yields an empty stream when the source is empty", () => {
		const result = toArray(intersperse("|")(fromIterable([])));
		expect(result).toEqual([]);
	});

	it("inserts the separator between every original item", () => {
		const result = toArray(intersperse("-")(fromIterable(["a", "b", "c"])));
		expect(result).toEqual(["a", "-", "b", "-", "c"]);
	});
});
