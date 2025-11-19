import { left, right } from "fp-ts/Either";
import { describe, expect, it } from "vitest";

import {
	fromEither,
	fromEitherK,
} from "@/AsyncStream/transformations/from-either";

import { collect } from "../helpers";

describe("AsyncStream/transformations/from-either", () => {
	it("turns Right values into singleton streams", async () => {
		await expect(collect(fromEither(right("ok")))).resolves.toEqual(["ok"]);
	});

	it("discards Left values and supports lifted functions via fromEitherK", async () => {
		const safeDivider = fromEitherK((value: number) =>
			value === 0 ? left("division by zero") : right(100 / value),
		);

		await expect(collect(fromEither(left("boom")))).resolves.toEqual([]);
		await expect(collect(safeDivider(2))).resolves.toEqual([50]);
		await expect(collect(safeDivider(0))).resolves.toEqual([]);
	});
});
