import * as Utilities from "../source/utilities";

test("Test with valid arguments.", () => {
    // no collision
    var result = Utilities.pointBoxCollision(0, 0, 2, 2, 10, 10);
    expect(result).toBe(false);

    // point on the border of the box
    result = Utilities.pointBoxCollision(10, 5, 0, 0, 10, 10);
    expect(result).toBe(true);

    // point inside the box
    result = Utilities.pointBoxCollision(0, 0, -2, -2, 4, 4);
    expect(result).toBe(true);

    // point inside the box
    result = Utilities.pointBoxCollision(2, 5, 0, 0, 10, 10);
    expect(result).toBe(true);
});
