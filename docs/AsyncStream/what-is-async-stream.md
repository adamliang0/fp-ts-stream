# What is AsyncStream?

`AsyncStream` is a functional abstraction for representing asynchronous sequences of values. At its core, it is a **lazy, composable effect type** that models potentially infinite streams of data that may be produced asynchronously.

### Type Definition

An `AsyncStream<A>` is defined as a function that returns an `AsyncGenerator<A>`:

```typescript
type AsyncStream<A> = () => AsyncGenerator<A>
```

This simple type signature belies powerful functional programming capabilities. The function nature means streams are **lazy**—they don't produce values until explicitly consumed. This enables composition of stream operations without materializing intermediate results.

### Functional Programming Perspective

From a functional programming standpoint, `AsyncStream` is:

- **A composable effect type**: Operations on streams return new streams, enabling function composition
- **Lazy by design**: Values are produced on-demand, not eagerly computed
- **Pure and referentially transparent**: Stream operations are side-effect free transformations
- **Type-safe**: Full TypeScript support with type inference throughout compositions

### Lazy Evaluation Benefits

Unlike eager collections like arrays, `AsyncStream`:

- Can represent infinite sequences without consuming infinite memory
- Defers computation until values are actually needed
- Enables efficient processing of large or unbounded data sources
- Supports backpressure naturally through its pull-based model
