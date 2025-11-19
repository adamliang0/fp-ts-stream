import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";
import {
	bind,
	chain,
	chainFirst,
	chainRecBreadthFirst,
	chainRecDepthFirst,
	chainWithIndex,
	Do,
} from "@/Stream/chain";
import { fromIterable, toArray } from "@/Stream/conversions";
import { map } from "@/Stream/functor";

describe("Stream/chain", () => {
	it("flattens nested streams while preserving the outer ordering", () => {
		const pages = [
			{ page: 1, items: ["a", "b"] },
			{ page: 2, items: ["c"] },
			{ page: 3, items: ["d", "e"] },
		];

		const flattened = pipe(
			fromIterable(pages),
			chain(({ page, items }) =>
				pipe(
					fromIterable(items),
					map((item) => ({ page, item })),
				),
			),
			toArray,
		);

		expect(flattened).toEqual([
			{ page: 1, item: "a" },
			{ page: 1, item: "b" },
			{ page: 2, item: "c" },
			{ page: 3, item: "d" },
			{ page: 3, item: "e" },
		]);
	});

	describe("chainWithIndex", () => {
		it("provides index to the chaining function", () => {
			const result = pipe(
				fromIterable(["a", "b", "c"]),
				chainWithIndex((i, value) =>
					fromIterable([`${i}-${value}-1`, `${i}-${value}-2`]),
				),
				toArray,
			);

			expect(result).toEqual([
				"0-a-1",
				"0-a-2",
				"1-b-1",
				"1-b-2",
				"2-c-1",
				"2-c-2",
			]);
		});
	});

	describe("chainRecDepthFirst", () => {
		it("recursively chains in depth-first order", () => {
			// Create a tree-like structure: 0 -> [1, 2], 1 -> [3], 2 -> [4]
			const f = (n: number) =>
				fromIterable(
					n === 0
						? [E.left(1), E.left(2)]
						: n === 1
							? [E.left(3), E.right(10)]
							: n === 2
								? [E.left(4), E.right(20)]
								: [E.right(n * 10)],
				);

			const result = pipe(chainRecDepthFirst(f)(0), toArray);

			// Depth-first: 0 -> 1 -> 3 -> 30, 10, then back to 2 -> 4 -> 40, 20
			expect(result).toEqual([30, 10, 40, 20]);
		});

		it("handles simple recursion", () => {
			// if n is greater than 0, return a left with n - 1, otherwise return a right with n
			const countdown = (n: number) =>
				fromIterable(
					n > 0
						? [E.left<number, number>(n - 1)]
						: [E.right<number, number>(n)],
				);

			const result = pipe(chainRecDepthFirst(countdown)(3), toArray);
			expect(result).toEqual([0]);
		});
	});

	describe("chainRecBreadthFirst", () => {
		it("recursively chains in breadth-first order", () => {
			const f = (n: number) =>
				fromIterable(
					n === 0
						? [E.left(1), E.left(2)]
						: n === 1
							? [E.left(3), E.right(10)]
							: n === 2
								? [E.left(4), E.right(20)]
								: [E.right(n * 10)],
				);

			const result = pipe(chainRecBreadthFirst(f)(0), toArray);

			// Breadth-first: process all at level 0, then level 1, etc.
			// Level 0: none (all Left)
			// Level 1: 10 (from 1), 20 (from 2)
			// Level 2: 30 (from 3), 40 (from 4)
			expect(result).toEqual([10, 20, 30, 40]);
		});

		it("handles simple recursion", () => {
			const countdown = (n: number) =>
				fromIterable(
					n > 0
						? [E.left<number, number>(n - 1)]
						: [E.right<number, number>(n)],
				);

			const result = pipe(chainRecBreadthFirst(countdown)(3), toArray);
			expect(result).toEqual([0]);
		});
	});

	describe("Do notation", () => {
		it("supports do notation with Do and bind", () => {
			const result = pipe(
				Do,
				bind("x", () => fromIterable([1, 2])),
				bind("y", () => fromIterable([10, 20])),
				toArray,
			);

			// Creates cartesian product (all x values per y value)
			expect(result).toEqual([
				{ x: 1, y: 10 },
				{ x: 1, y: 20 },
				{ x: 2, y: 10 },
				{ x: 2, y: 20 },
			]);
		});

		it("allows accessing previous bindings", () => {
			const result = pipe(
				Do,
				bind("x", () => fromIterable([1, 2])),
				bind("double", ({ x }) => fromIterable([x * 2])),
				toArray,
			);

			expect(result).toEqual([
				{ x: 1, double: 2 },
				{ x: 2, double: 4 },
			]);
		});
	});

	describe("chainFirst", () => {
		it("chains but keeps the original value", () => {
			const result = pipe(
				fromIterable([1, 2, 3]),
				chainFirst((x) => fromIterable([x * 10, x * 100])),
				toArray,
			);

			// chainFirst executes the chain for side effects but returns original values
			expect(result).toEqual([1, 1, 2, 2, 3, 3]);
		});
	});
});
