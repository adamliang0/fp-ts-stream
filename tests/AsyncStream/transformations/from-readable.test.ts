import { ReadableStream } from "node:stream/web";
import { describe, expect, it } from "vitest";

import { fromReadableStream } from "@/AsyncStream/transformations/from-readable";

import { collect } from "../helpers";

describe("AsyncStream/transformations/from-readable", () => {
	it("consumes browser/WHATWG readable streams in the order chunks arrive", async () => {
		const readable = new ReadableStream<string | undefined>({
			start(controller) {
				controller.enqueue("head");
				setTimeout(() => {
					controller.enqueue("body");
					controller.close();
				}, 0);
			},
		});

		await expect(collect(fromReadableStream(readable))).resolves.toEqual([
			"head",
			"body",
		]);
	});
});
