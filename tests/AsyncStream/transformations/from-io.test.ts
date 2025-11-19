import { describe, expect, it, vi } from "vitest";

import { FromIO, fromIO } from "@/AsyncStream/transformations/from-io";

import { collect } from "../helpers";

describe("AsyncStream/transformations/from-io", () => {
	it("defers executing the IO until the stream is consumed", async () => {
		let counter = 0;
		const io = vi.fn(() => ++counter);

		const stream = fromIO(io);
		expect(io).not.toHaveBeenCalled();

		await expect(collect(stream)).resolves.toEqual([1]);
		expect(io).toHaveBeenCalledTimes(1);
		await expect(collect(stream)).resolves.toEqual([2]);
		expect(io).toHaveBeenCalledTimes(2);
	});

	it("exposes the same behavior through the FromIO instance", async () => {
		let called = false;
		const effect = () => {
			called = true;
			return "value";
		};

		await expect(collect(FromIO.fromIO(effect))).resolves.toEqual(["value"]);
		expect(called).toBe(true);
	});
});
