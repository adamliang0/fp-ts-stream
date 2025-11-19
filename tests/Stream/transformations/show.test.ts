import * as N from "fp-ts/number";
import type { Show } from "fp-ts/Show";
import * as S from "fp-ts/string";
import { describe, expect, it } from "vitest";

import { fromIterable } from "@/Stream/conversions";
import { getShow } from "@/Stream/transformations/show";

describe("Stream/transformations/show", () => {
	describe("getShow", () => {
		it("returns a Show instance for Stream", () => {
			const show = getShow(N.Show);

			expect(show).toHaveProperty("show");
			expect(typeof show.show).toBe("function");
		});

		it("shows an empty stream as {}", () => {
			const show = getShow(N.Show);
			const stream = fromIterable<number>([]);

			const result = show.show(stream);

			expect(result).toBe("{}");
		});

		it("shows a stream with one element", () => {
			const show = getShow(N.Show);
			const stream = fromIterable([42]);

			const result = show.show(stream);

			expect(result).toBe("{ 42 }");
		});

		it("shows a stream with multiple elements", () => {
			const show = getShow(N.Show);
			const stream = fromIterable([1, 2, 3, 4, 5]);

			const result = show.show(stream);

			expect(result).toBe("{ 1, 2, 3, 4, 5 }");
		});

		it("works with string streams", () => {
			const show = getShow(S.Show);
			const stream = fromIterable(["a", "b", "c"]);

			const result = show.show(stream);

			expect(result).toBe('{ "a", "b", "c" }');
		});

		it("uses the provided Show instance for elements", () => {
			const show = getShow(N.Show);
			const stream = fromIterable([10, 20, 30]);

			const result = show.show(stream);

			expect(result).toBe("{ 10, 20, 30 }");
		});

		it("works with custom Show instances", () => {
			interface Person {
				name: string;
				age: number;
			}

			const showPerson: Show<Person> = {
				show: (p) => `${p.name}(${p.age})`,
			};

			const show = getShow(showPerson);
			const stream = fromIterable([
				{ name: "Alice", age: 30 },
				{ name: "Bob", age: 25 },
			]);

			const result = show.show(stream);

			expect(result).toBe("{ Alice(30), Bob(25) }");
		});

		it("handles streams with boolean values", () => {
			const showBoolean: Show<boolean> = {
				show: (b) => b.toString(),
			};

			const show = getShow(showBoolean);
			const stream = fromIterable([true, false, true]);

			const result = show.show(stream);

			expect(result).toBe("{ true, false, true }");
		});

		it("handles streams with complex objects", () => {
			interface Point {
				x: number;
				y: number;
			}

			const showPoint: Show<Point> = {
				show: (p) => `(${p.x}, ${p.y})`,
			};

			const show = getShow(showPoint);
			const stream = fromIterable([
				{ x: 1, y: 2 },
				{ x: 3, y: 4 },
				{ x: 5, y: 6 },
			]);

			const result = show.show(stream);

			expect(result).toBe("{ (1, 2), (3, 4), (5, 6) }");
		});

		it("handles streams with two elements", () => {
			const show = getShow(N.Show);
			const stream = fromIterable([100, 200]);

			const result = show.show(stream);

			expect(result).toBe("{ 100, 200 }");
		});

		it("preserves element formatting from Show instance", () => {
			const showWithPrefix: Show<number> = {
				show: (n) => `#${n}`,
			};

			const show = getShow(showWithPrefix);
			const stream = fromIterable([1, 2, 3]);

			const result = show.show(stream);

			expect(result).toBe("{ #1, #2, #3 }");
		});

		it("handles large streams", () => {
			const show = getShow(N.Show);
			const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
			const stream = fromIterable(numbers);

			const result = show.show(stream);

			expect(result).toBe("{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }");
		});
	});
});
