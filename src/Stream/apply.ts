import {
	type Apply1,
	apFirst as applyApFirst,
	apS as applyApS,
	apSecond as applyApSecond,
} from "fp-ts/Apply";

import { Applicative } from "./applicative";
import { Functor } from "./functor";
import { URI } from "./uri";

/**
 * The `Apply` category instance for {@link Stream}.
 */
export const Apply: Apply1<URI> = {
	URI,
	ap: Applicative.ap,
	map: Functor.map,
};

/**
 * Combine two effectful actions, keeping only the result of the first.
 */
export const apFirst = applyApFirst(Apply);

/**
 * Combine two effectful actions, keeping only the result of the second.
 */
export const apSecond = applyApSecond(Apply);

/**
 * @category do notation
 */
export const apS = applyApS(Apply);
