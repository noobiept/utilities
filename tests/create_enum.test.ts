import { createEnum } from "../source/utilities";

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
