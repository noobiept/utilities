import * as Utilities from "../source/utilities";

test("Test with valid arguments.", () => {
    // clone of an array of numbers
    var test = [1, 2, 3];
    var copy = Utilities.deepClone(test);

    test[0] = 4;

    expect(copy).not.toBe(test);

    // clone of an object
    var test2 = { one: 1, two: ["three", "four"] };
    var copy2 = Utilities.deepClone(test2);

    test2.two.push("five");

    expect(test2.two.length !== copy2.two.length).toBe(true);
});
