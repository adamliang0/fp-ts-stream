import { none, some } from "fp-ts/Option";
import { describe, expect, it } from "vitest";

import { fromIterable } from "@/Stream/conversions";
import { lookup } from "@/Stream/utils/lookup";

describe("Stream/utils/lookup", () => {
	it("returns None for negative indices or out-of-bounds lookups", () => {
		const stream = fromIterable([1, 2]);
		expect(lookup(-1, stream)).toEqual(none);
		expect(lookup(5, stream)).toEqual(none);
	});

	it("supports curried usage", () => {
		const stream = fromIterable(["a", "b", "c"]);
		const lookupSecond = lookup(1);
		expect(lookupSecond(stream)).toEqual(some("b"));
	});
});
