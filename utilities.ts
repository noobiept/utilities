/**
 * Random collection of utilities functions/classes.
 */
module Utilities
{
// ---------- Array Utilities ---------- //


/**
 * Shuffle an array.
 */
export function shuffle( array: any[] )
{
if ( !Utilities.isArray( array ) )
    {
    throw new Error( 'Invalid argument. Not an array.' );
    }

var currentIndex = array.length;
var temporaryValue;
var randomIndex;

    // while there's still elements to shuffle
while( currentIndex !== 0 )
    {
        // pick a remaining element
    randomIndex = Math.floor( Math.random() * currentIndex );
    currentIndex--;

        // swap it with the current element
    temporaryValue = array[ currentIndex ];
    array[ currentIndex ] = array[ randomIndex ];
    array[ randomIndex ] = temporaryValue;
    }

return array;
}


// ---------- Collision Detection ---------- //


/**
 * Detects collision between 2 boxes.
 */
export function boxBoxCollision( oneX: number, oneY: number, oneWidth: number, oneHeight: number, twoX: number, twoY: number, twoWidth: number, twoHeight: number )
{
return !(
        ( oneY + oneHeight < twoY ) ||
        ( oneY > twoY + twoHeight ) ||
        ( oneX > twoX + twoWidth ) ||
        ( oneX + oneWidth < twoX )
    );
}


/**
 * Detects collision between two circles.
 */
export function circleCircleCollision( x1: number, y1: number, radius1: number, x2: number, y2: number, radius2: number )
{
var distX = x1 - x2;
var distY = y1 - y2;

if ( Math.pow( distX, 2 ) + Math.pow( distY, 2 ) <= Math.pow( radius1 + radius2, 2 ) )
    {
    return true;
    }

return false;
}


/**
 * Detects collision between a circle and a point.
 */
export function circlePointCollision( circleX: number, circleY: number, circleRadius: number, pointX: number, pointY: number )
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
}


/**
 * Detects collision between a point and a box.
 */
export function pointBoxCollision( pointX: number, pointY: number, boxX: number, boxY: number, boxWidth: number, boxHeight: number )
{
if ( pointX < boxX ||
     pointX > boxX + boxWidth ||
     pointY < boxY ||
     pointY > boxY + boxHeight )
    {
    return false;
    }

return true;
}


// ---------- Events ---------- //


/**
 * Numeric code of each key.
 */
export var KEY_CODE = {

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


/**
 * Numeric code of each mouse button.
 */
export var MOUSE_CODE = {
    left   : 0,
    middle : 1,
    right  : 2
};


// ---------- Local Storage ---------- //


/**
 * Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.
 *
 * Throws an `Error` exception if:
 * - `key` is not a string.
 * - `key` wasn't found.
 */
export function getObject( key: string )
{
if ( !Utilities.isString( key ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

var value = localStorage.getItem( key );

return value && JSON.parse( value );
}


/**
 * Saves in the `localStorage` a json string representation of the `value`.
 *
 * Throws an `Error` exception if:
 * - `key` is not a `string`.
 */
export function saveObject( key: string, value: any )
{
if ( !Utilities.isString( key ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

localStorage.setItem( key, JSON.stringify( value ) );
}


// ---------- Is Type ---------- //


/**
 * @return If it is an array or not.
 */
export function isArray( element: any )
{
return Object.prototype.toString.call( element ) === '[object Array]';
}


/**
 * @return If it is a boolean.
 */
export function isBoolean( element: any )
{
return element === true || element === false || Object.prototype.toString.call( element ) === '[object Boolean]'
}


/**
 * @return If it is a function.
 */
export function isFunction( element: any )
{
return typeof element === 'function' && Object.prototype.toString.call( element ) === '[object Function]';
}


/**
 * @return If it is a number.
 */
export function isNumber( element: any )
{
return typeof element === 'number' && !isNaN( parseFloat( element ) ) && isFinite( element );
}


/**
 * @return If it is a string.
 */
export function isString( element: any )
{
return typeof element === 'string' || element instanceof String;
}


// ---------- Number Utilities ---------- //


/**
 * Returns a random float number between `min` and `max` (inclusive).
 *
 * Throws an `Error` exception if:
 * - either `min` or `max` is not a `number`.
 * - the minimum value is bigger than the maximum.
 */
export function getRandomFloat( min: number, max: number )
{
if ( !Utilities.isNumber( min ) ||
     !Utilities.isNumber( max ) ||
    (min > max) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.random() * (max - min) + min;
}


/**
 * Returns a random integer number between `min` and `max` (inclusive).
 *
 * Throws an `Error` exception if:
 * - `min` or `max` isn't a number.
 * - the minimum value is bigger than the maximum.
 */
export function getRandomInt( min: number, max: number )
{
if ( !Utilities.isNumber( min ) || (min % 1 !== 0) ||
     !Utilities.isNumber( max ) || (max % 1 !== 0) ||
    (min > max) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.floor( Math.random() * (max - min + 1) ) + min;
}


/**
 * Returns several different random integers, in the range between `min` and `max` (inclusive).
 *
 * Throws an Error exception if:
 * - `min`, `max` or `howMany` isn't a number.
 * - the minimum value is bigger than the maximum.
 * - the range is less than the number of integers required.
 */
export function getSeveralRandomInts( min: number, max: number, howMany: number ): number[]
{
if ( !Utilities.isNumber( min ) || (min % 1) !== 0 ||
     !Utilities.isNumber( max ) || (max % 1) !== 0 ||
     !Utilities.isNumber( howMany ) || (howMany % 1) !== 0 ||
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
}


/**
 * Returns the number of digits in a number.
 * It doesn't consider the minus signal, nor the dot (in floats) as a digit.
 *
 * Throws an `Error` exception if:
 * - the argument is not a number.
 */
export function numberOfDigits( theNumber: number )
{
if ( !Utilities.isNumber( theNumber ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

if ( theNumber < 0 )
    {
    theNumber *= -1;
    }

var numberString = theNumber.toString().replace( '.', '' );

return numberString.length;
}


/**
 * Rounds a number to a specified decimal case.
 *
 * Throws an `Error` exception if:
 * - `num` or `dec` isn't a number.
 * - `dec` is less than 0.
 */
export function round( num: number, dec: number )
{
if ( !Utilities.isNumber( num ) ||
     !Utilities.isNumber( dec ) || (dec % 1 !== 0) ||
    (dec < 0) )
    {
    throw new Error( 'Invalid arguments.' );
    }

return Math.round( num * Math.pow( 10, dec ) ) / Math.pow( 10, dec );
}


// ---------- Object Utilities ---------- //


/**
 * Returns a deep clone/copy of the object.
 */
export function deepClone( obj: any )
{
return JSON.parse( JSON.stringify( obj ) );
}


/**
 * Enum - A way to associate a string name to a number.
 *
 * @param values The `enum` names. Each name will have an associated number.
 * @param start Starting number for the first name. The number is incremented by one for the next name.
 */
export function createEnum( values: string[], start?: number )
{
if ( !Utilities.isArray( values ) )
    {
    throw new Error( "'values' argument needs to be an array of strings." );
    }

if ( !Utilities.isNumber( start ) )
    {
    start = 0;
    }


var obj = {};
var length = values.length;
var name;

for (var a = 0 ; a < length ; a++)
    {
    name = values[ a ];

    obj[ start ] = name;
    obj[ name ] = start;

    start++;
    }

return obj;
}


/**
 * Used for `class` inheritance (search for parasitic combination inheritance).
 */
export function inheritPrototype( derivedClass: Function, baseClass: Function )
{
var f = function() {};

f.prototype = baseClass.prototype;
var prototype = new f();

prototype.constructor = derivedClass;

derivedClass.prototype = prototype;
}


// ---------- Time Utilities ---------- //


/**
 * Converts a time (in milliseconds) to a string (with the number of days/hours...).
 *
 * The number of units to be shown can be set (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `totalUnits` of 2)).
 *
 * The units available are: day/hour/minute/second.
 *
 * Throws an `Error` exception if:
 * - the `dateMilliseconds` argument isn't a number.
 */
export function timeToString( dateMilliseconds: number, totalUnits: number = 2 )
{
if ( !Utilities.isNumber( dateMilliseconds ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

if ( typeof totalUnits === 'undefined' || !Utilities.isNumber( totalUnits ) )
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
}


/**
 * Call a function after a certain time has passed. Uses the `window.setTimeout()`.
 */
export class Timeout
{
is_active: boolean;
id: number;

constructor()
    {
    this.is_active = false;
    this.id = -1;
    }


/**
 * Starts the timeout. If there was an active timeout already, that one is canceled.
 *
 * Throws an `Error` exception if:
 * - `functionToCall` isn't a function.
 * - `interval` isn't a number.
 */
start( functionToCall: Function, interval: number )
    {
    if ( !Utilities.isFunction( functionToCall ) ||
         !Utilities.isNumber( interval ) )
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
    }


/**
 * Cancels the timeout.
 */
clear()
    {
    window.clearTimeout( this.id );
    this.is_active = false;
    }
}


/**
 * Count-up or count-down timer. Updates directly to the html element.
 */
export class Timer
{
is_active: boolean;
start_value: number;
end_value: number;
end_callback: () => any;
tick_callback: () => any;
count_down: boolean;
time_count: number;
interval_f: number;
html_element: HTMLElement;

constructor( htmlElement: HTMLElement )
    {
    if ( !(htmlElement instanceof HTMLElement) )
        {
        throw new Error( 'Missing argument or not an HTML element.' );
        }

    this.is_active = false;
    this.start_value = 0;
    this.end_value = null;  // null means it doesn't have an end value
    this.end_callback = null;
    this.tick_callback = null;
    this.count_down = false;
    this.time_count = 0;
    this.interval_f = null;

    this.html_element = htmlElement;
    this.html_element.innerHTML = this.getTimeString();
    }


/**
 * Start counting.
 * If no endValue is given, it never stops counting.
 *
 * `startValue` and `endValue` are in milliseconds.
 *
 * `endCallback` is called when the timer ends (only if an `endValue` was provided).
 *
 * `tickCallback` is called every second.
 */
start( args?: { startValue?: number; endValue?: number; endCallback?: () => any; tickCallback?: () => any; countDown?: boolean } )
    {
    if ( typeof args === 'undefined' )
        {
        args = {};
        }

    if ( !Utilities.isNumber( args.startValue ) )
        {
        args.startValue = 0;
        }

    if ( !Utilities.isNumber( args.endValue ) )
        {
        args.endValue = null;
        }

    if ( !Utilities.isFunction( args.endCallback ) )
        {
        args.endCallback = null;
        }

    if ( !Utilities.isFunction( args.tickCallback ) )
        {
        args.tickCallback = null;
        }

    if ( args.countDown !== true )
        {
        args.countDown = false;
        }


    if ( this.is_active )
        {
        this.stop();
        }

    this.count_down = args.countDown;
    this.time_count = args.startValue;
    this.start_value = args.startValue;
    this.end_value = args.endValue;
    this.end_callback = args.endCallback;
    this.tick_callback = args.tickCallback;

    this.html_element.innerHTML = this.getTimeString();
    this.resume();
    }


/**
 * Resumes the timer with the same settings/values that were set before it was stopped.
 */
resume()
    {
    if ( this.is_active )
        {
        return;
        }

    var _this = this;
    var interval = 1000;

    this.is_active = true;
    this.interval_f = window.setInterval( function()
        {
            // update the counter
        if ( _this.count_down )
            {
            _this.time_count -= interval;
            }

        else
            {
            _this.time_count += interval;
            }


            // if there's an end value defined, check if we reached it
        if ( _this.end_value !== null )
            {
            var ended = false;

            if ( _this.count_down )
                {
                if ( _this.time_count <= _this.end_value )
                    {
                    ended = true;
                    }
                }

            else
                {
                if ( _this.time_count >= _this.end_value )
                    {
                    ended = true;
                    }
                }


            if ( ended )
                {
                _this.stop();

                if ( _this.end_callback !== null )
                    {
                    _this.end_callback();
                    }
                }
            }


            // call the tick callback if there's one
        if ( _this.tick_callback !== null )
            {
            _this.tick_callback();
            }

            // update the html element with the current time
        _this.html_element.innerHTML = _this.getTimeString();

        }, interval );
    }


/**
 * Stop counting.
 */
stop()
    {
    if ( this.interval_f )
        {
        window.clearInterval( this.interval_f );
        this.interval_f = null;
        }

    this.is_active = false;
    }


/**
 * Stops and resets the count.
 */
reset()
    {
    this.stop();

    this.time_count = this.start_value;

    this.html_element.innerHTML = this.getTimeString();
    }


/**
 * Restart the timer.
 */
restart()
    {
    this.reset();
    this.start({
            startValue   : this.start_value,
            endValue     : this.end_value,
            endCallback  : this.end_callback,
            tickCallback : this.tick_callback,
            countDown    : this.count_down
        });
    }


/**
 * Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.
 *
 * @param time In milliseconds.
 */
add( time: number )
    {
    this.time_count += time;
    }


/**
 * Returns a string with the time passed so far.
 */
getTimeString()
    {
    return Utilities.timeToString( this.time_count );
    }


/**
 * Returns the time it has passed so far, in seconds.
 */
getTimeSeconds()
    {
    return this.time_count / 1000;
    }

/**
 * Returns the time it has passed so far, in milliseconds.
 */
getTimeMilliseconds()
    {
    return this.time_count;
    }
}


// ---------- Trigonometry ---------- //


/**
 * Returns the angle between 2 points in radians.
 * Positive in clockwise direction.
 *
 * Throws an `Error` exception if:
 * - any of the arguments isn't a number.
 */
export function calculateAngle( aX: number, aY: number, bX: number, bY: number )
{
if ( !Utilities.isNumber( aX ) ||
     !Utilities.isNumber( aY ) ||
     !Utilities.isNumber( bX ) ||
     !Utilities.isNumber( bY ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

    // make a triangle from the position the objectA is in, relative to the objectB position
var triangleOppositeSide = aY - bY;
var triangleAdjacentSide = bX - aX;

    // find the angle, given the two sides (of a right triangle)
return Math.atan2( triangleOppositeSide, triangleAdjacentSide );
}


/**
 * Distance between 2 points.
 *
 * Throws an `Error` exception if:
 * - any of the arguments isn't a number.
 */
export function calculateDistance( aX: number, aY: number, bX: number, bY: number )
{
if ( !Utilities.isNumber( aX ) ||
     !Utilities.isNumber( aY ) ||
     !Utilities.isNumber( bX ) ||
     !Utilities.isNumber( bY ) )
    {
    throw new Error( 'Invalid arguments.' );
    }

var opposite = bY - aY;
var adjacent = bX - aX;

return Math.sqrt( Math.pow( opposite, 2 ) + Math.pow( adjacent, 2 ) );
}


/**
 * Converts a number in `radians` to `degrees` and returns it.
 *
 * Throws an `Error` exception if:
 * - the argument isn't a number.
 */
export function toDegrees( radians: number )
{
if ( !Utilities.isNumber( radians ) )
    {
    throw new Error( 'Invalid argument.' );
    }

return radians * 180 / Math.PI;
}


/**
 * Converts a number in `degrees` to `radians` and returns it.
 *
 * Throws an `Error` exception if:
 * - the argument isn't a number.
 */
export function toRadians( degrees: number )
{
if ( !Utilities.isNumber( degrees ) )
    {
    throw new Error( 'Invalid argument.' );
    }

return degrees * Math.PI / 180;
}

}
