import * as Eq from "fp-ts/Eq";
import * as N from "fp-ts/number";
import * as S from "fp-ts/string";
import { describe, expect, it } from "vitest";

import { fromIterable } from "@/Stream/conversions";
import { getEq } from "@/Stream/transformations/eq";

describe("Stream/transformations/eq", () => {
	describe("getEq", () => {
		it("returns true for two empty streams", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable<number>([]);
			const stream2 = fromIterable<number>([]);

			expect(eqNumber.equals(stream1, stream2)).toBe(true);
		});

		it("returns true for two streams with equal elements", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([1, 2, 3]);

			expect(eqNumber.equals(stream1, stream2)).toBe(true);
		});

		it("returns false for streams with different elements", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([1, 2, 4]);

			expect(eqNumber.equals(stream1, stream2)).toBe(false);
		});

		it("returns false for streams of different lengths", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([1, 2]);

			expect(eqNumber.equals(stream1, stream2)).toBe(false);
		});

		it("returns false when first stream is longer", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable([1, 2, 3, 4]);
			const stream2 = fromIterable([1, 2, 3]);

			expect(eqNumber.equals(stream1, stream2)).toBe(false);
		});

		it("returns false when second stream is longer", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([1, 2, 3, 4]);

			expect(eqNumber.equals(stream1, stream2)).toBe(false);
		});

		it("works with string equality", () => {
			const eqString = getEq(S.Eq);
			const stream1 = fromIterable(["a", "b", "c"]);
			const stream2 = fromIterable(["a", "b", "c"]);
			const stream3 = fromIterable(["a", "b", "d"]);

			expect(eqString.equals(stream1, stream2)).toBe(true);
			expect(eqString.equals(stream1, stream3)).toBe(false);
		});

		it("works with custom Eq instances", () => {
			interface Person {
				name: string;
				age: number;
			}

			const eqPerson: Eq.Eq<Person> = {
				equals: (x, y) => x.name === y.name && x.age === y.age,
			};

			const eqStream = getEq(eqPerson);

			const stream1 = fromIterable([
				{ name: "Alice", age: 30 },
				{ name: "Bob", age: 25 },
			]);
			const stream2 = fromIterable([
				{ name: "Alice", age: 30 },
				{ name: "Bob", age: 25 },
			]);
			const stream3 = fromIterable([
				{ name: "Alice", age: 30 },
				{ name: "Bob", age: 26 },
			]);

			expect(eqStream.equals(stream1, stream2)).toBe(true);
			expect(eqStream.equals(stream1, stream3)).toBe(false);
		});

		it("compares elements pairwise", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable([1, 2, 3, 4, 5]);
			const stream2 = fromIterable([1, 2, 99, 4, 5]);

			expect(eqNumber.equals(stream1, stream2)).toBe(false);
		});

		it("is symmetric", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([1, 2, 3]);

			expect(eqNumber.equals(stream1, stream2)).toBe(
				eqNumber.equals(stream2, stream1),
			);
		});

		it("handles single element streams", () => {
			const eqNumber = getEq(N.Eq);
			const stream1 = fromIterable([42]);
			const stream2 = fromIterable([42]);
			const stream3 = fromIterable([43]);

			expect(eqNumber.equals(stream1, stream2)).toBe(true);
			expect(eqNumber.equals(stream1, stream3)).toBe(false);
		});
	});
});
