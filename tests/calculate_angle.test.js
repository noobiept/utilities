import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function() {
        Utilities.calculateAngle();
    }).toThrow();

    // only one argument
    expect(function() {
        Utilities.calculateAngle(1);
    }).toThrow();

    // only two arguments
    expect(function() {
        Utilities.calculateAngle(1, 2);
    }).toThrow();

    // only three arguments
    expect(function() {
        Utilities.calculateAngle(1, 2, 3);
    }).toThrow();

    // passed string arguments
    expect(function() {
        Utilities.calculateAngle("hi", "there");
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var result = Utilities.calculateAngle(0, 0, 4, 0);
    expect(result).toBe(0);

    result = Utilities.calculateAngle(0, 0, 0, 4);
    expect(result).toBe(-Math.PI / 2);

    result = Utilities.calculateAngle(0, 0, -4, 0);
    expect(result).toBe(Math.PI);

    result = Utilities.calculateAngle(0, 0, 0, -4);
    expect(result).toBe(Math.PI / 2);
});
