import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";

import * as AS from "@/AsyncStream";

import { collect } from "../helpers";

describe("AsyncStream/utils/delay", () => {
	it("waits approximately the requested duration before emitting", async () => {
		const delayDuration = 10;
		const start = Date.now();

		const values = await collect(pipe(AS.of("ready"), AS.delay(delayDuration)));
		const elapsed = Date.now() - start;

		expect(values).toEqual(["ready"]);
		// Allow 2ms margin for timer imprecision
		expect(elapsed).toBeGreaterThanOrEqual(delayDuration - 2);
		expect(elapsed).toBeLessThan(delayDuration + 40);
	});
});
