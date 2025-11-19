import { pipe } from "fp-ts/function";
import { describe, expect, it, vi } from "vitest";

import * as AS from "@/AsyncStream";

import { collect, deferred } from "./helpers";

describe("AsyncStream/functor", () => {
	it("awaits asynchronous mapping functions before yielding", async () => {
		const gates = new Map<number, () => void>();

		const mapper = vi.fn((value: number) => {
			const gate = deferred<void>();
			gates.set(value, gate.resolve);
			return gate.promise.then(() => value * 2);
		});

		const waitForCalls = async (expected: number) => {
			while (mapper.mock.calls.length < expected) {
				await Promise.resolve();
			}
		};

		const pending = collect(pipe(AS.fromIterable([1, 2, 3]), AS.map(mapper)));

		await waitForCalls(1);
		expect(mapper).toHaveBeenCalledTimes(1);
		gates.get(1)!();

		await waitForCalls(2);
		expect(mapper).toHaveBeenCalledTimes(2);
		gates.get(2)!();

		await waitForCalls(3);
		expect(mapper).toHaveBeenCalledTimes(3);
		gates.get(3)!();

		await expect(pending).resolves.toEqual([2, 4, 6]);
	});

	it("provides indexes via mapWithIndex so callers can attach metadata", async () => {
		await expect(
			collect(
				pipe(
					AS.fromIterable(["alpha", "beta"]),
					AS.mapWithIndex(async (index, value) => `#${index}-${value}`),
				),
			),
		).resolves.toEqual(["#0-alpha", "#1-beta"]);
	});
});
