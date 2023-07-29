import {
    boxBoxCollision,
    circleCircleCollision,
    circlePointCollision,
    pointBoxCollision,
} from "./collision_detection";

describe("boxBoxCollision", () => {
    test("Test with valid arguments.", () => {
        // doesn't collide
        let result = boxBoxCollision(0, 0, 1, 1, 2, 2, 1, 1);
        expect(result).toBe(false);

        // boxes touching
        result = boxBoxCollision(0, 0, 2, 1, 2, 0, 1, 4);
        expect(result).toBe(true);

        // one box inside the other
        result = boxBoxCollision(0, 0, 2, 2, 0, 0, 1, 1);
        expect(result).toBe(true);
    });
});

describe("circleCircleCollision", () => {
    test("Test with valid arguments.", () => {
        // no collision
        let result = circleCircleCollision(0, 0, 2, 5, 5, 2);
        expect(result).toBe(false);

        // start of the collision
        result = circleCircleCollision(0, 0, 2, 4, 0, 2);
        expect(result).toBe(true);

        // second circle inside the first
        result = circleCircleCollision(0, 0, 4, 0, 0, 2);
        expect(result).toBe(true);
    });
});

describe("circlePointCollision", () => {
    test("Test with valid arguments.", () => {
        // no collision
        let result = circlePointCollision(0, 0, 4, 5, 5);
        expect(result).toBe(false);

        // point on the border of the circle
        result = circlePointCollision(0, 0, 4, 4, 0);
        expect(result).toBe(true);

        // point inside the circle
        result = circlePointCollision(0, 0, 4, 0, 0);
        expect(result).toBe(true);
    });
});

describe("pointBoxCollision", () => {
    test("Test with valid arguments.", () => {
        // no collision
        let result = pointBoxCollision(0, 0, 2, 2, 10, 10);
        expect(result).toBe(false);

        // point on the border of the box
        result = pointBoxCollision(10, 5, 0, 0, 10, 10);
        expect(result).toBe(true);

        // point inside the box
        result = pointBoxCollision(0, 0, -2, -2, 4, 4);
        expect(result).toBe(true);

        // point inside the box
        result = pointBoxCollision(2, 5, 0, 0, 10, 10);
        expect(result).toBe(true);
    });
});
