import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import * as AS from "@/AsyncStream";
import type { AsyncStream } from "@/AsyncStream/uri";

import { collect } from "../../AsyncStream/helpers";

describe("AsyncStream/utils/take-left", () => {
	it("returns an empty async stream when zero or negative counts are requested", async () => {
		await expect(collect(AS.takeLeft(0)(AS.range(0)))).resolves.toEqual([]);
		await expect(collect(AS.takeLeft(-3)(AS.range(0)))).resolves.toEqual([]);
	});

	it("stops pulling from the source once enough elements were consumed", async () => {
		let pulls = 0;
		const source: AsyncStream<number> = async function* () {
			for (const value of [10, 20, 30]) {
				pulls += 1;
				yield value;
				await Promise.resolve();
			}
		};

		await expect(collect(pipe(source, AS.takeLeft(2)))).resolves.toEqual([
			10, 20,
		]);
		expect(pulls).toBe(2);
	});
});
