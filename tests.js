
QUnit.module( 'getRandomInt' );
QUnit.test( "test for valid arguments", function( assert )
{
var result;
var expect;

result = Utilities.getRandomInt();
expect = null;

assert.deepEqual( result, expect, 'No arguments given.' );

result = Utilities.getRandomInt( 1 );
expect = null;

assert.deepEqual( result, expect, 'Only one argument.' );

result = Utilities.getRandomInt( 'hi', 'there' );
expect = null;

assert.deepEqual( result, expect, 'Passed string arguments.' );

result = Utilities.getRandomInt( 3, 2 );
expect = null;

assert.deepEqual( result, expect, 'max less than min.' );

result = Utilities.getRandomInt( 2.7, 3 );
expect = null;

assert.deepEqual( result, expect, 'Passed a float value to 1st argument.' );

result = Utilities.getRandomInt( 1, 2.1 );
expect = null;

assert.deepEqual( result, expect, 'Passed a float to the 2nd argument.' );
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