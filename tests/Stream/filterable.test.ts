import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import {
	Filterable,
	filter,
	filterMap,
	filterMapWithIndex,
	filterWithIndex,
	partition,
	partitionMap,
	partitionMapWithIndex,
	partitionWithIndex,
} from "@/Stream/filterable";

describe("Stream/filterable", () => {
	describe("filter", () => {
		it("supports refinement predicates so downstream code stays strongly typed", () => {
			const isNumber = (value: string | number): value is number =>
				typeof value === "number";

			const refined = pipe(
				fromIterable<string | number>(["one", 2, "three", 4]),
				filter(isNumber),
				toArray,
			);

			expect(refined).toEqual([2, 4]);
		});

		it("filters based on predicate", () => {
			const result = pipe(
				fromIterable([1, 2, 3, 4, 5, 6]),
				filter((n) => n % 2 === 0),
				toArray,
			);

			expect(result).toEqual([2, 4, 6]);
		});

		it("works with the Filterable instance", () => {
			const stream = fromIterable([1, 2, 3, 4]);
			const result = toArray(Filterable.filter(stream, (n) => n > 2));
			expect(result).toEqual([3, 4]);
		});
	});

	describe("filterWithIndex", () => {
		it("filters with access to the index", () => {
			const result = pipe(
				fromIterable(["a", "b", "c", "d", "e"]),
				filterWithIndex((i, _) => i % 2 === 0),
				toArray,
			);

			// Keep elements at even indices
			expect(result).toEqual(["a", "c", "e"]);
		});

		it("supports refinement with index", () => {
			const isNumberAtEvenIndex = (
				i: number,
				value: string | number,
			): value is number => typeof value === "number" && i % 2 === 0;

			const result = pipe(
				fromIterable<string | number>([1, "a", 2, "b", 3, "c"]),
				filterWithIndex(isNumberAtEvenIndex),
				toArray,
			);

			// Numbers at even indices: 1 (index 0), 2 (index 2), 3 (index 4)
			expect(result).toEqual([1, 2, 3]);
		});
	});

	describe("filterMap", () => {
		it("maps and filters in one operation", () => {
			const result = pipe(
				fromIterable([1, 2, 3, 4, 5]),
				filterMap((n) => (n % 2 === 0 ? O.some(n * 10) : O.none)),
				toArray,
			);

			expect(result).toEqual([20, 40]);
		});

		it("discards None values", () => {
			const result = pipe(
				fromIterable(["1", "not a number", "2", "3"]),
				filterMap((s) => {
					const n = Number.parseInt(s, 10);
					return Number.isNaN(n) ? O.none : O.some(n);
				}),
				toArray,
			);

			expect(result).toEqual([1, 2, 3]);
		});
	});

	describe("filterMapWithIndex", () => {
		it("maps and filters with access to index", () => {
			const result = pipe(
				fromIterable(["a", "b", "c", "d"]),
				filterMapWithIndex((i, s) =>
					i % 2 === 0 ? O.some(`${i}:${s}`) : O.none,
				),
				toArray,
			);

			expect(result).toEqual(["0:a", "2:c"]);
		});
	});

	describe("partition", () => {
		it("can partition streams into left/right branches in a single pass", () => {
			const separated = pipe(
				fromIterable([1, 2, 3, 4, 5]),
				partition((value) => value % 2 === 0),
			);

			expect(toArray(separated.left)).toEqual([1, 3, 5]);
			expect(toArray(separated.right)).toEqual([2, 4]);
		});

		it("supports refinement predicates", () => {
			const isNumber = (value: string | number): value is number =>
				typeof value === "number";

			const separated = pipe(
				fromIterable<string | number>(["a", 1, "b", 2, "c"]),
				partition(isNumber),
			);

			expect(toArray(separated.left)).toEqual(["a", "b", "c"]);
			expect(toArray(separated.right)).toEqual([1, 2]);
		});
	});

	describe("partitionWithIndex", () => {
		it("partitions with access to index", () => {
			const separated = pipe(
				fromIterable(["a", "b", "c", "d", "e"]),
				partitionWithIndex((i, _) => i % 2 === 0),
			);

			expect(toArray(separated.left)).toEqual(["b", "d"]);
			expect(toArray(separated.right)).toEqual(["a", "c", "e"]);
		});
	});

	describe("partitionMap", () => {
		it("partitions by mapping to Either", () => {
			const separated = pipe(
				fromIterable([1, 2, 3, 4, 5, 6]),
				partitionMap((n) => (n % 2 === 0 ? E.right(n) : E.left(`odd-${n}`))),
			);

			expect(toArray(separated.left)).toEqual(["odd-1", "odd-3", "odd-5"]);
			expect(toArray(separated.right)).toEqual([2, 4, 6]);
		});

		it("can transform values while partitioning", () => {
			const separated = pipe(
				fromIterable(["1", "not a number", "2", "3"]),
				partitionMap((s) => {
					const n = Number.parseInt(s, 10);
					return Number.isNaN(n) ? E.left(s) : E.right(n);
				}),
			);

			expect(toArray(separated.left)).toEqual(["not a number"]);
			expect(toArray(separated.right)).toEqual([1, 2, 3]);
		});
	});

	describe("partitionMapWithIndex", () => {
		it("partitions and maps with access to index", () => {
			const separated = pipe(
				fromIterable(["a", "b", "c", "d"]),
				partitionMapWithIndex((i, s) =>
					i % 2 === 0 ? E.right(`even-${s}`) : E.left(`odd-${s}`),
				),
			);

			expect(toArray(separated.left)).toEqual(["odd-b", "odd-d"]);
			expect(toArray(separated.right)).toEqual(["even-a", "even-c"]);
		});
	});
});
