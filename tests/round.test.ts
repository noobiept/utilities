import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given.
    expect(function () {
        Utilities.round();
    }).toThrow();

    // only one argument
    expect(function () {
        Utilities.round(1.1);
    }).toThrow();

    // string arguments
    expect(function () {
        Utilities.round("hi", "there");
    }).toThrow();

    // float decimal case
    expect(function () {
        Utilities.round(4.22, 2.2);
    }).toThrow();

    // negative decimal case
    expect(function () {
        Utilities.round(4.22, -2);
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var result = Utilities.round(4.22, 1);
    expect(result).toBe(4.2);

    result = Utilities.round(4.25, 1);
    expect(result).toBe(4.3);

    result = Utilities.round(-4.5, 0);
    expect(result).toBe(-4);
});
