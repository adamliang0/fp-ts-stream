import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { matchLeft } from "@/Stream/utils/match-left";

describe("Stream/utils/match-left", () => {
	it("invokes onEmpty when the stream has no elements", () => {
		const matcher = matchLeft(
			() => "empty",
			() => "non-empty",
		);

		expect(matcher(fromIterable([]))).toBe("empty");
	});

	it("provides head and lazily evaluated tail when non-empty", () => {
		const matcher = matchLeft(
			() => "empty",
			(head: number, tail) => ({ head, rest: toArray(tail) }),
		);

		expect(matcher(fromIterable([1, 2, 3]))).toEqual({
			head: 1,
			rest: [2, 3],
		});
	});
});
