import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function () {
        Utilities.shuffle();
    }).toThrow();

    // wrong argument type
    expect(function () {
        Utilities.shuffle(1);
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var test = [1, 2, 3, 4];
    var length = test.length;

    Utilities.shuffle(test);

    // should still have the same length
    expect(test.length).toBe(length);

    // see if the same values are still there (just on different order)
    expect(test.indexOf(1) >= 0).toBe(true);
    expect(test.indexOf(2) >= 0).toBe(true);
    expect(test.indexOf(3) >= 0).toBe(true);
    expect(test.indexOf(4) >= 0).toBe(true);
});
