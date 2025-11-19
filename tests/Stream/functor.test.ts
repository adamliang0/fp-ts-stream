import { pipe } from "fp-ts/function";
import { describe, expect, it, vi } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { map, mapWithIndex } from "@/Stream/functor";
import { range } from "@/Stream/utils/range";
import { takeLeft } from "@/Stream/utils/take-left";

describe("Stream/functor", () => {
	it("maps lazily and only touches as many elements as consumers request", () => {
		const mapper = vi.fn((value: number) => value * 2);
		const stream = pipe(range(0), map(mapper));

		expect(mapper).not.toHaveBeenCalled();

		const result = pipe(stream, takeLeft(3), toArray);
		expect(result).toEqual([0, 2, 4]);
		expect(mapper).toHaveBeenCalledTimes(3);
	});

	it("exposes the running index via mapWithIndex", () => {
		const result = pipe(
			fromIterable(["alpha", "beta", "gamma"]),
			mapWithIndex((index, value) => `${index}:${value}`),
			toArray,
		);

		expect(result).toEqual(["0:alpha", "1:beta", "2:gamma"]);
	});
});
