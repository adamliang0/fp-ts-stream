# Changelog
This file contains the changes made to the package

This sections are in descending order of the change date.



## [0.1.19] - 2025-11-19
### Added
- Comprehensive documentation in `docs/` directory covering AsyncStream and Stream APIs
- Unit tests for Stream functionalities including alternative, applicative, chain, compactable, conversions, filterable, and functor
- Unit tests for Stream utilities including intersperse, isEmpty, last, lefts, lookup, makeBy, match-left, match-right, match, range, take-left, and zip-with
- Unit tests for Stream transformations including eq, from-either, from-io, from-option, from-predicate, magma, monoid, semigroup, and show
- Comprehensive tests for AsyncStream functionalities including alt, chain, conversions, and transformations
- Husky for git hooks
- Biome for linting and formatting
- Vitest for testing
- RSLib for building
- Pre-commit hook for code quality

### Changed
- Switched package manager from npm/yarn to Bun
- Updated imports to use `fp-ts/*` instead of `fp-ts/lib/*`
- Reorganized exports in AsyncStream module
- Updated base TypeScript configuration
- Updated test scripts to use Vitest

### Fixed
- Updated import types in concat to use type-only imports
- Fixed imports in fromAsyncPredicate to use type-only imports and adjusted return logic

### Removed
- Removed commitlint configuration file

## [0.1.11] - 2023-06-04
### Added
- `minimum` and `maximum` functions for both `Stream` and `AsyncStream`.
- `allM` and `anyM` functions that checks if all/any of the values that `Stream`
generates is `true`.
- `cartesian` function for both `Stream` and `AsyncStream`.
- `countBy` function for both `Stream` and `AsyncStream`.
- `filterA` function for `Stream`.
- `transpose` function for both `Stream` and `AsyncStream`.

### Changed
- `fp-ts` and `tslib` dependencies are now `peerDependencies`.

## [0.1.10] - 2022-10-03
### Changes
Updated `README` file example.

## [0.1.9] - 2022-09-30
### Changes

Updated types to provide `async` functions

Now the following functions may also take functions that
return `Promise` for their results:
- `comprehension`
- `dropRightWhile`
- `findFirstMap`
- `findLastMap`
- `flap`
- `tail`
- `apSeq`
- `ap`
- `filterMapWithIndex`
- `filterMap`
- `partitionMap`
- `partitionMapWithIndex`
- `unfold`


Likewise the following instance implementations are updated:

- `ApplicativeSeq`
- `Applicative`
- `Filterable`
- `Unfoldable`


## [0.1.0] - 2022-09-26
Added initial commit

[0.1.19]: https://github.com/adamliang0/fp-ts-stream/compare/0.1.11...0.1.19
[0.1.11]: https://github.com/incetarik/fp-ts-stream/compare/0.1.10...0.1.11
[0.1.10]: https://github.com/incetarik/fp-ts-stream/compare/0.1.9...0.1.10
[0.1.9]: https://github.com/incetarik/fp-ts-stream/compare/0.1.8...0.1.9
[0.1.0]: https://github.com/incetarik/fp-ts-stream
