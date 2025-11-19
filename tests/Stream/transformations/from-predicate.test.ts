import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import { toArray } from "@/Stream/conversions";
import { fromPredicate } from "@/Stream/transformations/from-predicate";

describe("Stream/transformations/from-predicate", () => {
	describe("fromPredicate with Predicate", () => {
		it("creates a stream with the value when predicate returns true", () => {
			const isPositive = (n: number): boolean => n > 0;
			const result = pipe(5, fromPredicate(isPositive), toArray);

			expect(result).toEqual([5]);
		});

		it("creates an empty stream when predicate returns false", () => {
			const isPositive = (n: number): boolean => n > 0;
			const result = pipe(-5, fromPredicate(isPositive), toArray);

			expect(result).toEqual([]);
		});

		it("works with string predicates", () => {
			const isNonEmpty = (s: string): boolean => s.length > 0;

			expect(pipe("hello", fromPredicate(isNonEmpty), toArray)).toEqual([
				"hello",
			]);
			expect(pipe("", fromPredicate(isNonEmpty), toArray)).toEqual([]);
		});

		it("works with complex type predicates", () => {
			interface User {
				name: string;
				age: number;
			}

			const isAdult = (user: User): boolean => user.age >= 18;

			const adult: User = { name: "Alice", age: 25 };
			const minor: User = { name: "Bob", age: 15 };

			expect(pipe(adult, fromPredicate(isAdult), toArray)).toEqual([adult]);
			expect(pipe(minor, fromPredicate(isAdult), toArray)).toEqual([]);
		});
	});

	describe("fromPredicate with Refinement", () => {
		it("narrows the type when predicate is a refinement", () => {
			interface Cat {
				type: "cat";
				meow: () => string;
			}

			interface Dog {
				type: "dog";
				bark: () => string;
			}

			type Animal = Cat | Dog;

			const isCat = (animal: Animal): animal is Cat => animal.type === "cat";

			const cat: Animal = { type: "cat", meow: () => "meow" };
			const dog: Animal = { type: "dog", bark: () => "woof" };

			const result1 = pipe(cat, fromPredicate(isCat), toArray);
			expect(result1).toEqual([cat]);
			expect(result1[0]?.meow()).toBe("meow");

			const result2 = pipe(dog, fromPredicate(isCat), toArray);
			expect(result2).toEqual([]);
		});

		it("works with string literal type refinements", () => {
			type Status = "active" | "inactive" | "pending";

			const isActive = (status: Status): status is "active" =>
				status === "active";

			expect(
				pipe("active" as Status, fromPredicate(isActive), toArray),
			).toEqual(["active"]);
			expect(
				pipe("inactive" as Status, fromPredicate(isActive), toArray),
			).toEqual([]);
		});

		it("works with number refinements", () => {
			type PositiveNumber = number & { readonly __brand: "positive" };

			const isPositive = (n: number): n is PositiveNumber => n > 0;

			expect(pipe(5, fromPredicate(isPositive), toArray)).toEqual([5]);
			expect(pipe(-5, fromPredicate(isPositive), toArray)).toEqual([]);
			expect(pipe(0, fromPredicate(isPositive), toArray)).toEqual([]);
		});
	});

	describe("edge cases", () => {
		it("handles boolean values", () => {
			const isTrue = (b: boolean): boolean => b === true;

			expect(pipe(true, fromPredicate(isTrue), toArray)).toEqual([true]);
			expect(pipe(false, fromPredicate(isTrue), toArray)).toEqual([]);
		});

		it("handles null and undefined checks", () => {
			const isNotNull = (value: string | null): value is string =>
				value !== null;

			expect(pipe("test", fromPredicate(isNotNull), toArray)).toEqual(["test"]);
			expect(pipe(null, fromPredicate(isNotNull), toArray)).toEqual([]);
		});

		it("works with array predicates", () => {
			const hasItems = (arr: number[]): boolean => arr.length > 0;

			expect(pipe([1, 2, 3], fromPredicate(hasItems), toArray)).toEqual([
				[1, 2, 3],
			]);
			expect(pipe([], fromPredicate(hasItems), toArray)).toEqual([]);
		});
	});
});
