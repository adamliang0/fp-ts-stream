import { pipe } from "fp-ts/function";
import { describe, expect, it, vi } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import type { Stream } from "@/Stream/uri";
import { takeLeft } from "@/Stream/utils/take-left";

describe("Stream/utils/take-left", () => {
	it("returns an empty stream when zero or negative counts are requested", () => {
		const base = fromIterable([1, 2, 3]);

		expect(pipe(base, takeLeft(0), toArray)).toEqual([]);
		expect(pipe(base, takeLeft(-4), toArray)).toEqual([]);
	});

	it("only emits the requested number of items", () => {
		const result = pipe(fromIterable([1, 2, 3, 4]), takeLeft(2), toArray);
		expect(result).toEqual([1, 2]);
	});

	it("stops pulling from the source as soon as enough items were read", () => {
		const pulled = vi.fn();

		const source: Stream<number> = () =>
			(function* () {
				for (const value of [10, 20, 30]) {
					pulled(value);
					yield value;
				}
			})();

		expect(pipe(source, takeLeft(1), toArray)).toEqual([10]);
		expect(pulled).toHaveBeenCalledTimes(1);
	});
});
