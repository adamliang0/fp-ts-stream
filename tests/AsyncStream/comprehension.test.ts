import { describe, expect, it } from "vitest";
import type { AsyncStream } from "@/AsyncStream/uri";
import { comprehension } from "@/AsyncStream/utils/comprehension";

// If you have your own MaybeAsync type, you don't need this.
// Just make sure it matches your implementation (R | Promise<R>).
type MaybeAsync<A> = A | Promise<A>;

const fromArrayAsync = <A>(as: readonly A[]): AsyncStream<A> =>
	async function* () {
		for (const a of as) {
			yield a;
		}
	};

const toArrayAsync = async <A>(s: AsyncStream<A>): Promise<A[]> => {
	const out: A[] = [];
	for await (const a of s()) {
		out.push(a);
	}
	return out;
};

describe("async comprehension", () => {
	it("maps a single async stream with a sync mapper", async () => {
		const xs = fromArrayAsync([1, 2, 3]);

		const s = comprehension([xs] as const, (x) => x * 2);

		await expect(toArrayAsync(s)).resolves.toEqual([2, 4, 6]);
	});

	it("computes the Cartesian product of two async streams", async () => {
		const xs = fromArrayAsync([1, 2]);
		const ys = fromArrayAsync(["a", "b"]);

		const s = comprehension([xs, ys] as const, (x, y) => `${x}${y}`);

		await expect(toArrayAsync(s)).resolves.toEqual(["1a", "1b", "2a", "2b"]);
	});

	it("computes the Cartesian product of two async streams", async () => {
		const xs = fromArrayAsync([1, 2]);
		const ys = fromArrayAsync(["a", "b"]);

		const s = comprehension([xs, ys] as const, (x, y) => `${x}${y}`);

		await expect(toArrayAsync(s)).resolves.toEqual(["1a", "1b", "2a", "2b"]);
	});

	it("supports an async mapper (MaybeAsync<R>)", async () => {
		const xs = fromArrayAsync([1, 2]);
		const ys = fromArrayAsync([10, 20]);

		const s = comprehension(
			[xs, ys] as const,
			async (x, y): Promise<number> => {
				return x + y;
			},
		);

		await expect(toArrayAsync(s)).resolves.toEqual([11, 21, 12, 22]);
	});

	it("respects a sync guard", async () => {
		const xs = fromArrayAsync([1, 2, 3]);
		const ys = fromArrayAsync(["a", "b"]);

		const s = comprehension(
			[xs, ys] as const,
			(x, y) => `${x}${y}`,
			(x) => x % 2 === 1, // only odd x
		);

		await expect(toArrayAsync(s)).resolves.toEqual(["1a", "1b", "3a", "3b"]);
	});

	it("respects an async guard (MaybeAsync<boolean>)", async () => {
		const xs = fromArrayAsync([1, 2, 3]);
		const ys = fromArrayAsync(["a", "b"]);

		const s = comprehension(
			[xs, ys] as const,
			(x, y) => `${x}${y}`,
			async (x): Promise<boolean> => {
				return x >= 2; // only x >= 2
			},
		);

		await expect(toArrayAsync(s)).resolves.toEqual(["2a", "2b", "3a", "3b"]);
	});

	it("returns an empty stream if any input async stream is empty", async () => {
		const xs = fromArrayAsync<number>([]);
		const ys = fromArrayAsync(["a", "b"]);

		const s = comprehension([xs, ys] as const, (x, y) => `${x}${y}`);

		await expect(toArrayAsync(s)).resolves.toEqual([]);
	});

	it("works with three async streams", async () => {
		const xs = fromArrayAsync([1, 2]);
		const ys = fromArrayAsync(["a", "b"]);
		const zs = fromArrayAsync([true, false]);

		const s = comprehension([xs, ys, zs] as const, (x, y, z) => ({ x, y, z }));

		await expect(toArrayAsync(s)).resolves.toEqual([
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

	it("defaults the guard to true when omitted", async () => {
		const xs = fromArrayAsync([1, 2]);

		const s = comprehension([xs] as const, (x) => x);

		await expect(toArrayAsync(s)).resolves.toEqual([1, 2]);
	});
});
