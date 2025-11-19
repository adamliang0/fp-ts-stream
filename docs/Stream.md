# Stream Developer Documentation

## Table of Contents

1. [What is Stream?](#what-is-stream)
2. [Core Concepts](#core-concepts)
3. [Type Classes and Laws](#type-classes-and-laws)
4. [Creating Streams](#creating-streams)
5. [Transforming Streams](#transforming-streams)
6. [Consuming & Folding](#consuming--folding)
7. [Utility Modules](#utility-modules)
8. [Patterns & Recipes](#patterns--recipes)
9. [Examples](#examples)

## What is Stream?

`Stream<A>` is the synchronous companion to [`AsyncStream`](./AsyncStream.md#what-is-asyncstream): it models potentially infinite, lazily computed sequences of values that can be iterated synchronously. A stream is simply a thunk that returns a ES `Generator`.

```ts
type Stream<A> = () => Generator<A>
```

That deceptively small type unlocks a large portion of the `fp-ts` toolbox. Because a stream is represented as a thunk, **no work happens** until you iterate over the returned generator. This enables you to assemble complex computations up front and execute them later.

```ts
import { pipe } from "fp-ts/function"
import * as S from "fp-ts-stream/Stream"

const evens = pipe(
  S.range(0, Infinity),
  S.filter((n) => n % 2 === 0),
  S.takeLeft(5)
)

console.log(S.toArray(evens)) // [0, 2, 4, 6, 8]
```

Use `Stream` when all intermediate steps can stay synchronous. If you need to interleave asynchronous effects, convert with `AsyncStream.fromStream` (see [AsyncStream → Stream conversions](./AsyncStream.md#creating-asyncstreams)).

## Core Concepts

- **Lazy pull model** – every transformation creates a new thunk. The underlying generator is only started when you iterate (`toArray`, `reduce`, `for...of`, etc.).
- **Referential transparency** – each helper returns a new stream rather than mutating the original; reusing a stream is always safe as long as the underlying generator is pure.
- **Deterministic iteration** – generators are consumed in-order. Some helpers (e.g. `reverse`, `takeRight`, `spanRight`, `matchRight`) explicitly document when they *consume* the stream to produce a result.
- **Sync by default, async bridgeable** – streams integrate with the entire `fp-ts` stack (type classes, `pipe`, `Option`, `Either`, `IO`, etc.) and can be lifted into [`AsyncStream`](./AsyncStream.md#core-concepts) or other contexts through provided `FromIO`, `FromEither`, `Traversable`, and `Witherable` instances.

## Type Classes and Laws

All operations are implemented using `fp-ts` type-class instances, so familiar algebraic laws apply:

- **Pointed** – `of` lifts a value into a stream. Law: `map(f, of(a)) === of(f(a))`.
- **Functor / FunctorWithIndex** – `map`, `mapWithIndex`, `bindTo`, `let`. Laws: identity and composition.
- **Apply / Applicative** – `ap`, `apFirst`, `apSecond`, `apS`. Applicative laws (identity, homomorphism, interchange) hold under lazy evaluation.
- **Chain / ChainRec / Monad** – `chain`, `chainWithIndex`, `chainFirst`, `ChainRecDepthFirst`, `ChainRecBreadthFirst`, `Do`, `bind`. Associativity is preserved; `ChainRec` variants provide depth-first vs breadth-first semantics for recursive generation.
- **Zero / Alternative** – `zero`, `empty`, `guard`, `alt`, `altW`, `concat`. Follows annihilation and distributivity laws.
- **Extend** – `extend` and `duplicate` let you re-use suffixes of the input stream.
- **Compactable / Filterable / FilterableWithIndex / Witherable** – filter-like operations (`filter`, `filterMap`, `partition`, `separate`, `filterE`, etc.) respect annihilation/distributivity laws.
- **Foldable / FoldableWithIndex** – `reduce`, `foldMap`, `reduceRight` provide lawful folds.
- **Traversable / TraversableWithIndex** – lawful sequencing via `traverse`/`sequence` means you can accumulate effects in any applicative `F`.
- **Unfoldable** – `unfold` follows the `Unfoldable` laws and is dual to `Foldable`.
- **FromEither / FromIO** – `fromEither`, `fromEitherK`, `fromIO`, `fromIOK` give you canonical lifts from `Either` and `IO`.

Because these instances lean on `fp-ts`, you can reach for any helper you're accustomed to: e.g. `pipe(stream, Filterable.filter(...))` behaves just like it does for arrays.

## Creating Streams

`Stream` exposes a variety of constructors so you can choose the most ergonomic origin:

| Helper | Description |
| --- | --- |
| `of`, `Pointed.of` | Create a single-element stream. |
| `empty`, `zero`, `Zero.zero` | Stream with no values (useful for fallback branches). |
| `fromIterable` / `toArray` | Convert between any synchronous iterable (`Array`, `Set`, custom generators) and a stream. |
| `fromOption`, `fromEither`, `fromPredicate`, `fromIO`, `fromIOK`, `fromEitherK` | Lift common `fp-ts` data types or refinements. |
| `range(start, end = Infinity)` | Infinite or bounded numeric streams. |
| `makeBy(n, f)` / `replicate(n, a)` | Generate deterministic sequences by index. |
| `unfold(seed, step)` | Dual of `fold`: repeatedly call `step` with the evolving seed until it returns `None`. |
| `fromIterable` + `concat`/`append`/`prepend` | Compose left & right sources. |

```ts
const fib = S.unfold([0, 1] as const, ([a, b]) =>
  a > 100 ? none : some([a, [b, a + b] as const])
)
console.log(S.toArray(fib)) // [0, 1, 1, 2, ..., 89]
```

Because a stream is lazily re-playable, you can freely "branch" from a constructor:

```ts
const ints = S.fromIterable([1, 2, 3])
const odds = S.prepend(-1)(ints)
const evens = S.append(4)(ints)
```

## Transforming Streams

Once you have a stream, you can build pipelines using `pipe`:

```ts
const processed = pipe(
  source,
  S.map(parse),
  S.filter(isValid),
  S.chain(expand),
  S.takeLeftWhile((n) => n < 100)
)
```

Key transformation families:

- **Mapping & chaining** – `map`, `mapWithIndex`, `chain`, `chainWithIndex`, `flatten`, `ap`, `chainFirst`, `Functor.bindTo`, `Do`.
- **Recursive generation** – `chainRecDepthFirst` (depth-first) and `chainRecBreadthFirst` (breadth-first) implement the `ChainRec` interface.
- **Filtering & partitioning** – `filter`, `filterWithIndex`, `filterMap`, `filterMapWithIndex`, `partition`, `partitionMap`, `compact`, `separate`, `lefts`, `rights`, `fromPredicate`.
- **Spans & splits** – `spanLeft`, `spanRight`, `splitAt`, `chunksOf`, `chop`, `matchLeft`, `matchRight`, `match`.
- **Take/drop windows** – `takeLeft`, `takeLeftWhile`, `takeRight`, `dropLeft`, `dropLeftWhile`, `dropRight`, `dropRightWhile`, `scanLeft`, `scanRight`, `scanLeft`/`scanRight` for running totals.
- **Set-like helpers** – `uniq`, `union(Eq)`, `intersection(Eq)`, `difference(Eq)`, `getUnionSemigroup`, `getIntersectionSemigroup`, `getDifferenceMagma`.
- **Combinatorics** – `cartesian`, `zip`, `zipArray`, `zipWith`, `unzip`, `transpose`, `comprehension`.
- **Structural edits** – `append`, `prepend`, `appendAll`, `prependAll`, `insert` via `modifyAt`/`updateAt`/`deleteAt`, `rotate`, `reverse`, `range`, `replicate`.
- **Span metadata** – `Spanned` utilities allow you to slice a stream into `init`/`rest` segments by predicate.

Every helper is designed to keep the stream lazy whenever possible. Functions that *must* inspect all elements (e.g. `takeRight`, `reverse`, `spanRight`, `transpose`, `countBy`) clearly state that they consume the stream internally.

## Consuming & Folding

Consuming a stream (turning it into a value) is where computation happens:

- **Conversion** – `toArray`, `fromIterable`, `zipArray`, `transposeArray`.
- **Folds** – `reduce`, `reduceWithIndex`, `reduceRight`, `foldMap`, `foldMapWithIndex`, `scanLeft`, `scanRight`.
- **Size & membership** – `size`, `isEmpty`, `isNotEmpty`, `elem(Eq)`, `lookup(index)`, `head`, `tail`, `init`, `last`.
- **Statistics** – `minimum(Ord)`, `maximum(Ord)`, `countBy`, `scanLeft`/`scanRight`, `min/max`, `countBy`.
- **Predicates** – `every`, `some`, `none`, `allM` and `anyM` for short-circuiting folds inside another monad.
- **Pattern matching** – `match`, `matchW`, `matchLeft`, `matchRight`, `foldLeft`, `foldRight`.
- **Booleans and partitions** – `Guard` helper from the `Zero` instance, `filterE`, `Witherable`-powered `wither`/`wilt`.

Because `Stream` is `Foldable`, you can reuse the generic folding helpers from `fp-ts`, e.g. `Foldable.traverse(M)` to accumulate results in any applicative.

## Utility Modules

- **`conversions.ts`** – `fromIterable`/`toArray` bridging functions.
- **`transformations`** – `getEq`, `getShow`, `getSemigroup`, `getMonoid`, `getUnionMonoid`, `getIntersectionSemigroup`, `getDifferenceMagma` tailor streams to your algebraic structures.
- **`traversable*.ts`** – interoperate with other applicatives (`traverse`, `sequence`, `traverseArray`, `sequenceArray`, plus indexed variants).
- **`witherable.ts`** – run effectful filters via `wither`, `wilt`, and derive `filterE`.
- **`spanned.ts`** – `spanLeft`/`spanRight` produce reusable slices with `init`/`rest`.
- **`utils` directory** – a grab bag of higher-level operations: `range`, `makeBy`, `replicate`, `append*`, `drop*/take*`, `cartesian`, `zip*`, `transpose`, `chunksOf`, `countBy`, `lookup`, `min/max`, `scan*`, `comprehension`, `rotate`, `difference`/`intersection`/`union`, etc.

Every utility is exported from `fp-ts-stream/Stream`, so a single import namespace is enough:

```ts
import * as S from "fp-ts-stream/Stream"
```

## Patterns & Recipes

### Sliding windows

```ts
const sliding3 = pipe(
  stream,
  S.chunksOf(3),
  S.map((window) => S.toArray(window()))
)
```

### Cartesian product and comprehension

```ts
const pairs = S.cartesian(S.range(0, 3))(S.range(0, 3))

const triples = S.comprehension(
  [S.range(0, 3), S.range(0, 3), S.range(0, 3)],
  (x, y, z) => [x, y, z] as const,
  (x, y, z) => x + y + z === 3
)
```

### Safe indexing and editing

```ts
const third = pipe(stream, S.lookup(2)) // Option<number>
const withoutSecond = pipe(stream, S.deleteAt(1))
const incrementHead = pipe(stream, S.modifyAt(0, (n) => n + 1))
```

### Folding inside an effect

```ts
import * as T from "fp-ts/Task"
import { pipe } from "fp-ts/function"

const validations = S.fromIterable([
  T.of(true),
  T.delay(10)(T.of(true)),
  T.of(false)
])

const allOk = pipe(validations, S.allM(T.Monad))
```

### Bridging to AsyncStream

```ts
import * as AS from "fp-ts-stream/AsyncStream"
import * as S from "fp-ts-stream/Stream"

const batchedRequests = pipe(
  S.range(0, 10),
  S.map(id => fetch(`/api/${id}`)),
  AS.fromStream,            // Stream<Promise<Response>> -> AsyncStream<Response>
  AS.fromPromises           // consume promises as soon as they settle
)
```

## Examples

### Basic range processing

```ts
import { pipe } from "fp-ts/function"
import * as S from "fp-ts-stream/Stream"

const result = pipe(
  S.range(1, 100),
  S.filter((n) => n % 3 === 0 || n % 5 === 0),
  S.scanLeft(0, (acc, n) => acc + n),
  S.takeRight(1),
  S.head
)

console.log(result) // Some(2418)
```

### Span-based parsing

```ts
const tokens = S.fromIterable(["let", "x", "=", "1", ";", "y", "=", "2"])
const { init: declaration, rest } = S.spanLeft((tok) => tok !== ";")(tokens)

console.log(S.toArray(declaration)) // ["let", "x", "=", "1"]
console.log(S.toArray(rest))        // [";", "y", "=", "2"]
```

### Zip + traverse for validation

```ts
import * as E from "fp-ts/Either"

const inputs = S.fromIterable(["3", "10", "bad"])
const validators = S.zipWith(
  inputs,
  S.fromIterable([2, 5, 7]),
  (value, max) => (Number(value) <= max ? E.right(value) : E.left("too big"))
)

const collected = S.sequence(E.Applicative)(validators)
// Either<"too big", Stream<string>>
```

### Counting by arbitrary keys

```ts
const purchases = S.fromIterable([
  { userId: "a", amount: 12 },
  { userId: "b", amount: 17 },
  { userId: "a", amount: 9 }
])

const histogram = pipe(purchases, S.countBy((p) => p.userId))
// { a: 2, b: 1 }
```

