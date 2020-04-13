import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function () {
        Utilities.toDegrees();
    }).toThrow();

    // passed string argument
    expect(function () {
        Utilities.toDegrees("hi");
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var result = Utilities.toDegrees(0);
    expect(result).toBe(0);

    result = Utilities.toDegrees(Math.PI / 2);
    expect(result).toBe(90);

    result = Utilities.toDegrees((3 / 2) * Math.PI);
    expect(result).toBe(270);
});
