# Consuming Streams

Once a stream is defined, it must be consumed to produce values. This section describes various ways to consume an `AsyncStream`.

### Converting to Arrays

**`toArray<A>(fa: AsyncStream<A>): Promise<Array<A>>`**

Consumes the entire stream and collects all values into an array.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const numbers = AS.range(0, 5)
const array = await AS.toArray(numbers) // [0, 1, 2, 3, 4]
```

**`toTask<A>(fa: AsyncStream<A>): Task<Array<A>>`**

Converts a stream to a `Task` that resolves to an array of values.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const numbers = AS.range(0, 5)
const task = AS.toTask(numbers)
const array = await task()
```

### Converting to Other Types

**`toStream<A>(fa: AsyncStream<A>): Task<Stream<A>>`**

Converts an `AsyncStream` to a synchronous `Stream`. The stream is materialized into a `Stream` that can be replayed multiple times.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

declare const asyncData: AsyncIterable<string>;

const asyncStream = AS.fromAsyncIterable(asyncData)
const syncStreamTask = AS.toStream(asyncStream)
// a Task that resolves to a re-iterable sync stream
const syncStream = await syncStreamTask() 
// Can now iterate syncStream() multiple times
```

### Manual Iteration

You can manually iterate over a stream using `for await`:

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const stream = AS.range(0, 5)
for await (const value of stream()) {
  console.log(value)
}
```

### Extracting Single Values

**`head<A>(fa: AsyncStream<A>): Task<Option<A>>`**

Gets the first value from a stream, or `None` if the stream is empty.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"

const numbers = AS.fromIterable([1, 2, 3])
const first = await AS.head(numbers)() // some(1)
```

**`last<A>(fa: AsyncStream<A>): Task<Option<A>>`**

Gets the last value from a stream, or `None` if the stream is empty.

**`size<A>(fa: AsyncStream<A>): Task<number>`**

Counts the number of values in a stream.

### Performing Side-Effects

To perform a side-effect for each value in the stream, you can manually iterate over it. This is the most straightforward way to integrate with effectful operations.

#### Running Synchronous Side-Effects (`IO`)

If you have a synchronous side-effect, like logging to the console, you can wrap it in an `IO` from `fp-ts/IO` and run it within a loop.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { IO } from "fp-ts/IO"
import { log } from "fp-ts/Console"

const numbers = AS.range(0, 3)

const logNumber = (n: number): IO<void> => log(`The number is ${n}`)

for await (const n of numbers()) {
  logNumber(n)(); // Execute the IO action
}
```

#### Running Asynchronous Side-Effects (`Task`)

For asynchronous operations, like writing to a database or making a network request, you can use `Task` from `fp-ts/Task`.

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { Task } from "fp-ts/Task"
import { pipe } from "fp-ts/function"

declare function saveToDatabase(n: number): Task<void>;

const numbers = AS.fromIterable([1, 2, 3])

for await (const n of numbers()) {
  await saveToDatabase(n)(); // Execute the Task
}
```

While not included in the library, you can create a utility function `forEach` to encapsulate this pattern. This function would consume the stream and execute a `Task` for each element.

```typescript
import { Task } from "fp-ts/Task"
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

declare function saveToDatabase(n: number): Task<void>;

const forEach = <A>(f: (a: A) => Task<void>) => (stream: AS.AsyncStream<A>): Task<void> => {
    return async () => {
        for await (const a of stream()) {
            await f(a)();
        }
    }
}

// Usage:
const stream = AS.fromIterable([1, 2, 3])
const eff = pipe(
    stream,
    forEach(n => saveToDatabase(n))
)

await eff(); // This will run the stream and all effects
```
