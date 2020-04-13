import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function () {
        Utilities.saveObject();
    }).toThrow();

    // passed a number for the key argument
    expect(function () {
        Utilities.saveObject(4, 4);
    }).toThrow();

    // no arguments given
    expect(function () {
        Utilities.getObject();
    }).toThrow();

    // passed a number for the key argument
    expect(function () {
        Utilities.getObject(4);
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var key = "test";
    var returnedValue;

    var testValues = [4, "hi there", { one: 2, three: [4, 5] }];

    for (var a = 0; a < testValues.length; a++) {
        var value = testValues[a];

        Utilities.saveObject(key, value);
        returnedValue = Utilities.getObject(key);

        expect(returnedValue).toStrictEqual(value);
    }
});
