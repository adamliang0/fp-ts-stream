import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import { toArray } from "@/Stream/conversions";
import {
	FromEither,
	fromEither,
	fromEitherK,
} from "@/Stream/transformations/from-either";
import { URI } from "@/Stream/uri";

describe("Stream/transformations/from-either", () => {
	describe("fromEither", () => {
		it("creates a stream with one element from Right", () => {
			const either = E.right(42);
			const result = pipe(fromEither(either), toArray);

			expect(result).toEqual([42]);
		});

		it("creates an empty stream from Left", () => {
			const either = E.left("error");
			const result = pipe(fromEither(either), toArray);

			expect(result).toEqual([]);
		});

		it("preserves the value type from Right", () => {
			const either = E.right({ id: 1, name: "test" });
			const result = pipe(fromEither(either), toArray);

			expect(result).toEqual([{ id: 1, name: "test" }]);
		});
	});

	describe("fromEitherK", () => {
		it("lifts a function that returns Either<E, A> to a function that returns Stream<A>", () => {
			const parseNumber = (s: string): E.Either<string, number> => {
				const n = Number.parseInt(s, 10);
				return Number.isNaN(n) ? E.left("invalid number") : E.right(n);
			};

			const parseNumberK = fromEitherK(parseNumber);

			expect(pipe(parseNumberK("42"), toArray)).toEqual([42]);
			expect(pipe(parseNumberK("abc"), toArray)).toEqual([]);
		});

		it("works with functions that take multiple arguments", () => {
			const divide = (a: number, b: number): E.Either<string, number> =>
				b === 0 ? E.left("division by zero") : E.right(a / b);

			const divideK = fromEitherK(divide);

			expect(pipe(divideK(10, 2), toArray)).toEqual([5]);
			expect(pipe(divideK(10, 0), toArray)).toEqual([]);
		});
	});

	describe("FromEither instance", () => {
		it("has correct URI", () => {
			expect(FromEither.URI).toBe(URI);
		});

		it("has fromEither function", () => {
			expect(FromEither.fromEither).toBe(fromEither);
		});
	});
});
