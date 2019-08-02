import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function() {
        Utilities.numberOfDigits();
    }).toThrow();

    // passed string argument
    expect(function() {
        Utilities.numberOfDigits("asd");
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var result = Utilities.numberOfDigits(4);
    expect(result).toBe(1);

    result = Utilities.numberOfDigits(12);
    expect(result).toBe(2);

    result = Utilities.numberOfDigits(-12);
    expect(result).toBe(2);

    result = Utilities.numberOfDigits(12.11);
    expect(result).toBe(4);

    result = Utilities.numberOfDigits(-12.34);
    expect(result).toBe(4);
});
