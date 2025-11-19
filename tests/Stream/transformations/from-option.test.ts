import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import { toArray } from "@/Stream/conversions";
import { fromOption } from "@/Stream/transformations/from-option";

describe("Stream/transformations/from-option", () => {
	describe("fromOption", () => {
		it("creates a stream with one element from Some", () => {
			const option = O.some(42);
			const result = pipe(fromOption(option), toArray);

			expect(result).toEqual([42]);
		});

		it("creates an empty stream from None", () => {
			const option = O.none;
			const result = pipe(fromOption(option), toArray);

			expect(result).toEqual([]);
		});

		it("preserves the value type from Some", () => {
			const option = O.some({ id: 1, name: "test" });
			const result = pipe(fromOption(option), toArray);

			expect(result).toEqual([{ id: 1, name: "test" }]);
		});

		it("handles string values", () => {
			const option = O.some("hello");
			const result = pipe(fromOption(option), toArray);

			expect(result).toEqual(["hello"]);
		});

		it("handles boolean values", () => {
			expect(pipe(fromOption(O.some(true)), toArray)).toEqual([true]);
			expect(pipe(fromOption(O.some(false)), toArray)).toEqual([false]);
		});

		it("handles null as a value (wrapped in Some)", () => {
			const option = O.some(null);
			const result = pipe(fromOption(option), toArray);

			expect(result).toEqual([null]);
		});

		it("handles arrays as values", () => {
			const option = O.some([1, 2, 3]);
			const result = pipe(fromOption(option), toArray);

			expect(result).toEqual([[1, 2, 3]]);
		});

		it("works with Option.fromNullable", () => {
			const value: string | null = "test";
			const nullValue: string | null = null;

			expect(pipe(O.fromNullable(value), fromOption, toArray)).toEqual([
				"test",
			]);
			expect(pipe(O.fromNullable(nullValue), fromOption, toArray)).toEqual([]);
		});

		it("works with Option.fromPredicate", () => {
			const isPositive = (n: number): boolean => n > 0;

			expect(pipe(O.fromPredicate(isPositive)(5), fromOption, toArray)).toEqual(
				[5],
			);
			expect(
				pipe(O.fromPredicate(isPositive)(-5), fromOption, toArray),
			).toEqual([]);
		});
	});
});
