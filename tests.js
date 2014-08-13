
QUnit.module( 'getRandomInt' );
QUnit.test( "test for valid arguments", function( assert )
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
});