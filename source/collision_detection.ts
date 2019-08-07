/**
 * Detects collision between 2 boxes.
 */
export function boxBoxCollision(
    oneX: number,
    oneY: number,
    oneWidth: number,
    oneHeight: number,
    twoX: number,
    twoY: number,
    twoWidth: number,
    twoHeight: number
) {
    return !(
        oneY + oneHeight < twoY ||
        oneY > twoY + twoHeight ||
        oneX > twoX + twoWidth ||
        oneX + oneWidth < twoX
    );
}

/**
 * Detects collision between two circles.
 */
export function circleCircleCollision(
    x1: number,
    y1: number,
    radius1: number,
    x2: number,
    y2: number,
    radius2: number
) {
    var distX = x1 - x2;
    var distY = y1 - y2;

    if (
        Math.pow(distX, 2) + Math.pow(distY, 2) <=
        Math.pow(radius1 + radius2, 2)
    ) {
        return true;
    }

    return false;
}

/**
 * Detects collision between a circle and a point.
 */
export function circlePointCollision(
    circleX: number,
    circleY: number,
    circleRadius: number,
    pointX: number,
    pointY: number
) {
    var distanceX = circleX - pointX;
    var distanceY = circleY - pointY;

    // pythagoras
    var squareDistance = distanceX * distanceX + distanceY * distanceY;

    if (squareDistance <= circleRadius * circleRadius) {
        return true;
    }

    return false;
}

/**
 * Detects collision between a point and a box.
 */
export function pointBoxCollision(
    pointX: number,
    pointY: number,
    boxX: number,
    boxY: number,
    boxWidth: number,
    boxHeight: number
) {
    if (
        pointX < boxX ||
        pointX > boxX + boxWidth ||
        pointY < boxY ||
        pointY > boxY + boxHeight
    ) {
        return false;
    }

    return true;
}
