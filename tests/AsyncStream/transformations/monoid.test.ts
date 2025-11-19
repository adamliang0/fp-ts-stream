import { Eq } from "fp-ts/number";
import { describe, expect, it } from "vitest";

import { fromIterable } from "@/AsyncStream/conversions";
import {
	getMonoid,
	getUnionMonoid,
} from "@/AsyncStream/transformations/monoid";

import { collect } from "../helpers";

describe("AsyncStream/transformations/monoid", () => {
	it("uses concat sequencing and an empty stream as identity", async () => {
		const M = getMonoid<number>();
		const combined = M.concat(fromIterable([1, 2]), fromIterable([3]));

		await expect(collect(combined)).resolves.toEqual([1, 2, 3]);
		await expect(collect(M.empty)).resolves.toEqual([]);
	});

	it("can build a union monoid using structural equality", async () => {
		const M = getUnionMonoid(Eq);
		const first = fromIterable([1, 2, 3]);
		const second = fromIterable([3, 4]);

		await expect(collect(M.concat(first, second))).resolves.toEqual([
			1, 2, 3, 4,
		]);
	});
});
