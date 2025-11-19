import * as N from "fp-ts/number";
import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { getMonoid, getUnionMonoid } from "@/Stream/transformations/monoid";

describe("Stream/transformations/monoid", () => {
	describe("getMonoid", () => {
		it("returns a Monoid instance for Stream", () => {
			const monoid = getMonoid<number>();

			expect(monoid).toHaveProperty("empty");
			expect(monoid).toHaveProperty("concat");
			expect(typeof monoid.concat).toBe("function");
		});

		it("has an empty stream as identity element", () => {
			const monoid = getMonoid<number>();

			expect(toArray(monoid.empty)).toEqual([]);
		});

		it("concatenates two streams", () => {
			const monoid = getMonoid<number>();
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([4, 5, 6]);

			const result = monoid.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it("satisfies left identity law: concat(empty, x) = x", () => {
			const monoid = getMonoid<number>();
			const stream = fromIterable([1, 2, 3]);

			const result = monoid.concat(monoid.empty, stream);

			expect(toArray(result)).toEqual([1, 2, 3]);
		});

		it("satisfies right identity law: concat(x, empty) = x", () => {
			const monoid = getMonoid<number>();
			const stream = fromIterable([1, 2, 3]);

			const result = monoid.concat(stream, monoid.empty);

			expect(toArray(result)).toEqual([1, 2, 3]);
		});

		it("satisfies associativity: concat(concat(x, y), z) = concat(x, concat(y, z))", () => {
			const monoid = getMonoid<number>();
			const x = fromIterable([1, 2]);
			const y = fromIterable([3, 4]);
			const z = fromIterable([5, 6]);

			const left = monoid.concat(monoid.concat(x, y), z);
			const right = monoid.concat(x, monoid.concat(y, z));

			expect(toArray(left)).toEqual(toArray(right));
		});

		it("works with different types", () => {
			const monoid = getMonoid<string>();
			const stream1 = fromIterable(["a", "b"]);
			const stream2 = fromIterable(["c", "d"]);

			const result = monoid.concat(stream1, stream2);

			expect(toArray(result)).toEqual(["a", "b", "c", "d"]);
		});
	});

	describe("getUnionMonoid", () => {
		it("returns a Monoid instance for Stream", () => {
			const monoid = getUnionMonoid(N.Eq);

			expect(monoid).toHaveProperty("empty");
			expect(monoid).toHaveProperty("concat");
			expect(typeof monoid.concat).toBe("function");
		});

		it("has an empty stream as identity element", () => {
			const monoid = getUnionMonoid(N.Eq);

			expect(toArray(monoid.empty)).toEqual([]);
		});

		it("concatenates two streams and removes duplicates", () => {
			const monoid = getUnionMonoid(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([2, 3, 4, 5]);

			const result = monoid.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3, 4, 5]);
		});

		it("preserves order of elements from both streams", () => {
			const monoid = getUnionMonoid(N.Eq);
			const stream1 = fromIterable([3, 1, 2]);
			const stream2 = fromIterable([2, 4, 5]);

			const result = monoid.concat(stream1, stream2);

			expect(toArray(result)).toEqual([3, 1, 2, 4, 5]);
		});

		it("satisfies left identity law", () => {
			const monoid = getUnionMonoid(N.Eq);
			const stream = fromIterable([1, 2, 3]);

			const result = monoid.concat(monoid.empty, stream);

			expect(toArray(result)).toEqual([1, 2, 3]);
		});

		it("satisfies right identity law", () => {
			const monoid = getUnionMonoid(N.Eq);
			const stream = fromIterable([1, 2, 3]);

			const result = monoid.concat(stream, monoid.empty);

			expect(toArray(result)).toEqual([1, 2, 3]);
		});

		it("handles streams with all duplicate elements", () => {
			const monoid = getUnionMonoid(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([1, 2, 3]);

			const result = monoid.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3]);
		});

		it("handles streams with no overlapping elements", () => {
			const monoid = getUnionMonoid(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([4, 5, 6]);

			const result = monoid.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it("works with custom Eq instances", () => {
			interface Person {
				id: number;
				name: string;
			}

			const eqPerson = {
				equals: (a: Person, b: Person) => a.id === b.id,
			};

			const monoid = getUnionMonoid(eqPerson);
			const stream1 = fromIterable([
				{ id: 1, name: "Alice" },
				{ id: 2, name: "Bob" },
			]);
			const stream2 = fromIterable([
				{ id: 2, name: "Bob Updated" },
				{ id: 3, name: "Charlie" },
			]);

			const result = monoid.concat(stream1, stream2);

			expect(toArray(result)).toEqual([
				{ id: 1, name: "Alice" },
				{ id: 2, name: "Bob" },
				{ id: 3, name: "Charlie" },
			]);
		});

		it("handles duplicate elements within the same stream", () => {
			const monoid = getUnionMonoid(N.Eq);
			const stream1 = fromIterable([1, 1, 2, 2, 3]);
			const stream2 = fromIterable([3, 4, 4, 5]);

			const result = monoid.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 1, 2, 2, 3, 4, 5]);
		});
	});
});
