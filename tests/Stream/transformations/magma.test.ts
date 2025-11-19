import * as N from "fp-ts/number";
import { describe, expect, it } from "vitest";

import { fromIterable, toArray } from "@/Stream/conversions";
import { getDifferenceMagma } from "@/Stream/transformations/magma";

describe("Stream/transformations/magma", () => {
	describe("getDifferenceMagma", () => {
		it("returns a Magma instance for Stream", () => {
			const magma = getDifferenceMagma(N.Eq);

			expect(magma).toHaveProperty("concat");
			expect(typeof magma.concat).toBe("function");
		});

		it("concatenates two streams by computing the difference", () => {
			const magma = getDifferenceMagma(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable([2, 3, 4, 5]);

			const result = magma.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1]);
		});

		it("returns empty stream when first is empty", () => {
			const magma = getDifferenceMagma(N.Eq);
			const stream1 = fromIterable<number>([]);
			const stream2 = fromIterable([1, 2, 3]);

			const result = magma.concat(stream1, stream2);

			expect(toArray(result)).toEqual([]);
		});

		it("returns all first stream elements when second stream is empty", () => {
			const magma = getDifferenceMagma(N.Eq);
			const stream1 = fromIterable([1, 2, 3]);
			const stream2 = fromIterable<number>([]);

			const result = magma.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 2, 3]);
		});

		it("returns elements from first not in second", () => {
			const magma = getDifferenceMagma(N.Eq);
			const stream1 = fromIterable([1, 2, 3, 4, 5]);
			const stream2 = fromIterable([2, 3, 4]);

			const result = magma.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 5]);
		});

		it("preserves order of elements from first stream", () => {
			const magma = getDifferenceMagma(N.Eq);
			const stream1 = fromIterable([5, 3, 1, 2]);
			const stream2 = fromIterable([2, 4]);

			const result = magma.concat(stream1, stream2);

			expect(toArray(result)).toEqual([5, 3, 1]);
		});

		it("handles duplicate elements in second stream", () => {
			const magma = getDifferenceMagma(N.Eq);
			const stream1 = fromIterable([1, 2, 2, 3, 2]);
			const stream2 = fromIterable([2]);

			const result = magma.concat(stream1, stream2);

			expect(toArray(result)).toEqual([1, 3]);
		});

		it("works with string streams", () => {
			const magma = getDifferenceMagma<string>({
				equals: (a, b) => a === b,
			});
			const stream1 = fromIterable(["b", "c", "d", "e"]);
			const stream2 = fromIterable(["a", "b", "c"]);

			const result = magma.concat(stream1, stream2);

			expect(toArray(result)).toEqual(["d", "e"]);
		});

		it("works with complex object streams", () => {
			interface Item {
				id: number;
				name: string;
			}

			const magma = getDifferenceMagma<Item>({
				equals: (a, b) => a.id === b.id,
			});

			const stream1 = fromIterable([
				{ id: 2, name: "b" },
				{ id: 3, name: "c" },
				{ id: 4, name: "d" },
			]);
			const stream2 = fromIterable([
				{ id: 1, name: "a" },
				{ id: 2, name: "b" },
			]);

			const result = magma.concat(stream1, stream2);

			expect(toArray(result)).toEqual([
				{ id: 3, name: "c" },
				{ id: 4, name: "d" },
			]);
		});
	});
});
