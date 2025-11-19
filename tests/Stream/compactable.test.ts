import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { describe, expect, it } from "vitest";

import { Compactable, compact, separate } from "@/Stream/compactable";
import { fromIterable, toArray } from "@/Stream/conversions";

describe("Stream/compactable", () => {
	describe("compact", () => {
		it("filters out None values and unwraps Some values", () => {
			const stream = fromIterable([
				O.some(1),
				O.none,
				O.some(2),
				O.none,
				O.some(3),
			]);

			const result = pipe(stream, compact, toArray);
			expect(result).toEqual([1, 2, 3]);
		});

		it("returns empty stream when all values are None", () => {
			const stream = fromIterable([O.none, O.none, O.none]);
			const result = pipe(stream, compact, toArray);
			expect(result).toEqual([]);
		});

		it("preserves all values when all are Some", () => {
			const stream = fromIterable([O.some(1), O.some(2), O.some(3)]);
			const result = pipe(stream, compact, toArray);
			expect(result).toEqual([1, 2, 3]);
		});

		it("works with the Compactable instance", () => {
			const stream = fromIterable([O.some("a"), O.none, O.some("b")]);
			const result = toArray(Compactable.compact(stream));
			expect(result).toEqual(["a", "b"]);
		});
	});

	describe("separate", () => {
		it("separates Eithers into left and right streams", () => {
			const stream = fromIterable([
				E.right<string, number>(1),
				E.left<string, number>("error1"),
				E.right<string, number>(2),
				E.left<string, number>("error2"),
				E.right<string, number>(3),
			]);

			const { left, right } = separate(stream);

			expect(toArray(left)).toEqual(["error1", "error2"]);
			expect(toArray(right)).toEqual([1, 2, 3]);
		});

		it("returns empty left stream when all values are Right", () => {
			const stream = fromIterable([E.right(1), E.right(2), E.right(3)]);
			const { left, right } = separate(stream);

			expect(toArray(left)).toEqual([]);
			expect(toArray(right)).toEqual([1, 2, 3]);
		});

		it("returns empty right stream when all values are Left", () => {
			const stream = fromIterable([E.left("a"), E.left("b"), E.left("c")]);
			const { left, right } = separate(stream);

			expect(toArray(left)).toEqual(["a", "b", "c"]);
			expect(toArray(right)).toEqual([]);
		});

		it("works with the Compactable instance", () => {
			const stream = fromIterable([E.right(1), E.left("error")]);
			const { left, right } = Compactable.separate(stream);

			expect(toArray(left)).toEqual(["error"]);
			expect(toArray(right)).toEqual([1]);
		});
	});
});
