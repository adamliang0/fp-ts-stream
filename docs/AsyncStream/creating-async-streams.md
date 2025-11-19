# Creating AsyncStreams

This section covers various ways to construct an `AsyncStream`.

### From Iterables

**`fromIterable<A>(iterable: Iterable<A>): AsyncStream<A>`**

Creates a stream from any synchronous iterable (arrays, sets, maps, generators, etc.).

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const fromArray = AS.fromIterable([1, 2, 3])
const fromSet = AS.fromIterable(new Set([1, 2, 3]))
const fromGenerator = AS.fromIterable(function*() {
  yield 1
  yield 2
  yield 3
}())
```

**`fromAsyncIterable<A>(iterable: AsyncIterable<A>): AsyncStream<A>`**

Creates a stream from an async iterable.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

declare function fetchData(n: number): Promise<string>;

const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield await fetchData(1)
    yield await fetchData(2)
  }
}
const stream = AS.fromAsyncIterable(asyncIterable)
```

### From Promises

**`fromPromises<A>(promises: Iterable<Promise<A>>): AsyncStream<A>`**

Creates a stream that yields values as promises resolve. Values are yielded in the order they resolve, not the order of the input promises.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

declare function slowOperation(): Promise<string>;
declare function fastOperation(): Promise<string>;

const promises = [
  slowOperation(), // resolves after 100ms
  fastOperation()  // resolves after 10ms
]
const stream = AS.fromPromises(promises)
// Yields: fastOperation result, then slowOperation result
```

**`fromPromisesSeq<A>(promises: Iterable<Promise<A>>): AsyncStream<A>`**

Like `fromPromises`, but preserves the order of the input promises, waiting for each in sequence.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

declare function slowOperation(): Promise<string>;
declare function fastOperation(): Promise<string>;

const promises = [
  slowOperation(), // resolves after 100ms
  fastOperation()  // resolves after 10ms
]
const stream = AS.fromPromisesSeq(promises)
// Yields: slowOperation result, then fastOperation result (in order)
```

### From Other Types

**`fromReadableStream<A>(stream: ReadableStream<A>): AsyncStream<A>`**

Converts a Web Streams `ReadableStream` to an `AsyncStream`.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

declare const url: string;

const response = await fetch(url)
if (response.body) {
    const stream = AS.fromReadableStream(response.body)
}
```

**`fromStream<A>(stream: Stream<A>): AsyncStream<A>`**

Converts a synchronous `Stream` to an `AsyncStream`.

**`fromTask<A>(task: Task<A>): AsyncStream<A>`**

Creates a stream containing a single value from a `Task`.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { Task } from "fp-ts/Task"

declare function fetchUserData(): Promise<string>;

const task: Task<string> = () => fetchUserData()
const stream = AS.fromTask(task)
```

**`fromIO<A>(io: IO<A>): AsyncStream<A>`**

Creates a stream containing a single value from an `IO`.

**`fromOption<A>(option: Option<A>): AsyncStream<A>`**

Creates a stream from an `Option`, yielding the value if `Some`, empty if `None`.

**`fromEither<E, A>(either: Either<E, A>): AsyncStream<A>`**

Creates a stream from an `Either`, yielding the value if `Right`, empty if `Left`.

### Generator Functions

**`range(start: number, end?: number): AsyncStream<number>`**

Creates a stream of numbers from `start` (inclusive) to `end` (exclusive). If `end` is omitted, the stream is infinite.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const finite = AS.range(0, 5) // 0, 1, 2, 3, 4
const infinite = AS.range(0) // 0, 1, 2, 3, ...
```

**`unfold<A, B>(seed: B, f: (b: B) => Option<readonly [A, B]>): AsyncStream<A>`**

Generates a stream by recursively applying a function to a seed value.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { some, none } from "fp-ts/Option"

const countdown = AS.unfold(5, n => n > 0 ? some([n, n - 1] as const) : none)
// Yields: 5, 4, 3, 2, 1
```

**`makeBy<A>(f: (i: number) => A | Promise<A>): AsyncStream<A>`**

Creates an infinite stream by applying a function to indices.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const squares = AS.makeBy(i => i * i) // 0, 1, 4, 9, 16, ...
```

**`replicate<A>(n: number, a: A): AsyncStream<A>`**

Creates a stream that yields the same value `n` times.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const threeOnes = AS.replicate(3, 1) // 1, 1, 1
```

### Empty and Special Streams

**`empty: AsyncStream<never>`**

An empty stream that yields no values.

**`zero<A>(): AsyncStream<A>`**

A function that returns an empty stream of any type.

**`never: AsyncStream<never>`**

A stream that never completes or yields values. Useful for representing infinite waiting.
