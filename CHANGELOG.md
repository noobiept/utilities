# Legend

❗ = breaking change

# Unreleased

# v7.0.0 - 31/05/2026

## Changed

- ❗ `isString` and `isBoolean` no longer accept boxed wrapper objects (`new String(...)` / `new Boolean(...)`); they now only match primitives, consistent with `isNumber`.
- `isArray` now narrows its argument with a TypeScript type guard (`element is any[]`).
- Simplified `isNumber`'s implementation (removed a redundant `parseFloat` check); behavior is unchanged.

## Added

- `async` module: `sleep`, `withTimeout`, `deferred`, `retry`, `pollUntil`, `debounce`, `throttle`, and a `TimeoutError` class.
- `random` module: `pickOne`, `pickN`, `weightedPick`, and a seedable `seededRandom` generator.
- `string` module: `slugify`, `truncate`, `capitalize`, `escapeHtml`, `escapeRegExp`, `randomString`, and `template`.

## Fixed

- `isFunction` now returns `true` for `async`, generator, and async-generator functions (it previously returned `false` for them).

# v6.4.0 - 14/05/2026

## Changed

- Replaced jest with vitest as the test runner.
- Modernized the TypeScript config (`moduleResolution: bundler`, `module: esnext`, explicit `rootDir`).
- Updated package dependencies.

## Added

- `exports` field in `package.json` with conditional exports (types/import/require).

## Fixed

- Test files (`*.test.d.ts`) are no longer published to npm.
- Re-added e2e tests to the CI pipeline.

# v6.3.2 - 23/01/2026

## Changed

- Updated dependencies.

## Fixed

- Audio loading issue in `Preload`.
- Failed IDs tracking on error/abort in `Preload`.

# v6.3.0 - 08/02/2025

## Changed

- Replaced cypress with playwright for e2e tests.
- Replaced npm with pnpm for package manager.
- Upgraded package dependencies to latest versions.

# v6.2.1 - 14/07/2024

## Fixed

- Import issue due to file extensions.

# v6.2.0 - 27/06/2024

## Changed

- Updated node and package dependencies.

# v6.1.3 - 10/09/2023

## Fixed

- Fix issue in `timeToString` where when time was `0` it didn't respected the internationalization.

# V6.1.2 - 30/07/2023

## Fixed

- Type definitions not being loaded correctly.

# v6.1.1 - 30/07/2023

## Fixed

- Build issue.
- Generate documentation as markdown.

# v6.1.0 - 30/07/2023

## Changed

- Changes in `timeToString`.
    - Add `short_string` format.
    - Add `internationalization` argument to replace the display value of the result (when using the `string` or `short_string` formats).

# v6.0.0 - 18/05/2022

## Added

- New format type `partial_daytime` added to the `timeToString` function.

## Changed

- `Timer` class arguments was adjusted. ❗
- In the `timeToString` function, `units` now default to `undefined` instead of `2`, which makes it show all non-zero units (if `format` has value `string`). ❗
- Updated NodeJS and dependencies.
- `Timer` class now accepts the same arguments as in the `timeToString` function to control how the time is displayed on the html element (also allows a custom function instead).

# v5.1.0 - 15/08/2021

## Changed

- Updated NodeJS and dependencies to latest versions.
- Improve some npm scripts.

# v5.0.0 - 30/11/2020

## Added

- End to end tests with cypress.

## Changed

- Improved dialog class.
    - Add option to close the dialog on overlay click.
    - Add option to not show the buttons or to add a custom implementation.
    - Make some properties 'readonly' instead of 'private'.
- Improve the build system.
- Renamed the 'MOUSE_CODE' dictionary to the 'MouseButton' enum.

## Removed

- The 'KEY_CODE' dictionary (use the 'KeyboardEvent.key' or '.code' instead).

# v4.0.0 - 22/04/2020

## Added

- A changelog file.
- A 'Preload' class to pre-load assets (audio/images/etc).
- A 'EventDispatcher' class to handle events.
- Add a code linter (eslint).

## Changed

- Improve the build system.
- Remove runtime type checks from some functions.
- Reworked the 'getSeveralRandomInts()' function.
- Add new function 'range()', that creates an array with all the numbers in-between the given range.
