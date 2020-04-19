import { createEnum, deepClone } from "../source/utilities";

describe("deepClone", () => {
    test("Test with valid arguments.", () => {
        // clone of an array of numbers
        const test = [1, 2, 3];
        const copy = deepClone(test);

        test[0] = 4;

        expect(copy).not.toBe(test);

        // clone of an object
        const test2 = { one: 1, two: ["three", "four"] };
        const copy2 = deepClone(test2);

        test2.two.push("five");

        expect(test2.two.length !== copy2.two.length).toBe(true);
    });
});

describe("createEnum", () => {
    test("Test with valid arguments.", () => {
        const obj1 = createEnum(["one", "two"]);

        expect(obj1[0]).toBe("one");
        expect(obj1["1"]).toBe("two");
        expect(obj1["one"]).toBe(0);
        expect(obj1.two).toBe(1);

        const obj2 = createEnum(["hi", "there"], -4);

        expect(obj2[-4]).toBe("hi");
        expect(obj2["-3"]).toBe("there");
        expect(obj2["hi"]).toBe(-4);
        expect(obj2.there).toBe(-3);
    });
});
