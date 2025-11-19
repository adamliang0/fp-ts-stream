# Transforming Streams

This section details the rich API for transforming `AsyncStream` instances.

### Functor Operations

**`map<A, B>(f: (a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>`**

Transforms each value in the stream. The transformation function may be synchronous or asynchronous.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

declare function processValue(n: number): Promise<string>;

const numbers = AS.fromIterable([1, 2, 3])
const doubled = pipe(numbers, AS.map(n => n * 2))
const asyncTransformed = pipe(
  numbers,
  AS.map(async n => {
    const result = await processValue(n)
    return result
  })
)
```

**`mapWithIndex<A, B>(f: (i: number, a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>`**

Like `map`, but provides the index of each element.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const items = AS.fromIterable(['a', 'b', 'c'])
const indexed = pipe(
  items,
  AS.mapWithIndex((i, item) => `${i}: ${item}`)
)
// Yields: "0: a", "1: b", "2: c"
```

### Monadic Operations

**`chain<A, B>(f: (a: A) => AsyncStream<B>): (fa: AsyncStream<A>) => AsyncStream<B>`**

Sequentially composes stream-producing computations. Each value in the input stream is transformed into a new stream, and all resulting streams are flattened into a single stream.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

declare function fetchPageItems(page: number): AS.AsyncStream<string>;

const pages = AS.fromIterable([1, 2, 3])
const items = pipe(
  pages,
  AS.chain(page => fetchPageItems(page)) // Each page produces a stream of items
)
```

**`chainWithIndex<A, B>(f: (i: number, a: A) => AsyncStream<B>): (fa: AsyncStream<A>) => AsyncStream<B>`**

Like `chain`, but provides the index.

**`chainRecDepthFirst<A, B>(f: (a: A) => AsyncStream<Either<A, B>>): (a: A) => AsyncStream<B>`**

Recursively chains streams using depth-first traversal. The function produces a stream of `Either` values: `Left` values continue recursion, `Right` values are yielded.

**`chainRecBreadthFirst<A, B>(f: (a: A) => AsyncStream<Either<A, B>>): (a: A) => AsyncStream<B>`**

Like `chainRecDepthFirst`, but uses breadth-first traversal.

### Filtering Operations

**`filter<A>(predicate: (a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => AsyncStream<A>`**

Keeps only values that satisfy the predicate.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.range(0, 10)
const evens = pipe(numbers, AS.filter(n => n % 2 === 0))
```

**`filterWithIndex<A>(predicate: (i: number, a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => AsyncStream<A>`**

Like `filter`, but provides the index.

**`filterMap<A, B>(f: (a: A) => Option<B> | Promise<Option<B>>): (fa: AsyncStream<A>) => AsyncStream<B>`**

Maps each value to an `Option`, keeping only `Some` values.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"
import { some, none } from "fp-ts/Option"

const strings = AS.fromIterable(['1', 'two', '3', 'four'])
const numbers = pipe(
  strings,
  AS.filterMap(s => {
    const n = parseInt(s, 10)
    return isNaN(n) ? none : some(n)
  })
)
// Yields: 1, 3
```

**`partition<A>(predicate: (a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<A>>`**

Splits a stream into two streams based on a predicate.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.fromIterable([1, 2, 3, 4, 5])
const { left: odds, right: evens } = pipe(
  numbers,
  AS.partition(n => n % 2 === 0)
)
```

**`partitionMap<A, B, C>(f: (a: A) => Either<B, C> | Promise<Either<B, C>>): (fa: AsyncStream<A>) => Separated<AsyncStream<B>, AsyncStream<C>>`**

Splits a stream by mapping each value to an `Either`, separating `Left` and `Right` values.

### Taking and Dropping

**`takeLeft(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>`**

Takes the first `n` values from a stream. If the stream has fewer than `n` values, all values are taken.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.range(0)
const firstFive = pipe(numbers, AS.takeLeft(5))
```

**`takeRight(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>`**

Takes the last `n` values from a stream. Note: this requires consuming the entire stream.

**`takeLeftWhile<A>(predicate: (a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => AsyncStream<A>`**

Takes values from the beginning of the stream while the predicate is true.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.range(0)
const smallNumbers = pipe(
  numbers,
  AS.takeLeftWhile(n => n < 10)
)
```

**`takeRightWhile<A>(predicate: (a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => AsyncStream<A>`**

Takes values from the end of the stream while the predicate is true.

**`dropLeft(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>`**

Drops the first `n` values from a stream.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.range(0, 10)
const afterFive = pipe(numbers, AS.dropLeft(5))
// Yields: 5, 6, 7, 8, 9
```

**`dropRight(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>`**

Drops the last `n` values from a stream.

**`dropLeftWhile<A>(predicate: (a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => AsyncStream<A>`**

Drops values from the beginning while the predicate is true.

**`dropRightWhile<A>(predicate: (a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => AsyncStream<A>`**

Drops values from the end while the predicate is true.

### Scanning and Folding

**`scanLeft<A, B>(initial: B, f: (b: B, a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>`**

Like `reduce`, but yields all intermediate results. The first value yielded is the initial value.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.fromIterable([1, 2, 3, 4])
const sums = pipe(
  numbers,
  AS.scanLeft(0, (acc, n) => acc + n)
)
// Yields: 0, 1, 3, 6, 10
```

**`scanRight<A, B>(initial: B, f: (a: A, b: B) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>`**

Like `scanLeft`, but scans from right to left.

### Zipping and Combining

**`zip<A, B>(fa: AsyncStream<A>, fb: AsyncStream<B>): AsyncStream<AsyncStream<A | B>>`**

Zips two streams together, producing a stream of streams containing pairs.

**`zipWith<A, B, C>(f: (a: A, b: B) => C | Promise<C>): (fa: AsyncStream<A>) => (fb: AsyncStream<B>) => AsyncStream<C>`**

Zips two streams using a combining function.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.fromIterable([1, 2, 3])
const letters = AS.fromIterable(['a', 'b', 'c'])
const combined = pipe(
  numbers,
  AS.zipWith((n, l) => `${n}${l}`)(letters)
)
// Yields: "1a", "2b", "3c"
```

**`zipArray<A>(...streams: Array<AsyncStream<A>>): AsyncStream<Array<A>>`**

Zips multiple streams into a stream of arrays.

### Other Transformations

**`flatten<A>(mma: AsyncStream<AsyncStream<A>>): AsyncStream<A>`**

Flattens a stream of streams into a single stream. Equivalent to `chain(identity)`.

**`reverse<A>(fa: AsyncStream<A>): AsyncStream<A>`**

Reverses a stream. Note: requires consuming the entire stream.

**`intersperse<A>(separator: A): (fa: AsyncStream<A>) => AsyncStream<A>`**

Inserts a separator value between each element.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const items = AS.fromIterable([1, 2, 3])
const withCommas = pipe(items, AS.intersperse(0))
// Yields: 1, 0, 2, 0, 3
```

**`chunksOf(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<Array<A>>`**

Groups stream elements into chunks of size `n`.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.range(0, 10)
const chunks = pipe(numbers, AS.chunksOf(3))
// Yields: [0, 1, 2], [3, 4, 5], [6, 7, 8], [9]
```
