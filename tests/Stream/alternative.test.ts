import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import { Alternative, alt, altW } from "@/Stream/alternative";
import { fromIterable, toArray } from "@/Stream/conversions";
import { of } from "@/Stream/pointed";

describe("Stream/alternative", () => {
	describe("alt", () => {
		it("concatenates two streams", () => {
			const first = fromIterable([1, 2, 3]);
			const second = fromIterable([4, 5, 6]);

			const result = pipe(
				first,
				alt(() => second),
				toArray,
			);

			expect(result).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it("works with empty first stream", () => {
			const first = fromIterable<number>([]);
			const second = fromIterable([1, 2, 3]);

			const result = pipe(
				first,
				alt(() => second),
				toArray,
			);

			expect(result).toEqual([1, 2, 3]);
		});

		it("works with empty second stream", () => {
			const first = fromIterable([1, 2, 3]);
			const second = fromIterable<number>([]);

			const result = pipe(
				first,
				alt(() => second),
				toArray,
			);

			expect(result).toEqual([1, 2, 3]);
		});

		it("is lazy - second stream is only evaluated when needed", () => {
			let called = false;
			const first = of(1);
			const second = () => {
				called = true;
				return of(2);
			};

			const stream = pipe(first, alt(second));

			expect(called).toBe(false);
			toArray(stream);
			expect(called).toBe(true);
		});

		it("works with the Alternative instance", () => {
			const first = fromIterable([1, 2]);
			const second = fromIterable([3, 4]);

			const result = toArray(Alternative.alt(first, () => second));
			expect(result).toEqual([1, 2, 3, 4]);
		});
	});

	describe("altW", () => {
		it("concatenates streams of different types", () => {
			const first = fromIterable<number>([1, 2]);
			const second = fromIterable<string>(["a", "b"]);

			const result = pipe(
				first,
				altW(() => second),
				toArray,
			);

			expect(result).toEqual([1, 2, "a", "b"]);
		});

		it("widens the type to union", () => {
			const first = of<number>(1);
			const second = () => of<string>("hello");

			const stream: ReturnType<typeof altW<string>> = altW(second);
			const result = pipe(first, stream, toArray);

			expect(result).toEqual([1, "hello"]);
		});
	});

	describe("alternative laws", () => {
		it("associativity: alt(alt(a, b), c) = alt(a, alt(b, c))", () => {
			const a = fromIterable([1]);
			const b = fromIterable([2]);
			const c = fromIterable([3]);

			const left = pipe(
				a,
				alt(() => b),
				alt(() => c),
				toArray,
			);

			const right = pipe(
				a,
				alt(() =>
					pipe(
						b,
						alt(() => c),
					),
				),
				toArray,
			);

			expect(left).toEqual(right);
		});

		it("distributivity: ap(alt(fa, ga), fab) = alt(ap(fa, fab), ap(ga, fab))", () => {
			const fa = fromIterable([1, 2]);
			const ga = fromIterable([3, 4]);
			const fab = fromIterable([(x: number) => x * 2]);

			const left = pipe(
				fa,
				alt(() => ga),
				(stream) => Alternative.ap(fab, stream),
				toArray,
			);

			const right = pipe(
				Alternative.ap(fab, fa),
				alt(() => Alternative.ap(fab, ga)),
				toArray,
			);

			expect(left).toEqual(right);
		});
	});
});
