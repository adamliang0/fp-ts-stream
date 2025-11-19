import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";
import { Alternative, alt, altW } from "@/AsyncStream/alternative";
import { fromIterable, toArray } from "@/AsyncStream/conversions";
import { of } from "@/AsyncStream/pointed";

describe("alt", () => {
	it("concatenates two streams", async () => {
		const first = fromIterable([1, 2, 3]);
		const second = fromIterable([4, 5, 6]);

		const result = await toArray(
			pipe(
				first,
				alt(() => second),
			),
		);

		expect(result).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("works with empty first stream", async () => {
		const first = fromIterable<number>([]);
		const second = fromIterable([1, 2, 3]);

		const result = await toArray(
			pipe(
				first,
				alt(() => second),
			),
		);

		expect(result).toEqual([1, 2, 3]);
	});

	it("works with empty second stream", async () => {
		const first = fromIterable([1, 2, 3]);
		const second = fromIterable<number>([]);

		const result = await toArray(
			pipe(
				first,
				alt(() => second),
			),
		);

		expect(result).toEqual([1, 2, 3]);
	});

	it("is lazy - second stream is only evaluated when needed", async () => {
		let called = false;
		const first = of(1);
		const second = () => {
			called = true;
			return of(2);
		};

		const stream = pipe(first, alt(second));

		expect(called).toBe(false);
		await toArray(stream);
		expect(called).toBe(true);
	});

	it("works with the Alternative instance", async () => {
		const first = fromIterable([1, 2]);
		const second = fromIterable([3, 4]);

		const result = await toArray(Alternative.alt(first, () => second));
		expect(result).toEqual([1, 2, 3, 4]);
	});
});

describe("altW", () => {
	it("concatenates streams of different types", async () => {
		const first = fromIterable<number>([1, 2]);
		const second = fromIterable<string>(["a", "b"]);

		const result = await toArray(
			pipe(
				first,
				altW(() => second),
			),
		);

		expect(result).toEqual([1, 2, "a", "b"]);
	});

	it("widens the type to union", async () => {
		const first = of<number>(1);
		const second = () => of<string>("hello");

		const stream: ReturnType<typeof altW<string>> = altW(second);
		const result = await toArray(pipe(first, stream));

		expect(result).toEqual([1, "hello"]);
	});
});

describe("alternative laws", () => {
	it("associativity: alt(alt(a, b), c) = alt(a, alt(b, c))", async () => {
		const a = fromIterable([1]);
		const b = fromIterable([2]);
		const c = fromIterable([3]);

		const left = await toArray(
			pipe(
				a,
				alt(() => b),
				alt(() => c),
			),
		);

		const right = await toArray(
			pipe(
				a,
				alt(() =>
					pipe(
						b,
						alt(() => c),
					),
				),
			),
		);

		expect(left).toEqual(right);
	});

	it("distributivity: ap(alt(fa, ga), fab) = alt(ap(fa, fab), ap(ga, fab))", async () => {
		const fa = fromIterable([1, 2]);
		const ga = fromIterable([3, 4]);
		const fab = fromIterable([(x: number) => x * 2]);

		const left = await toArray(
			Alternative.ap(
				fab,
				pipe(
					fa,
					alt(() => ga),
				),
			),
		);

		const right = await toArray(
			pipe(
				Alternative.ap(fab, fa),
				alt(() => Alternative.ap(fab, ga)),
			),
		);

		expect(left).toEqual(right);
	});
});
