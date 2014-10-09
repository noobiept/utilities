/*
    version : 1.1

    dependencies:
        - underscorejs : 1.6

    Functions/classes are placed first in a group, then alphabetically ordered within that group.

    Groups:
        - collision detection
        - events
        - local storage
        - number utilities
        - object utilities
        - time utilities
        - trigonometry
 */

(function(window)
{
function Utilities()
{

}


// ---------- Collision Detection ---------- //


/**
    Detects collision between 2 boxes.

    @param {Number} oneX
    @param {Number} oneY
    @param {Number} oneWidth
    @param {Number} oneHeight
    @param {Number} twoX
    @param {Number} twoY
    @param {Number} twoWidth
    @param {Number} twoHeight
    @return {Boolean}
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


/**
    Detects collision between two circles.

    @param {Number} x1
    @param {Number} y1
    @param {Number} radius1
    @param {Number} x2
    @param {Number} y2
    @param {Number} radius2
    @return {Boolean}
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


/**
    Detects collision between a circle and a point.

    @param {Number} circleX
    @param {Number} circleY
    @param {Number} circleRadius
    @param {Number} pointX
    @param {Number} pointY
    @return {Boolean}
 */

Utilities.circlePointCollision = function( circleX, circleY, circleRadius, pointX, pointY )
{
var distanceX = circleX - pointX;
var distanceY = circleY - pointY;

    // pythagoras
var squareDistance = distanceX * distanceX + distanceY * distanceY;

if ( squareDistance <= circleRadius * circleRadius )
    {
    return true;
    }

return false;
};


/**
    Detects collision between a point and a box.

    @param {Number} pointX
    @param {Number} pointY
    @param {Number} boxLeft
    @param {Number} boxRight
    @param {Number} boxTop
    @param {Number} boxBottom
    @return {Boolean}
 */

Utilities.pointBoxCollision = function( pointX, pointY, boxLeft, boxRight, boxTop, boxBottom )
{
if ( pointX < boxLeft || pointX > boxRight || pointY > boxTop || pointY < boxBottom )
    {
    return false;
    }

return true;
};


// ---------- Events ---------- //


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


// ---------- Local Storage ---------- //


/**
    Gets an object (parsed with json) from localStorage.

    Throws an Error exception if:
        - key is not a string
        - it doesn't find

    @param {String} key
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


/**
    Saves in the localStorage a json string representation of the value.

    Throws an Error exception if:
        - key is not a string

    @param {String} key
    @param value
 */

Utilities.saveObject = function( key, value )
{
if ( !_.isString( key ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

localStorage.setItem( key, JSON.stringify( value ) );
};


// ---------- Number Utilities ---------- //


/**
    Returns a random float number between 'min' and 'max' (inclusive).

    Throws an Error exception if:
        - either min or max is not a number
        - the minimum value is bigger than the maximum.

    @param {Number} min
    @param {Number} max
    @return {Number}
 */

Utilities.getRandomFloat = function( min, max )
{
if ( !_.isFinite( min ) ||
     !_.isFinite( max ) ||
    (min > max) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.random() * (max - min) + min;
};


/**
    Returns a random integer number between 'min' and 'max' (inclusive).

    Throws an Error exception if:
        - min or max isn't a number
        - the minimum value is bigger than the maximum.

    @param {Number} min
    @param {Number} max
    @return {Number}
 */

Utilities.getRandomInt = function( min, max )
{
if ( !_.isFinite( min ) || (min % 1 !== 0) ||
     !_.isFinite( max ) || (max % 1 !== 0) ||
    (min > max) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.floor( Math.random() * (max - min + 1) ) + min;
};


/**
    Returns several different random integers, in the range between 'min' and 'max' (inclusive).

    Throws an Error exception if:
        - min, max or howMany isn't a number
        - the minimum value is bigger than the maximum
        - the range is less than the number of integers required

    @param {Number} min
    @param {Number} max
    @param {Number} howMany
    @return {Number[]}
 */

Utilities.getSeveralRandomInts = function( min, max, howMany )
{
if ( !_.isFinite( min ) || (min % 1) !== 0 ||
     !_.isFinite( max ) || (max % 1) !== 0 ||
     !_.isFinite( howMany ) || (howMany % 1) !== 0 ||
    (min > max) ||
    ((max - min) < howMany - 1) )
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


/**
    Returns the number of digits in a number.
    It doesn't consider the minus signal, nor the dot (in floats) as a digit.

    Throws an Error exception if:
        - the argument is not a number

    @param {Number} theNumber
    @return {Number}
 */

Utilities.numberOfDigits = function( theNumber )
{
if ( !_.isFinite( theNumber ) )
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


/**
    Rounds a number to a specified decimal case.

    Throws an Error exception if:
        - num or dec isn't a number
        - dec is less than 0

    @param {Number} num
    @param {Number} dec
    @return {Number}
 */

Utilities.round = function( num, dec )
{
if ( !_.isFinite( num ) ||
     !_.isFinite( dec ) || (dec % 1 !== 0) ||
    (dec < 0) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.round( num * Math.pow( 10, dec ) ) / Math.pow( 10, dec );
};


// ---------- Object Utilities ---------- //


/*
    Returns a deep clone/copy of the object.
 */

Utilities.deepClone = function( obj )
{
return JSON.parse( JSON.stringify( obj ) );
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


// ---------- Time Utilities ---------- //


/**
    Converts a time (in milliseconds) to a string (with the number of days/hours...).
    The number of units to be shown can be set (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a totalUnits of 2)).
    The units available are: day/hour/minute/second.

    Throws an Error exception if:
        - the dateMilliseconds argument isn't a number

    @param {Number} dateMilliseconds
    @param {Number=2} totalUnits
 */

Utilities.timeToString = function( dateMilliseconds, totalUnits )
{
if ( !_.isFinite( dateMilliseconds ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

if ( typeof totalUnits === 'undefined' || !_.isFinite( totalUnits ) )
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
while (dateMilliseconds >= day)
    {
    daysLeft++;

    dateMilliseconds -= day;
    }

    //count the hours
while (dateMilliseconds >= hour)
    {
    hoursLeft++;

    dateMilliseconds -= hour;
    }

    //count the minutes
while (dateMilliseconds >= minute)
    {
    minutesLeft++;

    dateMilliseconds -= minute;
    }

    //and the seconds
secondsLeft = Utilities.round( dateMilliseconds / second, 2);


    // :: construct the string :: //

var theDate = [ ["day", daysLeft], ["hour", hoursLeft], ["minute", minutesLeft], ["second", secondsLeft] ];

var constructDate = function(dateTmp, numberOf)
    {
        // day to days, hour to hours...
    if (numberOf !== 1)
        {
        dateTmp += "s";
        }

    return numberOf + " " + dateTmp;
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
            // add spacing between the units apart from the first one
        if ( date !== '' )
            {
            date += ' ';
            }

        date += constructDate( theDate[ i ][ 0 ], theDate[ i ][ 1 ] );

        totalUnits--;
        }
    }


if ( date === '' )
    {
    date = '0 seconds';
    }

return date;
};


/*
    Uses the window.setTimeout()
 */

Utilities.Timeout = function()
{
this.is_active = false;
this.id = -1;
};

/**
    Starts the timeout. If there was an active timeout already, it is canceled.

    Throws an Error exception if:
        - functionToCall isn't a function
        - interval isn't a number

    @param {Function} functionToCall
    @param {Number} interval
 */

Utilities.Timeout.prototype.start = function( functionToCall, interval )
{
if ( !_.isFunction( functionToCall ) ||
     !_.isFinite( interval ) )
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


/**
    Count-up timer. Updates directly to the html element.

    @param {HTMLElement} htmlElement
 */

Utilities.Timer = function( htmlElement )
{
if ( !(htmlElement instanceof HTMLElement) )
    {
    throw new Error( 'Missing argument or not an HTML element.' );
    }

this.time_passed = 0;
this.interval_f = null;

this.html_element = htmlElement;
this.html_element.innerHTML = this.getTimeString();
};


/*
    Start counting.
 */

Utilities.Timer.prototype.start = function()
{
var _this = this;
var interval = 1000;

this.interval_f = window.setInterval( function()
    {
    _this.time_passed += interval;

    _this.html_element.innerHTML = _this.getTimeString();

    }, interval );
};


/*
    Stop counting.
 */

Utilities.Timer.prototype.stop = function()
{
if ( this.interval_f )
    {
    window.clearInterval( this.interval_f );
    this.interval_f = null;
    }
};


/*
    Stops and resets the count.
 */

Utilities.Timer.prototype.reset = function()
{
this.stop();

this.time_passed = 0;
this.html_element.innerHTML = this.getTimeString();
};


/*
    Restart the timer.
 */

Utilities.Timer.prototype.restart = function()
{
this.reset();
this.start();
};

/*
    Returns a string with the time passed so far.
 */

Utilities.Timer.prototype.getTimeString = function()
{
return Utilities.timeToString( this.time_passed );
};


/*
    Returns the time it has passed so far, in seconds.
 */

Utilities.Timer.prototype.getTimeSeconds = function()
{
return this.time_passed / 1000;
};


// ---------- Trigonometry ---------- //


/**
    Returns the angle between 2 points in radians.
    Positive in clockwise direction.

    Throws an Error exception if:
        - any of the arguments isn't a number

    @param {Number} aX
    @param {Number} aY
    @param {Number} bX
    @param {Number} bY
    @return {Number}
 */

Utilities.calculateAngle = function( aX, aY, bX, bY )
{
if ( !_.isFinite( aX ) ||
     !_.isFinite( aY ) ||
     !_.isFinite( bX ) ||
     !_.isFinite( bY ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

    // make a triangle from the position the objectA is in, relative to the objectB position
var triangleOppositeSide = aY - bY;
var triangleAdjacentSide = bX - aX;

    // find the angle, given the two sides (of a right triangle)
return Math.atan2( triangleOppositeSide, triangleAdjacentSide );
};


/**
    Distance between 2 points.

    Throws an Error exception if:
        - any of the arguments isn't a number

    @param {Number} aX
    @param {Number} aY
    @param {Number} bX
    @param {Number} bY
    @return {Number}
 */

Utilities.calculateDistance = function( aX, aY, bX, bY )
{
if ( !_.isFinite( aX ) ||
     !_.isFinite( aY ) ||
     !_.isFinite( bX ) ||
     !_.isFinite( bY ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

var opposite = bY - aY;
var adjacent = bX - aX;

return Math.sqrt( Math.pow( opposite, 2 ) + Math.pow( adjacent, 2 ) );
};


/**
    Converts a number in radians to degrees and returns it.

    Throws an Error exception if:
        - the argument isn't a number

    @param {Number} radians
    @return {Number}
 */

Utilities.toDegrees = function( radians )
{
if ( !_.isFinite( radians ) )
    {
    throw new Error( 'Invalid argument.' );
    }

return radians * 180 / Math.PI;
};


/**
    Converts a number in degrees to radians and returns it.

    Throws an Error exception if:
        - the argument isn't a number

    @param {Number} degrees
    @return {Number}
 */

Utilities.toRadians = function( degrees )
{
if ( !_.isFinite( degrees ) )
    {
    throw new Error( 'Invalid argument.' );
    }

return degrees * Math.PI / 180;
};


window.Utilities = Utilities;

}(window));
