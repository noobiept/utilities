// ---------- Array Utilities ---------- //


    // shuffle //
QUnit.module( 'shuffle' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.shuffle();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.shuffle( 1 );
    }, expect, 'Wrong argument type.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var test = [ 1, 2, 3, 4 ];
var length = test.length;

Utilities.shuffle( test );

assert.deepEqual( test.length, length, 'Should still have the same length.' );

    // see if the same values are still there (just on different order)
assert.deepEqual( test.indexOf( 1 ) >= 0, true );
assert.deepEqual( test.indexOf( 2 ) >= 0, true );
assert.deepEqual( test.indexOf( 3 ) >= 0, true );
assert.deepEqual( test.indexOf( 4 ) >= 0, true );
});


// ---------- Collision Detection ---------- //


    // boxBoxCollision //
QUnit.module( 'boxBoxCollision' );
QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.boxBoxCollision( 0, 0, 1, 1, 2, 2, 1, 1 );
expect = false;

assert.deepEqual( result, expect, "Doesn't collide." );

result = Utilities.boxBoxCollision( 0, 0, 2, 1, 2, 0, 1, 4 );
expect = true;

assert.deepEqual( result, expect, 'Boxes touching.' );

result = Utilities.boxBoxCollision( 0, 0, 2, 2, 0, 0, 1, 1 );
expect = true;

assert.deepEqual( result, expect, 'One box inside the other.' );
});


    // circleCircleCollision //
QUnit.module( 'circleCircleCollision' );
QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.circleCircleCollision( 0, 0, 2, 5, 5, 2 );
expect = false;

assert.deepEqual( result, expect, 'No collision.' );

result = Utilities.circleCircleCollision( 0, 0, 2, 4, 0, 2 );
expect = true;

assert.deepEqual( result, expect, 'Start of the collision.' );

result = Utilities.circleCircleCollision( 0, 0, 4, 0, 0, 2 );
expect = true;

assert.deepEqual( result, expect, 'Second circle inside the first.' );
});


    // circlePointCollision //
QUnit.module( 'circlePointCollision' );
QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.circlePointCollision( 0, 0, 4, 5, 5 );
expect = false;

assert.deepEqual( result, expect, 'No collision.' );

result = Utilities.circlePointCollision( 0, 0, 4, 4, 0 );
expect = true;

assert.deepEqual( result, expect, 'Point on the border of the circle.' );

result = Utilities.circlePointCollision( 0, 0, 4, 0, 0 );
expect = true;

assert.deepEqual( result, expect, 'Point inside the circle.' );
});


    // pointBoxCollision //
QUnit.module( 'pointBoxCollision' );
QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.pointBoxCollision( 0, 0, 2, 2, 10, 10 );
expect = false;

assert.deepEqual( result, expect, 'No collision.' );

result = Utilities.pointBoxCollision( 10, 5, 0, 0, 10, 10 );
expect = true;

assert.deepEqual( result, expect, "Point on the border of the box." );

result = Utilities.pointBoxCollision( 0, 0, -2, -2, 4, 4 );
expect = true;

assert.deepEqual( result, expect, 'Point inside the box.' );

result = Utilities.pointBoxCollision( 2, 5, 0, 0, 10, 10 );
expect = true;

assert.deepEqual( result, expect, 'Point inside the box.' );
});


// ---------- Is Type ---------- //


    // isArray //
QUnit.module( 'isArray' );
QUnit.test( 'Test type', function( assert )
{
var values = [
        { value: 1, expect: false },
        { value: 1.2, expect: false },
        { value: NaN, expect: false },
        { value: Infinity, expect: false },
        { value: "1.3", expect: false },
        { value: 'a', expect: false },
        { value: '', expect: false },
        { value: undefined, expect: false },
        { value: null, expect: false },
        { value: true, expect: false },
        { value: {}, expect: false },
        { value: function() {}, expect: false },
        { value: [], expect: true }
    ];

for (var a = 0 ; a < values.length ; a++)
    {
    var value = values[ a ].value;
    var expect = values[ a ].expect;

    assert.strictEqual( Utilities.isArray( value ), expect, 'Value: ' + value );
    }
});


    // isBoolean //
QUnit.module( 'isBoolean' );
QUnit.test( 'Test type', function( assert )
{
var values = [
        { value: 1, expect: false },
        { value: 1.2, expect: false },
        { value: NaN, expect: false },
        { value: Infinity, expect: false },
        { value: "1.3", expect: false },
        { value: 'a', expect: false },
        { value: '', expect: false },
        { value: undefined, expect: false },
        { value: null, expect: false },
        { value: true, expect: true },
        { value: {}, expect: false },
        { value: function() {}, expect: false },
        { value: [], expect: false }
    ];

for (var a = 0 ; a < values.length ; a++)
    {
    var value = values[ a ].value;
    var expect = values[ a ].expect;

    assert.strictEqual( Utilities.isBoolean( value ), expect, 'Value: ' + value );
    }
});


    // isFunction //
QUnit.module( 'isFunction' );
QUnit.test( 'Test type', function( assert )
{
var values = [
        { value: 1, expect: false },
        { value: 1.2, expect: false },
        { value: NaN, expect: false },
        { value: Infinity, expect: false },
        { value: "1.3", expect: false },
        { value: 'a', expect: false },
        { value: '', expect: false },
        { value: undefined, expect: false },
        { value: null, expect: false },
        { value: true, expect: false },
        { value: {}, expect: false },
        { value: function() {}, expect: true },
        { value: [], expect: false }
    ];

for (var a = 0 ; a < values.length ; a++)
    {
    var value = values[ a ].value;
    var expect = values[ a ].expect;

    assert.strictEqual( Utilities.isFunction( value ), expect, 'Value: ' + value );
    }
});


    // isInteger //
QUnit.module( 'isInteger' );
QUnit.test( 'Test type', function( assert )
{
var values = [
        { value: 1, expect: true },
        { value: 1.2, expect: false },
        { value: NaN, expect: false },
        { value: Infinity, expect: false },
        { value: "1.3", expect: false },
        { value: 'a', expect: false },
        { value: '', expect: false },
        { value: undefined, expect: false },
        { value: null, expect: false },
        { value: true, expect: false },
        { value: {}, expect: false },
        { value: function() {}, expect: false },
        { value: [], expect: false }
    ];

for (var a = 0 ; a < values.length ; a++)
    {
    var value = values[ a ].value;
    var expect = values[ a ].expect;

    assert.strictEqual( Utilities.isInteger( value ), expect, 'Value: ' + value );
    }
});


    // isNumber //
QUnit.module( 'isNumber' );
QUnit.test( 'Test type', function( assert )
{
var values = [
        { value: 1, expect: true },
        { value: 1.2, expect: true },
        { value: NaN, expect: false },
        { value: Infinity, expect: false },
        { value: "1.3", expect: false },
        { value: 'a', expect: false },
        { value: '', expect: false },
        { value: undefined, expect: false },
        { value: null, expect: false },
        { value: true, expect: false },
        { value: {}, expect: false },
        { value: function() {}, expect: false },
        { value: [], expect: false }
    ];

for (var a = 0 ; a < values.length ; a++)
    {
    var value = values[ a ].value;
    var expect = values[ a ].expect;

    assert.strictEqual( Utilities.isNumber( value ), expect, 'Value: ' + value );
    }
});


    // isString //
QUnit.module( 'isString' );
QUnit.test( 'Test type', function( assert )
{
var values = [
        { value: 1, expect: false },
        { value: 1.2, expect: false },
        { value: NaN, expect: false },
        { value: Infinity, expect: false },
        { value: "1.3", expect: true },
        { value: 'a', expect: true },
        { value: '', expect: true },
        { value: undefined, expect: false },
        { value: null, expect: false },
        { value: true, expect: false },
        { value: {}, expect: false },
        { value: function() {}, expect: false },
        { value: [], expect: false }
    ];

for (var a = 0 ; a < values.length ; a++)
    {
    var value = values[ a ].value;
    var expect = values[ a ].expect;

    assert.strictEqual( Utilities.isString( value ), expect, 'Value: ' + value );
    }
});


// ---------- Local Storage ---------- //


    // saveObject / getObject //
QUnit.module( 'saveGetObject' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.saveObject();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.saveObject( 4, 4 );
    }, expect, 'Passed a number for the key argument.' );

assert.throws( function()
    {
    Utilities.getObject();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.getObject( 4 );
    }, expect, 'Passed a number for the key argument.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var key = 'test';
var returnedValue;

var testValues = [ 4, 'hi there', { one: 2, three: [ 4, 5 ] } ];

for (var a = 0 ; a < testValues.length ; a++)
    {
    var value = testValues[ a ];

    Utilities.saveObject( key, value );

    returnedValue = Utilities.getObject( key );

    assert.deepEqual( returnedValue, value );
    }
});


// ---------- Number Utilities ---------- //


    // getRandomFloat //
QUnit.module( 'getRandomFloat' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.getRandomFloat();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.getRandomFloat( 1 );
    }, expect, 'Only one argument.' );

assert.throws( function()
    {
    Utilities.getRandomFloat( 'asd', 'dsa' );
    }, expect, 'Passed string arguments.' );

assert.throws( function()
    {
    Utilities.getRandomFloat( 4.22, 2 );
    }, expect, 'max less than min.' );
});


QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;
var ok;

result = Utilities.getRandomFloat( 2, 2 );
expect = 2;

assert.deepEqual( result, expect, 'Inclusive limits.' );

result = Utilities.getRandomFloat( -4.44, 4.44 );
ok = result >= -4.44 && result <= 4.44;

assert.ok( ok, 'A random value between the limits.' );

result = Utilities.getRandomFloat( 0, 4.123 );
ok = result >= 0 && result <= 4.123;

assert.ok( ok, 'Zero in one of the range limits.' );
});


    // getRandomInt //
QUnit.module( 'getRandomInt' );
QUnit.test( "validate arguments", function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.getRandomInt();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.getRandomInt( 1 );
    }, expect, 'Only one argument.' );

assert.throws( function()
    {
    Utilities.getRandomInt( 'hi', 'there' );
    }, expect, 'Passed string arguments.' );

assert.throws( function()
    {
    Utilities.getRandomInt( 3, 2 );
    }, expect, 'max less than min.' );

assert.throws( function()
    {
    Utilities.getRandomInt( 2.7, 3 );
    }, expect, 'Passed a float value to 1st argument.' );

assert.throws( function()
    {
    Utilities.getRandomInt( 1, 2.1 );
    }, expect, 'Passed a float to the 2nd argument.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.getRandomInt( 4, 4 );
expect = 4;

assert.deepEqual( result, expect, 'Inclusive limits.' );

result = Utilities.getRandomInt( -4, 4 );
expect = result >= -4 && result <= 4;

assert.ok( expect, 'A value between -4 and 4' );

result = Utilities.getRandomInt( 0, 2 );
expect = result >= 0 && result <= 2;

assert.ok( expect, 'Zero in one of the range limits.' );
});


    // getSeveralRandomInts //
QUnit.module( 'getSeveralRandomInts' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.getSeveralRandomInts();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.getSeveralRandomInts( 1 );
    }, expect, 'Only one argument.' );

assert.throws( function()
    {
    Utilities.getSeveralRandomInts( 1, 2 );
    }, expect, 'Only two arguments.' );

assert.throws( function()
    {
    Utilities.getSeveralRandomInts( 'hi', 'there', '!' );
    }, expect, 'Passed string arguments.' );

assert.throws( function()
    {
    Utilities.getSeveralRandomInts( 3, 2, 5 );
    }, expect, 'max less than min.' );

assert.throws( function()
    {
    Utilities.getSeveralRandomInts( 2.7, 6, 2 );
    }, expect, 'Passed a float value to 1st argument.' );

assert.throws( function()
    {
    Utilities.getSeveralRandomInts( 1, 4.1, 2 );
    }, expect, 'Passed a float to the 2nd argument.' );

assert.throws( function()
    {
    Utilities.getSeveralRandomInts( 1, 4, 2.1 );
    }, expect, 'Passed a float to the 3rd argument.' );

assert.throws( function()
    {
    Utilities.getSeveralRandomInts( 1, 2, 3 );
    }, expect, 'Try to get more integers than the range of values provided.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;
var ok;
var a;

result = Utilities.getSeveralRandomInts( 1, 1, 1 );
expect = [ 1 ];

assert.deepEqual( result, expect, 'Range of 1 with 1 random integer needed.' );

result = Utilities.getSeveralRandomInts( 1, 2, 2 );
expect = [ 1, 2 ];

ok = true;

if ( result.length === expect.length )
    {
    for (a = 0 ; a < expect.length ; a++)
        {
        if ( result.indexOf( expect[ a ] ) < 0 )
            {
            ok = false;
            break;
            }
        }
    }

else
    {
    ok = false;
    }

assert.ok( ok, 'A range of 2, with 2 required integers.' );

result = Utilities.getSeveralRandomInts( -4, 4, 4 );
ok = true;

if ( result.length === 4 )
    {
    for (a = 0 ; a < result.length ; a++)
        {
        var value = result[ a ];

        if ( value < -4 || value > 4 )
            {
            ok = false;
            break;
            }
        }
    }

else
    {
    ok = false;
    }

assert.ok( ok, 'A range bigger than the number of required integers.' );


result = Utilities.getSeveralRandomInts( 0, 0, 1 );
ok = result[ 0 ] === 0;

assert.ok( ok, 'A zero in the range limits.' );
});


    // numberOfDigits //

QUnit.module( 'numberOfDigits' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.numberOfDigits();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.numberOfDigits( 'asd' );
    }, expect, 'Passed string argument.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.numberOfDigits( 4 );
expect = 1;

assert.deepEqual( result, expect );

result = Utilities.numberOfDigits( 12 );
expect = 2;

assert.deepEqual( result, expect );

result = Utilities.numberOfDigits( -12 );
expect = 2;

assert.deepEqual( result, expect );

result = Utilities.numberOfDigits( 12.11 );
expect = 4;

assert.deepEqual( result, expect );

result = Utilities.numberOfDigits( -12.34 );
expect = 4;

assert.deepEqual( result, expect );
});


    // round //
QUnit.module( 'round' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.round();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.round( 1.1 );
    }, expect, 'Only one argument.' );

assert.throws( function()
    {
    Utilities.round( 'hi', 'there' );
    }, expect, 'String arguments.' );

assert.throws( function()
    {
    Utilities.round( 4.22, 2.2 );
    }, expect, 'Float decimal case.' );

assert.throws( function()
    {
    Utilities.round( 4.22, -2 );
    }, expect, 'Negative decimal case.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.round( 4.22, 1 );
expect = 4.2;

assert.deepEqual( result, expect );

result = Utilities.round( 4.25, 1 );
expect = 4.3;

assert.deepEqual( result, expect );

result = Utilities.round( -4.5, 0 );
expect = -4;

assert.deepEqual( result, expect );
});


// ---------- Object Utilities ---------- //


    // deepClone //
QUnit.module( 'deepClone' );
QUnit.test( 'test with valid arguments', function( assert )
{
var test;
var copy;

test = [ 1, 2, 3 ];
copy = Utilities.deepClone( test );

test[ 0 ] = 4;

assert.notDeepEqual( copy, test, 'Clone of an array of numbers.' );

test = { one: 1, two: [ 'three', 'four' ] };
copy = Utilities.deepClone( test );

test.two.push( 'five' );

assert.ok( test.two.length !== copy.two.length, 'Clone of an object.' );
});


    // createEnum //
QUnit.module( 'createEnum' );

QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.createEnum();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.createEnum( 'one' );
    }, expect, 'Needs to be an array.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var obj1 = Utilities.createEnum( [ 'one', 'two' ] );

assert.deepEqual( obj1[ 0 ], 'one' );
assert.deepEqual( obj1[ '1' ], 'two' );
assert.deepEqual( obj1[ 'one' ], 0 );
assert.deepEqual( obj1.two, 1 );

var obj2 = Utilities.createEnum( [ 'hi', 'there' ], -4 );

assert.deepEqual( obj2[ -4 ], 'hi' );
assert.deepEqual( obj2[ '-3' ], 'there' );
assert.deepEqual( obj2[ 'hi' ], -4 );
assert.deepEqual( obj2.there, -3 );
});


    // inheritPrototype //
QUnit.module( 'inheritPrototype' );
QUnit.test( 'test with valid arguments', function( assert )
{
function BaseClass( b )
    {
    this.a = 'a';
    this.b = b;
    this.one = function() { return '1'; };
    }

BaseClass.prototype.two = function()
    {
    return '2';
    };

function DerivedClass()
    {
    BaseClass.call( this, 'b' );

    this.c = 'c';
    }

Utilities.inheritPrototype( DerivedClass, BaseClass );

DerivedClass.prototype.three = function()
    {
    return '3';
    };


var expect = 'abc123';

var obj = new DerivedClass();
var result = obj.a + obj.b + obj.c + obj.one() + obj.two() + obj.three();

assert.deepEqual( result, expect );
});


// ---------- Time Utilities ---------- //


    // timeToString //
QUnit.module( 'timeToString' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.timeToString();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.timeToString( '1 december' );
    }, expect, 'Passed a string argument.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var values = [
        { milliSeconds: 0, expectedString: '0 seconds' },
        { milliSeconds: 1000, expectedString: '1 second' },
        { milliSeconds: 30000, expectedString: '30 seconds' },
        { milliSeconds: 60000, expectedString: '1 minute' },
        { milliSeconds: 61000, expectedString: '1 minute 1 second' },
        { milliSeconds: 150000, expectedString: '2 minutes 30 seconds' },
        { milliSeconds: 3600000, expectedString: '1 hour' },
        { milliSeconds: 3601000, expectedString: '1 hour 1 second' },
        { milliSeconds: 3720000, expectedString: '1 hour 2 minutes' },
        { milliSeconds: 9000000, expectedString: '2 hours 30 minutes' },
        { milliSeconds: 86400000, expectedString: '1 day' },
        { milliSeconds: 88201000, expectedString: '1 day 30 minutes' },
        { milliSeconds: 864020000, expectedString: '10 days 20 seconds' }
    ];

for (var a = 0 ; a < values.length ; a++)
    {
    var value = values[ a ];

    var result = Utilities.timeToString( value.milliSeconds );

    assert.deepEqual( result, value.expectedString );
    }

assert.deepEqual( Utilities.timeToString( 88201000, 3 ), '1 day 30 minutes 1 second' );
});


    // Timeout //
QUnit.module( 'Timeout' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;
var timeout = new Utilities.Timeout();
var func = function() {};

assert.throws( function()
    {
    timeout.start();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    timeout.start( func );
    }, expect, 'Only one argument' );

assert.throws( function()
    {
    timeout.start( null, 1000 );
    }, expect, 'Passing null to the function argument.' );

assert.throws( function()
    {
    timeout.start( func, 'asd' );
    }, expect, 'Wrong time of interval.' );

    // just in case a test fails and starts the timeout
timeout.clear();
});

QUnit.asyncTest( 'test with valid arguments', function( assert )
{
expect( 1 );    // number of assertions within this test

var value = 0;
var timeout = new Utilities.Timeout();

timeout.start( function()
    {
    value = 1;

    assert.deepEqual( value, 1 );
    QUnit.start();
    }, 10 );
});


    // Timer //
QUnit.module( 'Timer' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    new Utilities.Timer();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    new Utilities.Timer( 0 );
    }, expect, 'Not an html element.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var htmlElement = document.createElement( 'div' );
var timer = new Utilities.Timer( htmlElement );

    // starting value of the timer (0 seconds)
assert.deepEqual( htmlElement.innerHTML, '0 seconds', 'Starting time string (from the html element).' );
assert.deepEqual( timer.getTimeString(), '0 seconds', 'Starting time (from the timer object).' );
assert.deepEqual( timer.getTimeSeconds(), 0, '0 seconds.' );
});


// ---------- Trigonometry ---------- //


    // calculateAngle //
QUnit.module( 'calculateAngle' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.calculateAngle();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.calculateAngle( 1 );
    }, expect, 'Only one argument.' );

assert.throws( function()
    {
    Utilities.calculateAngle( 1, 2 );
    }, expect, 'Only two arguments.' );

assert.throws( function()
    {
    Utilities.calculateAngle( 1, 2, 3 );
    }, expect, 'Only three arguments.' );

assert.throws( function()
    {
    Utilities.calculateAngle( 'hi', 'there' );
    }, expect, 'Passed string arguments.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.calculateAngle( 0, 0, 4, 0 );
expect = 0;

assert.deepEqual( result, expect );

result = Utilities.calculateAngle( 0, 0, 0, 4 );
expect = -Math.PI / 2;

assert.deepEqual( result, expect );

result = Utilities.calculateAngle( 0, 0, -4, 0 );
expect = Math.PI;

assert.deepEqual( result, expect );

result = Utilities.calculateAngle( 0, 0, 0, -4 );
expect = Math.PI / 2;

assert.deepEqual( result, expect );
});


    // calculateDistance //
QUnit.module( 'calculateDistance' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.calculateDistance();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.calculateDistance( 1 );
    }, expect, 'Only one argument.' );

assert.throws( function()
    {
    Utilities.calculateDistance( 1, 2 );
    }, expect, 'Only two arguments.' );

assert.throws( function()
    {
    Utilities.calculateDistance( 1, 2, 3 );
    }, expect, 'Only three arguments.' );

assert.throws( function()
    {
    Utilities.calculateDistance( 'hi', 'there' );
    }, expect, 'Passed string arguments.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.calculateDistance( 0, 0, 4, 0 );
expect = 4;

assert.deepEqual( result, expect );

result = Utilities.calculateDistance( 0, 0, 4, 10 );
expect = Math.sqrt( 4 * 4 + 10 * 10 );

assert.deepEqual( result, expect );

result = Utilities.calculateDistance( 0, 0, -4, -5 );
expect = Math.sqrt( 4 * 4 + 5 * 5 );

assert.deepEqual( result, expect );
});


    // toDegrees //
QUnit.module( 'toDegrees' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.toDegrees();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.toDegrees( 'hi' );
    }, expect, 'Passed string argument.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.toDegrees( 0 );
expect = 0;

assert.deepEqual( result, expect );

result = Utilities.toDegrees( Math.PI / 2 );
expect = 90;

assert.deepEqual( result, expect );

result = Utilities.toDegrees( 3 / 2 * Math.PI );
expect = 270;

assert.deepEqual( result, expect );
});


    // toRadians //
QUnit.module( 'toRadians' );
QUnit.test( 'validate arguments', function( assert )
{
var expect = Error;

assert.throws( function()
    {
    Utilities.toRadians();
    }, expect, 'No arguments given.' );

assert.throws( function()
    {
    Utilities.toRadians( 'hi' );
    }, expect, 'Passed string argument.' );
});

QUnit.test( 'test with valid arguments', function( assert )
{
var result;
var expect;

result = Utilities.toRadians( 0 );
expect = 0;

assert.deepEqual( result, expect );

result = Utilities.toRadians( 90 );
expect = Math.PI / 2;

assert.deepEqual( result, expect );

result = Utilities.toRadians( 270 );
expect = 3 / 2 * Math.PI;

assert.deepEqual( result, expect );
});
