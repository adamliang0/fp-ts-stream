import type { Eq } from "fp-ts/Eq";
import type { Magma } from "fp-ts/Magma";

import type { Stream } from "../uri";
import { difference } from "../utils/difference";

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
export function getDifferenceMagma<A>(E: Eq<A>): Magma<Stream<A>> {
	const differenceE = difference(E);
	return {
		concat(first, second) {
			return differenceE(second, first);
		},
	};
}
