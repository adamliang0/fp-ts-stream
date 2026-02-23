import type { Alternative1 } from 'fp-ts/Alternative';
import type { Applicative1 } from 'fp-ts/Applicative';
import type { Applicative2 } from 'fp-ts/Applicative';
import type { Applicative2C } from 'fp-ts/Applicative';
import type { Applicative3 } from 'fp-ts/Applicative';
import type { Applicative3C } from 'fp-ts/Applicative';
import type { Applicative4 } from 'fp-ts/Applicative';
import type { Applicative as Applicative_2 } from 'fp-ts/Applicative';
import { Apply1 } from 'fp-ts/Apply';
import { Chain1 } from 'fp-ts/Chain';
import type { ChainRec1 } from 'fp-ts/ChainRec';
import type { Compactable1 } from 'fp-ts/Compactable';
import { Either } from 'fp-ts/Either';
import type { Eq } from 'fp-ts/Eq';
import type { Extend1 } from 'fp-ts/Extend';
import type { Filterable1 } from 'fp-ts/Filterable';
import type { FilterableWithIndex1 } from 'fp-ts/FilterableWithIndex';
import { FilterE1 } from 'fp-ts/Witherable';
import type { Foldable1 } from 'fp-ts/Foldable';
import type { FoldableWithIndex1 } from 'fp-ts/FoldableWithIndex';
import { FromEither1 } from 'fp-ts/FromEither';
import { FromIO1 } from 'fp-ts/FromIO';
import { Functor1 } from 'fp-ts/Functor';
import type { FunctorWithIndex1 } from 'fp-ts/FunctorWithIndex';
import type { HKT } from 'fp-ts/HKT';
import type { IO } from 'fp-ts/IO';
import type { Kind } from 'fp-ts/HKT';
import type { Kind2 } from 'fp-ts/HKT';
import type { Kind3 } from 'fp-ts/HKT';
import type { Kind4 } from 'fp-ts/HKT';
import type { Lazy } from 'fp-ts/function';
import type { Magma } from 'fp-ts/Magma';
import type { Monad1 } from 'fp-ts/Monad';
import type { Monad2 } from 'fp-ts/Monad';
import type { Monad2C } from 'fp-ts/Monad';
import type { Monad3 } from 'fp-ts/Monad';
import type { Monad3C } from 'fp-ts/Monad';
import type { Monad4 } from 'fp-ts/Monad';
import type { Monoid } from 'fp-ts/Monoid';
import { None } from 'fp-ts/Option';
import { Option as Option_2 } from 'fp-ts/Option';
import type { Ord } from 'fp-ts/Ord';
import type { Pointed1 } from 'fp-ts/Pointed';
import { Predicate } from 'fp-ts/Predicate';
import type { PredicateWithIndex } from 'fp-ts/FilterableWithIndex';
import type { ReadonlyNonEmptyArray } from 'fp-ts/ReadonlyNonEmptyArray';
import type { Refinement } from 'fp-ts/Refinement';
import type { RefinementWithIndex } from 'fp-ts/FilterableWithIndex';
import type { Semigroup } from 'fp-ts/Semigroup';
import type { Separated } from 'fp-ts/Separated';
import type { Show } from 'fp-ts/Show';
import { Some } from 'fp-ts/Option';
import type { Traversable1 } from 'fp-ts/Traversable';
import type { TraversableWithIndex1 } from 'fp-ts/TraversableWithIndex';
import type { Unfoldable1 } from 'fp-ts/Unfoldable';
import type { URIS } from 'fp-ts/HKT';
import type { URIS2 } from 'fp-ts/HKT';
import type { URIS3 } from 'fp-ts/HKT';
import type { URIS4 } from 'fp-ts/HKT';
import { Witherable1 } from 'fp-ts/Witherable';
import { Zero1 } from 'fp-ts/Zero';

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `&&`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The context.
 * @param {Monad4<M>} M The monadic context.
 * @return {<S, R, E>(input: Stream<Kind4<F, S, R, E, boolean>>) => Kind4<F, S, R, E, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function allM<F extends URIS4>(M: Monad4<F>): <S, R, E>(input: Stream<Kind4<F, S, R, E, boolean>>) => Kind4<F, S, R, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `&&`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The context type.
 * @param {Monad3<M>} M The monadic context.
 * @return {<R, E>(input: Stream<Kind3<F, R, E, boolean>>) => Kind3<F, R, E, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function allM<F extends URIS3>(M: Monad3<F>): <R, E>(input: Stream<Kind3<F, R, E, boolean>>) => Kind3<F, R, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `&&`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The monadic context.
 * @template E The constrained type.
 * @param {Monad3C<M, E>} M The monadic context.
 * @return {<R>(input: Stream<Kind3<F, R, E, boolean>>) => Kind3<F, R, E, boolean>} The input source.
 *
 *  @__PURE__
 */
export declare function allM<F extends URIS3, E>(M: Monad3C<F, E>): <R>(input: Stream<Kind3<F, R, E, boolean>>) => Kind3<F, R, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `&&`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The context type.
 * @param {Monad2<M>} M The monadic context.
 * @return {<E>(input: Stream<Kind2<F, E, boolean>>) => Kind2<F, E, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function allM<F extends URIS2>(M: Monad2<F>): <E>(input: Stream<Kind2<F, E, boolean>>) => Kind2<F, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `&&`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The monadic context.
 * @template E The constrained type.
 * @param {Monad2C<M, E>} M The monadic context.
 * @return {(input: Stream<Kind2<F, E, boolean>>) => Kind2<F, E, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function allM<F extends URIS2, E>(M: Monad2C<F, E>): (input: Stream<Kind2<F, E, boolean>>) => Kind2<F, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `&&`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The context type.
 * @param {Monad1<M>} M The monadic context.
 * @return {<A>(input: Stream<Kind<F, boolean>>) => Kind<F, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function allM<F extends URIS>(M: Monad1<F>): (input: Stream<Kind<F, boolean>>) => Kind<F, boolean>;

/**
 * Concatenates the inputs to a single {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Lazy<Stream<A>>} that The lazy function providing the other stream.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream and
 * returns another stream whose elements are concatted with the given one.
 */
export declare function alt<A>(that: Lazy<Stream<A>>): (ma: Stream<A>) => Stream<A>;

/**
 * The `Alternative` category instance for {@link Stream}.
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
 * @param {Lazy<Stream<B>>} that The lazy function providing the other stream.
 * @return {(fa: Stream<A>) => Stream<B | A>} A function that takes a stream and
 * returns another stream whose elements are concatted with the given one.
 *
 * @category error handling
 * @__PURE__
 */
export declare function altW<B>(that: Lazy<Stream<B>>): <A>(ma: Stream<A>) => Stream<A | B>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `||`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The context.
 * @param {Monad4<M>} M The monadic context.
 * @return {<S, R, E>(input: Stream<Kind4<F, S, R, E, boolean>>) => Kind4<F, S, R, E, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function anyM<F extends URIS4>(M: Monad4<F>): <S, R, E>(input: Stream<Kind4<F, S, R, E, boolean>>) => Kind4<F, S, R, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `||`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The context type.
 * @param {Monad3<M>} M The monadic context.
 * @return {<R, E>(input: Stream<Kind3<F, R, E, boolean>>) => Kind3<F, R, E, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function anyM<F extends URIS3>(M: Monad3<F>): <R, E>(input: Stream<Kind3<F, R, E, boolean>>) => Kind3<F, R, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `||`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The monadic context.
 * @template E The constrained type.
 * @param {Monad3C<M, E>} M The monadic context.
 * @return {<R>(input: Stream<Kind3<F, R, E, boolean>>) => Kind3<F, R, E, boolean>} The input source.
 *
 *  @__PURE__
 */
export declare function anyM<F extends URIS3, E>(M: Monad3C<F, E>): <R>(input: Stream<Kind3<F, R, E, boolean>>) => Kind3<F, R, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `||`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The context type.
 * @param {Monad2<M>} M The monadic context.
 * @return {<E>(input: Stream<Kind2<F, E, boolean>>) => Kind2<F, E, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function anyM<F extends URIS2>(M: Monad2<F>): <E>(input: Stream<Kind2<F, E, boolean>>) => Kind2<F, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `||`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The monadic context.
 * @template E The constrained type.
 * @param {Monad2C<M, E>} M The monadic context.
 * @return {(input: Stream<Kind2<F, E, boolean>>) => Kind2<F, E, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function anyM<F extends URIS2, E>(M: Monad2C<F, E>): (input: Stream<Kind2<F, E, boolean>>) => Kind2<F, E, boolean>;

/**
 * Fold a {@link Stream} of monadic booleans from left-to-right in terms of `||`.
 *
 * Short-circuits.
 *
 * @export
 * @template M The context type.
 * @param {Monad1<M>} M The monadic context.
 * @return {<A>(input: Stream<Kind<F, boolean>>) => Kind<F, boolean>} The input source.
 *
 * @__PURE__
 */
export declare function anyM<F extends URIS>(M: Monad1<F>): (input: Stream<Kind<F, boolean>>) => Kind<F, boolean>;

/**
 * Applies a {@link Stream} of type `A` to {@link Stream} of functions
 * from `A` to `B`.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The source stream.
 * @return {(fab: Stream<(a: A) => B>) => Stream<B>} A function that takes
 * a {@link Stream} of functions.
 *
 * @__PURE__
 */
export declare function ap<A>(fa: Stream<A>): <B>(fab: Stream<(a: A) => B>) => Stream<B>;

/**
 * Combine two effectful actions, keeping only the result of the first.
 */
export declare const apFirst: <B>(second: Stream<B>) => <A>(first: Stream<A>) => Stream<A>;

/**
 * Append an element to the end of the {@link Stream}, creating a new
 * {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {A} end The value that will be added to the stream.
 * @return {Stream<A>} Another stream that provides the given value at the end.
 *
 * @__PURE__
 */
export declare function append<A>(end: A): (fa: Stream<A>) => Stream<A>;

/**
 * Appends an element to every member of a {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {A} middle The element to append.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream
 * to modify.
 *
 * @__PURE__
 */
export declare function appendAll<A>(middle: A): (fa: Stream<A>) => Stream<A>;

/**
 * Less strict version of {@link append}.
 *
 * @export
 * @template B The input value type.
 * @param {B} end The element that will be added to the end of the stream.
 * @return {Stream<A | B>} Another stream that provides the given value at
 * the end.
 *
 * @__PURE__
 */
export declare function appendW<B>(end: B): <A>(fa: Stream<A>) => Stream<A | B>;

/**
 * The `Applicative` category instance for {@link Stream}.
 */
export declare const Applicative: Applicative1<URI>;

/**
 * The `Apply` category instance for {@link Stream}.
 */
export declare const Apply: Apply1<URI>;

/**
 * @category do notation
 */
export declare const apS: <N extends string, A, B>(name: Exclude<N, keyof A>, fb: Stream<B>) => (fa: Stream<A>) => Stream<    { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;

/**
 * Combine two effectful actions, keeping only the result of the second.
 */
export declare const apSecond: <B>(second: Stream<B>) => <A>(first: Stream<A>) => Stream<B>;

/**
 * @category do notation
 */
export declare const bind: <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => Stream<B>) => (ma: Stream<A>) => Stream<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;

/**
 * @category do notation
 */
export declare const bindTo: <N extends string>(name: N) => <A>(fa: Stream<A>) => Stream<{ readonly [K in N]: A; }>;

/**
 * Returns the {@link https://en.wikipedia.org/wiki/Cartesian_product Cartesian product}
 * of two {@link Stream}s. In other words, returns a {@link Stream} containing tuples of every
 * possible ordered combination of the two input {@link Stream}s.
 *
 * @export
 * @template A The type of the left hand side of the output tuple.
 * @param {Stream<A>} left The left hand side stream.
 * @return {<B>(right: Stream<B>) => Stream<[ A, B ]>} A function
 * that will take another stream to return the cartesian product of these.
 *
 * @__PURE__
 */
export declare function cartesian<A>(left: Stream<A>): <B>(right: Stream<B>) => Stream<[A, B]>;

/**
 * The `Chain` category instance for {@link Stream}.
 */
export declare const Chain: Chain1<URI>;

/**
 * Chains a {@link Stream} by evaluating the function passed with the items
 * of it that returns another {@link Stream} instance of type `B`.
 *
 * @export
 * @template A The value type.
 * @template B The new value/output type.
 * @param {(a: A) => Stream<B>} f The function that produces a stream of type
 * `B` from given `A` value.
 *
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream of
 * type `A` and returns another stream of type `B`.
 *
 * @__PURE__
 */
export declare function chain<A, B>(f: (a: A) => Stream<B>): (fa: Stream<A>) => Stream<B>;

/**
 * @category sequencing
 */
export declare const chainFirst: <A, _>(f: (a: A) => Stream<_>) => (first: Stream<A>) => Stream<A>;

/**
 * The `ChainRec` category instance for {@link Stream} that uses `breadth-first`
 * approach.
 */
export declare const ChainRecBreadthFirst: ChainRec1<URI>;

/**
 * Recursively chain a {@link Stream} with a function that produces an
 * {@link Either} of `A` and `B` stream.
 *
 * All the `A` items in the stream will be used to recursively produce more
 * streams to chain.
 *
 * @export
 * @template A The producing type.
 * @template B The output type.
 * @param {(a: A) => Stream<Either<A, B>>} f The stream producter function.
 * @return {(a: A) => Stream<B>} A function that takes an initial value to
 * start producing `B`s.
 *
 * @__PURE__
 */
export declare function chainRecBreadthFirst<A, B>(f: (a: A) => Stream<Either<A, B>>): (a: A) => Stream<B>;

/**
 * The `ChainRec` category instance for {@link Stream} that uses `depth-first`
 * approach.
 */
export declare const ChainRecDepthFirst: ChainRec1<URI>;

/**
 * Recursively chain a {@link Stream} with a function that produces an
 * {@link Either} of `A` and `B` stream.
 *
 * All the `A` items in the stream will be used to recursively produce more
 * streams to chain.
 *
 * @export
 * @template A The producing type.
 * @template B The output type.
 * @param {(a: A) => Stream<Either<A, B>>} f The stream producter function.
 * @return {(a: A) => Stream<B>} A function that takes an initial value to
 * start producing `B`s.
 *
 * @__PURE__
 */
export declare function chainRecDepthFirst<A, B>(f: (a: A) => Stream<Either<A, B>>): (a: A) => Stream<B>;

/**
 * Chains a {@link Stream} by evaluating the function passed with the items
 * of it with an index that returns another {@link Stream} instance of type `B`.
 *
 * @export
 * @template A The value type.
 * @template B The new value/output type.
 * @param {(i: number, a: A) => Stream<B>} f The function that produces a
 * stream of type `B` from given `A` value.
 *
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream of
 * type `A` and returns another stream of type `B`.
 *
 * @__PURE__
 */
export declare function chainWithIndex<A, B>(f: (i: number, a: A) => Stream<B>): (fa: Stream<A>) => Stream<B>;

/**
 * A useful recursion pattern for processing a {@link Stream} to produce a new
 * array, often used for "chopping" up the input {@link Stream}. Typically
 * `chop` is called with some function that will consume an initial prefix of
 * the {@link Stream} and produce a value and the rest of the {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @template B The chopped value type.
 * @param {(fa: Stream<A>) => [ B, Stream<A> ]} f The chop function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream to
 * chop the first element of it.
 *
 * @__PURE__
 */
export declare function chop<A, B>(f: (fa: Stream<A>) => [B, Stream<A>]): (fa: Stream<A>) => Stream<B>;

/**
 * Splits a {@link Stream} into {@link Stream} of {@link Streams} of given
 * chunk size.
 *
 * @export
 * @param {number} n The chunk size.
 * @return {(fa: Stream<A>) => Stream<Stream<A>>} A function that takes a
 * stream and returns a stream of streams of given chunks.
 *
 * @__PURE__
 */
export declare function chunksOf(n: number): <A>(fa: Stream<A>) => Stream<Stream<A>>;

/**
 * Compact a {@link Stream} of {@link Option}s discarding the `None` values
 * and keeping the `Some` values. It returns a new {@link Stream} containing
 * the values of `Some` options.
 *
 * @export
 * @template A The value type.
 * @param {Stream<Option<A>>} fa The input stream.
 * @return {Stream<A>} The output stream.
 *
 * @category filtering
 * @__PURE__
 */
export declare function compact<A>(fa: Stream<Option_2<A>>): Stream<A>;

/**
 * The `Compactable` category instance for {@link Stream}.
 */
export declare const Compactable: Compactable1<URI>;

/**
 * {@link Stream} comprehension.
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
 * @return {Stream<R>} The output stream.
 *
 * @__PURE__
 */
export declare function comprehension<R, I extends ReadonlyNonEmptyArray<Stream<unknown>>>(input: I, f: OutputMapper<I, R>, g?: Condition<I>): Stream<R>;

/**
 * Concatenates two {@link Stream}s into one.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} second The another stream to concat.
 * @return {(first: Stream<A>) => Stream<A>} A function that will take the
 * initial stream.
 *
 * @__PURE__
 */
export declare function concat<A>(second: Stream<A>): (first: Stream<A>) => Stream<A>;

/**
 * Less strict version of {@link concat}.
 *
 * @export
 * @template B The value type of the another stream.
 * @param {Stream<B>} second The another stream to concat.
 * @return {<A>(first: Stream<A>) => Stream<A | B>} A function that will take
 * the initial stream.
 *
 * @__PURE__
 */
export declare function concatW<B>(second: Stream<B>): <A>(first: Stream<A>) => Stream<A | B>;

declare type Condition<T extends ReadonlyArray<Stream<unknown>>> = OutputMapper<T, boolean>;

/**
 * Map each item of a {@link Stream} to a key and count how mony map to
 * each key.
 *
 * @export
 * @template A The type of the item.
 * @param {(x: A) => string} f The key from value function.
 * @return {(input: Stream<A>) => Record<string, number>} A function that will
 * take a {@link Stream} and returns the counts of its mapped values.
 *
 * @__PURE__
 */
export declare function countBy<A>(f: (x: A) => string): (input: Stream<A>) => Record<string, number>;

/**
 * Removes/skips an element at given index.
 *
 * *Note:* Negative indices will have no effect.
 *
 * @export
 * @param {number} i The index to exclude from the stream.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream to
 * remove the item at index.
 *
 * @__PURE__
 */
export declare function deleteAt(i: number): <A>(fa: Stream<A>) => Stream<A>;

/**
 * Creates a {@link Stream} of {@link Stream} values not included in the other
 * given {@link Stream} using a {@link Eq} for equality comparisons.
 *
 * The order and references of result values are determined by the first
 * {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {(xs: Stream<A>) => (ys: Stream<A>) => Stream<A>} A function that
 * takes a stream to provide the differences.
 *
 * @__PURE__
 */
export declare function difference<A>(E: Eq<A>): {
    (xs: Stream<A>): (ys: Stream<A>) => Stream<A>;
    (xs: Stream<A>, ys: Stream<A>): Stream<A>;
};

/**
 * @category do notation
 */
export declare const Do: Stream<{}>;

/**
 * Drops/skips the given amount of items from a {@link Stream}.
 *
 * @export
 * @param {number} count The number of elements to drop.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream and
 * returns another stream that skips the given amount of elements.
 *
 * @__PURE__
 */
export declare function dropLeft(count: number): <A>(fa: Stream<A>) => Stream<A>;

/**
 * Creates a new {@link Stream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement/predicate function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream
 * to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Stream<B>;

/**
 * Creates a new {@link Stream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The refinement/predicate function.
 * @return {<B extends A>(fa: Stream<A>) => Stream<B>} A function that takes a
 * stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropLeftWhile<A>(predicate: Predicate<A>): <B extends A>(fb: Stream<B>) => Stream<B>;

/**
 * Creates a new {@link Stream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The refinement/predicate function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a
 * stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropLeftWhile<A>(predicate: Predicate<A>): (fa: Stream<A>) => Stream<A>;

/**
 * Drops/skips the given amount of items from a {@link Stream} from end to
 * the start.
 *
 * **Warning: This function consumes the stream.**
 *
 * - Negative values will be equal to {@link take} as much as the value.
 * - If `0` is passed, the stream itself will be returned.
 *
 * @export
 * @param {number} count The number of elements to drop.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream and
 * returns another stream that skips the given amount of elements.
 *
 * @__PURE__
 */
export declare function dropRight(count: number): <A>(fa: Stream<A>) => Stream<A>;

/**
 * Creates a new {@link Stream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement from the end to the start.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement/predicate function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream
 * to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropRightWhile<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Stream<B>;

/**
 * Creates a new {@link Stream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement from the end to the start.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The refinement/predicate function.
 * @return {<B extends A>(fa: Stream<A>) => Stream<B>} A function that takes a
 * stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropRightWhile<A>(predicate: Predicate<A>): <B extends A>(fb: Stream<B>) => Stream<B>;

/**
 * Creates a new {@link Stream} which is a copy of the input dropping the
 * longest initial substream for which all element satisfy the specified
 * predicate/refinement from the end to the start.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The refinement/predicate function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a
 * stream to drop its left while the condition holds.
 *
 * @__PURE__
 */
export declare function dropRightWhile<A>(predicate: Predicate<A>): (fa: Stream<A>) => Stream<A>;

/**
 * `duplicate` returns a {@link Stream} containing the whole input
 * {@link Stream}, then to the input {@link Stream} dropping the first element,
 * then to the input {@link Stream} dropping the first two elements, etc.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} wa The input stream.
 * @return {Stream<Stream<A>>} The output stream of streams.
 *
 * @__PURE__
 */
export declare function duplicate<A>(wa: Stream<A>): Stream<Stream<A>>;

/**
 * Tests if a value is a member of a {@link Stream}.
 *
 * Takes a {@link Eq} of `A` as a single argument which returns the function
 * to use to search for a value of type `A` in a {@link Stream}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {(a: A) => (fa: Stream<A>) => boolean} A function to use to search
 * for a value in the stream.
 *
 * @__PURE__
 */
export declare function elem<A>(E: Eq<A>): {
    (a: A): (fa: Stream<A>) => boolean;
    (a: A, fa: Stream<A>): boolean;
};

/**
 * An empty {@link Stream} instance.
 */
export declare const empty: Stream<never>;

/**
 * `every` tells if the provided refinement holds true for every element
 * in the {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {Refinement<Stream<A>, Stream<B>>} `true` if all the elements
 * returned `true` from the refinement function.
 *
 * @__PURE__
 */
export declare function every<A, B extends A>(refinement: Refinement<A, B>): Refinement<Stream<A>, Stream<B>>;

/**
 * `every` tells if the provided predicate holds true for every element
 * in the {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {Predicate<Stream<A>>} `true` if all the elements
 * returned `true` from the refinement function.
 *
 * @__PURE__
 */
export declare function every<A>(predicate: Predicate<A>): Predicate<Stream<A>>;

/**
 * Alias for {@link some}.
 */
export declare const exists: typeof some;

/**
 * The `Extend` category instance for {@link Stream}.
 */
export declare const Extend: Extend1<URI>;

/**
 * Given an iterating function that takes a {@link Stream} as input, `extend`
 * returns a {@link Stream} containing the results of the iterating function
 * applied to the whole input {@link Stream}, then to the input {@link Stream}
 * without the first element, then to the input {@link Stream} without the first
 * two elements, etc.
 *
 * @export
 * @template A The input value type.
 * @template B The output value.
 * @param {(ma: Stream<A>) => B} f The mapping function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream of
 * type `A` and returns another stream of type `B`.
 *
 * @__PURE__
 */
export declare function extend<A, B>(f: (fa: Stream<A>) => B): (fa: Stream<A>) => Stream<B>;

/**
 * Returns a {@link Stream} that produces values that passes from the refinement
 * function.
 *
 * @export
 * @template A The value type.
 * @template B The refined output value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream
 * and returns another stream passing the filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filter<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Stream<B>;

/**
 * Returns a {@link Stream} that produces values that passes from the predicate
 * function.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fa: Stream<B>) => Stream<B>} A function that takes
 * a stream and returns another stream passing the filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filter<A>(predicate: Predicate<A>): <B extends A>(fa: Stream<B>) => Stream<B>;

/**
 * Filter a {@link Stream} based upon a predicate whose boolean is returned in an
 * applicative context.
 *
 * @export
 * @template F The context.
 * @param {Applicative4<F>} F The applicative context.
 * @return {<S, R, E, A>(f: (x: A) => Kind4<F, S, R, E, boolean>) => (input: Stream<A>) => Kind4<F, S, R, E, Stream<A>>} The filter function.
 *
 * @__PURE__
 */
export declare function filterA<F extends URIS4>(F: Applicative4<F>): <S, R, E, A>(f: (x: A) => Kind4<F, S, R, E, boolean>) => (input: Stream<A>) => Kind4<F, S, R, E, Stream<A>>;

/**
 * Filter a {@link Stream} based upon a predicate whose boolean is returned in an
 * applicative context.
 *
 * @export
 * @template F The context type.
 * @param {Applicative3<F>} F The applicative context.
 * @return {<R, E, A>(f: (x: A) => Kind3<F, R, E, boolean>) => (input: Stream<A>) => Kind3<F, R, E, Stream<A>>} The filter function.
 *
 * @__PURE__
 */
export declare function filterA<F extends URIS3>(F: Applicative3<F>): <R, E, A>(f: (x: A) => Kind3<F, R, E, boolean>) => (input: Stream<A>) => Kind3<F, R, E, Stream<A>>;

/**
 * Filter a {@link Stream} based upon a predicate whose boolean is returned in an
 * applicative context.
 *
 * @export
 * @template F The applicative context.
 * @template E The constrained type.
 * @param {Applicative3C<F, E>} F The applicative context.
 * @return {<R, A>(f: (x: A) => Kind3<F, R, E, boolean>) => (input: Stream<A>) => Kind3<F, R, E, Stream<A>>} The filter function.
 *
 *  @__PURE__
 */
export declare function filterA<F extends URIS3, E>(F: Applicative3C<F, E>): <R, A>(f: (x: A) => Kind3<F, R, E, boolean>) => (input: Stream<A>) => Kind3<F, R, E, Stream<A>>;

/**
 * Filter a {@link Stream} based upon a predicate whose boolean is returned in an
 * applicative context.
 *
 * @export
 * @template F The context type.
 * @param {Applicative2<F>} F The applicative context.
 * @return {<E, A>(f: (x: A) => Kind2<F, E, boolean>) => (input: Stream<A>) => Kind2<F, E, Stream<A>>} The filter function.
 *
 * @__PURE__
 */
export declare function filterA<F extends URIS2>(F: Applicative2<F>): <E, A>(f: (x: A) => Kind2<F, E, boolean>) => (input: Stream<A>) => Kind2<F, E, Stream<A>>;

/**
 * Filter a {@link Stream} based upon a predicate whose boolean is returned in an
 * applicative context.
 *
 * @export
 * @template F The applicative context.
 * @template E The constrained type.
 * @param {Applicative2C<F, E>} F The applicative context.
 * @return {<A>(f: (x: A) => Kind2<F, E, boolean>) => (input: Stream<A>) => Kind2<F, E, Stream<A>>} The filter function.
 *
 * @__PURE__
 */
export declare function filterA<F extends URIS2, E>(F: Applicative2C<F, E>): <A>(f: (x: A) => Kind2<F, E, boolean>) => (input: Stream<A>) => Kind2<F, E, Stream<A>>;

/**
 * Filter a {@link Stream} based upon a predicate whose boolean is returned in an
 * applicative context.
 *
 * @export
 * @template F The context type.
 * @param {Applicative1<F>} F The applicative context.
 * @return {<A>(f: (x: A) => Kind<F, boolean>) => (input: Stream<A>) => Kind<F, Stream<A>>} The filter function.
 *
 * @__PURE__
 */
export declare function filterA<F extends URIS>(F: Applicative1<F>): <A>(f: (x: A) => Kind<F, boolean>) => (input: Stream<A>) => Kind<F, Stream<A>>;

/**
 * The `Filterable` category instance for {@link Stream}.
 */
export declare const Filterable: Filterable1<URI>;

/**
 * The `FilterableWithIndex` category instance for {@link Stream}.
 */
export declare const FilterableWithIndex: FilterableWithIndex1<URI, number>;

/**
 * Filter values inside a `F` context.
 *
 * See `ReadonlyArray`'s `filterE` for an example of usage.
 */
export declare const filterE: FilterE1<"fp-ts-stream/Stream">;

/**
 * Maps a {@link Stream} with an iterating function that takes
 * the value of each element and returns an {@link Option}. It keeps only the
 * `Some` values dicarding the `None`s.
 *
 * @export
 * @template A The value type.
 * @template B The mapped type.
 * @param {(a: A) => Option<B>} f The mapper function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream of
 * type `A` values and returns a stream of type `B` values.
 *
 * @__PURE__
 */
export declare function filterMap<A, B>(f: (a: A) => Option_2<B>): (fa: Stream<A>) => Stream<B>;

/**
 * Maps a {@link Stream} with an iterating function that takes the index and
 * the value of each element and returns an {@link Option}. It keeps only the
 * `Some` values dicarding the `None`s.
 *
 * Same as [`filterMap`](#filterMap), but with an iterating function which takes
 * also the index as input.
 *
 * @export
 * @template A The value type.
 * @template B The mapped type.
 * @param {(i: number, a: A) => Option<B>} f The mapper function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream of
 * type `A` values and returns a stream of type `B` values.
 *
 * @__PURE__
 */
export declare function filterMapWithIndex<A, B>(f: (i: number, a: A) => Option_2<B>): (fa: Stream<A>) => Stream<B>;

/**
 * Maps a {@link Stream} with an iterating function that takes the index and the
 * value of each element and returns an boolean. It keeps only the elements
 * returning `true` and discards the others.
 *
 * @export
 * @template A The value type.
 * @template B The refined new value type.
 * @param {RefinementWithIndex<number, A, B>} refinementWithIndex The refinement
 * function with index.
 *
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream
 * to filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filterWithIndex<A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (fa: Stream<A>) => Stream<B>;

/**
 * Maps a {@link Stream} with an iterating function that takes the index and the
 * value of each element and returns an boolean. It keeps only the elements
 * returning `true` and discards the others.
 *
 * @export
 * @template A The value type.
 * @template B The refined new value type.
 * @param {PredicateWithIndex<number, A>} predicateWithIndex The predicate
 * function with index.
 *
 * @return {<B extends A>(fa: Stream<B>) => Stream<B>} A function that takes a
 * stream to filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filterWithIndex<A>(predicateWithIndex: PredicateWithIndex<number, A>): <B extends A>(fa: Stream<B>) => Stream<B>;

/**
 * Maps a {@link Stream} with an iterating function that takes the index and the
 * value of each element and returns an boolean. It keeps only the elements
 * returning `true` and discards the others.
 *
 * @export
 * @template A The value type.
 * @template B The refined new value type.
 * @param {PredicateWithIndex<number, A>} predicateWithIndex The predicate
 * function with index.
 *
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream
 * to filter.
 *
 * @category filtering
 * @__PURE__
 */
export declare function filterWithIndex<A>(predicateWithIndex: PredicateWithIndex<number, A>): (fa: Stream<A>) => Stream<A>;

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Option<B>} A function that takes a stream
 * to search.
 *
 * @__PURE__
 */
export declare function findFirst<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Option_2<B>;

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fa: Stream<A>) => Option<B>} A function that takes
 * a stream to search.
 *
 * @__PURE__
 */
export declare function findFirst<A>(predicate: Predicate<A>): <B extends A>(fb: Stream<B>) => Option_2<B>;

/**
 * Find the first element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => Option<A>} A function that takes
 * a stream to search.
 *
 * @__PURE__
 */
export declare function findFirst<A>(predicate: Predicate<A>): (fa: Stream<A>) => Option_2<A>;

/**
 * Given a selector function which takes an element and returns
 * an {@link Option}, this function applies the selector to each element of
 * the array and returns the first `Some` result. Otherwise it returns `None`.
 *
 * @export
 * @template A The value type.
 * @template B The mapped value type.
 * @param {(a: A) => Option<B>} f The mapping function.
 * @return {(fa: Stream<A>) => Option<B>} A function that takes a stream and
 * returns an option of `B`.
 *
 * @__PURE__
 */
export declare function findFirstMap<A, B>(f: (a: A) => Option_2<B>): (fa: Stream<A>) => Option_2<B>;

/**
 * Find the last element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Option<B>} A function that takes a stream
 * to search.
 *
 * @__PURE__
 */
export declare function findLast<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Option_2<B>;

/**
 * Find the last element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fa: Stream<A>) => Option<B>} A function that takes
 * a stream to search.
 *
 * @__PURE__
 */
export declare function findLast<A>(predicate: Predicate<A>): <B extends A>(fa: Stream<B>) => Option_2<B>;

/**
 * Find the last element which satisfies a predicate (or a refinement)
 * function.
 *
 * It returns an {@link Option} containing the element or `None` if not found.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => Option<A>} A function that takes
 * a stream to search.
 *
 * @__PURE__
 */
export declare function findLast<A>(predicate: Predicate<A>): (fa: Stream<A>) => Option_2<A>;

/**
 * Given a selector function which takes an element and returns
 * an {@link Option}, this function applies the selector to each element of
 * the array and returns the last `Some` result. Otherwise it returns `None`.
 *
 * @export
 * @template A The value type.
 * @template B The mapped value type.
 * @param {(a: A) => Option<B>} f The mapping function.
 * @return {(fa: Stream<A>) => Option<B>} A function that takes a stream and
 * returns an option of `B`.
 *
 * @__PURE__
 */
export declare function findLastMap<A, B>(f: (a: A) => Option_2<B>): (fa: Stream<A>) => Option_2<B>;

/**
 * Given an input a {@link Stream} of functions, `flap` returns a {@link Stream}
 * containing the results of applying each function to the given input.
 *
 * @export
 * @template A The value type.
 * @param {A} a The value.
 * @return {(fab: Stream<(a: A) => B>) => Stream<B>} A function that takes a
 * stream of functions.
 *
 * @category mapping
 * @__PURE__
 */
export declare function flap<A>(a: A): <B>(fab: Stream<(a: A) => B>) => Stream<B>;

/**
 * Takes a {@link Stream} of {@link Stream}s of `A` and flattens them into
 * a {@link Stream} of `A` by concatenating the elements of each {@link Stream}
 * in order.
 *
 * @export
 * @template A The value type.
 * @param {Stream<Stream<A>>} mma The input streams.
 * @return {Stream<A>} The output stream.
 *
 * @category sequencing
 * @__PURE__
 */
export declare function flatten<A>(mma: Stream<Stream<A>>): Stream<A>;

/**
 * The `Foldable` category instance for {@link Stream}.
 *
 * @category model
 */
export declare const Foldable: Foldable1<URI>;

/**
 * The `FoldableWithIndex` category instance for {@link Stream}.
 *
 * @category model
 */
export declare const FoldableWithIndex: FoldableWithIndex1<URI, number>;

/**
 * Alias for {@link matchLeft}.
 */
export declare const foldLeft: typeof matchLeft;

/**
 * Map and fold a {@link Stream}.
 *
 * Map the {@link Stream} passing each value to the iterating function.
 * Then fold the results using the provided {@link Monoid}.
 *
 * @export
 * @template M The monoid type.
 * @param {Monoid<M>} M The monoid instance.
 * @return {<A>(f: (a: A) => M)} A function that will take the iterating
 * function.
 *
 * @category folding
 * @__PURE__
 */
export declare function foldMap<M>(M: Monoid<M>): <A>(f: (a: A) => M) => (fa: Stream<A>) => M;

/**
 * Same as {@link foldMap} but passing also the index to the iterating function.
 *
 * @export
 * @template M The monoid type.
 * @param {Monoid<M>} M The monoid instance.
 * @return {<A>(f: (i: number, a: A) => M)} A function that takes a stream and
 * returns the folded value.
 *
 * @category folding
 * @__PURE__
 */
export declare function foldMapWithIndex<M>(M: Monoid<M>): <A>(f: (i: number, a: A) => M) => (fa: Stream<A>) => M;

/**
 * Alias for {@link matchRight}.
 *
 * **Warning: This function consumes the stream.**
 */
export declare const foldRight: typeof matchRight;

/**
 * The `FromEither` category instance for {@link Stream}.
 *
 * @category conversions
 */
export declare const FromEither: FromEither1<URI>;

/**
 * Create a {@link Stream} from {@link Either}.
 *
 * The resulting {@link Stream} will contain the content of the {@link Either}
 * if it is `Right` and it will be empty if the {@link Either} is `Left.
 *
 * @export
 * @template A The value type.
 * @param {Either<unknown, A>} fa The either input.
 * @return {Stream<A>} The output stream.
 *
 * @category conversions
 * @__PURE__
 */
export declare function fromEither<A>(fa: Either<unknown, A>): Stream<A>;

/**
 * @category lifting
 *
 * @__PURE__
 */
export declare const fromEitherK: <E, A extends readonly unknown[], B>(f: (...a: A) => Either<E, B>) => (...a: A) => Stream<B>;

/**
 * The `FromIO` category instance for {@link Stream}.
 */
export declare const FromIO: FromIO1<URI>;

/**
 * Creates an {@link Stream} from an {@link IO} instance.
 *
 * @export
 * @template A The value type.
 * @param {IO<A>} fa The io instance.
 * @return {Stream<A>} The stream output.
 *
 * @category conversions
 * @__PURE__
 */
export declare function fromIO<A>(fa: IO<A>): Stream<A>;

/**
 * @category lifting
 */
export declare const fromIOK: <A extends readonly unknown[], B>(f: (...a: A) => IO<B>) => (...a: A) => Stream<B>;

/**
 * Converts an iterable to a {@link Stream} of type `A`.
 *
 * @export
 * @template A The value type.
 * @param {Iterable<A>} a The iterable input of `A` values.
 * @return {Stream<A>} A stream of of the values found in the given iterable.
 *
 * @__PURE__
 */
export declare function fromIterable<A>(a: Iterable<A>): Stream<A>;

/**
 * Returns a new {@link Stream} from an {@link Option}.
 *
 * @export
 * @template A The value type.
 * @param {Option<A>} fa The option input.
 * @return {Stream<A>} The stream output.
 *
 * @category conversions
 * @__PURE__
 */
export declare function fromOption<A>(fa: Option_2<A>): Stream<A>;

/**
 * Creates a {@link Stream} from a {@link Refinement}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(a: A) => Stream<B>} A function that will take a value
 * and return a stream of it.
 *
 * @__PURE__
 */
export declare function fromPredicate<A, B extends A>(refinement: Refinement<A, B>): (a: A) => Stream<B>;

/**
 * Creates a {@link Stream} from a {@link Predicate}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Predicate<A>} predicate The refinement function.
 * @return {<B extends A>(b: B) => Stream<B>} A function that will take a value
 * and return a stream of it.
 *
 * @__PURE__
 */
export declare function fromPredicate<A>(predicate: Predicate<A>): <B extends A>(b: B) => Stream<B>;

/**
 * Creates a {@link Stream} from a {@link Predicate}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Predicate<A>} predicate The refinement function.
 * @return {(a: A) => Stream<A>} A function that will take a value
 * and return a stream of it.
 *
 * @__PURE__
 */
export declare function fromPredicate<A>(predicate: Predicate<A>): (a: A) => Stream<A>;

/**
 * The `Functor` category instance for {@link Stream}.
 */
export declare const Functor: Functor1<URI>;

/**
 * The `FunctionWithIndex` category instance for {@link Stream}.
 */
export declare const FunctorWithIndex: FunctorWithIndex1<URI, number>;

/**
 * Derives {@link Magma} for {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {Magma<Stream<A>>} A magma instance of stream of type `A`.
 *
 * @__PURE__
 */
export declare function getDifferenceMagma<A>(E: Eq<A>): Magma<Stream<A>>;

/**
 * Derives on {@link Eq} over the {@link Stream} of a given element type from
 * the {@link Eq} of that type.
 *
 * The derived {@link Eq} defines two {@link Stream}s as equal if all elements
 * of both {@link Stream}s are compared equal pairwise with the given `E`.
 *
 * In case of {@link Stream}s of different lengths, the result is non equality.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {Eq<Stream<A>>} Another equality instance for the stream of
 * type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getEq<A>(E: Eq<A>): Eq<Stream<A>>;

/**
 * Gets an intersection {@link Semigroup} instance for `A`.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The {@link Eq} instance.
 * @return {Semigroup<Stream<A>>} An intersection semigroup instance for
 * {@link Stream} of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getIntersectionSemigroup<A>(E: Eq<A>): Semigroup<Stream<A>>;

/**
 * Returns a {@link Monoid} for {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @return {Monoid<Stream<A>>} A {@link Monoid} instance for {@link Stream}
 * of type `A`.
 *
 * @example
 * import { getMonoid, fromIterable, toArray } from 'fp-ts-stream/Stream'
 * const M = getMonoid<number>()
 *
 * assert.deepStrictEqual(
 *   toArray(M.concat(fromIterable([1, 2]), fromIterable([3, 4]))),
 *   [1, 2, 3, 4]
 * )
 *
 * @category instances
 * @__PURE__
 */
export declare function getMonoid<A = never>(): Monoid<Stream<A>>;

/**
 * Gets an {@link Applicative} instance of given semigroup.
 *
 * @export
 * @template A The value type.
 * @param {Semigroup<A>} S The semigroup instance.
 * @return {Semigroup<Stream<A>>} A semigroup instance for a {@link Stream}.
 *
 * @category instances
 * @__PURE__
 */
export declare function getSemigroup<A>(S: Semigroup<A>): Semigroup<Stream<A>>;

/**
 * Gets a {@link Semigroup} that concats two {@link Stream}s.
 *
 * @export
 * @template A The value type.
 * @return {Semigroup<Stream<A>>} A {@link Semigroup} instance
 * for {@link Stream}s of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getSemigroup<A = never>(): Semigroup<Stream<A>>;

/**
 * Gets a {@link Show} instance for {@link Stream} of type `A`.
 *
 * @export
 * @template A The value type.
 * @param {Show<A>} S The {@link Show} instance for type `A`.
 * @return {Show<Stream<A>>} The {@link Show} instance for {@link Stream}
 * of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getShow<A>(S: Show<A>): Show<Stream<A>>;

/**
 * Returns a {@link Monoid} for {@link Stream} which contains the union
 * of the elements.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The {@link Eq} instance for type `A`.
 * @return {Monoid<Stream<A>>} A {@link Monoid} instance for {@link Stream}
 * of type `A`.
 *
 * @example
 * import { getMonoid, fromIterable, toArray } from 'fp-ts-stream/Stream'
 * const M = getMonoid<number>()
 *
 * assert.deepStrictEqual(
 *   toArray(M.concat(fromIterable([1, 2]), fromIterable([2, 3, 4]))),
 *   [1, 2, 3, 4]
 * )
 *
 * @category instances
 * @__PURE__
 */
export declare function getUnionMonoid<A>(E: Eq<A>): Monoid<Stream<A>>;

/**
 * Gets an union {@link Semigroup} instance for `A`.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The {@link Eq} instance.
 * @return {Semigroup<Stream<A>>} An union semigroup instance for
 * {@link Stream} of type `A`.
 *
 * @category instances
 * @__PURE__
 */
export declare function getUnionSemigroup<A>(E: Eq<A>): Semigroup<Stream<A>>;

/**
 * @category do notation
 */
export declare const guard: (b: boolean) => Stream<void>;

/**
 * Gets the first element in a {@link Stream}, or `None` if the {@link Stream}
 * is empty.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} ma The input stream.
 * @return {Option<A>} An option of the first value in the stream.
 *
 * @__PURE__
 */
export declare function head<A>(ma: Stream<A>): Option_2<A>;

/**
 * Gets all but the last element of a {@link Stream}, creating a new
 * {@link Stream}, or `None` if the stream was empty.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The input stream.
 * @return {Option<Stream<A>>} An option of output stream.
 *
 * @__PURE__
 */
export declare function init<A>(fa: Stream<A>): Option_2<Stream<A>>;

/**
 * Places an element between members of a {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Monoid<A>} M The monoid instance.
 * @return {(middle: A) => (fa: Stream<A>) => A} A function that takes the
 * element to place between members of the stream.
 *
 * @__PURE__
 */
export declare function intercalate<A>(M: Monoid<A>): (middle: A) => (fa: Stream<A>) => A;

/**
 * Creates a {@link Stream} of unique values that included in all given
 * {@link Stream} using a {@link Eq} for equality comparisons.
 *
 * The order and references of result values are determined by the first
 * {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality comparer instance.
 * @return {(xs: Stream<A>) => (ys: Stream<A>) => Stream<A>} A function that
 * takes a stream to modify.
 *
 * @__PURE__
 */
export declare function intersection<A>(E: Eq<A>): {
    (xs: Stream<A>): (ys: Stream<A>) => Stream<A>;
    (xs: Stream<A>, ys: Stream<A>): Stream<A>;
};

/**
 * Places an element in between members of a {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {A} middle The middle value.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream to
 * modify.
 *
 * @__PURE__
 */
export declare function intersperse<A>(middle: A): (fa: Stream<A>) => Stream<A>;

/**
 * Tests whether a {@link Stream} is empty.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The input stream.
 * @return {boolean} `true` if the stream was empty, `false` otherwise.
 *
 * @__PURE__
 */
export declare function isEmpty<A>(fa: Stream<A>): boolean | undefined;

/**
 * Tests whether a {@link Stream} is not empty.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} ma The input stream.
 * @return {boolean} `true` if the stream was not empty, `false` otherwise.
 *
 * @__PURE__
 */
export declare function isNotEmpty<A>(ma: Stream<A>): boolean;

/**
 * Gets the last element in a {@link Stream}, or `None` if the {@link Stream}
 * is empty.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The input stream.
 * @return {Option<A>} An option of the last value.
 *
 * @__PURE__
 */
export declare function last<A>(fa: Stream<A>): Option_2<A>;

/**
 * Extracts from a {@link Stream} all the `Left` elements.
 *
 * All the `Left` elements are extracted in order.
 *
 * @export
 * @template E The error type.
 * @template A The value type.
 * @param {Stream<Either<E, A>>} fa The input stream.
 * @return {Stream<E>} The output stream.
 *
 * @__PURE__
 */
export declare function lefts<E, A>(fa: Stream<Either<E, A>>): Stream<E>;

/**
 * @category do notation
 */
export declare const let: <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => B) => (fa: Stream<A>) => Stream<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;

/**
 * Provides a safe way to read a value at a particular index from
 * a {@link Stream}.
 *
 * If the index is negative, `None` will be returned.
 *
 * @export
 * @param {number} i The index to lookup.
 * @return {<A>(fa: Stream<A>) => Option<A>} A function that takes a
 * stream to lookup at given index.
 *
 * @__PURE__
 */
export declare function lookup(i: number): <A>(fa: Stream<A>) => Option_2<A>;

/**
 * Provides a safe way to read a value at a particular index from
 * a {@link Stream}.
 *
 * If the index is negative, `None` will be returned.
 *
 * @export
 * @param {number} i The index to lookup.
 * @param {Stream<A>} fa The input stream
 * @return {Option<A>} An option of the element at index.
 *
 * @__PURE__
 */
export declare function lookup<A>(i: number, fa: Stream<A>): Option_2<A>;

/**
 * Returns a {@link Stream} of length `n` with element `i` initialized with
 * `f(i)`.
 *
 * *Note:* `n` is normalized to a non negative integer.
 *
 * @export
 * @template A The value type.
 * @param {number} n The number of elements.
 * @param {(i: number) => A} f The item making function.
 * @return {Stream<A>} The output stream.
 *
 * @__PURE__
 */
export declare function makeBy<A>(n: number, f: (i: number) => A): Stream<A>;

/**
 * Maps a {@link Stream} instance to another {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @template B The new/mapped value type.
 * @param {(a: A) => B} f The mapper function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes
 * a {@link Stream} to map.
 *
 * @__PURE__
 */
export declare function map<A, B>(f: (a: A) => B): (fa: Stream<A>) => Stream<B>;

/**
 * Maps a {@link Stream} instance to another {@link Stream} with index.
 *
 * @export
 * @template A The value type.
 * @template B The new/mapped value type.
 * @param {(i: number, a: A) => B} f The mapper function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes
 * a {@link Stream} to map.
 */
export declare function mapWithIndex<A, B>(f: (i: number, a: A) => B): (fa: Stream<A>) => Stream<B>;

/**
 * Matches a {@link Stream} whether if that was empty or not.
 *
 * @export
 * @template B The type of the value on empty.
 * @template A The type of the streamed value.
 * @param {Lazy<B>} onEmpty The lazy function that will be executed if the
 * stream is empty.
 *
 * @param {(fa: Stream<A>) => B} onNonEmpty The function that will be executed.
 * @return {(fa: Stream<A>) => B} A function that takes a stream to match.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function match<B, A>(onEmpty: Lazy<B>, onNonEmpty: (fa: Stream<A>) => B): (fa: Stream<A>) => B;

/**
 * Break a {@link Stream} into its first element and remaining elements.
 *
 * @export
 * @template B The value type on empty.
 * @template A The value type on non empty.
 * @param {Lazy<B>} onEmpty The lazy function that will be executed when the
 * stream is empty.
 *
 * @param {(head: A, tail: Stream<A>) => B} onNonEmpty The function that will
 * be executed when the stream is not empty.
 *
 * @return {(fa: Stream<A>) => B} A function that takes a stream.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchLeft<B, A>(onEmpty: Lazy<B>, onNonEmpty: (head: A, tail: Stream<A>) => B): (fa: Stream<A>) => B;

/**
 * Less strict version of {@link matchLeft}.
 *
 * @export
 * @template B The value type on empty.
 * @template A The value type on non empty.
 * @template C The result type of the non empty function.
 * @param {Lazy<B>} onEmpty The lazy function that will be executed when the
 * stream is empty.
 *
 * @param {(head: A, tail: Stream<A>) => C} onNonEmpty The function that will
 * be executed when the stream is not empty.
 *
 * @return {(fa: Stream<A>) => B | C} A function that takes a stream.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchLeftW<B, A, C>(onEmpty: Lazy<B>, onNonEmpty: (head: A, tail: Stream<A>) => C): (fa: Stream<A>) => B | C;

/**
 * Break a {@link Stream} into its initial elements and the last element.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template B The value type on empty.
 * @template A The value type on non empty.
 * @param {Lazy<B>} onEmpty The lazy function that will be executed when the
 * stream is empty.
 *
 * @param {(head: A, tail: Stream<A>) => B} onNonEmpty The function that will
 * be executed when the stream is not empty.
 *
 * @return {(fa: Stream<A>) => B} A function that takes a stream.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchRight<B, A>(onEmpty: Lazy<B>, onNonEmpty: (init: Stream<A>, last: A) => B): (fa: Stream<A>) => B;

/**
 * Less strict version of {@link matchRight}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template B The value type on empty.
 * @template A The value type on non empty.
 * @template C The result type of the non empty function.
 * @param {Lazy<B>} onEmpty The lazy function that will be executed when the
 * stream is empty.
 *
 * @param {(head: A, tail: Stream<A>) => C} onNonEmpty The function that will
 * be executed when the stream is not empty.
 *
 * @return {(fa: Stream<A>) => B | C} A function that takes a stream.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchRightW<B, A, C>(onEmpty: Lazy<B>, onNonEmpty: (init: Stream<A>, last: A) => C): (fa: Stream<A>) => B | C;

/**
 * Less strict version of {@link match}.
 *
 * @export
 * @template B The type of the value on empty.
 * @template A The type of the streamed value.
 * @template C The type of the value on non-empty.
 * @param {Lazy<B>} onEmpty The lazy function that will be executed if the
 * stream is empty.
 *
 * @param {(fa: Stream<A>) => C} onNonEmpty The function that will be executed
 * if the stream is not empty.
 *
 * @return {(fa: Stream<A>) => B | C} A function that takes a stream to match.
 *
 * @category pattern matching
 * @__PURE__
 */
export declare function matchW<B, A, C>(onEmpty: Lazy<B>, onNonEmpty: (fa: Stream<A>) => C): (fa: Stream<A>) => B | C;

/**
 * Gets the maximum value from a {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Ord<A>} ord The {@link Ord} instance of the values.
 * @return {(xs: Stream<A>) => Option<A>} A function that takes a stream to
 * extract the maximum value.
 *
 * @__PURE__
 */
export declare function maximum<A>(ord: Ord<A>): (xs: Stream<A>) => Option_2<A>;

/**
 * Gets the minimum value from a {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Ord<A>} ord The {@link Ord} instance of the values.
 * @return {(xs: Stream<A>) => Option<A>} A function that takes a stream to
 * extract the minimum value.
 *
 * @__PURE__
 */
export declare function minimum<A>(ord: Ord<A>): (xs: Stream<A>) => Option_2<A>;

/**
 * Applies a function to the element at the specified index, creating
 * a new {@link Stream}.
 *
 * *Note*: If the index was negative, the {@link Stream} will not be modified.
 *
 * @export
 * @template A The value type.
 * @param {number} i The index of the element to modify.
 * @param {(a: A) => A} f The function to modify the element.
 * @return {Stream<A>} The stream whose value at given index is modified.
 *
 * @__PURE__
 */
export declare function modifyAt<A>(i: number, f: (a: A) => A): (fa: Stream<A>) => Stream<A>;

/**
 * The `Monad` category instance for {@link Stream}.
 */
export declare const Monad: Monad1<URI>;

/**
 * `none` tells if the provided refinement holds `false` for every element
 * in the {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {Refinement<Stream<A>, Stream<B>>} `true` if all the elements
 * returned `false` from the refinement function.
 *
 * @__PURE__
 */
export declare function none<A, B extends A>(refinement: Refinement<A, B>): Refinement<Stream<A>, Stream<B>>;

/**
 * `none` tells if the provided predicate holds false for none element
 * in the {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {Predicate<Stream<A>>} `true` if all the elements
 * returned `false` from the refinement function.
 *
 * @__PURE__
 */
export declare function none<A>(predicate: Predicate<A>): Predicate<Stream<A>>;

/**
 * Returns a {@link Stream} of type `A` streaming the given element.
 *
 * @export
 * @template A The value type.
 * @param {A} a The value.
 * @return {Stream<A>} A {@link Stream} instance of type `A`.
 *
 * @category model
 * @__PURE__
 */
export declare function of<A>(a: A): Stream<A>;

declare type OutputMapper<T extends ReadonlyArray<Stream<unknown>>, R> = (...args: UnwrapOutputs<T>) => R;

/**
 * Given an iterating function that is a {@link Predicate} or
 * a {@link Refinement}, `partition` creates two new {@link Stream}s where the
 * `right` contains the original {@link Stream} for which the iterating function
 * is `true`, `left` contains the elements for which it is `false`.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Separated<Stream<A>, Stream<B>>} A function
 * that takes a stream to separate it based on a given condition function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partition<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Separated<Stream<A>, Stream<B>>;

/**
 * Given an iterating function that is a {@link Predicate} or
 * a {@link Refinement}, `partition` creates two new {@link Stream}s where the
 * `right` contains the original {@link Stream} for which the iterating function
 * is `true`, `left` contains the elements for which it is `false`.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Predicate<A, B>} predicate The predicate function.
 * @return {<B extends A>(fa: Stream<A>) => Separated<Stream<A>, Stream<B>>} A
 * function that takes a stream to separate it based on a given condition
 * function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partition<A>(predicate: Predicate<A>): <B extends A>(fb: Stream<B>) => Separated<Stream<B>, Stream<B>>;

/**
 * Given an iterating function that is a {@link Predicate} or
 * a {@link Refinement}, `partition` creates two new {@link Stream}s where the
 * `right` contains the original {@link Stream} for which the iterating function
 * is `true`, `left` contains the elements for which it is `false`.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => Separated<Stream<A>, Stream<A>>} A
 * function that takes a stream to separate it based on a given condition
 * function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partition<A>(predicate: Predicate<A>): (fb: Stream<A>) => Separated<Stream<A>, Stream<A>>;

/**
 * Given an iterating function that returns an {@link Either},
 * `partitionMap` applies the iterating function to each element and it creates
 * two {@link Stream}s where the `right` contains the values of `Right` results
 * and the `left` contains the values of `Left` results.
 *
 * @export
 * @template A The value type.
 * @template B The left type.
 * @template C The right type.
 * @param {(a: A) => Either<B, C>} f The iterating function.
 * @return {(fa: Stream<A>) => Separated<Stream<B>, Stream<C>>} A function that
 * takes a stream and returns a separate streams.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionMap<A, B, C>(f: (a: A) => Either<B, C>): (fa: Stream<A>) => Separated<Stream<B>, Stream<C>>;

/**
 * Same as [`partitionMap`](#partitionMap), but passing also the index to the
 * iterating function.
 *
 * @export
 * @template A The value type.
 * @template B The left type.
 * @template C The right type.
 * @param {(i: number, a: A) => Either<B, C>} f The iterating function.
 * @return {(fa: Stream<A>) => Separated<Stream<B>, Stream<C>>} A function that
 * takes a stream and returns a separate streams.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionMapWithIndex<A, B, C>(f: (i: number, a: A) => Either<B, C>): (fa: Stream<A>) => Separated<Stream<B>, Stream<C>>;

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
     *   fa: Stream<A>
     * ) => Separated<Stream<A>, Stream<B>>} A function that takes a stream
 * to separate it based on a given condition function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionWithIndex<A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (fa: Stream<A>) => Separated<Stream<A>, Stream<B>>;

/**
 * Same as [`partition`](#partition), but passing also the index to the
 * iterating function.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {PredicateWithIndex<number, A, B>} predicateWithIndex The predicate
 * function.
 * @return {<B extends A>(
     *   fa: Stream<B>
     * ) => Separated<Stream<B>, Stream<B>>} A function that takes a stream
 * to separate it based on a given condition function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionWithIndex<A>(predicateWithIndex: PredicateWithIndex<number, A>): <B extends A>(fb: Stream<B>) => Separated<Stream<B>, Stream<B>>;

/**
 * Same as [`partition`](#partition), but passing also the index to the
 * iterating function.
 *
 * @export
 * @template A The value type.
 * @param {PredicateWithIndex<number, A>} predicateWithIndex The predicate
 * function.
 * @return {(fa: Stream<A>) => Separated<Stream<A>, Stream<A>>} A function that
 * takes a stream to separate it based on a given condition function.
 *
 * @category filtering
 * @__PURE__
 */
export declare function partitionWithIndex<A>(predicateWithIndex: PredicateWithIndex<number, A>): (fa: Stream<A>) => Separated<Stream<A>, Stream<A>>;

/**
 * The `Pointed` category instance for {@link Stream}.
 *
 * @category model
 */
export declare const Pointed: Pointed1<URI>;

/**
 * Prepends an element to the front of the {@link Stream}, creating a new
 * {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {A} head The value to prepend to the stream.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream to
 * modify.
 *
 * @__PURE__
 */
export declare function prepend<A>(head: A): (fa: Stream<A>) => Stream<A>;

/**
 * Prepends an element to every member of a {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {A} middle The element to prepend.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream
 * to modify.
 *
 * @__PURE__
 */
export declare function prependAll<A>(middle: A): (fa: Stream<A>) => Stream<A>;

/**
 * Less strict version of {@link prepend}.
 *
 * @export
 * @template B The value type.
 * @param {B} head The value to prepend to the stream.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream to
 * modify.
 *
 * @__PURE__
 */
export declare function prependW<B>(head: B): <A>(fa: Stream<A>) => Stream<A | B>;

/**
 * Creates a range between an interval.
 *
 * *Note:* If `end` is not given, the range will be streaming the numbers
 * infinitely.
 *
 * @export
 * @param {number} start The start of the range.
 * @param {number} [end] The end of the range.
 * @return {Stream<number>} A {@link Stream} of numbers in the interval.
 *
 * @__PURE__
 */
export declare function range(start: number, end?: number): Stream<number>;

/**
 * Reduces a {@link Stream}.
 *
 * `reduce` executes the supplied iterating function on each element of the
 * stream in order, passing in the element and the return value from the
 * calculation on the preceding element.
 *
 * The first time that the iterating function is called there is no
 * "return value of the previous calculation", the initial value is used in
 * its place.
 *
 * @export
 * @template A The value type.
 * @template B The reducing value type.
 * @param {B} b The initial value.
 * @param {(b: B, a: A) => B} f The reducing function.
 * @return {(fa: Stream<A>) => B} Takes a stream and returns the reduced value.
 *
 * @category folding
 * @__PURE__
 */
export declare function reduce<A, B>(b: B, f: (b: B, a: A) => B): (fa: Stream<A>) => B;

/**
 * Same as {@link reduce} but applied from the end to the start.
 *
 * @export
 * @template A The value type.
 * @template B The reducing value type.
 * @param {B} b The initial value.
 * @param {(a: A, b: B) => B} f The reducing function.
 * @return {(fa: Stream<A>) => B} A function that takes a stream and returns
 * the reduced value.
 *
 * @category folding
 * @__PURE__
 */
export declare function reduceRight<A, B>(b: B, f: (a: A, b: B) => B): (fa: Stream<A>) => B;

/**
 * Same as {@link reduce} but applied from the end to the start.
 *
 * *Note*: The iterating function in this case takes the accumulator as the
 * last argument.
 *
 * @export
 * @template A The value type.
 * @template B The reducing value type.
 * @param {B} b The initial value.
 * @param {(i: number, b: B, a: A) => B} f The reducing function.
 * @return {(fa: Stream<A>) => B} A function that takes a stream and returns the
 * reduced value.
 */
export declare function reduceRightWithIndex<A, B>(b: B, f: (i: number, b: B, a: A) => B): (fa: Stream<A>) => B;

/**
 * Same as {@link reduce} but passing also the index to the iterating function.
 *
 * @export
 * @template A The value type.
 * @template B The reducing value type.
 * @param {B} b The initial value.
 * @param {(i: number, b: B, a: A) => B} f The reducing function.
 * @return {(fa: Stream<A>) => B} A function that takes a stream and returns
 * the reduced value.
 *
 * @category folding
 * @__PURE__
 */
export declare function reduceWithIndex<A, B>(b: B, f: (i: number, b: B, a: A) => B): (fa: Stream<A>) => B;

/**
 * Creates a {@link Stream} containing a value repeated the specified number
 * of times.
 *
 * *Note:* `n` is normalized to a non negative integer.
 *
 * @export
 * @template A The value type.
 * @param {number} n The count of the repetition.
 * @param {A} a The value to replicate.
 * @return {Stream<A>} The output stream.
 *
 * @__PURE__
 */
export declare function replicate<A>(n: number, a: A): Stream<A>;

/**
 * Reverses a {@link Stream} and returns another one.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The input stream.
 * @return {Stream<A>} The output stream.
 */
export declare function reverse<A>(fa: Stream<A>): Stream<A>;

/**
 * Extracts from a {@link Stream} all the `Right` elements.
 *
 * All the `Right` elements are extracted in order.
 *
 * @export
 * @template E The error type.
 * @template A The value type.
 * @param {Stream<Either<E, A>>} fa The input stream.
 * @return {Stream<A>} The output stream.
 *
 * @__PURE__
 */
export declare function rights<E, A>(fa: Stream<Either<E, A>>): Stream<A>;

/**
 * Rotates a {@link Stream} by `n` steps.
 *
 * If the `n` is less than zero, the {@link Stream} will be rotated to the
 * opposite direction and **this case will consume the stream**.
 *
 * For `n` greater or equal to zero,
 * _this function will not consume the stream._
 *
 * @export
 * @param {number} n The number of times to rotate.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream to
 * rotate.
 *
 * @__PURE__
 */
export declare function rotate(n: number): <A>(fa: Stream<A>) => Stream<A>;

/**
 * Same as `reduce` but it carries over the intermediate steps.
 *
 * @export
 * @template A The value type.
 * @template B The output value type.
 * @param {B} b The initial value.
 * @param {(b: B, a: A) => B} f The mapping function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream and
 * returns another.
 *
 * @__PURE__
 */
export declare function scanLeft<A, B>(b: B, f: (b: B, a: A) => B): (fa: Stream<A>) => Stream<B>;

/**
 * Fold a {@link Stream} from the right, keeping all intermediate results
 * instead of the final result.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @template B The output value type.
 * @param {B} b The initial value.
 * @param {(b: B, a: A) => B} f The mapping function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream and
 * returns another.
 *
 * @__PURE__
 */
export declare function scanRight<A, B>(b: B, f: (b: B, a: A) => B): (fa: Stream<A>) => Stream<B>;

/**
 * Separate a {@link Stream} of {@link Either}s into `Left` and `Right`s,
 * creating two new {@link Stream}s where one containing all the left
 * values and the other containing all the right values.
 *
 * @export
 * @template E The left value type.
 * @template A The right value type.
 * @param {Stream<Either<E, A>>} fa The input stream.
 * @return {Separated<Stream<E>, Stream<A>>} The separated output streams.
 *
 * @category filtering
 * @__PURE__
 */
export declare function separate<E, A>(fa: Stream<Either<E, A>>): Separated<Stream<E>, Stream<A>>;

/**
 * `sequence` takes a {@link Stream} where elements are {@link HKT} of `A` and
 * using an applicative of that {@link HKT}, returns an {@link HKT} of
 * {@link Stream}.
 * E.g. it can turn a `Stream<Either<Error, string>>` into an
 * `Either<Error, Stream<string>>`
 *
 * `sequence` requires an `Applicative` of the {@link HKT} you are targeting,
 * e.g. to turn an `Stream<Either<E, A>>` into an `Either<E, Stream<A>>`, it
 * needs an `Applicative` for `Either`, to turn a `Stream<Option<A>>` into an
 * `Option<Stream<A>>` it needs an `Applicative` for `Option`.
 *
 * @export
 * @template F The category type.
 * @param {Applicative<F>} F The applicative instance.
 * @return {<A>(ta: Kind<URI, HKT<F, A>>) => HKT<F, Kind<URI, A>>} A function
 * that will take a stream of given `HKT` and will return that `HKT` containing
 * a stream of its type.
 *
 * @category traversing
 * @__PURE__
 */
export declare function sequence<F extends URIS4>(F: Applicative4<F>): <S, R, E, A>(ta: Kind<URI, Kind4<F, S, R, E, A>>) => Kind4<F, S, R, E, Kind<URI, A>>;

export declare function sequence<F extends URIS3>(F: Applicative3<F>): <R, E, A>(ta: Kind<URI, Kind3<F, R, E, A>>) => Kind3<F, R, E, Kind<URI, A>>;

export declare function sequence<F extends URIS3, E>(F: Applicative3C<F, E>): <R, A>(ta: Kind<URI, Kind3<F, R, E, A>>) => Kind3<F, R, E, Kind<URI, A>>;

export declare function sequence<F extends URIS2>(F: Applicative2<F>): <E, A>(ta: Kind<URI, Kind2<F, E, A>>) => Kind2<F, E, Kind<URI, A>>;

export declare function sequence<F extends URIS2, E>(F: Applicative2C<F, E>): <A>(ta: Kind<URI, Kind2<F, E, A>>) => Kind2<F, E, Kind<URI, A>>;

export declare function sequence<F extends URIS>(F: Applicative1<F>): <A>(ta: Kind<URI, Kind<F, A>>) => Kind<F, Kind<URI, A>>;

export declare function sequence<F>(F: Applicative_2<F>): <A>(ta: Kind<URI, HKT<F, A>>) => HKT<F, Kind<URI, A>>;

/**
 * Equivalent to `ReadonlyArray.sequence(Applicative)`
 *
 * @export
 * @template A The value type.
 * @param {ReadonlyArray<Stream<A>>} arr The input array.
 * @return {Stream<ReadonlyArray<A>>} The output stream.
 *
 * @category traversing
 * @__PURE__
 */
export declare function sequenceArray<A>(arr: ReadonlyArray<Stream<A>>): Stream<ReadonlyArray<A>>;

/**
 * Calculates the number of elements in a {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The input stream.
 * @return {number} The number of elements.
 *
 * @__PURE__
 */
export declare function size<A>(fa: Stream<A>): number;

/**
 * Drops/skips the given amount of items from a {@link Stream}.
 *
 * @export
 * @param {number} count The number of elements to drop.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream and
 * returns another stream that skips the given amount of elements.
 *
 * @__PURE__
 */
export declare const skip: typeof dropLeft;

/**
 * Check if a predicate holds true for any {@link Stream} member.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => boolean} A function that takes a stream and
 * returns a boolean.
 *
 * @__PURE__
 */
export declare function some<A>(predicate: Predicate<A>): (fa: Stream<A>) => boolean;

/**
 * Spans a {@link Stream} from the left side of it based on a refinement.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Spanned<B, A>} A function that takes
 * a {@link Stream} and returns a {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanLeft<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Spanned<B, A>;

/**
 * Spans a {@link Stream} from the left side of it, based on a predicate.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fb: Stream<B>) => Spanned<B, B>} A function
 * that takes a {@link Stream} and returns a {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanLeft<A>(predicate: Predicate<A>): <B extends A>(fb: Stream<B>) => Spanned<B, B>;

/**
 * Spans a {@link Stream} from the left side of it, based on a predicate.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => Spanned<A, A>} A function that takes
 * a {@link Stream} and returns a {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanLeft<A>(predicate: Predicate<A>): (fa: Stream<A>) => Spanned<A, A>;

/**
 * Defines an interface where the `init` and the `rest` part of
 * the {@link Stream} based on a condition.
 *
 * @export
 * @interface Spanned
 * @template I The init part of the {@link Stream}.
 * @template R The rest of the {@link Stream}.
 */
export declare interface Spanned<I, R> {
    /**
     * The init part of the {@link Stream} where the condition was met.
     *
     * @type {Stream<I>}
     * @memberof Spanned
     */
    readonly init: Stream<I>;
    /**
     * The rest of the {@link Stream}.
     *
     * @type {Stream<R>}
     * @memberof Spanned
     */
    readonly rest: Stream<R>;
}

/**
 * Spans a {@link Stream} from the right side of it based on a refinement.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Spanned<B, A>} A function that takes
 * a {@link Stream} and returns a {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanRight<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Spanned<B, A>;

/**
 * Spans a {@link Stream} from the right side of it, based on a predicate.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fb: Stream<B>) => Spanned<B, B>} A function
 * that takes a {@link Stream} and returns a {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanRight<A>(predicate: Predicate<A>): <B extends A>(fb: Stream<B>) => Spanned<B, B>;

/**
 * Spans a {@link Stream} from the right side of it, based on a predicate.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => Spanned<A, A>} A function that takes
 * a {@link Stream} and returns a {@link Spanned} instance of it.
 *
 * @__PURE__
 */
export declare function spanRight<A>(predicate: Predicate<A>): (fa: Stream<A>) => Spanned<A, A>;

/**
 * Splits a {@link Stream} into two pieces, the first piece has max `n`
 * elements.
 *
 * @export
 * @param {number} n The number of elements the first stream will contain.
 * @return {(fa: Stream<A>) => Stream<Stream<A>>} A function that takes a stream
 * to split.
 *
 * @__PURE__
 */
export declare function splitAt(n: number): <A>(fa: Stream<A>) => Stream<Stream<A>>;

/**
 * Describes a function which returns a {@link Generator} of `A` values.
 *
 * @export
 * @interface Stream
 * @template A The value type.
 */
export declare type Stream<A> = () => Generator<A>;

/**
 * Gets all but the first element of a {@link Stream}, creating a new
 * {@link Stream}, or `None` if the {@link Stream} is empty.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The input stream.
 * @return {Option<Stream<A>>} An option of a stream whose first element is
 * excluded.
 *
 * @__PURE__
 */
export declare function tail<A>(fa: Stream<A>): None | Some<() => Generator<A, void, any>>;

/**
 * Takes given amount of items from a {@link Stream}.
 *
 * @export
 * @param {number} count The number of elements to take.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream and
 * returns another stream that contains only given amount of elements.
 *
 * @__PURE__
 */
export declare const take: typeof takeLeft;

/**
 * Takes given amount of items from a {@link Stream}.
 *
 * If negative value is passed, an empty {@link Stream} will be returned.
 *
 * @export
 * @param {number} count The number of elements to take.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream and
 * returns another stream that contains only given amount of elements.
 *
 * @__PURE__
 */
export declare function takeLeft(count: number): <A>(fa: Stream<A>) => Stream<A>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream
 * to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Stream<B>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fb: Stream<B>) => Stream<B>} A function that takes
 * a stream to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeLeftWhile<A>(predicate: Predicate<A>): <B extends A>(fb: Stream<B>) => Stream<B>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes
 * a stream to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeLeftWhile<A>(predicate: Predicate<A>): (fa: Stream<A>) => Stream<A>;

/**
 * Takes given amount of items from a {@link Stream} from the end to the start.
 *
 * If negative value is passed, an empty {@link Stream} will be returned.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @param {number} n The number of elements to take.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream and
 * returns another stream that contains only given amount of elements.
 *
 * @__PURE__
 */
export declare function takeRight(n: number): <A>(fa: Stream<A>) => Stream<A>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link Stream}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @template B The refined value type.
 * @param {Refinement<A, B>} refinement The refinement function.
 * @return {(fa: Stream<A>) => Stream<B>} A function that takes a stream
 * to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeRightWhile<A, B extends A>(refinement: Refinement<A, B>): (fa: Stream<A>) => Stream<B>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link Stream}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {<B extends A>(fb: Stream<B>) => Stream<B>} A function that takes
 * a stream to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeRightWhile<A>(predicate: Predicate<A>): <B extends A>(fb: Stream<B>) => Stream<B>;

/**
 * Calculates the longest initial substream for which all elements satisfying
 * the specified predicate, creating a new {@link Stream}.
 *
 * **Warning: This function consumes the stream.**
 *
 * @export
 * @template A The value type.
 * @param {Predicate<A>} predicate The predicate function.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes
 * a stream to take from the left as long as the condition holds true.
 *
 * @__PURE__
 */
export declare function takeRightWhile<A>(predicate: Predicate<A>): (fa: Stream<A>) => Stream<A>;

/**
 * Converts a {@link Stream} of type `A` to an array of `A`.
 *
 * @export
 * @template A The value type.
 * @param {Stream<A>} fa The stream source.
 * @return {A[]} The stream items as an array.
 *
 * @__PURE__
 */
export declare function toArray<A>(fa: Stream<A>): A[];

/**
 * Transposes the rows and columns of a 2D {@link Stream}.
 *
 * If some of the rows are shorter than the following rows, their elements are skipped.
 *
 * @export
 * @template A The type of the values.
 * @param {Stream<Stream<A>>} xs The stream of a stream of the values.
 * @return {Stream<Stream<A>>} A new stream of transposed values.
 *
 * @__PURE__
 */
export declare function transpose<A>(xs: Stream<Stream<A>>): Stream<Stream<A>>;

/**
 * Transposes the rows and columns of a 2D {@link Stream}.
 *
 * If some of the rows are shorter than the following rows, their elements are skipped.
 *
 * @export
 * @template A The type of the values.
 * @param {Stream<Array<A>>} xs The stream of the array of the values.
 * @return {Stream<Array<A>>} A new stream of transposed values.
 *
 * @__PURE__
 */
export declare function transposeArray<A>(xs: Stream<Array<A>>): Stream<Array<A>>;

/**
 * The `Traversable` category instance for {@link Stream}.
 *
 * @category traversing
 */
export declare const Traversable: Traversable1<URI>;

/**
 * The `TraversableWithIndex` category instance for {@link Stream}.
 *
 * @category traversing
 */
export declare const TraversableWithIndex: TraversableWithIndex1<URI, number>;

/**
 * Given an iterating function that returns a {@link HKT}, `traverse` applies
 * the iterating function to each element of the {@link Stream} and then
 * {@link sequence}-s the results using the provided `Applicative`.
 *
 * E.g. suppose you have a {@link Stream} and you want to format each element
 * with a function that returns a result or an error as
 * `f = (a: A) => Either<Error, B>`, using `traverse` you can apply `f` to all
 * elements and directly obtain as a result an `Either<Error, Stream<B>>`
 * i.e. a `Stream<B>` if all the results are `B`, or an `Error` if some of the
 * results are `Error`s.
 *
 * @export
 * @template F The category type.
 * @param {Applicative<F>} F The applicative instance.
 * @return {<A, B>(f: (a: A) => HKT<F, B>) => (ta: Kind<URI, A>) => HKT<F, Kind<URI, B>>}  A function
 * that will take a stream of given `HKT` and will return that `HKT` containing
 * a stream of its type.
 *
 * @category traversing
 * @__PURE__
 */
export declare function traverse<F extends URIS3>(F: Applicative3<F>): <A, R, E, B>(f: (a: A) => Kind3<F, R, E, B>) => (ta: Kind<URI, A>) => Kind3<F, R, E, Kind<URI, B>>;

export declare function traverse<F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B>(f: (a: A) => Kind3<F, R, E, B>) => (ta: Kind<URI, A>) => Kind3<F, R, E, Kind<URI, B>>;

export declare function traverse<F extends URIS2>(F: Applicative2<F>): <A, E, B>(f: (a: A) => Kind2<F, E, B>) => (ta: Kind<URI, A>) => Kind2<F, E, Kind<URI, B>>;

export declare function traverse<F extends URIS2, E>(F: Applicative2C<F, E>): <A, B>(f: (a: A) => Kind2<F, E, B>) => (ta: Kind<URI, A>) => Kind2<F, E, Kind<URI, B>>;

export declare function traverse<F extends URIS>(F: Applicative1<F>): <A, B>(f: (a: A) => Kind<F, B>) => (ta: Kind<URI, A>) => Kind<F, Kind<URI, B>>;

export declare function traverse<F>(F: Applicative_2<F>): <A, B>(f: (a: A) => HKT<F, B>) => (ta: Kind<URI, A>) => HKT<F, Kind<URI, B>>;

/**
 * Equivalent to `ReadonlyArray.traverse(Applicative)`
 *
 * @export
 * @template A The value type.
 * @template B The output type.
 * @param {(a: A) => Stream<B>} f The mapping function.
 * @return {(as: ReadonlyArray<A>) => Stream<ReadonlyArray<B>>} A function that
 * takes an array of `A` and returns a stream of array of `B`.
 *
 * @category traversing
 * @__PURE__
 */
export declare function traverseArray<A, B>(f: (a: A) => Stream<B>): (as: readonly A[]) => Stream<readonly B[]>;

/**
 * Given an iterating function that returns a {@link HKT}, `traverse` applies
 * the iterating function with index to each element of the {@link Stream} and
 * then {@link sequence}-s the results using the provided `Applicative`.
 *
 * E.g. suppose you have a {@link Stream} and you want to format each element
 * with a function that returns a result or an error as
 * `f = (i: number, a: A) => Either<Error, B>`, using `traverse` you can apply
 * `f` to all elements and directly obtain as a result an
 * `Either<Error, Stream<B>>` i.e. a `Stream<B>` if all the results are `B`,
 * or an `Error` if some of the results are `Error`s.
 *
 * @export
 * @template F The category type.
 * @param {Applicative<F>} F The applicative instance.
 * @return {<A, B>(f: (i: number, a: A) => HKT<F, B>) => (ta: Kind<URI, A>) => HKT<F, Kind<URI, B>>}  A function
 * that will take a stream of given `HKT` and will return that `HKT` containing
 * a stream of its type.
 *
 * @category traversing
 * @__PURE__
 */
export declare function traverseWithIndex<F extends URIS3>(F: Applicative3<F>): <A, R, E, B>(f: (i: number, a: A) => Kind3<F, R, E, B>) => (ta: Kind<URI, A>) => Kind3<F, R, E, Kind<URI, B>>;

export declare function traverseWithIndex<F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B>(f: (i: number, a: A) => Kind3<F, R, E, B>) => (ta: Kind<URI, A>) => Kind3<F, R, E, Kind<URI, B>>;

export declare function traverseWithIndex<F extends URIS2>(F: Applicative2<F>): <A, E, B>(f: (i: number, a: A) => Kind2<F, E, B>) => (ta: Kind<URI, A>) => Kind2<F, E, Kind<URI, B>>;

export declare function traverseWithIndex<F extends URIS2, E>(F: Applicative2C<F, E>): <A, B>(f: (i: number, a: A) => Kind2<F, E, B>) => (ta: Kind<URI, A>) => Kind2<F, E, Kind<URI, B>>;

export declare function traverseWithIndex<F extends URIS>(F: Applicative1<F>): <A, B>(f: (i: number, a: A) => Kind<F, B>) => (ta: Kind<URI, A>) => Kind<F, Kind<URI, B>>;

export declare function traverseWithIndex<F>(F: Applicative_2<F>): <A, B>(f: (i: number, a: A) => HKT<F, B>) => (ta: Kind<URI, A>) => HKT<F, Kind<URI, B>>;

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
 * @param {(b: B) => Option<readonly [ A, B ]>} f A function that recursively
 * provides value-seed tuple for the output stream.
 *
 * @returns {Stream<A>} The output stream.
 * @__PURE__
 */
export declare function unfold<A, B>(b: B, f: (b: B) => Option_2<readonly [A, B]>): Stream<A>;

/**
 * The `Unfoldable` category instance for {@link Stream}.
 */
export declare const Unfoldable: Unfoldable1<URI>;

/**
 * Creates a {@link Stream} of unique values, in order, from all given
 * {@link Stream}s using a {@link Eq} for equality comparisons.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {(xs: Stream<A>) => (ys: Stream<A>) => Stream<A>} A function that
 * takes streams.
 *
 * @__PURE__
 */
export declare function union<A>(E: Eq<A>): {
    (xs: Stream<A>): (ys: Stream<A>) => Stream<A>;
    (xs: Stream<A>, ys: Stream<A>): Stream<A>;
};

/**
 * Removes the duplicates from a {@link Stream}, keeping the first occurence of
 * an element.
 *
 * @export
 * @template A The value type.
 * @param {Eq<A>} E The equality instance.
 * @return {(fa: Stream<A>) => Stream<A>} A function that takes a stream to
 * keep its unique values.
 *
 * @__PURE__
 */
export declare function uniq<A>(E: Eq<A>): (fa: Stream<A>) => Stream<A>;

declare type UnwrapOutputs<SA extends ReadonlyArray<Stream<unknown>>, Output extends ReadonlyArray<unknown> = []> = SA extends readonly [
Stream<infer H>,
...infer R extends ReadonlyArray<Stream<unknown>>
] ? UnwrapOutputs<R, [...Output, H]> : Output;

/**
 * Reverse of {@link zip}.
 *
 * Takes a {@link Stream} of pairs and returns another {@link Stream} instance
 * yielding from both {@link Stream}s in-order.
 *
 * @export
 * @template A The value type of the first stream.
 * @template B The value type of the second stream.
 * @param {(Stream<Stream<A> | Stream<B>>)} mma The input stream of streams.
 * @return {(Stream<A | B>)} A stream of elements from both streams.
 *
 * @__PURE__
 */
export declare function unzip<A, B>(mma: Stream<Stream<A> | Stream<B>>): Stream<A | B>;

/**
 * Reverse of {@link zipArray}.
 *
 * Takes a {@link Stream} of pairs and returns a tuple of {@link Stream}s.
 *
 * @export
 * @template A The value type of the first stream.
 * @template B The value type of the second stream.
 * @param {(Stream<readonly [ A, B ]>)} mma The input stream of streams.
 * @return {[ Stream<A>, Stream<B> ]} A tuple of elements from both streams.
 *
 * @__PURE__
 */
export declare function unzipArray<A, B>(mma: Stream<readonly [A, B]>): [Stream<A>, Stream<B>];

/**
 * Changes the element at the specified index, creating a new {@link Stream}.
 *
 * @export
 * @template A The value type.
 * @param {number} i The index of element to modify.
 * @param {A} a The value to set.
 * @return {Stream<A>} The stream whose value at given
 * index is modified.
 *
 * @__PURE__
 */
export declare function updateAt<A>(i: number, a: A): (fa: Stream<A>) => Stream<A>;

/**
 * The type URI of the {@link Stream} instances.
 *
 * @category type lambdas
 */
export declare const URI = "fp-ts-stream/Stream";

/**
 * The type URI of the {@link Stream} instances.
 *
 * @category type lambdas
 */
export declare type URI = typeof URI;

/**
 * Partitions a structure with effects with given {@link Applicative} instance.
 *
 * @export
 * @template F The type of the applicative instance.
 * @param {Applicative<F>} F The applicative instance.
 * @return {<A, B, C>(
     *   f: (a: A) => HKT<F, Either<B, C>>
     * ) => (wa: Kind<URI, A>) => HKT<F, Separated<Kind<URI, B>, Kind<URI, C>>>} A
 * function that will map the value to a `HKT` of either of the mapped type `C`.
 *
 * @category model
 * @__PURE__
 */
export declare function wilt<F extends URIS3>(F: Applicative3<F>): <A, R, E, B, C>(f: (a: A) => Kind3<F, R, E, Either<B, C>>) => (wa: Kind<URI, A>) => Kind3<F, R, E, Separated<Kind<URI, B>, Kind<URI, C>>>;

export declare function wilt<F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B, C>(f: (a: A) => Kind3<F, R, E, Either<B, C>>) => (wa: Kind<URI, A>) => Kind3<F, R, E, Separated<Kind<URI, B>, Kind<URI, C>>>;

export declare function wilt<F extends URIS2>(F: Applicative2<F>): <A, E, B, C>(f: (a: A) => Kind2<F, E, Either<B, C>>) => (wa: Kind<URI, A>) => Kind2<F, E, Separated<Kind<URI, B>, Kind<URI, C>>>;

export declare function wilt<F extends URIS2, E>(F: Applicative2C<F, E>): <A, B, C>(f: (a: A) => Kind2<F, E, Either<B, C>>) => (wa: Kind<URI, A>) => Kind2<F, E, Separated<Kind<URI, B>, Kind<URI, C>>>;

export declare function wilt<F extends URIS>(F: Applicative1<F>): <A, B, C>(f: (a: A) => Kind<F, Either<B, C>>) => (wa: Kind<URI, A>) => Kind<F, Separated<Kind<URI, B>, Kind<URI, C>>>;

export declare function wilt<F>(F: Applicative_2<F>): <A, B, C>(f: (a: A) => HKT<F, Either<B, C>>) => (wa: Kind<URI, A>) => HKT<F, Separated<Kind<URI, B>, Kind<URI, C>>>;

/**
 * Filters a structure with effects with given {@link Applicative} instance.
 *
 * @export
 * @template F The type of the applicative instance.
 * @param {Applicative<F>} F The applicative instance.
 * @return {<A, B>(f: (a: A) => HKT<F, Option<B>>) => (ta: Kind<URI, A>) => HKT<F, Kind<URI, B>>} A
 * function that will map the value to a `HKT` of option of the mapped type `B`.
 *
 * @category model
 * @__PURE__
 */
export declare function wither<F extends URIS3>(F: Applicative3<F>): <A, R, E, B>(f: (a: A) => Kind3<F, R, E, Option_2<B>>) => (ta: Kind<URI, A>) => Kind3<F, R, E, Kind<URI, B>>;

export declare function wither<F extends URIS3, E>(F: Applicative3C<F, E>): <A, R, B>(f: (a: A) => Kind3<F, R, E, Option_2<B>>) => (ta: Kind<URI, A>) => Kind3<F, R, E, Kind<URI, B>>;

export declare function wither<F extends URIS2>(F: Applicative2<F>): <A, E, B>(f: (a: A) => Kind2<F, E, Option_2<B>>) => (ta: Kind<URI, A>) => Kind2<F, E, Kind<URI, B>>;

export declare function wither<F extends URIS2, E>(F: Applicative2C<F, E>): <A, B>(f: (a: A) => Kind2<F, E, Option_2<B>>) => (ta: Kind<URI, A>) => Kind2<F, E, Kind<URI, B>>;

export declare function wither<F extends URIS>(F: Applicative1<F>): <A, B>(f: (a: A) => Kind<F, Option_2<B>>) => (ta: Kind<URI, A>) => Kind<F, Kind<URI, B>>;

export declare function wither<F>(F: Applicative_2<F>): <A, B>(f: (a: A) => HKT<F, Option_2<B>>) => (ta: Kind<URI, A>) => HKT<F, Kind<URI, B>>;

/**
 * The `Witherable` category instance for {@link Stream}.
 *
 * @category model
 */
export declare const Witherable: Witherable1<URI>;

/**
 * The `Zero` category instance for {@link Stream}.
 *
 * @category model
 */
export declare const Zero: Zero1<URI>;

/**
 * Returns an empty {@link Stream} of type `A`.
 *
 * @export
 * @template A The value type.
 * @return {Stream<A>} A {@link Stream} instance that will yield no values.
 *
 * @category model
 * @__PURE__
 */
export declare function zero<A>(): Stream<A>;

/**
 * Takes two {@link Stream}s and returns a {@link Stream} of corresponding
 * pairs as {@link Stream}s yielding single elements.
 *
 * @export
 * @template B The value type.
 * @param {Stream<B>} fb The input stream.
 * @return {(<A>(fa: Stream<A>) => Stream<Stream<A | B>>)} A function
 * that takes another stream to zip.
 *
 * @see {@link zipArray}
 *
 * @__PURE__
 */
export declare function zip<B>(fb: Stream<B>): <A>(fa: Stream<A>) => Stream<Stream<A | B>>;

/**
 * Takes two {@link Stream}s and returns a {@link Stream} of corresponding
 * pairs as {@link Stream}s yielding single elements.
 *
 * @export
 * @template A The value of the first stream type.
 * @template B The value of the second stream type.
 * @param {Stream<A>} fa The first stream.
 * @param {Stream<B>} fb The second stream.
 * @return {Stream<Stream<A | B>>)} The output stream.
     *
     * @see {@link zipArray}
     *
     * @__PURE__
     */
 export declare function zip<A, B>(fa: Stream<A>, fb: Stream<B>): Stream<Stream<A | B>>;

 /**
  * Takes two {@link Stream}s and returns a {@link Stream} of corresponding
  * pairs as a tuple of both elements.
  *
  * @export
  * @template B The value type.
  * @param {Stream<B>} fb The input stream.
  * @return {<A>(fa: Stream<A>) => Stream<readonly [ A, B ]>} A function that
  * takes another stream to zip.
  *
  * @__PURE__
  */
 export declare function zipArray<B>(fb: Stream<B>): <A>(fa: Stream<A>) => Stream<readonly [A, B]>;

 /**
  * Takes two {@link Stream}s and returns a {@link Stream} of corresponding
  * pairs as a tuple of both elements.
  *
  * @export
  * @template A The value of the first stream type.
  * @template B The value of the second stream type.
  * @param {Stream<A>} fa The first stream.
  * @param {Stream<B>} fb The second stream.
  * @return {Stream<readonly [ A, B ]>} The output stream.
  *
  * @__PURE__
  */
 export declare function zipArray<A, B>(fa: Stream<A>, fb: Stream<B>): Stream<readonly [A, B]>;

 /**
  * Apply a function to pairs of elements at the same index in
  * two {@link Stream}s, collecting the results in a new {@link Stream}.
  *
  * If one input {@link Stream} is shorter, excess elements
  * of the other are discarded.
  *
  * @export
  * @template A The first value type.
  * @template B The second value type.
  * @template C The result value type.
  * @param {Stream<A>} fa The first stream.
  * @param {Stream<B>} fb The second stream.
  * @param {(a: A, b: B) => C} f The mapper function.
  * @return {Stream<C>} The output stream.
  *
  * @__PURE__
  */
 export declare function zipWith<A, B, C>(fa: Stream<A>, fb: Stream<B>, f: (a: A, b: B) => C): Stream<C>;

 export { }
