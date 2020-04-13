import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function () {
        Utilities.calculateDistance();
    }).toThrow();

    // only one argument
    expect(function () {
        Utilities.calculateDistance(1);
    }).toThrow();

    // only two arguments
    expect(function () {
        Utilities.calculateDistance(1, 2);
    }).toThrow();

    // only three arguments
    expect(function () {
        Utilities.calculateDistance(1, 2, 3);
    }).toThrow();

    // passed string arguments
    expect(function () {
        Utilities.calculateDistance("hi", "there");
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var result = Utilities.calculateDistance(0, 0, 4, 0);
    expect(result).toBe(4);

    result = Utilities.calculateDistance(0, 0, 4, 10);
    expect(result).toBe(Math.sqrt(4 * 4 + 10 * 10));

    result = Utilities.calculateDistance(0, 0, -4, -5);
    expect(result).toBe(Math.sqrt(4 * 4 + 5 * 5));
});
