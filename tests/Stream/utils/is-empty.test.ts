import { describe, expect, it, vi } from "vitest";

import { fromIterable } from "@/Stream/conversions";
import { isEmpty, isNotEmpty } from "@/Stream/utils/is-empty";

describe("Stream/utils/is-empty", () => {
	it("returns true for empty streams and false otherwise", () => {
		expect(isEmpty(fromIterable([]))).toBe(true);
		expect(isEmpty(fromIterable([1]))).toBe(false);
		expect(isNotEmpty(fromIterable([1, 2, 3]))).toBe(true);
	});

	it("only inspects the first item", () => {
		const spy = vi.fn();
		const stream = fromIterable(
			(function* () {
				yield spy("first");
				yield spy("second");
			})(),
		);

		expect(isNotEmpty(stream)).toBe(true);
		expect(spy).toHaveBeenCalledTimes(1);
	});
});
