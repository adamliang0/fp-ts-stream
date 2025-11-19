# Examples

This section provides practical examples of `AsyncStream` in action.

### Basic Stream Processing

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const processNumbers = pipe(
  AS.range(1, 100),
  AS.map(n => n * 2),
  AS.filter(n => n % 3 === 0),
  AS.takeLeft(10)
)

const result = await AS.toArray(processNumbers)
// [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
```

### API Pagination

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

// Assuming 'Item' is a defined type
type Item = { id: number; active: boolean };
declare function transformItem(item: Item): Item;

async function fetchPage(page: number): Promise<Array<Item>> {
  // Mock implementation
  if (page > 3) return [];
  return Array.from({ length: 10 }, (_, i) => ({ id: (page - 1) * 10 + i, active: Math.random() > 0.5 }));
}

async function* paginatedItems(): AsyncGenerator<Item> {
  let page = 1
  let hasMore = true
  
  while (hasMore) {
    const items = await fetchPage(page)
    if (items.length === 0) {
      hasMore = false
    } else {
      for (const item of items) {
        yield item
      }
      page++
    }
  }
}

const items = AS.fromAsyncIterable(paginatedItems())
const processed = pipe(
  items,
  AS.filter(item => item.active),
  AS.map(item => transformItem(item)),
  AS.takeLeft(100)
)
```

### File Processing

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"
import { createReadStream } from "fs"
import { some, none } from "fp-ts/Option"
import { Either, right, left } from "fp-ts/Either"

// Assuming these functions are defined
declare function parseLine(line: string): Either<Error, any>;

async function* readLines(filePath: string): AsyncGenerator<string> {
  const fileStream = createReadStream(filePath, { encoding: "utf-8" })
  let buffer = ""
  
  for await (const chunk of fileStream) {
    buffer += chunk
    const lines = buffer.split("\n")
    buffer = lines.pop() || ""
    
    for (const line of lines) {
      yield line
    }
  }
  
  if (buffer) {
    yield buffer
  }
}

const processFile = pipe(
  AS.fromAsyncIterable(readLines("data.txt")),
  AS.filter(line => line.trim().length > 0),
  AS.map(line => parseLine(line)),
  AS.filterMap(result => result._tag === 'Right' ? some(result.right) : none)
)
```

### Parallel Processing

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

declare function processData(data: any): void;

const urls = AS.fromIterable([
  "https://api.example.com/data1",
  "https://api.example.com/data2",
  "https://api.example.com/data3"
])

const fetchData = (url: string) => 
  fetch(url).then(res => res.json())

const results = pipe(
  urls,
  AS.map(fetchData),
  AS.fromPromises // Process in parallel, yield as they complete
)

for await (const data of results()) {
  processData(data)
}
```

### Stream Composition

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const source1 = AS.range(0, 5)
const source2 = AS.range(10, 15)

const combined = pipe(
  source1,
  AS.chain(n => 
    pipe(
      source2,
      AS.map(m => n + m)
    )
  )
)

const result = await AS.toArray(combined)
// All combinations of sums
```

### Infinite Streams

```typescript
import * as AS from "fp-ts-stream/AsyncStream"
import { pipe } from "fp-ts/function"

const naturalNumbers = AS.range(0)
const squares = pipe(naturalNumbers, AS.map(n => n * n))
const evenSquares = pipe(squares, AS.filter(n => n % 2 === 0))

const firstTenEvenSquares = pipe(evenSquares, AS.takeLeft(10))
const result = await AS.toArray(firstTenEvenSquares)
// [0, 4, 16, 36, 64, 100, 144, 196, 256, 324]
```
