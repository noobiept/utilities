/**
 * Returns the angle between 2 points in radians.
 * Positive in clockwise direction.
 */
export function calculateAngle(aX: number, aY: number, bX: number, bY: number) {
    // make a triangle from the position the objectA is in, relative to the objectB position
    const triangleOppositeSide = aY - bY;
    const triangleAdjacentSide = bX - aX;

    // find the angle, given the two sides (of a right triangle)
    return Math.atan2(triangleOppositeSide, triangleAdjacentSide);
}

/**
 * Distance between 2 points.
 */
export function calculateDistance(
    aX: number,
    aY: number,
    bX: number,
    bY: number
) {
    const opposite = bY - aY;
    const adjacent = bX - aX;

    return Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
}

/**
 * Converts a number in `radians` to `degrees` and returns it.
 */
export function toDegrees(radians: number) {
    return (radians * 180) / Math.PI;
}

/**
 * Converts a number in `degrees` to `radians` and returns it.
 */
export function toRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
}
