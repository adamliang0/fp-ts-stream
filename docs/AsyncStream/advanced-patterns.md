# Advanced Patterns

This section explores advanced compositional patterns for `AsyncStream`.

### Do Notation

Do notation provides a convenient syntax for monadic composition, allowing you to bind multiple computations together:

```typescript
import { pipe } from "fp-ts/function"
import * as AS from "fp-ts-stream/AsyncStream"
import { bind, Do } from "fp-ts-stream/AsyncStream"

const result = pipe(
  Do,
  bind("x", () => AS.of(1)),
  bind("y", ({ x }) => AS.of(x * 2)),
  AS.map(({ x, y }) => x + y)
)
```

### Comprehension Syntax

Comprehension provides a declarative way to combine multiple streams:

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { comprehension } from "fp-ts-stream/AsyncStream"

const xs = AS.fromIterable([1, 2, 3])
const ys = AS.fromIterable([10, 20])

const result = comprehension(
  [xs, ys],
  (x, y) => x + y,
  (x, y) => (x + y) % 2 === 0 // optional condition
)
```

### Recursive Stream Generation

Use `unfold` or `chainRec` to generate streams recursively:

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"
import { some } from "fp-ts/Option"

const fibonacci = AS.unfold(
  [0, 1] as const,
  ([a, b]) => some([a, [b, a + b]] as const)
)

const firstTen = pipe(fibonacci, AS.takeLeft(10))
```

### Error Handling with Either

Use `fromEither` and `rights` to handle errors in streams:

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"
import { right, left } from "fp-ts/Either"

const results = AS.fromIterable([
  right(1),
  left("error"),
  right(2)
])

const successes = AS.rights(results)
// Yields: 1, 2
```

### Working with Options

Use `fromOption` and `filterMap` to work with optional values:

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"
import { some, none } from "fp-ts/Option"

const maybeNumbers = AS.fromIterable([
  some(1),
  none,
  some(2)
])

const numbers = pipe(
  maybeNumbers,
  AS.chain(AS.fromOption)
)
// Yields: 1, 2
```
