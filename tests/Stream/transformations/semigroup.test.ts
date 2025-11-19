import * as N from "fp-ts/number";
import type { Semigroup } from "fp-ts/Semigroup";
import * as S from "fp-ts/string";
import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import {
	getIntersectionSemigroup,
	getSemigroup,
	getUnionSemigroup,
} from "@/Stream/transformations/semigroup";

describe("Stream/transformations/semigroup", () => {
	describe("getSemigroup (basic)", () => {
		it("returns a Semigroup instance for Stream", () => {
			const semigroup = getSemigroup<number>();

			expect(semigroup).toHaveProperty("concat");
			expect(typeof semigroup.concat).toBe("function");
		});

		it("concatenates two streams", () => {
			const semigroup = getSemigroup<number>();
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([4, 5, 6]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it("satisfies associativity: concat(concat(x, y), z) = concat(x, concat(y, z))", () => {
			const semigroup = getSemigroup<number>();
			const x = fromIterable([1, 2]);
			const y = fromIterable([3, 4]);
			const z = fromIterable([5, 6]);

			const left = semigroup.concat(semigroup.concat(x, y), z);
			const right = semigroup.concat(x, semigroup.concat(y, z));

			expect(toArray(left)).toEqual(toArray(right));
		});

		it("works with different types", () => {
			const semigroup = getSemigroup<string>();
			const stream1 = fromIterable(["a", "b"]);
			const stream2 = fromIterable(["c", "d"]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual(["a", "b", "c", "d"]);
		});
	});

	describe("getSemigroup (with element Semigroup)", () => {
		it("creates cartesian product with element semigroup", () => {
			const stringSemigroup: Semigroup<string> = S.Semigroup;
			const semigroup = getSemigroup(stringSemigroup);

			const stream1 = fromIterable(["a", "b"]);
			const stream2 = fromIterable(["c", "d"]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual(["ac", "bc", "ad", "bd"]);
		});

		it("works with number semigroup (sum)", () => {
			const numberSemigroup: Semigroup<number> = N.SemigroupSum;
			const semigroup = getSemigroup(numberSemigroup);

			const stream1 = fromIterable([1, 2]);
			const stream2 = fromIterable([10, 20]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([11, 12, 21, 22]);
		});

		it("works with number semigroup (product)", () => {
			const numberSemigroup: Semigroup<number> = N.SemigroupProduct;
			const semigroup = getSemigroup(numberSemigroup);

			const stream1 = fromIterable([2, 3]);
			const stream2 = fromIterable([5, 6]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([10, 15, 12, 18]);
		});

		it("creates full cartesian product regardless of stream lengths", () => {
			const numberSemigroup: Semigroup<number> = N.SemigroupSum;
			const semigroup = getSemigroup(numberSemigroup);

			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([10, 20]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([11, 12, 13, 21, 22, 23]);
		});
	});

	describe("getUnionSemigroup", () => {
		it("returns a Semigroup instance for Stream", () => {
			const semigroup = getUnionSemigroup(N.Eq);

			expect(semigroup).toHaveProperty("concat");
			expect(typeof semigroup.concat).toBe("function");
		});

		it("concatenates two streams and removes duplicates", () => {
			const semigroup = getUnionSemigroup(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([2, 3, 4, 5]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3, 4, 5]);
		});

		it("preserves order of elements from both streams", () => {
			const semigroup = getUnionSemigroup(N.Eq);
			const stream1 = fromIterable([3, 1, 2]);
			const stream2 = fromIterable([2, 4, 5]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([3, 1, 2, 4, 5]);
		});

		it("handles streams with all duplicate elements", () => {
			const semigroup = getUnionSemigroup(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([1, 2, 3]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3]);
		});

		it("handles streams with no overlapping elements", () => {
			const semigroup = getUnionSemigroup(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([4, 5, 6]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it("works with custom Eq instances", () => {
			interface Item {
				id: number;
				value: string;
			}

			const eqItem = {
				equals: (a: Item, b: Item) => a.id === b.id,
			};

			const semigroup = getUnionSemigroup(eqItem);
			const stream1 = fromIterable([
				{ id: 1, value: "a" },
				{ id: 2, value: "b" },
			]);
			const stream2 = fromIterable([
				{ id: 2, value: "b2" },
				{ id: 3, value: "c" },
			]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([
				{ id: 1, value: "a" },
				{ id: 2, value: "b" },
				{ id: 3, value: "c" },
			]);
		});
	});

	describe("getIntersectionSemigroup", () => {
		it("returns a Semigroup instance for Stream", () => {
			const semigroup = getIntersectionSemigroup(N.Eq);

			expect(semigroup).toHaveProperty("concat");
			expect(typeof semigroup.concat).toBe("function");
		});

		it("returns only elements present in both streams", () => {
			const semigroup = getIntersectionSemigroup(N.Eq);
			const stream1 = fromIterable([1, 2, 3, 4]);
			const stream2 = fromIterable([2, 3, 4, 5, 6]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([2, 3, 4]);
		});

		it("returns empty stream when no common elements", () => {
			const semigroup = getIntersectionSemigroup(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([4, 5, 6]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([]);
		});

		it("returns all elements when both streams are identical", () => {
			const semigroup = getIntersectionSemigroup(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([1, 2, 3]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3]);
		});

		it("preserves order from second stream", () => {
			const semigroup = getIntersectionSemigroup(N.Eq);
			const stream1 = fromIterable([3, 1, 2]);
			const stream2 = fromIterable([2, 3, 4]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([2, 3]);
		});

		it("handles duplicate elements in streams", () => {
			const semigroup = getIntersectionSemigroup(N.Eq);
			const stream1 = fromIterable([1, 2, 2, 3]);
			const stream2 = fromIterable([2, 2, 3, 3, 4]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([2, 2, 3, 3]);
		});

		it("works with custom Eq instances", () => {
			interface Product {
				id: number;
				name: string;
			}

			const eqProduct = {
				equals: (a: Product, b: Product) => a.id === b.id,
			};

			const semigroup = getIntersectionSemigroup(eqProduct);
			const stream1 = fromIterable([
				{ id: 1, name: "A" },
				{ id: 2, name: "B" },
				{ id: 3, name: "C" },
			]);
			const stream2 = fromIterable([
				{ id: 2, name: "B2" },
				{ id: 3, name: "C2" },
				{ id: 4, name: "D" },
			]);

			const result = semigroup.concat(stream1, stream2);

			expect(toArray(result)).toEqual([
				{ id: 2, name: "B2" },
				{ id: 3, name: "C2" },
			]);
		});
	});
});
