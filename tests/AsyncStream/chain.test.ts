import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import * as AS from "@/AsyncStream";

import { chunkedStream, collect } from "./helpers";

describe("AsyncStream/chain", () => {
	it("fetches dependent async streams sequentially, mirroring data-loader flows", async () => {
		type Page = {
			readonly page: number;
			readonly delays: number[];
			readonly items: string[];
		};

		const pages: Page[] = [
			{ page: 1, delays: [5], items: ["a1", "a2"] },
			{ page: 2, delays: [0], items: ["b1"] },
			{ page: 3, delays: [10], items: ["c1", "c2", "c3"] },
		];

		const fetchPage = (page: Page) =>
			chunkedStream(
				page.delays.map((delayMs) => ({
					delayMs,
					values: page.items,
				})),
			);

		const flattened = pipe(
			AS.fromIterable(pages),
			AS.chain((page) =>
				pipe(
					fetchPage(page),
					AS.map((item) => `${page.page}:${item}`),
				),
			),
		);

		await expect(collect(flattened)).resolves.toEqual([
			"1:a1",
			"1:a2",
			"2:b1",
			"3:c1",
			"3:c2",
			"3:c3",
		]);
	});
});
