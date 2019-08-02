// ---------- Number Utilities ---------- //

// round //
QUnit.module("round");
QUnit.test("validate arguments", function(assert) {
    var expect = Error;

    assert.throws(
        function() {
            Utilities.round();
        },
        expect,
        "No arguments given."
    );

    assert.throws(
        function() {
            Utilities.round(1.1);
        },
        expect,
        "Only one argument."
    );

    assert.throws(
        function() {
            Utilities.round("hi", "there");
        },
        expect,
        "String arguments."
    );

    assert.throws(
        function() {
            Utilities.round(4.22, 2.2);
        },
        expect,
        "Float decimal case."
    );

    assert.throws(
        function() {
            Utilities.round(4.22, -2);
        },
        expect,
        "Negative decimal case."
    );
});

QUnit.test("test with valid arguments", function(assert) {
    var result;
    var expect;

    result = Utilities.round(4.22, 1);
    expect = 4.2;

    assert.deepEqual(result, expect);

    result = Utilities.round(4.25, 1);
    expect = 4.3;

    assert.deepEqual(result, expect);

    result = Utilities.round(-4.5, 0);
    expect = -4;

    assert.deepEqual(result, expect);
});

// ---------- Object Utilities ---------- //

// deepClone //
QUnit.module("deepClone");
QUnit.test("test with valid arguments", function(assert) {
    var test;
    var copy;

    test = [1, 2, 3];
    copy = Utilities.deepClone(test);

    test[0] = 4;

    assert.notDeepEqual(copy, test, "Clone of an array of numbers.");

    test = { one: 1, two: ["three", "four"] };
    copy = Utilities.deepClone(test);

    test.two.push("five");

    assert.ok(test.two.length !== copy.two.length, "Clone of an object.");
});

// createEnum //
QUnit.module("createEnum");

QUnit.test("validate arguments", function(assert) {
    var expect = Error;

    assert.throws(
        function() {
            Utilities.createEnum();
        },
        expect,
        "No arguments given."
    );

    assert.throws(
        function() {
            Utilities.createEnum("one");
        },
        expect,
        "Needs to be an array."
    );
});

QUnit.test("test with valid arguments", function(assert) {
    var obj1 = Utilities.createEnum(["one", "two"]);

    assert.deepEqual(obj1[0], "one");
    assert.deepEqual(obj1["1"], "two");
    assert.deepEqual(obj1["one"], 0);
    assert.deepEqual(obj1.two, 1);

    var obj2 = Utilities.createEnum(["hi", "there"], -4);

    assert.deepEqual(obj2[-4], "hi");
    assert.deepEqual(obj2["-3"], "there");
    assert.deepEqual(obj2["hi"], -4);
    assert.deepEqual(obj2.there, -3);
});

// ---------- Time Utilities ---------- //

// timeToString //
QUnit.module("timeToString");
QUnit.test("validate arguments", function(assert) {
    var expect = Error;

    assert.throws(
        function() {
            Utilities.timeToString();
        },
        expect,
        "No arguments given."
    );

    assert.throws(
        function() {
            Utilities.timeToString("1 december");
        },
        expect,
        "Passed a string argument."
    );
});

QUnit.test("test with valid arguments", function(assert) {
    var values = [
        { milliSeconds: 0, expectedString: "0 seconds" },
        { milliSeconds: 1000, expectedString: "1 second" },
        { milliSeconds: 30000, expectedString: "30 seconds" },
        { milliSeconds: 60000, expectedString: "1 minute" },
        { milliSeconds: 61000, expectedString: "1 minute 1 second" },
        { milliSeconds: 150000, expectedString: "2 minutes 30 seconds" },
        { milliSeconds: 3600000, expectedString: "1 hour" },
        { milliSeconds: 3601000, expectedString: "1 hour 1 second" },
        { milliSeconds: 3720000, expectedString: "1 hour 2 minutes" },
        { milliSeconds: 9000000, expectedString: "2 hours 30 minutes" },
        { milliSeconds: 86400000, expectedString: "1 day" },
        { milliSeconds: 88201000, expectedString: "1 day 30 minutes" },
        { milliSeconds: 864020000, expectedString: "10 days 20 seconds" },
    ];

    for (var a = 0; a < values.length; a++) {
        var value = values[a];

        var result = Utilities.timeToString(value.milliSeconds);

        assert.deepEqual(result, value.expectedString);
    }

    assert.deepEqual(
        Utilities.timeToString(88201000, 3),
        "1 day 30 minutes 1 second"
    );
});

// ---------- Trigonometry ---------- //

// calculateAngle //
QUnit.module("calculateAngle");
QUnit.test("validate arguments", function(assert) {
    var expect = Error;

    assert.throws(
        function() {
            Utilities.calculateAngle();
        },
        expect,
        "No arguments given."
    );

    assert.throws(
        function() {
            Utilities.calculateAngle(1);
        },
        expect,
        "Only one argument."
    );

    assert.throws(
        function() {
            Utilities.calculateAngle(1, 2);
        },
        expect,
        "Only two arguments."
    );

    assert.throws(
        function() {
            Utilities.calculateAngle(1, 2, 3);
        },
        expect,
        "Only three arguments."
    );

    assert.throws(
        function() {
            Utilities.calculateAngle("hi", "there");
        },
        expect,
        "Passed string arguments."
    );
});

QUnit.test("test with valid arguments", function(assert) {
    var result;
    var expect;

    result = Utilities.calculateAngle(0, 0, 4, 0);
    expect = 0;

    assert.deepEqual(result, expect);

    result = Utilities.calculateAngle(0, 0, 0, 4);
    expect = -Math.PI / 2;

    assert.deepEqual(result, expect);

    result = Utilities.calculateAngle(0, 0, -4, 0);
    expect = Math.PI;

    assert.deepEqual(result, expect);

    result = Utilities.calculateAngle(0, 0, 0, -4);
    expect = Math.PI / 2;

    assert.deepEqual(result, expect);
});

// calculateDistance //
QUnit.module("calculateDistance");
QUnit.test("validate arguments", function(assert) {
    var expect = Error;

    assert.throws(
        function() {
            Utilities.calculateDistance();
        },
        expect,
        "No arguments given."
    );

    assert.throws(
        function() {
            Utilities.calculateDistance(1);
        },
        expect,
        "Only one argument."
    );

    assert.throws(
        function() {
            Utilities.calculateDistance(1, 2);
        },
        expect,
        "Only two arguments."
    );

    assert.throws(
        function() {
            Utilities.calculateDistance(1, 2, 3);
        },
        expect,
        "Only three arguments."
    );

    assert.throws(
        function() {
            Utilities.calculateDistance("hi", "there");
        },
        expect,
        "Passed string arguments."
    );
});

QUnit.test("test with valid arguments", function(assert) {
    var result;
    var expect;

    result = Utilities.calculateDistance(0, 0, 4, 0);
    expect = 4;

    assert.deepEqual(result, expect);

    result = Utilities.calculateDistance(0, 0, 4, 10);
    expect = Math.sqrt(4 * 4 + 10 * 10);

    assert.deepEqual(result, expect);

    result = Utilities.calculateDistance(0, 0, -4, -5);
    expect = Math.sqrt(4 * 4 + 5 * 5);

    assert.deepEqual(result, expect);
});

// toDegrees //
QUnit.module("toDegrees");
QUnit.test("validate arguments", function(assert) {
    var expect = Error;

    assert.throws(
        function() {
            Utilities.toDegrees();
        },
        expect,
        "No arguments given."
    );

    assert.throws(
        function() {
            Utilities.toDegrees("hi");
        },
        expect,
        "Passed string argument."
    );
});

QUnit.test("test with valid arguments", function(assert) {
    var result;
    var expect;

    result = Utilities.toDegrees(0);
    expect = 0;

    assert.deepEqual(result, expect);

    result = Utilities.toDegrees(Math.PI / 2);
    expect = 90;

    assert.deepEqual(result, expect);

    result = Utilities.toDegrees((3 / 2) * Math.PI);
    expect = 270;

    assert.deepEqual(result, expect);
});

// toRadians //
QUnit.module("toRadians");
QUnit.test("validate arguments", function(assert) {
    var expect = Error;

    assert.throws(
        function() {
            Utilities.toRadians();
        },
        expect,
        "No arguments given."
    );

    assert.throws(
        function() {
            Utilities.toRadians("hi");
        },
        expect,
        "Passed string argument."
    );
});

QUnit.test("test with valid arguments", function(assert) {
    var result;
    var expect;

    result = Utilities.toRadians(0);
    expect = 0;

    assert.deepEqual(result, expect);

    result = Utilities.toRadians(90);
    expect = Math.PI / 2;

    assert.deepEqual(result, expect);

    result = Utilities.toRadians(270);
    expect = (3 / 2) * Math.PI;

    assert.deepEqual(result, expect);
});
