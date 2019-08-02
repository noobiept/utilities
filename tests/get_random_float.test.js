import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function() {
        Utilities.getRandomFloat();
    }).toThrow();

    // only one argument
    expect(function() {
        Utilities.getRandomFloat(1);
    }).toThrow();

    // passed string arguments
    expect(function() {
        Utilities.getRandomFloat("asd", "dsa");
    }).toThrow();

    // max less than min
    expect(function() {
        Utilities.getRandomFloat(4.22, 2);
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var ok;

    // inclusive limits
    var result = Utilities.getRandomFloat(2, 2);
    expect(result).toBe(2);

    // a random value between the limits
    result = Utilities.getRandomFloat(-4.44, 4.44);
    ok = result >= -4.44 && result <= 4.44;
    expect(ok).toBe(true);

    // zero in one of the range limits
    result = Utilities.getRandomFloat(0, 4.123);
    ok = result >= 0 && result <= 4.123;

    expect(ok).toBe(true);
});
