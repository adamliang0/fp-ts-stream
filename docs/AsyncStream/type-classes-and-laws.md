# Type Classes and Laws

`AsyncStream` implements several key type classes from functional programming, each with a set of laws that guarantee its behavior. These laws are fundamental to writing predictable and correct functional code.

### Pointed

The `Pointed` type class provides the ability to lift a value into the `AsyncStream` context.

**Operation**: `of<A>(a: A): AsyncStream<A>`

Lifts a single value into a stream that yields that value once.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const single = AS.of(42)
const values = await AS.toArray(single) // [42]
```

**Laws**:
- Identity: `$map(f, of(a)) \equiv of(f(a))$`

### Functor

The `Functor` type class enables transformation of values within the stream context without changing the structure.

**Operation**: `map<A, B>(f: (a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>`

Applies a function to each value in the stream. The function may be synchronous or asynchronous.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"
import { delay } from "fp-ts/Task"

const numbers = AS.fromIterable([1, 2, 3])
const doubled = pipe(numbers, AS.map(n => n * 2))
const asyncDoubled = pipe(numbers, AS.map(async n => {
  await delay(10)()
  return n * 2
}))
```

**Operation**: `mapWithIndex<A, B>(f: (i: number, a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>`

Like `map`, but provides the index of each element.

**Laws**:
- Identity: `$map(identity, fa) \equiv fa$`
- Composition: `$map(compose(f, g), fa) \equiv map(f, map(g, fa))$`

### Monad

The `Monad` type class enables sequential composition of computations that produce streams. This is the foundation for complex stream transformations.

**Operation**: `chain<A, B>(f: (a: A) => AsyncStream<B>): (fa: AsyncStream<A>) => AsyncStream<B>`

Also known as `flatMap` or `bind`, `chain` applies a function that produces a stream to each value, then flattens the result. This enables dependent computations where each value can produce multiple values.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.fromIterable([1, 2, 3])
const expanded = pipe(
  numbers,
  AS.chain(n => AS.range(0, n)) // Each number produces a range
)
// Yields: 0, 0, 1, 0, 1, 2
```

**Operation**: `chainWithIndex<A, B>(f: (i: number, a: A) => AsyncStream<B>): (fa: AsyncStream<A>) => AsyncStream<B>`

Like `chain`, but provides the index.

**Laws**:
- Left identity: `$chain(f, of(a)) \equiv f(a)$`
- Right identity: `$chain(of, fa) \equiv fa$`
- Associativity: `$chain(f, chain(g, fa)) \equiv chain(a => chain(f, g(a)), fa)$`

### Applicative

The `Applicative` type class enables applying functions within the stream context, supporting parallel composition.

**Operation**: `ap<A, B>(fa: AsyncStream<A>): (fab: AsyncStream<(a: A) => B>) => AsyncStream<B>`

Applies a stream of functions to a stream of values, producing all combinations.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.fromIterable([1, 2])
const functions = AS.fromIterable([
  (n: number) => n * 2,
  (n: number) => n * 3
])
const applied = pipe(functions, AS.ap(numbers))
// Yields: 2, 4, 3, 6 (all combinations, order depends on consumption)
```

**Laws**:
- Identity: `$ap(of(identity), fa) \equiv fa$`
- Homomorphism: `$ap(of(f), of(a)) \equiv of(f(a))$`
- Interchange: `$ap(fab, of(a)) \equiv ap(of(f => f(a)), fab)$`

### Filterable

The `Filterable` type class provides operations for selectively keeping or discarding values.

**Operation**: `filter<A>(predicate: (a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => AsyncStream<A>`

Keeps only values that satisfy the predicate.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.fromIterable([1, 2, 3, 4, 5])
const evens = pipe(numbers, AS.filter(n => n % 2 === 0))
```

**Operation**: `filterMap<A, B>(f: (a: A) => Option<B> | Promise<Option<B>>): (fa: AsyncStream<A>) => AsyncStream<B>`

Maps each value to an `Option`, keeping only `Some` values and discarding `None`.

**Operation**: `partition<A>(predicate: (a: A) => boolean | Promise<boolean>): (fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<A>>`

Splits a stream into two streams: one for values satisfying the predicate, one for values that don't.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.fromIterable([1, 2, 3, 4, 5])
const { left: odds, right: evens } = pipe(numbers, AS.partition(n => n % 2 === 0))
```

### Zero

The `Zero` type class provides the ability to create empty streams.

**Operation**: `zero<A>(): AsyncStream<A>`

Returns an empty stream that yields no values.

**Operation**: `empty: AsyncStream<never>`

A constant empty stream.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const empty = AS.empty
const values = await AS.toArray(empty) // []
```

### Unfoldable

The `Unfoldable` type class enables generating streams from seed values through recursive unfolding.

**Operation**: `unfold<A, B>(b: B, f: (b: B) => Option<readonly [A, B]> | Promise<Option<readonly [A, B]>>): AsyncStream<A>`

Generates a stream by repeatedly applying a function to a seed value. The function returns an `Option` containing a value to yield and the next seed, or `None` to terminate.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { some } from "fp-ts/Option"

const fibonacci = AS.unfold(
  [0, 1] as const,
  ([a, b]) => some([a, [b, a + b]] as const)
)
```
