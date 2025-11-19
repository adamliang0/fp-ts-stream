import { pipe } from "fp-ts/function";
import { describe, expect, it, vi } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import type { Stream } from "@/Stream/uri";

describe("Stream/conversions", () => {
	it("replays plain iterables every time a stream is consumed", () => {
		const stream = fromIterable([1, 2, 3]);

		expect(pipe(stream, toArray)).toEqual([1, 2, 3]);
		expect(pipe(stream, toArray)).toEqual([1, 2, 3]);
	});

	it("wraps custom iterable sources without losing order", () => {
		const events = ["connect", "data", "close"];
		const customIterable = {
			[Symbol.iterator](): Iterator<string> {
				let idx = 0;
				return {
					next() {
						if (idx >= events.length) {
							return { done: true, value: undefined };
						}

						const event = `${idx}:${events[idx]}`;
						idx += 1;
						return { done: false, value: event };
					},
				};
			},
		};

		expect(pipe(fromIterable(customIterable), toArray)).toEqual([
			"0:connect",
			"1:data",
			"2:close",
		]);
	});

	it("only pulls from the underlying generator when toArray is invoked", () => {
		const pullSpy = vi.fn();
		const source: Stream<number> = () =>
			(function* () {
				for (const value of [1, 2, 3]) {
					pullSpy(value);
					yield value;
				}
			})();

		expect(toArray(source)).toEqual([1, 2, 3]);
		expect(pullSpy).toHaveBeenCalledTimes(3);

		expect(toArray(source)).toEqual([1, 2, 3]);
		expect(pullSpy).toHaveBeenCalledTimes(6);
	});
});
