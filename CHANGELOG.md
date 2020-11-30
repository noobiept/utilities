# Unreleased

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
