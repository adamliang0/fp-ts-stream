import { describe, expect, it, vi } from "vitest";

import { FromTask, fromTask } from "@/AsyncStream/transformations/from-task";

import { collect } from "../helpers";

describe("AsyncStream/transformations/from-task", () => {
	it("awaits the task when the stream is consumed", async () => {
		const task = vi.fn(async () => "result");
		const stream = fromTask(task);

		expect(task).not.toHaveBeenCalled();
		await expect(collect(stream)).resolves.toEqual(["result"]);
		expect(task).toHaveBeenCalledTimes(1);
	});

	it("exposes the same behavior from the FromTask instance", async () => {
		const task = () => Promise.resolve(42);
		await expect(collect(FromTask.fromTask(task))).resolves.toEqual([42]);
	});
});
