import { Eq } from "fp-ts/number";
import { describe, expect, it } from "vitest";

import { fromIterable } from "@/AsyncStream/conversions";
import { getDifferenceMagma } from "@/AsyncStream/transformations/magma";

import { collect } from "../helpers";

describe("AsyncStream/transformations/magma", () => {
	it("returns stream elements that exist only in the first argument", async () => {
		const magma = getDifferenceMagma(Eq);

		const first = fromIterable([1, 2, 3]);
		const second = fromIterable([2, 4]);

		await expect(collect(magma.concat(first, second))).resolves.toEqual([1, 3]);
	});
});
