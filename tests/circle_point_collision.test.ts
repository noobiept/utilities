import * as Utilities from "../source/utilities";

test("Test with valid arguments.", () => {
    // no collision
    var result = Utilities.circlePointCollision(0, 0, 4, 5, 5);
    expect(result).toBe(false);

    // point on the border of the circle
    result = Utilities.circlePointCollision(0, 0, 4, 4, 0);
    expect(result).toBe(true);

    // point inside the circle
    result = Utilities.circlePointCollision(0, 0, 4, 0, 0);
    expect(result).toBe(true);
});
