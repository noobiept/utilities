import { isNumber } from "./is_type";

/**
 * Returns the angle between 2 points in radians.
 * Positive in clockwise direction.
 *
 * Throws an `Error` exception if:
 * - any of the arguments isn't a number.
 */
export function calculateAngle(aX: number, aY: number, bX: number, bY: number) {
    if (!isNumber(aX) || !isNumber(aY) || !isNumber(bX) || !isNumber(bY)) {
        throw new Error(
            "Utilities.calculateAngle() -> Invalid arguments. Needs to be a number."
        );
    }

    // make a triangle from the position the objectA is in, relative to the objectB position
    var triangleOppositeSide = aY - bY;
    var triangleAdjacentSide = bX - aX;

    // find the angle, given the two sides (of a right triangle)
    return Math.atan2(triangleOppositeSide, triangleAdjacentSide);
}

/**
 * Distance between 2 points.
 *
 * Throws an `Error` exception if:
 * - any of the arguments isn't a number.
 */
export function calculateDistance(
    aX: number,
    aY: number,
    bX: number,
    bY: number
) {
    if (!isNumber(aX) || !isNumber(aY) || !isNumber(bX) || !isNumber(bY)) {
        throw new Error(
            "Utilities.calculateDistance() -> Invalid arguments. Needs to be a number."
        );
    }

    var opposite = bY - aY;
    var adjacent = bX - aX;

    return Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
}

/**
 * Converts a number in `radians` to `degrees` and returns it.
 *
 * Throws an `Error` exception if:
 * - the argument isn't a number.
 */
export function toDegrees(radians: number) {
    if (!isNumber(radians)) {
        throw new Error(
            "Utilities.toDegrees() -> Invalid 'radians' argument. Not a number."
        );
    }

    return (radians * 180) / Math.PI;
}

/**
 * Converts a number in `degrees` to `radians` and returns it.
 *
 * Throws an `Error` exception if:
 * - the argument isn't a number.
 */
export function toRadians(degrees: number) {
    if (!isNumber(degrees)) {
        throw new Error(
            "Utilities.toRadians() -> Invalid 'degrees' argument. Not a number."
        );
    }

    return (degrees * Math.PI) / 180;
}
