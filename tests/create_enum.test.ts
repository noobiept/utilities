import * as Utilities from "../source/utilities";

test("Validate arguments.", () => {
    // no arguments given
    expect(function () {
        Utilities.createEnum();
    }).toThrow();

    // needs to be an array
    expect(function () {
        Utilities.createEnum("one");
    }).toThrow();
});

test("Test with valid arguments.", () => {
    var obj1 = Utilities.createEnum(["one", "two"]);

    expect(obj1[0]).toBe("one");
    expect(obj1["1"]).toBe("two");
    expect(obj1["one"]).toBe(0);
    expect(obj1.two).toBe(1);

    var obj2 = Utilities.createEnum(["hi", "there"], -4);

    expect(obj2[-4]).toBe("hi");
    expect(obj2["-3"]).toBe("there");
    expect(obj2["hi"]).toBe(-4);
    expect(obj2.there).toBe(-3);
});
