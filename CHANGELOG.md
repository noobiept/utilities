# Legend

❗ = breaking change

# Unreleased

# v6.2.1 - 14/07/2024

## Fixed

-   Import issue due to file extensions.

# v6.2.0 - 27/06/2024

## Changed

-   Updated node and package dependencies.

# v6.1.3 - 10/09/2023

## Fixed

-   Fix issue in `timeToString` where when time was `0` it didn't respected the internationalization.

# V6.1.2 - 30/07/2023

## Fixed

-   Type definitions not being loaded correctly.

# v6.1.1 - 30/07/2023

## Fixed

-   Build issue.
-   Generate documentation as markdown.

# v6.1.0 - 30/07/2023

## Changed

-   Changes in `timeToString`.
    -   Add `short_string` format.
    -   Add `internationalization` argument to replace the display value of the result (when using the `string` or `short_string` formats).

# v6.0.0 - 18/05/2022

## Added

-   New format type `partial_daytime` added to the `timeToString` function.

## Changed

-   `Timer` class arguments was adjusted. ❗
-   In the `timeToString` function, `units` now default to `undefined` instead of `2`, which makes it show all non-zero units (if `format` has value `string`). ❗
-   Updated NodeJS and dependencies.
-   `Timer` class now accepts the same arguments as in the `timeToString` function to control how the time is displayed on the html element (also allows a custom function instead).

# v5.1.0 - 15/08/2021

## Changed

-   Updated NodeJS and dependencies to latest versions.
-   Improve some npm scripts.

# v5.0.0 - 30/11/2020

## Added

-   End to end tests with cypress.

## Changed

-   Improved dialog class.
    -   Add option to close the dialog on overlay click.
    -   Add option to not show the buttons or to add a custom implementation.
    -   Make some properties 'readonly' instead of 'private'.
-   Improve the build system.
-   Renamed the 'MOUSE_CODE' dictionary to the 'MouseButton' enum.

## Removed

-   The 'KEY_CODE' dictionary (use the 'KeyboardEvent.key' or '.code' instead).

# v4.0.0 - 22/04/2020

## Added

-   A changelog file.
-   A 'Preload' class to pre-load assets (audio/images/etc).
-   A 'EventDispatcher' class to handle events.
-   Add a code linter (eslint).

## Changed

-   Improve the build system.
-   Remove runtime type checks from some functions.
-   Reworked the 'getSeveralRandomInts()' function.
-   Add new function 'range()', that creates an array with all the numbers in-between the given range.
