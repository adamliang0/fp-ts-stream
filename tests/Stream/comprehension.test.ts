import { describe, expect, it } from "vitest";
import type { Stream } from "@/Stream/uri";
import { comprehension } from "@/Stream/utils/comprehension";

const fromArray = <A>(as: readonly A[]): Stream<A> =>
	function* () {
		for (const a of as) {
			yield a;
		}
	};

const toArray = <A>(s: Stream<A>): A[] => Array.from(s());

describe("comprehension", () => {
	it("maps a single stream", () => {
		const xs = fromArray([1, 2, 3]);

		const s = comprehension([xs] as const, (x) => x * 2);

		expect(toArray(s)).toEqual([2, 4, 6]);
	});

	it("computes the Cartesian product of two streams", () => {
		const xs = fromArray([1, 2]);
		const ys = fromArray(["a", "b"]);

		const s = comprehension([xs, ys] as const, (x, y) => `${x}${y}`);

		expect(toArray(s)).toEqual(["1a", "1b", "2a", "2b"]);
	});

	it("respects the guard / condition", () => {
		const xs = fromArray([1, 2, 3]);
		const ys = fromArray(["a", "b"]);

		const s = comprehension(
			[xs, ys] as const,
			(x, y) => `${x}${y}`,
			(x) => x % 2 === 1, // only odd x
		);

		expect(toArray(s)).toEqual(["1a", "1b", "3a", "3b"]);
	});

	it("handles a stream that yields no values", () => {
		const xs = fromArray<number>([]);
		const ys = fromArray(["a", "b"]);

		const s = comprehension([xs, ys] as const, (x, y) => `${x}${y}`);

		expect(toArray(s)).toEqual([]);
	});

	it("works with three streams", () => {
		const xs = fromArray([1, 2]);
		const ys = fromArray(["a", "b"]);
		const zs = fromArray([true, false]);

		const s = comprehension([xs, ys, zs] as const, (x, y, z) => ({ x, y, z }));

		expect(toArray(s)).toEqual([
			{ x: 1, y: "a", z: true },
			{ x: 1, y: "a", z: false },
			{ x: 1, y: "b", z: true },
			{ x: 1, y: "b", z: false },
			{ x: 2, y: "a", z: true },
			{ x: 2, y: "a", z: false },
			{ x: 2, y: "b", z: true },
			{ x: 2, y: "b", z: false },
		]);
	});

	it("defaults the guard to true when omitted", () => {
		const xs = fromArray([1, 2]);

		const s = comprehension([xs] as const, (x) => x);

		expect(toArray(s)).toEqual([1, 2]);
	});
});
