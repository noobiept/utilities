import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function () {
        Utilities.toRadians();
    }).toThrow();

    // passed string argument
    expect(function () {
        Utilities.toRadians("hi");
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var result = Utilities.toRadians(0);
    expect(result).toBe(0);

    result = Utilities.toRadians(90);
    expect(result).toBe(Math.PI / 2);

    result = Utilities.toRadians(270);
    expect(result).toBe((3 / 2) * Math.PI);
});
