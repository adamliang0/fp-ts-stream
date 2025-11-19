# Core Concepts

### Lazy Evaluation

Streams are not materialized until consumed. When you create a stream or apply transformations, you're building up a description of computation, not executing it:

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const numbers = AS.range(0, Infinity)
const doubled = pipe(numbers, AS.map(n => n * 2))
const firstTen = pipe(doubled, AS.takeLeft(10))

// No computation has happened yet! The stream is just a function.
// Values are only produced when we consume it:
const result = await AS.toArray(firstTen) // Now computation occurs
```

### Composition

Operations on streams return new streams, enabling functional composition through `pipe`:

```typescript
import { pipe } from "fp-ts/function"
import * as AS from "fp-ts-stream/AsyncStream"

// Assume these are defined elsewhere
declare const sourceStream: AS.AsyncStream<number>;
declare const transform: (n: number) => string;
declare const predicate: (s: string) => boolean;
declare const produceMore: (s: string) => AS.AsyncStream<string>;

const processed = pipe(
  sourceStream,
  AS.map(transform),
  AS.filter(predicate),
  AS.chain(produceMore),
  AS.takeLeft(100)
)
```

Each operation in the pipeline is a pure function that takes a stream and returns a new stream, without modifying the original.

### Type Classes

`AsyncStream` implements several type classes from `fp-ts`, providing a rich set of composable operations:

- **Pointed**: Lift values into the stream context
- **Functor**: Transform values within the stream
- **Monad**: Sequential composition of stream-producing computations
- **Applicative**: Parallel application of functions
- **Filterable**: Selective filtering and partitioning
- **Zero**: Empty stream construction
- **Unfoldable**: Generate streams from seed values
