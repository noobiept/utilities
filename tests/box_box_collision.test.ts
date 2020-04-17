import * as Utilities from "../source/utilities";

test("Test with valid arguments.", () => {
    // doesn't collide
    var result = Utilities.boxBoxCollision(0, 0, 1, 1, 2, 2, 1, 1);
    expect(result).toBe(false);

    // boxes touching
    result = Utilities.boxBoxCollision(0, 0, 2, 1, 2, 0, 1, 4);
    expect(result).toBe(true);

    // one box inside the other
    result = Utilities.boxBoxCollision(0, 0, 2, 2, 0, 0, 1, 1);
    expect(result).toBe(true);
});
