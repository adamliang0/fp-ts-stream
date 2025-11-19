import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { match } from "@/Stream/utils/match";

describe("Stream/utils/match", () => {
	it("evaluates onEmpty when the stream is empty", () => {
		const matcher = match(
			() => "empty",
			() => "non-empty",
		);

		expect(matcher(fromIterable([]))).toBe("empty");
	});

	it("passes the original stream through to onNonEmpty", () => {
		const matcher = match(
			() => "empty",
			(stream) => toArray(stream).join(","),
		);

		expect(matcher(fromIterable([1, 2, 3]))).toBe("1,2,3");
	});
});
