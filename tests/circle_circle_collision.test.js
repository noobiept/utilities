import * as Utilities from "../source/utilities";

test("Test with valid arguments.", () => {
    // no collision
    var result = Utilities.circleCircleCollision(0, 0, 2, 5, 5, 2);
    expect(result).toBe(false);

    // start of the collision
    result = Utilities.circleCircleCollision(0, 0, 2, 4, 0, 2);
    expect(result).toBe(true);

    // second circle inside the first
    result = Utilities.circleCircleCollision(0, 0, 4, 0, 0, 2);
    expect(result).toBe(true);
});
