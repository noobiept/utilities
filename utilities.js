/*
    dependencies:
        - underscorejs : 1.6
 */

(function(window)
{
function Utilities()
{

}

/*
    Returns a random integer number between 'min' and 'max' (inclusive).

    Returns null if:
        - min or max isn't a number
        - the minimum value is bigger than the maximum.
 */

Utilities.getRandomInt = function( min, max )
{
if ( !min || !_.isFinite( min ) || (min % 1 !== 0) ||
     !max || !_.isFinite( max ) || (max % 1 !== 0) ||
    (min > max) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.floor( Math.random() * (max - min + 1) ) + min;
};

/*
    Returns several different random integers, in the range between 'min' and 'max' (inclusive).

    Returns null if:
        - min, max or howMany isn't a number
        - the minimum value is bigger than the maximum
        - the range is less than the number of integers required
 */

Utilities.getSeveralRandomInts = function( min, max, howMany )
{
if ( _.isNaN( min ) ||
     _.isNaN( max ) ||
     _.isNaN( howMany ) ||
    (min > max) ||
    ((max - min) < howMany) )
    {
    throw new Error( 'Invalid arguments.' );
    }

var numbers = [];

while( numbers.length < howMany )
    {
    var randomNumber = Utilities.getRandomInt( min, max );

    if ( numbers.indexOf( randomNumber ) < 0 )
        {
        numbers.push( randomNumber );
        }
    }

return numbers;
};



/*
    Returns a random float number between 'min' and 'max' (inclusive).

    Returns null if:
        - either min or max is not a number
        - the minimum value is bigger than the maximum.
 */

Utilities.getRandomFloat = function( min, max )
{
if ( _.isNaN( min ) ||
     _.isNaN( max ) ||
    (min > max) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.random() * (max - min) + min;
};



/*
    Returns a deep clone/copy of the object.
 */

Utilities.deepClone = function( obj )
{
return JSON.parse( JSON.stringify( obj ) );
};



Utilities.KEY_CODE = {

    backspace  : 8,
    tab        : 9,
    enter      : 13,
    esc        : 27,
    space      : 32,
    end        : 35,
    home       : 36,
    leftArrow  : 37,
    upArrow    : 38,
    rightArrow : 39,
    downArrow  : 40,
    del        : 46,

    "0" : 48,
    "1" : 49,
    "2" : 50,
    "3" : 51,
    "4" : 52,
    "5" : 53,
    "6" : 54,
    "7" : 55,
    "8" : 56,
    "9" : 57,

    a : 65,
    b : 66,
    c : 67,
    d : 68,
    e : 69,
    f : 70,
    g : 71,
    h : 72,
    i : 73,
    j : 74,
    k : 75,
    l : 76,
    m : 77,
    n : 78,
    o : 79,
    p : 80,
    q : 81,
    r : 82,
    s : 83,
    t : 84,
    u : 85,
    v : 86,
    w : 87,
    x : 88,
    y : 89,
    z : 90,

    f1  : 112,
    f2  : 113,
    f3  : 114,
    f4  : 115,
    f5  : 116,
    f6  : 117,
    f7  : 118,
    f8  : 119,
    f9  : 120,
    f10 : 121,
    f11 : 122,
    f12 : 123

};


Utilities.MOUSE_CODE = {
    left   : 0,
    middle : 1,
    right  : 2
};


/*
    Returns the angle between 2 points in radians.

    Returns null if:
        - any of the arguments isn't a number
 */

Utilities.calculateAngle = function( aX, aY, bX, bY )
{
if ( _.isNaN( aX ) ||
     _.isNaN( aY ) ||
     _.isNaN( bX ) ||
     _.isNaN( bY ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

    // make a triangle from the position the objectA is in, relative to the objectB position
var triangleOppositeSide = aY - bY;
var triangleAdjacentSide = bX - aX;

    // find the angle, given the two sides (of a right triangle)
return Math.atan2( triangleOppositeSide, triangleAdjacentSide );
};


/*
    Distance between 2 points.

    Returns null if:
        - any of the arguments isn't a number
 */

Utilities.calculateDistance = function( aX, aY, bX, bY )
{
if ( _.isNaN( aX ) ||
     _.isNaN( aY ) ||
     _.isNaN( bX ) ||
     _.isNaN( bY ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

var opposite = bY - aY;
var adjacent = bX - aX;

return Math.sqrt( Math.pow( opposite, 2 ) + Math.pow( adjacent, 2 ) );
};


/*
    Converts a number in degrees to radians and returns it.

    Returns null if:
        - the argument isn't a number
 */

Utilities.toRadians = function( degrees )
{
if ( _.isNaN( degrees ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return degrees * Math.PI / 180;
};


/*
    Converts a number in radians to degrees and returns it.

    Returns null if:
        - the argument isn't a number
 */

Utilities.toDegrees = function( radians )
{
if ( _.isNaN( radians ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return radians * 180 / Math.PI;
};

/*
    Returns the number of digits in a number.
    It doesn't consider the minus signal, nor the dot (in floats) as a digit.

    Returns null if:
        - the argument is not a number
 */

Utilities.numberOfDigits = function( theNumber )
{
if ( _.isNaN( theNumber ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

if ( theNumber < 0 )
    {
    theNumber *= -1;
    }

var numberString = theNumber.toString().replace( '.', '' );

return numberString.length;
};


/*
    Uses the window.setTimeout()
 */

Utilities.Timeout = function()
{
this.is_active = false;
this.id = -1;
};

/*
    Starts the timeout. If there was an active timeout already, it is canceled.

    returns null if:
        - functionToCall isn't a function
        - interval isn't a number
 */

Utilities.Timeout.prototype.start = function( functionToCall, interval )
{
if ( !_.isFunction( functionToCall ) ||
     _.isNaN( interval ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

var _this = this;

if ( this.is_active )
    {
    this.clear();
    }

this.is_active = true;

this.id = window.setTimeout( function()
    {
    _this.is_active = false;

    functionToCall();

    }, interval );
};

/*
    Clears the timeout.
 */

Utilities.Timeout.prototype.clear = function()
{
this.is_active = false;
window.clearTimeout( this.id );
};



/*
    Detects collision between 2 boxes.
 */

Utilities.boxBoxCollision = function( oneX, oneY, oneWidth, oneHeight, twoX, twoY, twoWidth, twoHeight )
{
return !(
        ( oneY + oneHeight < twoY ) ||
        ( oneY > twoY + twoHeight ) ||
        ( oneX > twoX + twoWidth ) ||
        ( oneX + oneWidth < twoX )
    );
};

/*
    Detects collision between a point and a box.
 */

Utilities.pointBoxCollision = function( pointX, pointY, boxLeft, boxRight, boxTop, boxBottom )
{
if ( pointX < boxLeft || pointX > boxRight || pointY < boxTop || pointY > boxBottom )
    {
    return false;
    }

return true;
};


/*
    Detects collision between a circle and a point.
 */

Utilities.circlePointCollision = function( circleX, circleY, circleRadius, pointX, pointY )
{
var distanceX = circleX - pointX;
var distanceY = circleY - pointY;

    // pythagoras
var squareDistance = distanceX * distanceX + distanceY * distanceY;

if ( squareDistance < circleRadius * circleRadius )
    {
    return true;
    }

return false;
};


/*
    Detects collision between two circles.
 */

Utilities.circleCircleCollision = function( x1, y1, radius1, x2, y2, radius2 )
{
var distX = x1 - x2;
var distY = y1 - y2;

if ( Math.pow( distX, 2 ) + Math.pow( distY, 2 ) <= Math.pow( radius1 + radius2, 2 ) )
    {
    return true;
    }

return false;
};



/*
    Saves in the localStorage a json string representation of the value.

    Returns null if:
        - key is not a string
 */

Utilities.saveObject = function( key, value )
{
if ( !_.isString( key ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

localStorage.setItem( key, JSON.stringify( value ) );
};


/*
    Gets an object (parsed with json) from localStorage.

    Returns null if:
        - key is not a string
        - it doesn't find
 */

Utilities.getObject = function( key )
{
if ( !_.isString( key ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

var value = localStorage.getItem( key );

return value && JSON.parse( value );
};



/*
    Used for 'class' inheritance (search for parasitic combination inheritance)
 */

Utilities.inheritPrototype = function( derivedClass, baseClass )
{
var f = function() {};

f.prototype = baseClass.prototype;
var prototype = new f();

prototype.constructor = derivedClass;

derivedClass.prototype = prototype;
};



/*
    Rounds a number to a specified decimal case.

    Returns null if:
        - num or dec isn't a number
        - dec is less than 0
 */

Utilities.round = function( num, dec )
{
if ( _.isNaN( num ) ||
     _.isNaN( dec ) ||
    (dec < 0) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.round( num * Math.pow( 10, dec ) ) / Math.pow( 10, dec );
};


/*
    Converts a time (in milliseconds) to a string (with the number of days/hours...).
    The number of units to be shown can be set (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a totalUnits of 2)).
    The units available are: day/hour/minute/second.

    Returns null if:
        - the dateMilliseconds argument isn't a number
 */

Utilities.timeToString = function( dateMilliseconds, totalUnits )
{
if ( _.isNaN( dateMilliseconds ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

if ( typeof totalUnits === 'undefined' || _.isNaN( totalUnits ) )
    {
    totalUnits = 2;
    }

    // :: convert to days/hours :: //

    //in milliseconds
var second = 1000;
var minute = 60 * second;
var hour   = 60 * minute;
var day    = 24 * hour;

var minutesLeft = 0;
var hoursLeft = 0;
var daysLeft = 0;
var secondsLeft = 0;


    //count the days
while (dateMilliseconds > day)
    {
    daysLeft++;

    dateMilliseconds -= day;
    }

    //count the hours
while (dateMilliseconds > hour)
    {
    hoursLeft++;

    dateMilliseconds -= hour;
    }

    //count the minutes
while (dateMilliseconds > minute)
    {
    minutesLeft++;

    dateMilliseconds -= minute;
    }

    //and the seconds
secondsLeft = Utilities.round( dateMilliseconds / 1000, 2).toFixed( 1 );


    // :: construct the string :: //

var theDate = [ ["day", daysLeft], ["hour", hoursLeft], ["minute", minutesLeft], ["second", secondsLeft] ];

var constructDate = function(dateTmp, numberOf)
    {
        // day to days, hour to hours...
    if (numberOf !== 1)
        {
        dateTmp += "s";
        }

    return numberOf + " " + dateTmp + " ";
    };


var date = "";
var i;

for (i = 0 ; i < theDate.length ; i++)
    {
        // reached the limit of the units
    if (totalUnits === 0)
        {
        break;
        }

        // only show when there's something relevant to be shown
        // (for example: 0 days 2 hours 2 minutes... no point showing the days part)
    if ( theDate[ i ][ 1 ] !== 0 )
        {
        date += constructDate( theDate[ i ][ 0 ], theDate[ i ][ 1 ] );

        totalUnits--;
        }
    }


return date;
};


window.Utilities = Utilities;

}(window));
