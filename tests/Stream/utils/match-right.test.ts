import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { matchRight } from "@/Stream/utils/match-right";

describe("Stream/utils/match-right", () => {
	it("invokes onEmpty when the stream has no elements", () => {
		const matcher = matchRight(
			() => "empty",
			() => "non-empty",
		);

		expect(matcher(fromIterable([]))).toBe("empty");
	});

	it("returns init stream and final element when non-empty", () => {
		const matcher = matchRight<string, number>(
			() => "empty",
			(init, lastValue) => ({
				init: toArray(init),
				last: lastValue,
			}),
		);

		expect(matcher(fromIterable([1, 2, 3]))).toEqual({
			init: [1, 2],
			last: 3,
		});
	});

	it("handles singleton streams by returning an empty init", () => {
		const matcher = matchRight(
			() => "empty",
			(init, lastValue) => ({ init: toArray(init), last: lastValue }),
		);

		expect(matcher(fromIterable(["only"]))).toEqual({
			init: [],
			last: "only",
		});
	});
});
