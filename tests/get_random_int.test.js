import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function () {
        Utilities.getRandomInt();
    }).toThrow();

    // only one argument
    expect(function () {
        Utilities.getRandomInt(1);
    }).toThrow();

    // passed string arguments
    expect(function () {
        Utilities.getRandomInt("hi", "there");
    }).toThrow();

    // max less than min
    expect(function () {
        Utilities.getRandomInt(3, 2);
    }).toThrow();

    // passed a float value to 1st argument
    expect(function () {
        Utilities.getRandomInt(2.7, 3);
    }).toThrow();

    // passed a float to the 2nd argument
    expect(function () {
        Utilities.getRandomInt(1, 2.1);
    }).toThrow();
});

test("Test with valid arguments.", () => {
    // inclusive limits
    var result = Utilities.getRandomInt(4, 4);
    expect(result).toBe(4);

    // a value between -4 and 4
    result = Utilities.getRandomInt(-4, 4);
    var within = result >= -4 && result <= 4;

    expect(within).toBe(true);

    // zero in one of the range limits
    result = Utilities.getRandomInt(0, 2);
    within = result >= 0 && result <= 2;

    expect(within).toBe(true);
});
