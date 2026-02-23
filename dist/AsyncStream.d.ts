import type { Alternative1 } from 'fp-ts/Alternative';
import type { Applicative1 } from 'fp-ts/Applicative';
import { Apply1 } from 'fp-ts/Apply';
import { Chain1 } from 'fp-ts/Chain';
import type { ChainRec1 } from 'fp-ts/ChainRec';
import type { Compactable1 } from 'fp-ts/Compactable';
import { Either } from 'fp-ts/Either';
import type { Eq } from 'fp-ts/Eq';
import type { Extend1 } from 'fp-ts/Extend';
import type { Filterable1 } from 'fp-ts/Filterable';
import type { FilterableWithIndex1 } from 'fp-ts/FilterableWithIndex';
import { FromEither1 } from 'fp-ts/FromEither';
import { FromIO1 } from 'fp-ts/FromIO';
import type { FromTask1 } from 'fp-ts/FromTask';
import { Functor1 } from 'fp-ts/Functor';
import type { FunctorWithIndex1 } from 'fp-ts/FunctorWithIndex';
import { IO } from 'fp-ts/IO';
import type { Lazy } from 'fp-ts/function';
import type { Magma } from 'fp-ts/Magma';
import type { Monad1 } from 'fp-ts/Monad';
import type { Monoid } from 'fp-ts/Monoid';
import { Option as Option_2 } from 'fp-ts/Option';
import type { Ord } from 'fp-ts/Ord';
import type { Pointed1 } from 'fp-ts/Pointed';
import type { ReadonlyNonEmptyArray } from 'fp-ts/ReadonlyNonEmptyArray';
import type { Refinement } from 'fp-ts/Refinement';
import type { RefinementWithIndex } from 'fp-ts/FilterableWithIndex';
import type { Semigroup } from 'fp-ts/Semigroup';
import type { Separated } from 'fp-ts/Separated';
import { Task } from 'fp-ts/Task';
import type { TaskOption } from 'fp-ts/TaskOption';
import type { Unfoldable1 } from 'fp-ts/Unfoldable';
import { Zero1 } from 'fp-ts/Zero';

/**
 * Concatenates the inputs to a single {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {Lazy<AsyncStream<A>>} that The lazy function providing the other
 * async stream.
 *
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream and returns another async stream whose elements are concatted
 * with the given one.
 */
export declare function alt<A>(that: Lazy<AsyncStream<A>>): (ma: AsyncStream<A>) => AsyncStream<A>;

/**
 * The `Alternative` category instance for {@link AsyncStream}.
 */
export declare const Alternative: Alternative1<URI>;

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be
 * merged.
 *
 * @export
 * @template B The other value type.
 * @param {Lazy<AsyncStream<B>>} that The lazy function providing the other
 * async stream.
 *
 * @return {(fa: AsyncStream<A>) => AsyncStream<B | A>} A function that takes
 * an async stream and returns another stream whose elements are concatted with
 * the given one.
 *
 * @category error handling
 * @__PURE__
 */
export declare function altW<B>(that: Lazy<AsyncStream<B>>): <A>(ma: AsyncStream<A>) => AsyncStream<A | B>;

/**
 * Applies a {@link AsyncStream} of type `A` to {@link AsyncStream} of functions
 * from `A` to `B`.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The source async stream.
 * @return {(fab: AsyncStream<(a: A) => B>) => AsyncStream<B>} A function that
 * takes a {@link AsyncStream} of functions.
 *
 * @__PURE__
 */
export declare function ap<A>(fa: AsyncStream<A>): <B>(fab: AsyncStream<(a: A) => MaybeAsync<B>>) => AsyncStream<B>;

/**
 * Combine two effectful actions, keeping only the result of the first.
 */
export declare const apFirst: <B>(second: AsyncStream<B>) => <A>(first: AsyncStream<A>) => AsyncStream<A>;

/**
 * Append an element to the end of the {@link AsyncStream}, creating a new
 * {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {A} end The value that will be added to the stream.
 * @return {AsyncStream<A>} Another async stream that provides the given value
 * at the end.
 *
 * @__PURE__
 */
export declare function append<A>(end: A): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Appends an element to every member of a {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {A} middle The element to append.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream to modify.
 *
 * @__PURE__
 */
export declare function appendAll<A>(middle: A): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Less strict version of {@link append}.
 *
 * @export
 * @template B The input value type.
 * @param {B} end The element that will be added to the end of the stream.
 * @return {AsyncStream<A | B>} Another async stream that provides the given
 * value at the end.
 *
 * @__PURE__
 */
export declare function appendW<B>(end: B): <A>(fa: AsyncStream<A>) => AsyncStream<A | B>;

/**
 * The `Applicative` category instance for {@link AsyncStream}.
 *
 * Same with {@link ApplicativePar}
 */
export declare const Applicative: Applicative1<URI>;

/**
 * The `ApplicativePar` category instance for {@link AsyncStream}.
 */
export declare const ApplicativePar: Applicative1<"fp-ts-stream/AsyncStream">;

/**
 * The `ApplicativeSeq` category instance for {@link AsyncStream}.
 */
export declare const ApplicativeSeq: Applicative1<URI>;

/**
 * The `Apply` category instance for {@link AsyncStream}.
 *
 * Same with {@link ApplyPar}
 */
export declare const Apply: Apply1<URI>;

/**
 * The `Apply` category instance for {@link AsyncStream}.
 */
export declare const ApplyPar: Apply1<"fp-ts-stream/AsyncStream">;

/**
 * The `ApplySeq` category instance for {@link AsyncStream}.
 */
export declare const ApplySeq: Apply1<URI>;

/**
 * @category do notation
 */
export declare const apS: <N extends string, A, B>(name: Exclude<N, keyof A>, fb: AsyncStream<B>) => (fa: AsyncStream<A>) => AsyncStream<    { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;

/**
 * Combine two effectful actions, keeping only the result of the second.
 */
export declare const apSecond: <B>(second: AsyncStream<B>) => <A>(first: AsyncStream<A>) => AsyncStream<B>;

/**
 * Splits an {@link AsyncStream} into {@link AsyncStream} of array
 * of given chunk size.
 *
 * @export
 * @param {number} n The chunk size.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A[]>} A function that
 * takes an async stream and returns an async stream of array of given
 * chunks.
 *
 * @__PURE__
 */
export declare function arrayChunksOf(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<A[]>;

/**
 * An interface that represents a function that returns a task of a boolean.
 *
 * @export
 * @interface AsyncPredicate
 * @template A The value type.
 */
export declare type AsyncPredicate<A> = (a: A) => MaybeAsync<boolean>;

/**
 * An interface that represents a function that returns a task of a boolean.
 *
 * @export
 * @interface AsyncPredicateWithIndex
 * @template A The value type.
 */
export declare type AsyncPredicateWithIndex<I, A> = (i: I, a: A) => MaybeAsync<boolean>;

/**
 * Describes a function which returns a {@link AsyncGenerator} of `A` values.
 *
 * @export
 * @interface AsyncStream
 * @template A The value type.
 */
export declare type AsyncStream<A> = () => AsyncGenerator<A>;

/**
 * @category do notation
 */
export declare const bind: <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => AsyncStream<B>) => (ma: AsyncStream<A>) => AsyncStream<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;

/**
 * @category do notation
 */
export declare const bindTo: <N extends string>(name: N) => <A>(fa: AsyncStream<A>) => AsyncStream<{ readonly [K in N]: A; }>;

/**
 * Returns the {@link https://en.wikipedia.org/wiki/Cartesian_product Cartesian product}
 * of two {@link AsyncStream}s. In other words, returns a {@link AsyncStream} containing tuples of every
 * possible ordered combination of the two input {@link AsyncStream}s.
 *
 * @export
 * @template A The type of the left hand side of the output tuple.
 * @param {AsyncStream<A>} left The left hand side stream.
 * @return {<B>(right: AsyncStream<B>) => AsyncStream<[ A, B ]>} A function
 * that will take another stream to return the cartesian product of these.
 *
 * @__PURE__
 */
export declare function cartesian<A>(left: AsyncStream<A>): <B>(right: AsyncStream<B>) => AsyncStream<[A, B]>;

/**
 * The `Chain` category instance for {@link AsyncStream}.
 */
export declare const Chain: Chain1<URI>;

/**
 * Chains a {@link AsyncStream} by evaluating the function passed with the
 * items of it that returns another {@link AsyncStream} instance of type `B`.
 *
 * @export
 * @template A The value type.
 * @template B The new value/output type.
 * @param {(a: A) => AsyncStream<B>} f The function that produces an async
 * stream of type `B` from given `A` value.
 *
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream of type `A` and returns another async stream of type `B`.
 *
 * @__PURE__
 */
export declare function chain<A, B>(f: (a: A) => AsyncStream<B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * @category sequencing
 */
export declare const chainEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: AsyncStream<A>) => AsyncStream<B>;

/**
 * @category sequencing
 */
export declare const chainFirst: <A, _>(f: (a: A) => AsyncStream<_>) => (first: AsyncStream<A>) => AsyncStream<A>;

/**
 * @category sequencing
 */
export declare const chainFirstEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: AsyncStream<A>) => AsyncStream<A>;

/**
 * @category sequencing
 */
export declare const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => (first: AsyncStream<A>) => AsyncStream<A>;

/**
 * @category sequencing
 */
export declare const chainIOK: <A, B>(f: (a: A) => IO<B>) => (first: AsyncStream<A>) => AsyncStream<B>;

/**
 * The `ChainRec` category instance for {@link AsyncStream} that uses
 * `breadth-first` approach.
 */
export declare const ChainRecBreadthFirst: ChainRec1<URI>;

/**
 * Recursively chain a {@link AsyncStream} with a function that produces an
 * {@link Either} of `A` and `B` async stream.
 *
 * All the `A` items in the async stream will be used to recursively produce
 * more async streams to chain.
 *
 * @export
 * @template A The producing type.
 * @template B The output type.
 * @param {(a: A) => AsyncStream<Either<A, B>>} f The async stream producter
 * function.
 *
 * @return {(a: A) => AsyncStream<B>} A function that takes an initial value to
 * start producing `B`s.
 *
 * @__PURE__
 */
export declare function chainRecBreadthFirst<A, B>(f: (a: A) => AsyncStream<Either<A, B>>): (a: A) => AsyncStream<B>;

/**
 * The `ChainRec` category instance for {@link AsyncStream} that uses
 * `depth-first` approach.
 */
export declare const ChainRecDepthFirst: ChainRec1<URI>;

/**
 * Recursively chain a {@link AsyncStream} with a function that produces an
 * {@link Either} of `A` and `B` async stream.
 *
 * All the `A` items in the async stream will be used to recursively produce
 * more async streams to chain.
 *
 * @export
 * @template A The producing type.
 * @template B The output type.
 * @param {(a: A) => AsyncStream<Either<A, B>>} f The stream producter function.
 * @return {(a: A) => AsyncStream<B>} A function that takes an initial value to
 * start producing `B`s.
 *
 * @__PURE__
 */
export declare function chainRecDepthFirst<A, B>(f: (a: A) => AsyncStream<Either<A, B>>): (a: A) => AsyncStream<B>;

/**
 * Chains a {@link AsyncStream} by evaluating the function passed with the items
 * of it with an index that returns another {@link AsyncStream} instance of
 * type `B`.
 *
 * @export
 * @template A The value type.
 * @template B The new value/output type.
 * @param {(i: number, a: A) => AsyncStream<B>} f The function that produces an
 * async stream of type `B` from given `A` value.
 *
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream of type `A` and returns another async stream of type `B`.
 *
 * @__PURE__
 */
export declare function chainWithIndex<A, B>(f: (i: number, a: A) => AsyncStream<B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * A useful recursion pattern for processing an {@link AsyncStream} to produce
 * a new array, often used for "chopping" up the input {@link AsyncStream}.
 *
 * Typically `chop` is called with some function that will consume an initial
 * prefix of the {@link AsyncStream} and produce a value and the rest of the
 * {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @template B The chopped value type.
 * @param {(fa: AsyncStream<A>) => [ B, AsyncStream<A> ] | Promise<[ B, AsyncStream<A> ]>} f The chop function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes a stream to
 * chop the first element of it.
 *
 * @__PURE__
 */
export declare function chop<A, B>(f: (fa: AsyncStream<A>) => [B, AsyncStream<A>] | Promise<[B, AsyncStream<A>]>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Splits an {@link AsyncStream} into {@link AsyncStream} of {@link AsyncStream}
 * of given chunk size.
 *
 * @export
 * @param {number} n The chunk size.
 * @return {(fa: AsyncStream<A>) => AsyncStream<AsyncStream<A>>} A function that
 * takes an async stream and returns an async stream of async streams of given
 * chunks.
 *
 * @__PURE__
 */
export declare function chunksOf(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<AsyncStream<A>>;

/**
 * Compact a {@link AsyncStream} of {@link Option}s discarding the `None` values
 * and keeping the `Some` values. It returns a new {@link AsyncStream}
 * containing the values of `Some` options.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<Option<A>>} fa The input async stream.
 * @return {AsyncStream<A>} The output async stream.
 *
 * @category filtering
 * @__PURE__
 */
export declare function compact<A>(fa: AsyncStream<Option_2<A>>): AsyncStream<A>;

/**
 * The `Compactable` category instance for {@link AsyncStream}.
 */
export declare const Compactable: Compactable1<URI>;

/**
 * {@link AsyncStream} comprehension.
 *
 * ```
 * { f(x, y, ...) | x ← xs, y ← ys, ..., g(x, y, ...) }
 * ```
 *
 * @export
 * @template R The output type.
 * @template I The input parameters array type.
 * @param {I} input The input streams.
 * @param {OutputMapper<I, R>} f The output mapper function.
 * @param {Condition<I>} [g] Optional condition function.
 * @return {AsyncStream<R>} The output async stream.
 *
 * @__PURE__
 */
export declare function comprehension<R, I extends ReadonlyNonEmptyArray<AsyncStream<unknown>>>(input: I, f: OutputMapper<I, R>, g?: Condition<I>): AsyncStream<R>;

/**
 * Concatenates two {@link AsyncStream}s into one.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} second The another async stream to concat.
 * @return {(first: AsyncStream<A>) => AsyncStream<A>} A function that will
 * take the initial stream.
 *
 * @__PURE__
 */
export declare function concat<A>(second: AsyncStream<A>): (first: AsyncStream<A>) => AsyncStream<A>;

/**
 * Less strict version of {@link concat}.
 *
 * @export
 * @template B The value type of the another async stream.
 * @param {AsyncStream<B>} second The another async stream to concat.
 * @return {<A>(first: AsyncStream<A>) => AsyncStream<A | B>} A function that
 * will take the initial stream.
 *
 * @__PURE__
 */
export declare function concatW<B>(second: AsyncStream<B>): <A>(first: AsyncStream<A>) => AsyncStream<A | B>;

declare type Condition<T extends ReadonlyArray<AsyncStream<unknown>>> = OutputMapper<T, boolean>;

/**
 * Map each item of a {@link AsyncStream} to a key and count how mony map to
 * each key.
 *
 * @export
 * @template A The type of the item.
 * @param {(x: A) => MaybeAsync<string>} f The key from value function.
 * @return {(input: AsyncStream<A>) => Record<string, number>} A function that will
 * take a {@link AsyncStream} and returns the counts of its mapped values.
 *
 * @__PURE__
 */
export declare function countBy<A>(f: (x: A) => MaybeAsync<string>): (input: AsyncStream<A>) => Task<Record<string, number>>;

/**
 * Creates an {@link AsyncStream} that will complete after a time delay.
 *
 * @export
 * @param {number} millis The amount of time to delay in milliseconds.
 * @return {<A>(ma: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream to delay.
 *
 * @__PURE__
 */
export declare function delay(millis: number): <A>(ma: AsyncStream<A>) => AsyncStream<A>;

/**
 * Removes/skips an element at given index.
 *
 * *Note:* Negative indices will have no effect.
 *
 * @export
 * @param {number} i The index to exclude from the async stream.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream to remove the item at index.
 *
 * @__PURE__
 */
export declare function deleteAt(i: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Creates an {@link AsyncStream} of {@link AsyncStream} values not included in
 * the other given {@link AsyncStream} using a {@link Eq} for equality
 * comparisons.
 *
 * The order and references of result values are determined by the first
 * {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {(xs: AsyncStream<A>) => (ys: AsyncStream<A>) => AsyncStream<A>} A
 * function that takes an async stream to provide the differences.
 *
 * @__PURE__
 */
export declare function difference<A>(E: Eq<A>): {
    (xs: AsyncStream<A>): (ys: AsyncStream<A>) => AsyncStream<A>;
    (xs: AsyncStream<A>, ys: AsyncStream<A>): AsyncStream<A>;
};

/**
 * @category do notation
 */
export declare const Do: AsyncStream<{}>;

/**
 * Drops/skips the given amount of items from an {@link AsyncStream}.
 *
 * @export
 * @param {number} count The number of elements to drop.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream and returns another async stream that skips the given amount
 * of elements.
 *
 * @__PURE__
 */
export declare function dropLeft(count: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Creates a new {@link AsyncStream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement/predicate function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Creates a new {@link AsyncStream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The refinement/predicate function.
 * @return {<B extends A>(fa: AsyncStream<A>) => AsyncStream<B>} A function that
 * takes an stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropLeftWhile<A>(predicate: AsyncPredicate<A>): <B extends A>(fb: AsyncStream<B>) => AsyncStream<B>;

/**
 * Creates a new {@link AsyncStream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The refinement/predicate function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropLeftWhile<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Drops/skips the given amount of items from an {@link AsyncStream} from end to
 * the start.
 *
 * **Warning: This function consumes the stream.**
 *
 * - Negative values will be equal to {@link take} as much as the value.
 * - If `0` is passed, the stream itself will be returned.
 *
 * @export
 * @param {number} count The number of elements to drop.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream and returns another async stream that skips the given amount of
 * elements.
 *
 * @__PURE__
 */
export declare function dropRight(count: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Creates a new {@link AsyncStream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement from the end to the start.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement/predicate function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropRightWhile<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Creates a new {@link AsyncStream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement from the end to the start.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The refinement/predicate function.
 * @return {<B extends A>(fa: AsyncStream<A>) => AsyncStream<B>} A function that
 * takes an async stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropRightWhile<A>(predicate: AsyncPredicate<A>): <B extends A>(fb: AsyncStream<B>) => AsyncStream<B>;

/**
 * Creates a new {@link AsyncStream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement from the end to the start.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The refinement/predicate function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropRightWhile<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * `duplicate` returns an {@link AsyncStream} containing the whole input
 * {@link AsyncStream}, then to the input {@link AsyncStream} dropping the first
 * element, then to the input {@link AsyncStream} dropping the first two
 * elements, etc.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} wa The input async stream.
 * @return {AsyncStream<AsyncStream<A>>} The output async stream of async
 * streams.
 *
 * @__PURE__
 */
export declare function duplicate<A>(wa: AsyncStream<A>): AsyncStream<AsyncStream<A>>;

/**
 * Tests if a value is a member of an {@link AsyncStream}.
 *
 * Takes a {@link Eq} of `A` as a single argument which returns the function
 * to use to search for a value of type `A` in an {@link AsyncStream}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {(a: A) => (fa: AsyncStream<A>) => Task<boolean>} A function to
 * use to search for a value in the async stream.
 *
 * @__PURE__
 */
export declare function elem<A>(E: Eq<A>): {
    (a: A): (fa: AsyncStream<A>) => Task<boolean>;
    (a: A, fa: AsyncStream<A>): Task<boolean>;
};

/**
 * An empty {@link AsyncStream} instance.
 */
export declare const empty: AsyncStream<never>;

/**
 * `every` tells if the provided refinement holds true for every element
 * in the {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => Task<boolean>} `true` if all the
 * elements returned `true` from the refinement function.
 *
 * @__PURE__
 */
export declare function every<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => Task<boolean>;

/**
 * `every` tells if the provided predicate holds true for every element
 * in the {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {PredAsyncPredicateicate<A>} predicate The predicate function.
 * @return {AsyncPredicate<AsyncStream<A>>} `true` if all the elements
 * returned `true` from the refinement function.
 *
 * @__PURE__
 */
export declare function every<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => Task<boolean>;

/**
 * Alias for {@link some}.
 */
export declare const exists: typeof some;

/**
 * The `Extend` category instance for {@link AsyncStream}.
 */
export declare const Extend: Extend1<URI>;

/**
 * Given an iterating function that takes an {@link AsyncStream} as input,
 * `extend` returns an {@link AsyncStream} containing the results of the
 * iterating function applied to the whole input {@link AsyncStream}, then to
 * the input {@link AsyncStream} without the first element, then to the
 * input {@link AsyncStream} without the first two elements, etc.
 *
 * @export
 * @template A The input value type.
 * @template B The output value.
 * @param {(ma: AsyncStream<A>) => B} f The mapping function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream of type `A` and returns another async stream of type `B`.
 *
 * @__PURE__
 */
export declare function extend<A, B>(f: (fa: AsyncStream<A>) => B): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Returns an {@link AsyncStream} that produces values that passes from the
 * refinement function.
 *
 * @export
 * @template A The value type.
 * @template B The refined output value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream and returns another async stream passing the filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filter<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Returns an {@link AsyncStream} that produces values that passes from the
 * predicate function.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {<B extends A>(fa: AsyncStream<B>) => AsyncStream<B>} A function
 * that takes an async stream and returns another async stream passing the
 * filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filter<A>(predicate: AsyncPredicate<A>): <B extends A>(fa: AsyncStream<B>) => AsyncStream<B>;

/**
 * The `Filterable` category instance for {@link AsyncStream}.
 */
export declare const Filterable: Filterable1<URI>;

/**
 * The `FilterableWithIndex` category instance for {@link AsyncStream}.
 */
export declare const FilterableWithIndex: FilterableWithIndex1<URI, number>;

/**
 * Maps an {@link AsyncStream} with an iterating function that takes
 * the value of each element and returns an {@link Option}. It keeps only the
 * `Some` values dicarding the `None`s.
 *
 * @export
 * @template A The value type.
 * @template B The mapped type.
 * @param {(a: A) => Option<B> | Promise<Option<B>>} f The mapper function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream of type `A` values and returns an async stream of type `B`
 * values.
 *
 * @__PURE__
 */
export declare function filterMap<A, B>(f: (a: A) => MaybeAsync<Option_2<B>>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Maps an {@link AsyncStream} with an iterating function that takes the
 * index and the value of each element and returns an {@link Option}.
 *
 * It keeps only the `Some` values dicarding the `None`s.
 *
 * Same as [`filterMap`](#filterMap), but with an iterating function which takes
 * also the index as input.
 *
 * @export
 * @template A The value type.
 * @template B The mapped type.
 * @param {(i: number, a: A) => Option<B> | Promise<Option<B>>} f The mapper
 * function.
 *
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream of type `A` values and returns an async stream of type `B`
 * values.
 *
 * @__PURE__
 */
export declare function filterMapWithIndex<A, B>(f: (i: number, a: A) => MaybeAsync<Option_2<B>>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Maps an {@link AsyncStream} with an iterating function that takes the index
 * and the value of each element and returns an boolean.
 *
 * It keeps only the elements returning `true` and discards the others.
 *
 * @export
 * @template A The value type.
 * @template B The refined new value type.
 * @param {RefinementWithIndex<number, A, B>} refinementWithIndex The refinement
 * function with index.
 *
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream to filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filterWithIndex<A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Maps an {@link AsyncStream} with an iterating function that takes the index
 * and the value of each element and returns an boolean.
 *
 * It keeps only the elements returning `true` and discards the others.
 *
 * @export
 * @template A The value type.
 * @template B The refined new value type.
 * @param {AsyncPredicateWithIndex<number, A>} predicateWithIndex The predicate
 * function with index.
 *
 * @return {<B extends A>(fa: AsyncStream<B>) => AsyncStream<B>} A function
 * that takes an async stream to filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filterWithIndex<A>(predicateWithIndex: AsyncPredicateWithIndex<number, A>): <B extends A>(fa: AsyncStream<B>) => AsyncStream<B>;

/**
 * Maps an {@link AsyncStream} with an iterating function that takes the index
 * and the value of each element and returns an boolean.
 *
 * It keeps only the elements returning `true` and discards the others.
 *
 * @export
 * @template A The value type.
 * @template B The refined new value type.
 * @param {AsyncPredicateWithIndex<number, A>} predicateWithIndex The predicate
 * function with index.
 *
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream to filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filterWithIndex<A>(predicateWithIndex: AsyncPredicateWithIndex<number, A>): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns a {@link Task} of an {@link Option} containing the element or
 * `None` if not found.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => Task<Option<B>>} A function that takes an async
 * stream to search.
 *
 * @__PURE__
 */
export declare function findFirst<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => Task<Option_2<B>>;

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns a {@link Task} of an {@link Option} containing the element or
 * `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {<B extends A>(fa: AsyncStream<A>) => Task<Option<B>>} A function
 * that takes an async stream to search.
 *
 * @__PURE__
 */
export declare function findFirst<A>(predicate: AsyncPredicate<A>): <B extends A>(fb: AsyncStream<B>) => Task<Option_2<B>>;

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns a {@link Task} of an {@link Option} containing the element or
 * `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {(fa: AsyncStream<A>) => Task<Option<A>>} A function that takes
 * a stream to search.
 *
 * @__PURE__
 */
export declare function findFirst<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => Task<Option_2<A>>;

/**
 * Given a selector function which takes an element and returns
 * a {@link Task} of an {@link Option}, this function applies the selector to
 * each element of the array and returns the first `Some` result.
 * Otherwise it returns `None`.
 *
 * @export
 * @template A The value type.
 * @template B The mapped value type.
 * @param {(a: A) => Option<B> | Promise<Option<B>>} f The mapping function.
 * @return {(fa: AsyncStream<A>) => Task<Option<B>>} A function that takes an
 * async stream and returns an option of `B`.
 *
 * @__PURE__
 */
export declare function findFirstMap<A, B>(f: (a: A) => MaybeAsync<Option_2<B>>): (fa: AsyncStream<A>) => Task<Option_2<B>>;

/**
 * Find the last element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns a {@link Task} of an {@link Option} containing the element
 * or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => Task<Option<B>>} A function that takes an
 * async stream to search.
 *
 * @__PURE__
 */
export declare function findLast<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => Task<Option_2<B>>;

/**
 * Find the last element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns a {@link Task} of an {@link Option} containing the element or
 * `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {<B extends A>(fa: AsyncStream<A>) => Task<Option<B>>} A function
 * that takes an async stream to search.
 *
 * @__PURE__
 */
export declare function findLast<A>(predicate: AsyncPredicate<A>): <B extends A>(fa: AsyncStream<B>) => Task<Option_2<B>>;

/**
 * Find the last element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns a {@link Task} of an {@link Option} containing the element
 * or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {(fa: AsyncStream<A>) => Task<Option<A>>} A function that takes
 * an async stream to search.
 *
 * @__PURE__
 */
export declare function findLast<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => Task<Option_2<A>>;

/**
 * Given a selector function which takes an element and returns
 * an {@link Option}, this function applies the selector to each element of
 * the array and returns the last `Some` result. Otherwise it returns `None`.
 *
 * @export
 * @template A The value type.
 * @template B The mapped value type.
 * @param {(a: A) => Option<B> | Promise<Option<B>>} f The mapping function.
 * @return {(fa: AsyncStream<A>) => Task<Option<B>>} A function that takes a
 * stream and returns an option of `B`.
 *
 * @__PURE__
 */
export declare function findLastMap<A, B>(f: (a: A) => MaybeAsync<Option_2<B>>): (fa: AsyncStream<A>) => Task<Option_2<B>>;

/**
 * Given an input an {@link AsyncStream} of functions, `flap` returns
 * an {@link AsyncStream} containing the results of applying each function
 * to the given input.
 *
 * @export
 * @template A The value type.
 * @param {A} a The value.
 * @return {(fab: AsyncStream<(a: A) => B | Promise<B>>) => AsyncStream<B>} A
 * function that takes an async stream of functions.
 *
 * @category mapping
 * @__PURE__
 */
export declare function flap<A>(a: A): <B>(fab: AsyncStream<(a: A) => MaybeAsync<B>>) => AsyncStream<B>;

/**
 * Flattens an {@link AsyncStream} of {@link AsyncStream}s into
 * one.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<AsyncStream<A>>} mma The input async streams.
 * @return {AsyncStream<A>} The output async stream.
 *
 * @category sequencing
 * @__PURE__
 */
export declare function flatten<A>(mma: AsyncStream<AsyncStream<A>>): AsyncStream<A>;

/**
 * Alias for {@link matchLeft}.
 */
export declare const foldLeft: typeof matchLeft;

/**
 * Alias for {@link matchRight}.
 *
 * **Warning: This function consumes the stream.**
 */
export declare const foldRight: typeof matchRight;

/**
 * Converts an iterable to an {@link AsyncStream} of type `A`.
 *
 * @export
 * @template A The value type.
 * @param {AsyncIterable<A>} a The iterable input of `A` values.
 * @return {AsyncStream<A>} A async stream of of the values found in the given
 * iterable.
 *
 * @__PURE__
 */
export declare function fromAsyncIterable<A>(a: AsyncIterable<A>): AsyncStream<A>;

/**
 * Creates a {@link AsyncStream} from a {@link AsyncPredicate}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {AsyncPredicate<A>} predicate The refinement function.
 * @return {<B extends A>(b: B) => AsyncStream<B>} A function that will take a
 * value and return an async stream of it.
 *
 * @__PURE__
 */
export declare function fromAsyncPredicate<A>(predicate: AsyncPredicate<A>): <B extends A>(b: B) => AsyncStream<B>;

/**
 * Creates an {@link AsyncStream} from an {@link AsyncPredicate}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {AsyncPredicate<A>} predicate The refinement function.
 * @return {(a: A) => AsyncStream<A>} A function that will take a value
 * and return an async stream of it.
 *
 * @__PURE__
 */
export declare function fromAsyncPredicate<A>(predicate: AsyncPredicate<A>): (a: A) => AsyncStream<A>;

/**
 * The `FromEither` category instance for {@link AsyncStream}.
 */
export declare const FromEither: FromEither1<URI>;

/**
 * Creates an {@link AsyncStream} from an {@link Either} instance.
 *
 * @export
 * @template E The left value type.
 * @template A The right value type.
 * @param {Either<E, A>} fa The either instance.
 * @return {AsyncStream<A>} The async stream output.
 *
 * @category conversions
 * @__PURE__
 */
export declare function fromEither<E, A>(fa: Either<E, A>): AsyncStream<A>;

/**
 * @category lifting
 */
export declare const fromEitherK: <E, A extends readonly unknown[], B>(f: (...a: A) => Either<E, B>) => (...a: A) => AsyncStream<B>;

/**
 * The `FromIO` category instance for {@link AsyncStream}.
 */
export declare const FromIO: FromIO1<URI>;

/**
 * Creates an {@link AsyncStream} from an {@link IO} instance.
 *
 * @export
 * @template A The value type.
 * @param {IO<A>} fa The io instance.
 * @return {AsyncStream<A>} The async stream output.
 *
 * @category conversions
 * @__PURE__
 */
export declare function fromIO<A>(fa: IO<A>): AsyncStream<A>;

/**
 * @category lifting
 */
export declare const fromIOK: <A extends readonly unknown[], B>(f: (...a: A) => IO<B>) => (...a: A) => AsyncStream<B>;

/**
 * Converts an iterable to an {@link AsyncStream} of type `A`.
 *
 * @export
 * @template A The value type.
 * @param {Iterable<A>} a The iterable input of `A` values.
 * @return {AsyncStream<A>} A async stream of of the values found in the given
 * iterable.
 *
 * @__PURE__
 */
export declare function fromIterable<A>(a: Iterable<A>): AsyncStream<A>;

/**
 * Creates an {@link AsyncStream} from an {@link Option} instance.
 *
 * @export
 * @template A The value type.
 * @param {Option<A>} fa The option instance.
 * @return {AsyncStream<A>} The async stream output.
 *
 * @category conversions
 * @__PURE__
 */
export declare function fromOption<A>(fa: Option_2<A>): AsyncStream<A>;

/**
 * Creates an {@link AsyncStream} from an iterable of {@link Promise}s.
 *
 * Yields elements at when a promise in the iterable is resolved. Therefore,
 * the elements might not be in-order.
 *
 * If the order is important, use {@link fromPromisesSeq}.
 *
 * @export
 * @template A The value type.
 * @param {Iterable<Promise<A>>} input The input promises.
 * @return {AsyncStream<A>} An async stream output.
 *
 * @__PURE__
 */
export declare function fromPromises<A>(input: Iterable<Promise<A>>): AsyncStream<A>;

/**
 * Similar to {@link fromPromises} but the order is preserved.
 *
 * @export
 * @template A The value type.
 * @param {Iterable<Promise<A>>} input The input promises.
 * @return {AsyncStream<A>} The async stream output.
 *
 * @__PURE__
 */
export declare function fromPromisesSeq<A>(input: Iterable<Promise<A>>): AsyncStream<A>;

/**
 * Creates an {@link AsyncStream} from a {@link ReadableStream} instance.
 *
 * @export
 * @template A The value type.
 * @param {ReadableStream<A>} fa The readable stream instance.
 * @return {AsyncStream<A>} The async stream output.
 *
 * @category conversions
 * @__PURE__
 */
export declare function fromReadableStream<A>(fa: ReadableStream<A>): AsyncStream<A>;

/**
 * Creates an {@link AsyncStream} from a {@link Stream} instance.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The stream instance.
 * @return {AsyncStream<A>} The async stream output.
 *
 * @category conversion
 * @__PURE__
 */
export declare function fromStream<A>(fa: Stream<A>): AsyncStream<A>;

/**
 * The `FromTask` category instance for {@link AsyncStream}.
 */
export declare const FromTask: FromTask1<URI>;

/**
 * Creates an {@link AsyncStream} from a {@link Task} instance.
 *
 * @export
 * @template A The value type.
 * @param {Task<A>} fa The task instance.
 * @return {AsyncStream<A>} The async stream output.
 *
 * @category conversions
 * @__PURE__
 */
export declare function fromTask<A>(fa: Task<A>): AsyncStream<A>;

/**
 * The `Functor` category instance for {@link AsyncStream}.
 */
export declare const Functor: Functor1<URI>;

/**
 * The `FunctionWithIndex` category instance for {@link AsyncStream}.
 */
export declare const FunctorWithIndex: FunctorWithIndex1<URI, number>;

/**
 * Derives {@link Magma} for {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {Magma<AsyncStream<A>>} A magma instance of async stream of type `A`.
 *
 * @__PURE__
 */
export declare function getDifferenceMagma<A>(E: Eq<A>): Magma<AsyncStream<A>>;

/**
 * Gets an intersection {@link Semigroup} instance for `A`.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The {@link Eq} instance.
 * @return {Semigroup<AsyncStream<A>>} An intersection semigroup instance for
 * {@link AsyncStream} of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getIntersectionSemigroup<A>(E: Eq<A>): Semigroup<AsyncStream<A>>;

/**
 * Returns a {@link Monoid} for {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @return {Monoid<AsyncStream<A>>} A {@link Monoid} instance for
 * {@link AsyncStream} of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getMonoid<A = never>(): Monoid<AsyncStream<A>>;

/**
 * Monoid returning the first started {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @return {Monoid<AsyncStream<A>>} A monoid instance of async stream.
 *
 * @category instances
 * @__PURE__
 */
export declare function getRaceMonoid<A = never>(): Monoid<AsyncStream<A>>;

/**
 * Gets an {@link Applicative} instance of given semigroup.
 *
 * @export
 * @template A The value type.
 * @param {Semigroup<A>} S The semigroup instance.
 * @return {Semigroup<AsyncStream<A>>} A semigroup instance for
 * an {@link AsyncStream}.
 *
 * @category instances
 * @__PURE__
 */
export declare function getSemigroup<A>(S: Semigroup<A>): Semigroup<AsyncStream<A>>;

/**
 * Gets a {@link Semigroup} that concats two {@link AsyncStream}s.
 *
 * @export
 * @template A The value type.
 * @return {Semigroup<AsyncStream<A>>} A {@link Semigroup} instance
 * for {@link AsyncStream}s of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getSemigroup<A = never>(): Semigroup<AsyncStream<A>>;

/**
 * Returns a {@link Monoid} for {@link AsyncStream} which contains the union
 * of the elements.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The {@link Eq} instance for type `A`.
 * @return {Monoid<AsyncStream<A>>} A {@link Monoid} instance for
 * {@link AsyncStream} of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getUnionMonoid<A>(E: Eq<A>): Monoid<AsyncStream<A>>;

/**
 * Gets an union {@link Semigroup} instance for `A`.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The {@link Eq} instance.
 * @return {Semigroup<AsyncStream<A>>} An union semigroup instance for
 * {@link AsyncStream} of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getUnionSemigroup<A>(E: Eq<A>): Semigroup<AsyncStream<A>>;

/**
 * @category do notation
 */
export declare const guard: (b: boolean) => AsyncStream<void>;

/**
 * Gets the first element in an {@link AsyncStream}, or `None` if the
 * {@link AsyncStream} is empty.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input async stream.
 * @return {Task<Option<A>>} A task of an option of the first value in the
 * async stream.
 *
 * @__PURE__
 */
export declare function head<A>(fa: AsyncStream<A>): Task<Option_2<A>>;

/**
 * Gets all but the last element of an {@link AsyncStream}, creating a new
 * {@link AsyncStream}, or `None` if the stream was empty.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input async stream.
 * @return {Task<Option<AsyncStream<A>>>} A task of an option of output async
 * stream.
 *
 * @__PURE__
 */
export declare function init<A>(fa: AsyncStream<A>): Task<Option_2<AsyncStream<A>>>;

/**
 * Places an element between members of an {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {Monoid<A>} M The monoid instance.
 * @return {(middle: A) => (fa: AsyncStream<A>) => Task<A>} A function that
 * takes the element to place between members of the stream.
 *
 * @__PURE__
 */
export declare function intercalate<A>(M: Monoid<A>): (middle: A) => (fa: AsyncStream<A>) => Task<A>;

/**
 * Creates an {@link AsyncStream} of unique values that included in all given
 * {@link AsyncStream} using a {@link Eq} for equality comparisons.
 *
 * The order and references of result values are determined by the first
 * {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality comparer instance.
 * @return {(xs: AsyncStream<A>) => (ys: AsyncStream<A>) => AsyncStream<A>} A
 * function that takes an async stream to modify.
 *
 * @__PURE__
 */
export declare function intersection<A>(E: Eq<A>): {
    (xs: AsyncStream<A>): (ys: AsyncStream<A>) => AsyncStream<A>;
    (xs: AsyncStream<A>, ys: AsyncStream<A>): AsyncStream<A>;
};

/**
 * Places an element in between members of an {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {A} middle The middle value.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream to modify.
 *
 * @__PURE__
 */
export declare function intersperse<A>(middle: A): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Tests whether an {@link AsyncStream} is empty.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input async stream.
 * @return {Task<boolean>} A task of `true` if the async stream was empty,
 * `false` otherwise.
 *
 * @__PURE__
 */
export declare function isEmpty<A>(fa: AsyncStream<A>): Task<boolean>;

/**
 * Tests whether a {@link Stream} is not empty.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} ma The input async stream.
 * @return {Promise<boolean>} A task of `true` if the stream was not empty,
 * `false` otherwise.
 *
 * @__PURE__
 */
export declare function isNotEmpty<A>(ma: AsyncStream<A>): () => Promise<boolean>;

/**
 * Gets the last element in an {@link AsyncStream}, or `None` if the
 * {@link AsyncStream} is empty.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input async stream.
 * @return {Task<Option<A>>} A task of an option of the last value.
 *
 * @__PURE__
 */
export declare function last<A>(fa: AsyncStream<A>): Task<Option_2<A>>;

/**
 * Extracts from an {@link AsyncStream} all the `Left` elements.
 *
 * All the `Left` elements are extracted in order.
 *
 * @export
 * @template E The error type.
 * @template A The value type.
 * @param {AsyncStream<Either<E, A>>} fa The input async stream.
 * @return {AsyncStream<E>} The output async stream.
 *
 * @__PURE__
 */
export declare function lefts<E, A>(fa: AsyncStream<Either<E, A>>): AsyncStream<E>;

/**
 * @category do notation
 */
export declare const let: <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => B) => (fa: AsyncStream<A>) => AsyncStream<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;

/**
 * Provides a safe way to read a value at a particular index from
 * an {@link AsyncStream}.
 *
 * If the index is negative, `None` will be returned.
 *
 * @export
 * @param {number} i The index to lookup.
 * @return {<A>(fa: AsyncStream<A>) => Task<Option<A>>} A function that takes a
 * stream to lookup at given index.
 *
 * @__PURE__
 */
export declare function lookup(i: number): <A>(fa: AsyncStream<A>) => Task<Option_2<A>>;

/**
 * Provides a safe way to read a value at a particular index from
 * an {@link AsyncStream}.
 *
 * If the index is negative, `None` will be returned.
 *
 * @export
 * @param {number} i The index to lookup.
 * @param {AsyncStream<A>} fa The input stream
 * @return {Task<Option<A>>} An option of the element at index.
 *
 * @__PURE__
 */
export declare function lookup<A>(i: number, fa: AsyncStream<A>): Task<Option_2<A>>;

/**
 * Returns an {@link AsyncStream} of length `n` with element `i` initialized
 * with `f(i)`.
 *
 * *Note:* `n` is normalized to a non negative integer.
 *
 * @export
 * @template A The value type.
 * @param {number} n The number of elements.
 * @param {(i: number) => A | Promise<A>} f The item making function.
 * @return {AsyncStream<A>} The output stream.
 *
 * @__PURE__
 */
export declare function makeBy<A>(n: number, f: (i: number) => A | Promise<A>): AsyncStream<A>;

/**
 * An {@link AsyncStream} that never completes.
 *
 * @export
 * @template A The value type.
 * @return {AsyncStream<A>} The async stream that never completes.
 *
 * @__PURE__
 */
export declare function makeNever<A = never>(): AsyncStream<A>;

/**
 * Maps a {@link AsyncStream} instance to another {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @template B The new/mapped value type.
 * @param {(a: A) => B | Promise<B>} f The mapper function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes
 * a {@link AsyncStream} to map.
 */
export declare function map<A, B>(f: (a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Maps a {@link AsyncStream} instance to another {@link AsyncStream} with
 * index.
 *
 * @export
 * @template A The value type.
 * @template B The new/mapped value type.
 * @param {(i: number, a: A) => B | Promise<B>} f The mapper function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes
 * a {@link AsyncStream} to map.
 */
export declare function mapWithIndex<A, B>(f: (i: number, a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Matches an {@link AsyncStream} whether if that was empty or not.
 *
 * @export
 * @template B The type of the value on empty.
 * @template A The type of the streamed value.
 * @param {Lazy<B> | Task<B>} onEmpty The lazy function that will be executed
 * if the async stream is empty.
 *
 * @param {(fa: AsyncStream<A>) => Promise<B>} onNonEmpty The function that will
 * be executed.
 *
 * @return {(fa: AsyncStream<A>) => Promise<B>} A function that takes an
 * async stream to match.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function match<B, A>(onEmpty: Lazy<B> | Task<B>, onNonEmpty: (fa: AsyncStream<A>) => B | Promise<B>): (fa: AsyncStream<A>) => Task<B>;

/**
 * Break an {@link AsyncStream} into its first element and remaining elements.
 *
 * @export
 * @template B The value type on empty.
 * @template A The value type on non empty.
 * @param {Lazy<B> | Task<B>} onEmpty The lazy function that will be executed
 * when the aync stream is empty.
 *
 * @param {(head: A, tail: Stream<A>) => B | Promise<B>} onNonEmpty The function
 * that will be executed when the stream is not empty.
 *
 * @return {(fa: Stream<A>) => Task<B>} A function that takes an async stream.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchLeft<B, A>(onEmpty: Lazy<B> | Task<B>, onNonEmpty: (head: A, tail: AsyncStream<A>) => B | Promise<B>): (fa: AsyncStream<A>) => Task<B>;

/**
 * Less strict version of {@link matchLeft}.
 *
 * @export
 * @template B The value type on empty.
 * @template A The value type on non empty.
 * @template C The result type of the non empty function.
 * @param {Lazy<B> | Task<B>} onEmpty The lazy function that will be executed
 * when the stream is empty.
 *
 * @param {(head: A, tail: AsyncStream<A>) => C | Promise<C>} onNonEmpty The
 * function that will be executed when the async stream is not empty.
 *
 * @return {(fa: AsyncStream<A>) => Task<B | C>} A function that takes an async
 * stream.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchLeftW<B, A, C>(onEmpty: Lazy<B> | Task<B>, onNonEmpty: (head: A, tail: AsyncStream<A>) => C | Promise<C>): (fa: AsyncStream<A>) => Task<B | C>;

/**
 * Break an {@link AsyncStream} into its initial elements and the last element.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template B The value type on empty.
 * @template A The value type on non empty.
 * @param {Lazy<B> | Task<B>} onEmpty The lazy function that will be executed
 * when the stream is empty.
 *
 * @param {(head: A, tail: Stream<A>) => B | Promise<B>} onNonEmpty The function
 * that will be executed when the async stream is not empty.
 *
 * @return {(fa: Stream<A>) => B | Promise<B>} A function that takes a stream.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchRight<B, A>(onEmpty: Lazy<B> | Task<B>, onNonEmpty: (init: AsyncStream<A>, last: A) => B | Promise<B>): (fa: AsyncStream<A>) => Task<B>;

/**
 * Less strict version of {@link matchRight}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template B The value type on empty.
 * @template A The value type on non empty.
 * @template C The result type of the non empty function.
 * @param {Lazy<B> | Task<B>} onEmpty The lazy function that will be executed
 * when the async stream is empty.
 *
 * @param {(head: A, tail: AsyncStream<A>) => C | Promise<C>} onNonEmpty The
 * function that will be executed when the async stream is not empty.
 *
 * @return {(fa: Stream<A>) => Task<B | C>} A function that takes an async
 * stream.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchRightW<B, A, C>(onEmpty: Lazy<B> | Task<B>, onNonEmpty: (init: AsyncStream<A>, last: A) => C | Promise<C>): (fa: AsyncStream<A>) => Task<B | C>;

/**
 * Less strict version of {@link match}.
 *
 * @export
 * @template B The type of the value on empty.
 * @template A The type of the streamed value.
 * @template C The type of the value on non-empty.
 * @param {Lazy<B> | Task<B>} onEmpty The lazy function that will be executed
 * if the async stream is empty.
 *
 * @param {(fa: AsyncStream<A>) => C | Promise<C>} onNonEmpty The function that
 * will be executed if the async stream is not empty.
 *
 * @return {(fa: AsyncStream<A>) => Task<B | C>} A function that takes an
 * async stream to match.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchW<B, A, C>(onEmpty: Lazy<B> | Task<B>, onNonEmpty: (fa: AsyncStream<A>) => C | Promise<C>): (fa: AsyncStream<A>) => Task<B | C>;

/**
 * Gets the maximum value from a {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {Ord<A>} ord The {@link Ord} instance of the values.
 * @return {(xs: AsyncStream<A>) => TaskOption<A>} A function that takes a stream to
 * extract the maximum value.
 *
 * @__PURE__
 */
export declare function maximum<A>(ord: Ord<A>): (xs: AsyncStream<A>) => TaskOption<A>;

/**
 * Describes that the type passed might be sync or async.
 */
export declare type MaybeAsync<T> = T | Promise<T>;

/**
 * Gets the minimum value from a {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {Ord<A>} ord The {@link Ord} instance of the values.
 * @return {(xs: AsyncStream<A>) => TaskOption<A>} A function that takes a stream to
 * extract the minimum value.
 *
 * @__PURE__
 */
export declare function minimum<A>(ord: Ord<A>): (xs: AsyncStream<A>) => TaskOption<A>;

/**
 * Applies a function to the element at the specified index, creating
 * a new {@link AsyncStream}.
 *
 * *Note*: If the index was negative, the {@link AsyncStream} will not be
 * modified.
 *
 * @export
 * @template A The value type.
 * @param {number} i The index of the element to modify.
 * @param {(a: A) => A | Promise<A>} f The function to modify the element.
 * @return {AsyncStream<A>} The stream whose value at given index is modified.
 *
 * @__PURE__
 */
export declare function modifyAt<A>(i: number, f: (a: A) => A | Promise<A>): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * The `Monad` category instance for {@link AsyncStream}.
 */
export declare const Monad: Monad1<URI>;

/**
 * An {@link AsyncStream} that never completes.
 *
 * @export
 * @template A The value type.
 *
 * @__PURE__
 */
export declare const never: AsyncStream<never>;

/**
 * `none` tells if the provided refinement holds `false` for every element
 * in the {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {Task<boolean>} `true` if all the
 * elements returned `false` from the refinement function.
 *
 * @__PURE__
 */
export declare function none<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => Task<boolean>;

/**
 * `none` tells if the provided predicate holds false for none element
 * in the {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {AsyncPredicate<AsyncStream<A>>} `true` if all the elements
 * returned `false` from the refinement function.
 *
 * @__PURE__
 */
export declare function none<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => Task<boolean>;

/**
 * Returns a {@link AsyncStream} of type `A` streaming the given element.
 *
 * @export
 * @template A The value type.
 * @param {A} a The value.
 * @return {AsyncStream<A>} A {@link AsyncStream} instance of type `A`.
 *
 * @category model
 */
export declare function of<A>(a: A): AsyncStream<A>;

declare type OutputMapper<T extends ReadonlyArray<AsyncStream<unknown>>, R> = (...args: UnwrapOutputs<T>) => MaybeAsync<R>;

/**
 * Given an iterating function that is a {@link Predicate} or
 * a {@link Refinement}, `partition` creates two new {@link AsyncStream}s where
 * the `right` contains the original {@link AsyncStream} for which the
 * iterating function is `true`, `left` contains the elements for which it
 * is `false`.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<B>>} A function
 * that takes an async stream to separate it based on a given condition function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partition<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<B>>;

/**
 * Given an iterating function that is a {@link Predicate} or
 * a {@link Refinement}, `partition` creates two new {@link AsyncStream}s
 * where the `right` contains the original {@link Stream} for which the
 * iterating function is `true`, `left` contains the elements for which it
 * is `false`.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {AsyncPredicate<A, B>} predicate The predicate function.
 * @return {<B extends A>(fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<B>>} A
 * function that takes an async stream to separate it based on a given condition
 * function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partition<A>(predicate: AsyncPredicate<A>): <B extends A>(fb: AsyncStream<B>) => Separated<AsyncStream<B>, AsyncStream<B>>;

/**
 * Given an iterating function that is a {@link Predicate} or
 * a {@link Refinement}, `partition` creates two new {@link AsyncStream}s
 * where the `right` contains the original {@link Stream} for which the
 * iterating function is `true`, `left` contains the elements for which it
 * is `false`.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {(fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<A>>} A
 * function that takes an async stream to separate it based on a given condition
 * function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partition<A>(predicate: AsyncPredicate<A>): (fb: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<A>>;

/**
 * Given an iterating function that returns an {@link Either},
 * `partitionMap` applies the iterating function to each element and it creates
 * two {@link AsyncStream}s where the `right` contains the values of `Right`
 * results and the `left` contains the values of `Left` results.
 *
 * @export
 * @template A The value type.
 * @template B The left type.
 * @template C The right type.
 * @param {(a: A) => Either<B, C> | Promise<Either<B, C>>} f The iterating
 * function.
 *
 * @return {(fa: AsyncStream<A>) => Separated<AsyncStream<B>, AsyncStream<C>>} A
 * function that takes an async stream and returns a separate async streams.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionMap<A, B, C>(f: (a: A) => MaybeAsync<Either<B, C>>): (fa: AsyncStream<A>) => Separated<AsyncStream<B>, AsyncStream<C>>;

/**
 * Same as [`partitionMap`](#partitionMap), but passing also the index to the
 * iterating function.
 *
 * @export
 * @template A The value type.
 * @template B The left type.
 * @template C The right type.
 * @param {(i: number, a: A) => Either<B, C> | Promise<Either<B, C>>} f The
 * iterating function.
 *
 * @return {(fa: AsyncStream<A>) => Separated<AsyncStream<B>, AsyncStream<C>>} A
 * function that takes an async stream and returns a separate async streams.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionMapWithIndex<A, B, C>(f: (i: number, a: A) => MaybeAsync<Either<B, C>>): (fa: AsyncStream<A>) => Separated<AsyncStream<B>, AsyncStream<C>>;

/**
 * Same as [`partition`](#partition), but passing also the index to the
 * iterating function.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {RefinementWithIndex<number, A, B>} refinementWithIndex The refinement
 * function.
 * @return {(
     *   fa: AsyncStream<A>
     * ) => Separated<AsyncStream<A>, AsyncStream<B>>} A function that takes an
 * async stream to separate it based on a given condition function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionWithIndex<A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<B>>;

/**
 * Same as [`partition`](#partition), but passing also the index to the
 * iterating function.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {AsyncPredicateWithIndex<number, A, B>} predicateWithIndex The predicate
 * function.
 * @return {<B extends A>(
     *   fa: AsyncStream<B>
     * ) => Separated<AsyncStream<B>, AsyncStream<B>>} A function that takes an
 * async stream to separate it based on a given condition function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionWithIndex<A>(predicateWithIndex: AsyncPredicateWithIndex<number, A>): <B extends A>(fb: AsyncStream<B>) => Separated<AsyncStream<B>, AsyncStream<B>>;

/**
 * Same as [`partition`](#partition), but passing also the index to the
 * iterating function.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicateWithIndex<number, A>} predicateWithIndex The predicate
 * function.
 * @return {(fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<A>>} A
 * function that takes an async stream to separate it based on a given
 * condition function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionWithIndex<A>(predicateWithIndex: AsyncPredicateWithIndex<number, A>): (fa: AsyncStream<A>) => Separated<AsyncStream<A>, AsyncStream<A>>;

/**
 * The `Pointed` category instance for {@link AsyncStream}.
 *
 * @category model
 */
export declare const Pointed: Pointed1<URI>;

/**
 * Prepends an element to the front of the {@link AsyncStream}, creating a new
 * {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {A} head The value to prepend to the async stream.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream to modify.
 *
 * @__PURE__
 */
export declare function prepend<A>(head: A): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Prepends an element to every member of an {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {A} middle The element to prepend.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream to modify.
 *
 * @__PURE__
 */
export declare function prependAll<A>(middle: A): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Less strict version of {@link prepend}.
 *
 * @export
 * @template B The value type.
 * @param {B} head The value to prepend to the async stream.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream to modify.
 *
 * @__PURE__
 */
export declare function prependW<B>(head: B): <A>(fa: AsyncStream<A>) => AsyncStream<A | B>;

/**
 * Creates a range between an interval.
 *
 * *Note:* If `end` is not given, the range will be streaming the numbers
 * infinitely.
 *
 * @export
 * @param {number} start The start of the range.
 * @param {number} [end] The end of the range.
 * @return {AsyncStream<number>} A {@link AsyncStream} of numbers in the
 * interval.
 *
 * @__PURE__
 */
export declare function range(start: number, end?: number): AsyncStream<number>;

/**
 * Creates an {@link AsyncStream} containing a value repeated the specified
 * number of times.
 *
 * *Note:* `n` is normalized to a non negative integer.
 *
 * @export
 * @template A The value type.
 * @param {number} n The count of the repetition.
 * @param {A} a The value to replicate.
 * @return {AsyncStream<A>} The output stream.
 *
 * @__PURE__
 */
export declare function replicate<A>(n: number, a: A): AsyncStream<A>;

/**
 * Reverses an {@link AsyncStream} and returns another one.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input async stream.
 * @return {AsyncStream<A>} The output async stream.
 */
export declare function reverse<A>(fa: AsyncStream<A>): AsyncStream<A>;

/**
 * Extracts from an {@link AsyncStream} all the `Right` elements.
 *
 * All the `Right` elements are extracted in order.
 *
 * @export
 * @template E The error type.
 * @template A The value type.
 * @param {AsyncStream<Either<E, A>>} fa The input async stream.
 * @return {AsyncStream<A>} The output async stream.
 *
 * @__PURE__
 */
export declare function rights<E, A>(fa: AsyncStream<Either<E, A>>): AsyncStream<A>;

/**
 * Same as `reduce` but it carries over the intermediate steps.
 *
 * @export
 * @template A The value type.
 * @template B The output value type.
 * @param {B} b The initial value.
 * @param {(b: B, a: A) => B | Promise<B>} f The mapping function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream and returns another.
 *
 * @__PURE__
 */
export declare function scanLeft<A, B>(b: B, f: (b: B, a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Fold an {@link AsyncStream} from the right, keeping all intermediate results
 * instead of the final result.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @template B The output value type.
 * @param {B} b The initial value.
 * @param {(b: B, a: A) => B | Promise<B>} f The mapping function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream and returns another.
 *
 * @__PURE__
 */
export declare function scanRight<A, B>(b: B, f: (b: B, a: A) => B | Promise<B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Separate a {@link AsyncStream} of {@link Either}s into `Left` and `Right`s,
 * creating two new {@link AsyncStream}s where one containing all the left
 * values and the other containing all the right values.
 *
 * @export
 * @template E The left value type.
 * @template A The right value type.
 * @param {AsyncStream<Either<E, A>>} fa The input async stream.
 * @return {Separated<AsyncStream<E>, AsyncStream<A>>} The separated output
 * async streams.
 *
 * @category filtering
 * @__PURE__
 */
export declare function separate<E, A>(fa: AsyncStream<Either<E, A>>): Separated<AsyncStream<E>, AsyncStream<A>>;

/**
 * Calculates the number of elements in an {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input async stream.
 * @return {number} The number of elements.
 *
 * @__PURE__
 */
export declare function size<A>(fa: AsyncStream<A>): Task<number>;

/**
 * Drops/skips the given amount of items from an {@link AsyncStream}.
 *
 * @export
 * @param {number} count The number of elements to drop.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream and returns another async stream that skips the given amount
 * of elements.
 *
 * @__PURE__
 */
export declare const skip: typeof dropLeft;

/**
 * Check if a predicate holds true for any {@link AsyncStream} member.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: AsyncStream<A>) => Task<boolean>} A function that takes an
 * async stream and returns a boolean.
 *
 * @__PURE__
 */
export declare function some<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => () => Promise<boolean>;

/**
 * Spans an {@link AsyncStream} from the left side of it based on a refinement.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => Task<Spanned<B, A>>} A function that takes
 * an {@link AsyncStream} and returns a {@link Task} of a {@link Spanned}
 * instance of it.
 *
 * @__PURE__
 */
export declare function spanLeft<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => Task<Spanned<B, A>>;

/**
 * Spans an {@link AsyncStream} from the left side of it, based on a predicate.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {<B extends A>(fb: AsyncStream<B>) => Task<Spanned<B, B>>} A function
 * that takes an {@link AsyncStream} and returns a {@link Task} of a
 * {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanLeft<A>(predicate: AsyncPredicate<A>): <B extends A>(fb: AsyncStream<B>) => Task<Spanned<B, B>>;

/**
 * Spans a {@link AsyncStream} from the left side of it, based on a predicate.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {(fa: AsyncStream<A>) => Task<Spanned<A, A>>} A function that takes
 * an {@link AsyncStream} and returns a {@link Task} of a {@link Spanned}
 * instance of it.
 *
 * @__PURE__
 */
export declare function spanLeft<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => Task<Spanned<A, A>>;

/**
 * Defines an interface where the `init` and the `rest` part of
 * the {@link AsyncStream} based on a condition.
 *
 * @export
 * @interface Spanned
 * @template I The init part of the {@link AsyncStream}.
 * @template R The rest of the {@link AsyncStream}.
 */
export declare interface Spanned<I, R> {
    /**
     * The init part of the {@link AsyncStream} where the condition was met.
     *
     * @type {AsyncStream<I>}
     * @memberof Spanned
     */
    readonly init: AsyncStream<I>;
    /**
     * The rest of the {@link AsyncStream}.
     *
     * @type {AsyncStream<R>}
     * @memberof Spanned
     */
    readonly rest: AsyncStream<R>;
}

/**
 * Spans a {@link AsyncStream} from the right side of it based on a refinement.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => Task<Spanned<B, A>>} A function that takes
 * an {@link AsyncStream} and returns a {@link Task} of a {@link Spanned}
 * instance of it.
 *
 * @__PURE__
 */
export declare function spanRight<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => Task<Spanned<B, A>>;

/**
 * Spans a {@link AsyncStream} from the right side of it, based on a predicate.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {<B extends A>(fb: Stream<B>) => Spanned<B, B>} A function
 * that takes an {@link AsyncStream} and returns a {@link Task} of a
 * {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanRight<A>(predicate: AsyncPredicate<A>): <B extends A>(fb: AsyncStream<B>) => Task<Spanned<B, B>>;

/**
 * Spans an {@link AsyncStream} from the right side of it, based on a predicate.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {(fa: AsyncStream<A>) => Task<Spanned<A, A>>} A function that takes
 * an {@link AsyncStream} and returns a {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanRight<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => Task<Spanned<A, A>>;

/**
 * Splits an {@link AsyncStream} into two pieces, the first piece has max `n`
 * elements.
 *
 * @export
 * @param {number} n The number of elements the first stream will contain.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream to split.
 *
 * @__PURE__
 */
export declare function splitAt(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<AsyncStream<A>>;

/**
 * Splits an {@link AsyncStream} into two pieces, the first piece has max `n`
 * elements.
 *
 * @export
 * @param {number} n The number of elements the first stream will contain.
 * @return {(fa: AsyncStream<A>) => Stream<AsyncStream<A>>} A function that
 * takes an async stream to split.
 *
 * @__PURE__
 */
export declare function splitAtStream(n: number): <A>(fa: AsyncStream<A>) => Stream<AsyncStream<A>>;

/**
 * Describes a function which returns a {@link Generator} of `A` values.
 *
 * @export
 * @interface Stream
 * @template A The value type.
 */
declare type Stream<A> = () => Generator<A>;

/**
 * Splits an {@link AsyncStream} into {@link AsyncStream} of {@link Stream}
 * of given chunk size.
 *
 * @export
 * @param {number} n The chunk size.
 * @return {(fa: AsyncStream<A>) => AsyncStream<Stream<A>>} A function that
 * takes an async stream and returns an async stream of streams of given
 * chunks.
 *
 * @__PURE__
 */
export declare function streamChunksOf(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<Stream<A>>;

/**
 * Gets all but the first element of an {@link AsyncStream}, creating a new
 * {@link AsyncStream}, or `None` if the {@link AsyncStream} is empty.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input stream.
 * @return {Task<Option<AsyncStream<A>>>} A task of an option of an async stream
 * whose first element is excluded.
 *
 * @__PURE__
 */
export declare function tail<A>(fa: AsyncStream<A>): Task<Option_2<AsyncStream<A>>>;

/**
 * Takes given amount of items from an {@link AsyncStream}.
 *
 * @export
 * @param {number} count The number of elements to take.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream and returns another async stream that contains only given
 * amount of elements.
 *
 * @__PURE__
 */
export declare const take: typeof takeLeft;

/**
 * Takes given amount of items from an {@link AsyncStream}.
 *
 * If negative value is passed, an empty {@link AsyncStream} will be returned.
 *
 * @export
 * @param {number} count The number of elements to take.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream and returns another async stream that contains only given
 * amount of elements.
 *
 * @__PURE__
 */
export declare function takeLeft(count: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fb: AsyncStream<B>) => AsyncStream<B>} A function that
 * takes an async stream to take from the left as long as the condition holds
 * true.
 *
 * @__PURE__
 */
export declare function takeLeftWhile<A>(predicate: AsyncPredicate<A>): <B extends A>(fb: AsyncStream<B>) => AsyncStream<B>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes
 * an async stream to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeLeftWhile<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Takes given amount of items from an {@link AsyncStream} from the end to the
 * start.
 *
 * If negative value is passed, an empty {@link AsyncStream} will be returned.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @param {number} n The number of elements to take.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * async stream and returns another stream that contains only given amount of
 * elements.
 *
 * @__PURE__
 */
export declare function takeRight(n: number): <A>(fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link AsyncStream}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<B>} A function that takes an
 * async stream to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeRightWhile<A, B extends A>(refinement: Refinement<A, B>): (fa: AsyncStream<A>) => AsyncStream<B>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link AsyncStream}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {<B extends A>(fb: AsyncStream<B>) => AsyncStream<B>} A function that
 * takes an async stream to take from the left as long as the condition holds
 * true.
 *
 * @__PURE__
 */
export declare function takeRightWhile<A>(predicate: AsyncPredicate<A>): <B extends A>(fb: AsyncStream<B>) => AsyncStream<B>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link Stream}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {AsyncPredicate<A>} predicate The predicate function.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes
 * an async stream to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeRightWhile<A>(predicate: AsyncPredicate<A>): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * Converts an {@link AsyncStream} of type `A` to an array of `A`.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The async stream source.
 * @return {Promise<A[]>} The async stream items as an array.
 *
 * @__PURE__
 */
export declare function toArray<A>(fa: AsyncStream<A>): Promise<A[]>;

/**
 * Converts an {@link AsyncStream} to a {@link Task} of a {@link Stream} of the
 * elements.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input async stream.
 * @return {Task<Stream<A>>} The output stream task.
 *
 * @__PURE__
 */
export declare function toStream<A>(fa: AsyncStream<A>): Task<Stream<A>>;

/**
 * Converts an {@link AsyncStream} to a {@link Task} of the array of
 * the elements.
 *
 * @export
 * @template A The value type.
 * @param {AsyncStream<A>} fa The input async stream.
 * @return {Task<A[]>} The output task.
 *
 * @__PURE__
 */
export declare function toTask<A>(fa: AsyncStream<A>): Task<A[]>;

/**
 * Transposes the rows and columns of a 2D {@link AsyncStream}.
 *
 * If some of the rows are shorter than the following rows, their elements are skipped.
 *
 * @export
 * @template A The type of the values.
 * @param {AsyncStream<AsyncStream<A>>} xs The stream of a stream of the values.
 * @return {AsyncStream<AsyncStream<A>>} A new stream of transposed values.
 *
 * @__PURE__
 */
export declare function transpose<A>(xs: AsyncStream<AsyncStream<A>>): AsyncStream<AsyncStream<A>>;

/**
 * Transposes the rows and columns of a 2D {@link AsyncStream}.
 *
 * If some of the rows are shorter than the following rows, their elements are skipped.
 *
 * @export
 * @template A The type of the values.
 * @param {AsyncStream<Array<A>>} xs The stream of the array of the values.
 * @return {AsyncStream<Array<A>>} A new stream of transposed values.
 *
 * @__PURE__
 */
export declare function transposeArray<A>(xs: AsyncStream<Array<A>>): AsyncStream<Array<A>>;

/**
 * Transposes the rows and columns of a 2D {@link AsyncStream}.
 *
 * If some of the rows are shorter than the following rows, their elements are skipped.
 *
 * @export
 * @template A The type of the values.
 * @param {AsyncStream<Stream<A>>} xs The stream of a stream of the values.
 * @return {AsyncStream<Stream<A>>} A new stream of transposed values.
 *
 * @__PURE__
 */
export declare function transposeStream<A>(xs: AsyncStream<Stream<A>>): AsyncStream<Stream<A>>;

/**
 * Takes a function which returns an {@link Option} of a tuple containing an
 * outcome value and an input for the following iteration.
 *
 * This function applies given `f` to the inital value `b` and then recursively
 * to the second element of the tuple contained in the returned {@link Option}
 * of the previous calculation until `f` returns `None`.
 *
 * @export
 * @template A The value type.
 * @template B The initial _seed_ value type.
 * @param {B} b The initial value.
 * @param {(b: B) => Option<readonly [ A, B ]> | Promise<Option<readonly [ A, B ]>>} f A
 * function that recursively provides value-seed tuple for the output async
 * stream.
 *
 * @returns {AsyncStream<A>} The output async stream.
 * @__PURE__
 */
export declare function unfold<A, B>(b: B, f: (b: B) => MaybeAsync<Option_2<readonly [A, B]>>): AsyncStream<A>;

/**
 * The `Unfoldable` category instance for {@link AsyncStream}.
 */
export declare const Unfoldable: Unfoldable1<URI>;

/**
 * Creates an {@link AsyncStream} of unique values, in order, from all given
 * {@link AsyncStream}s using a {@link Eq} for equality comparisons.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {(xs: AsyncStream<A>) => (ys: AsyncStream<A>) => AsyncStream<A>} A
 * function that takes async streams.
 *
 * @__PURE__
 */
export declare function union<A>(E: Eq<A>): {
    (xs: AsyncStream<A>): (ys: AsyncStream<A>) => AsyncStream<A>;
    (xs: AsyncStream<A>, ys: AsyncStream<A>): AsyncStream<A>;
};

/**
 * Removes the duplicates from an {@link AsyncStream}, keeping the first
 * occurence of an element.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {(fa: AsyncStream<A>) => AsyncStream<A>} A function that takes an
 * asnyc stream to keep its unique values.
 *
 * @__PURE__
 */
export declare function uniq<A>(E: Eq<A>): (fa: AsyncStream<A>) => AsyncStream<A>;

declare type UnwrapOutputs<SA extends ReadonlyArray<AsyncStream<unknown>>, Output extends ReadonlyArray<unknown> = []> = SA extends readonly [
AsyncStream<infer H>,
...infer R extends ReadonlyArray<AsyncStream<unknown>>
] ? UnwrapOutputs<R, [...Output, H]> : Output;

/**
 * Reverse of {@link zip}.
 *
 * Takes an {@link AsyncStream} of pairs and returns another {@link AsyncStream}
 * instance yielding from both {@link AsyncStream}s in-order.
 *
 * @export
 * @template A The value type of the first stream.
 * @template B The value type of the second stream.
 * @param {(AsyncStream<AsyncStream<A> | AsyncStream<B>>)} mma The input async
 * stream of async streams.
 *
 * @return {(AsyncStream<A | B>)} A async stream of elements from both streams.
 *
 * @__PURE__
 */
export declare function unzip<A, B>(mma: AsyncStream<AsyncStream<A> | AsyncStream<B>>): AsyncStream<A | B>;

/**
 * Reverse of {@link zipArray}.
 *
 * Takes an {@link AsyncStream} of pairs and returns a tuple of
 * {@link AsyncStream}s.
 *
 * @export
 * @template A The value type of the first stream.
 * @template B The value type of the second stream.
 * @param {(AsyncStream<readonly [ A, B ]>)} mma The input async stream of
 * async streams.
 *
 * @return {[ AsyncStream<A>, AsyncStream<B> ]} A tuple of elements from both
 * async streams.
 *
 * @__PURE__
 */
export declare function unzipArray<A, B>(mma: AsyncStream<readonly [A, B]>): [AsyncStream<A>, AsyncStream<B>];

/**
 * Changes the element at the specified index, creating a new
 * {@link AsyncStream}.
 *
 * @export
 * @template A The value type.
 * @param {number} i The index of element to modify.
 * @param {A} a The value to set.
 * @return {AsyncStream<A>} The stream whose value at given
 * index is modified.
 *
 * @__PURE__
 */
export declare function updateAt<A>(i: number, a: A): (fa: AsyncStream<A>) => AsyncStream<A>;

/**
 * The type URI of the {@link AsyncStream} instances.
 *
 * @category type lambdas
 */
export declare const URI = "fp-ts-stream/AsyncStream";

/**
 * The type URI of the {@link AsyncStream} instances.
 *
 * @category type lambdas
 */
export declare type URI = typeof URI;

/**
 * The `Zero` category instance for {@link AsyncStream}.
 *
 * @category model
 */
export declare const Zero: Zero1<URI>;

/**
 * Returns an empty {@link AsyncStream} of type `A`.
 *
 * @export
 * @template A The value type.
 * @return {AsyncStream<A>} A {@link AsyncStream} instance that will yield no
 * values.
 *
 * @category model
 * @__PURE__
 */
export declare function zero<A>(): AsyncStream<A>;

/**
 * Takes two {@link AsyncStream}s and returns a {@link AsyncStream} of
 * corresponding pairs as {@link AsyncStream}s yielding single elements.
 *
 * @export
 * @template B The value type.
 * @param {AsyncStream<B>} fb The input async stream.
 * @return {(<A>(fa: AsyncStream<A>) => AsyncStream<AsyncStream<A | B>>)} A
 * function that takes another async stream to zip.
 *
 * @see {@link zipArray}
 *
 * @__PURE__
 */
export declare function zip<B>(fb: AsyncStream<B>): <A>(fa: AsyncStream<A>) => AsyncStream<AsyncStream<A | B>>;

/**
 * Takes two {@link AsyncStream}s and returns a {@link AsyncStream} of
 * corresponding pairs as {@link AsyncStream}s yielding single elements.
 *
 * @export
 * @template A The value of the first stream type.
 * @template B The value of the second stream type.
 * @param {AsyncStream<A>} fa The first async stream.
 * @param {AsyncStream<B>} fb The second async stream.
 * @return {AsyncStream<AsyncStream<A | B>>)} The output async stream.
     *
     * @see {@link zipArray}
     *
     * @__PURE__
     */
 export declare function zip<A, B>(fa: AsyncStream<A>, fb: AsyncStream<B>): AsyncStream<AsyncStream<A | B>>;

 /**
  * Takes two {@link AsyncStream}s and returns a {@link AsyncStream} of
  * corresponding pairs as a tuple of both elements.
  *
  * @export
  * @template B The value type.
  * @param {AsyncStream<B>} fb The input async stream.
  * @return {<A>(fa: AsyncStream<A>) => AsyncStream<readonly [ A, B ]>} A
  * function that takes another async stream to zip.
  *
  * @__PURE__
  */
 export declare function zipArray<B>(fb: AsyncStream<B>): <A>(fa: AsyncStream<A>) => AsyncStream<readonly [A, B]>;

 /**
  * Takes two {@link AsyncStream}s and returns a {@link AsyncStream} of
  * corresponding pairs as a tuple of both elements.
  *
  * @export
  * @template A The value of the first stream type.
  * @template B The value of the second stream type.
  * @param {AsyncStream<A>} fa The first async stream.
  * @param {AsyncStream<B>} fb The second async stream.
  * @return {AsyncStream<readonly [ A, B ]>} The output async stream.
  *
  * @__PURE__
  */
 export declare function zipArray<A, B>(fa: AsyncStream<A>, fb: AsyncStream<B>): AsyncStream<readonly [A, B]>;

 /**
  * Apply a function to pairs of elements at the same index in
  * two {@link AsyncStream}s, collecting the results in a
  * new {@link AsyncStream}.
  *
  * If one input {@link AsyncStream} is shorter, excess elements
  * of the other are discarded.
  *
  * @export
  * @template A The first value type.
  * @template B The second value type.
  * @template C The result value type.
  * @param {AsyncStream<A>} fa The first async stream.
  * @param {AsyncStream<B>} fb The second async stream.
  * @param {(a: A, b: B) => C | Promise<C>} f The mapper function.
  * @return {AsyncStream<C>} The output async stream.
  *
  * @__PURE__
  */
 export declare function zipWith<A, B, C>(fa: AsyncStream<A>, fb: AsyncStream<B>, f: (a: A, b: B) => C | Promise<C>): AsyncStream<C>;

 export { }
