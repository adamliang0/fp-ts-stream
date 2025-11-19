import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import { Applicative, ap } from "@/Stream/applicative";
import { apFirst, apS, apSecond } from "@/Stream/apply";
import { fromIterable, toArray } from "@/Stream/conversions";
import { map } from "@/Stream/functor";
import { of } from "@/Stream/pointed";

describe("Stream/applicative", () => {
	describe("of", () => {
		it("creates a stream with a single element", () => {
			const result = pipe(of(42), toArray);
			expect(result).toEqual([42]);
		});

		it("works with complex objects", () => {
			const obj = { name: "test", value: 123 };
			const result = pipe(of(obj), toArray);
			expect(result).toEqual([obj]);
		});
	});

	describe("ap", () => {
		it("applies each function to each value", () => {
			const values = pipe(fromIterable([1, 2, 3]));
			const functions = pipe(
				fromIterable([
					(x: number) => x * 2,
					(x: number) => x + 10,
				]),
			);

			const result = pipe(values, ap, (apFn) => apFn(functions), toArray);

			// Each function is applied to each value
			expect(result).toEqual([
				2, // 1 * 2
				11, // 1 + 10
				4, // 2 * 2
				12, // 2 + 10
				6, // 3 * 2
				13, // 3 + 10
			]);
		});

		it("handles empty streams", () => {
			const values = pipe(fromIterable([]));
			const functions = pipe(fromIterable([(x: number) => x * 2]));

			const result = pipe(values, ap, (apFn) => apFn(functions), toArray);
			expect(result).toEqual([]);
		});

		it("works with the Applicative instance", () => {
			const values = fromIterable([1, 2]);
			const functions = fromIterable([(x: number) => x * 3]);

			const result = toArray(Applicative.ap(functions, values));
			expect(result).toEqual([3, 6]);
		});
	});

	describe("apFirst", () => {
		it("combines two streams keeping only the first result", () => {
			const first = fromIterable([1, 2]);
			const second = fromIterable(["a", "b"]);

			const result = pipe(first, apFirst(second), toArray);

			// Should keep values from first stream, repeated for each second value
			expect(result).toEqual([1, 2, 1, 2]);
		});
	});

	describe("apSecond", () => {
		it("combines two streams keeping only the second result", () => {
			const first = fromIterable([1, 2]);
			const second = fromIterable(["a", "b"]);

			const result = pipe(first, apSecond(second), toArray);

			// Should keep values from second stream, repeated for each first value
			expect(result).toEqual(["a", "a", "b", "b"]);
		});
	});

	describe("apS", () => {
		it("accumulates values into an object", () => {
			const result = pipe(
				of({}),
				apS("a", of(1)),
				apS("b", of("test")),
				apS("c", of(true)),
				toArray,
			);

			expect(result).toEqual([{ a: 1, b: "test", c: true }]);
		});

		it("combines multiple values from each stream", () => {
			const result = pipe(
				of({}),
				apS("x", fromIterable([1, 2])),
				apS("y", fromIterable(["a", "b"])),
				toArray,
			);

			// Should create cartesian product (order: all x values per y value)
			expect(result).toEqual([
				{ x: 1, y: "a" },
				{ x: 2, y: "a" },
				{ x: 1, y: "b" },
				{ x: 2, y: "b" },
			]);
		});
	});

	describe("applicative laws", () => {
		it("identity: ap(of(id)) = id", () => {
			const id = <A>(a: A) => a;
			const stream = fromIterable([1, 2, 3]);

			const left = pipe(stream, ap, (apFn) => apFn(of(id)), toArray);
			const right = toArray(stream);

			expect(left).toEqual(right);
		});

		it("homomorphism: ap(of(f))(of(x)) = of(f(x))", () => {
			const f = (x: number) => x * 2;
			const x = 5;

			const left = pipe(of(x), ap, (apFn) => apFn(of(f)), toArray);
			const right = pipe(of(f(x)), toArray);

			expect(left).toEqual(right);
		});

		it("composition: ap(ap(map(compose)(f))(g))(x) = ap(f)(ap(g)(x))", () => {
			const f = (y: number) => y + 10;
			const g = (x: number) => x * 2;
			const x = fromIterable([1, 2]);

			const compose =
				<A, B, C>(f: (b: B) => C) =>
				(g: (a: A) => B) =>
				(a: A) =>
					f(g(a));

			// Left side: ap(ap(map(compose)(f))(g))(x)
			const left = pipe(
				x,
				ap,
				(apFn) =>
					apFn(
						pipe(
							of(g),
							ap,
							(apFn2) => apFn2(pipe(of(f), map(compose))),
						),
					),
				toArray,
			);

			// Right side: ap(f)(ap(g)(x))
			const right = pipe(x, ap, (apFn) => apFn(of(g)), ap, (apFn2) => apFn2(of(f)), toArray);

			expect(left).toEqual(right);
		});
	});
});