import { Eq, SemigroupSum } from "fp-ts/number";
import { describe, expect, it } from "vitest";

import { fromIterable } from "@/AsyncStream/conversions";
import {
	getIntersectionSemigroup,
	getSemigroup,
	getUnionSemigroup,
} from "@/AsyncStream/transformations/semigroup";

import { collect } from "../helpers";

describe("AsyncStream/transformations/semigroup", () => {
	it("concatenates streams when no inner semigroup is supplied", async () => {
		const S = getSemigroup<number>();
		await expect(
			collect(S.concat(fromIterable([1, 2]), fromIterable([3]))),
		).resolves.toEqual([1, 2, 3]);
	});

	it("uses the provided semigroup to combine every pair of elements", async () => {
		const S = getSemigroup(SemigroupSum);
		const combined = await collect(
			S.concat(fromIterable([1, 2]), fromIterable([10, 20])),
		);

		expect(combined).toEqual([11, 12, 21, 22]);
	});

	it("supports union semantics via getUnionSemigroup", async () => {
		const S = getUnionSemigroup(Eq);
		const merged = await collect(
			S.concat(fromIterable([1, 2, 3]), fromIterable([3, 4])),
		);

		expect(merged).toEqual([1, 2, 3, 4]);
	});

	it("supports intersection semantics via getIntersectionSemigroup", async () => {
		const S = getIntersectionSemigroup(Eq);
		const intersection = await collect(
			S.concat(fromIterable([1, 3, 2]), fromIterable([2, 3, 4])),
		);

		expect(intersection).toEqual([2, 3]);
	});
});
