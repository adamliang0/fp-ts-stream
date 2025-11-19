import { none, some } from "fp-ts/Option";
import { describe, expect, it } from "vitest";

import { fromIterable } from "@/Stream/conversions";
import { last } from "@/Stream/utils/last";

describe("Stream/utils/last", () => {
	it("returns None for empty streams", () => {
		expect(last(fromIterable([]))).toEqual(none);
	});

	it("returns the final element wrapped in Some", () => {
		const values = [1, 2, 3, 4];
		expect(last(fromIterable(values))).toEqual(some(4));
	});
});
