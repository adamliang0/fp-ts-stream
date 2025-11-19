import type { IO } from "fp-ts/IO";
import { pipe } from "fp-ts/function";
import { describe, expect, it, vi } from "vitest";

import { toArray } from "@/Stream/conversions";
import { FromIO, fromIO, fromIOK } from "@/Stream/transformations/from-io";
import { URI } from "@/Stream/uri";

describe("Stream/transformations/from-io", () => {
	describe("fromIO", () => {
		it("creates a stream with one element from IO", () => {
			const io: IO<number> = () => 42;
			const result = pipe(fromIO(io), toArray);

			expect(result).toEqual([42]);
		});

		it("executes the IO action when the stream is consumed", () => {
			const effect = vi.fn(() => "executed");
			const io: IO<string> = effect;

			const stream = fromIO(io);

			expect(effect).not.toHaveBeenCalled();

			const result = toArray(stream);

			expect(effect).toHaveBeenCalledTimes(1);
			expect(result).toEqual(["executed"]);
		});

		it("re-executes the IO action on each stream consumption", () => {
			let counter = 0;
			const io: IO<number> = () => ++counter;

			const stream = fromIO(io);

			expect(toArray(stream)).toEqual([1]);
			expect(toArray(stream)).toEqual([2]);
			expect(toArray(stream)).toEqual([3]);
		});

		it("preserves complex types", () => {
			const obj = { id: 1, name: "test", tags: ["a", "b"] };
			const io: IO<typeof obj> = () => obj;

			const result = pipe(fromIO(io), toArray);

			expect(result).toEqual([obj]);
		});
	});

	describe("fromIOK", () => {
		it("lifts a function that returns IO<A> to a function that returns Stream<A>", () => {
			const getTimestamp = (): IO<number> => () => Date.now();
			const getTimestampK = fromIOK(getTimestamp);

			const result = pipe(getTimestampK(), toArray);

			expect(result).toHaveLength(1);
			expect(typeof result[0]).toBe("number");
		});

		it("works with functions that take arguments", () => {
			const createGreeting =
				(name: string): IO<string> =>
				() =>
					`Hello, ${name}!`;

			const createGreetingK = fromIOK(createGreeting);

			expect(pipe(createGreetingK("Alice"), toArray)).toEqual([
				"Hello, Alice!",
			]);
			expect(pipe(createGreetingK("Bob"), toArray)).toEqual(["Hello, Bob!"]);
		});

		it("lifts functions with multiple arguments", () => {
			const add =
				(a: number, b: number): IO<number> =>
				() =>
					a + b;
			const addK = fromIOK(add);

			expect(pipe(addK(5, 3), toArray)).toEqual([8]);
			expect(pipe(addK(10, 20), toArray)).toEqual([30]);
		});
	});

	describe("FromIO instance", () => {
		it("has correct URI", () => {
			expect(FromIO.URI).toBe(URI);
		});

		it("has fromIO function", () => {
			expect(FromIO.fromIO).toBe(fromIO);
		});
	});
});
