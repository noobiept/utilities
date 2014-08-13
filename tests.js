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