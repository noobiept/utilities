"use strict";
/**
 * Random collection of utilities functions/classes.
 */
var Utilities;
(function (Utilities) {
    // ---------- Array Utilities ---------- //
    /**
     * Shuffle an array.
     */
    function shuffle(array) {
        if (!Utilities.isArray(array)) {
            throw new Error("Utilities.shuffle() -> Invalid 'array' argument. Not an array.");
        }
        var currentIndex = array.length;
        var temporaryValue;
        var randomIndex;
        // while there's still elements to shuffle
        while (currentIndex !== 0) {
            // pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // swap it with the current element
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    Utilities.shuffle = shuffle;
    // ---------- Collision Detection ---------- //
    /**
     * Detects collision between 2 boxes.
     */
    function boxBoxCollision(oneX, oneY, oneWidth, oneHeight, twoX, twoY, twoWidth, twoHeight) {
        return !((oneY + oneHeight < twoY) ||
            (oneY > twoY + twoHeight) ||
            (oneX > twoX + twoWidth) ||
            (oneX + oneWidth < twoX));
    }
    Utilities.boxBoxCollision = boxBoxCollision;
    /**
     * Detects collision between two circles.
     */
    function circleCircleCollision(x1, y1, radius1, x2, y2, radius2) {
        var distX = x1 - x2;
        var distY = y1 - y2;
        if (Math.pow(distX, 2) + Math.pow(distY, 2) <= Math.pow(radius1 + radius2, 2)) {
            return true;
        }
        return false;
    }
    Utilities.circleCircleCollision = circleCircleCollision;
    /**
     * Detects collision between a circle and a point.
     */
    function circlePointCollision(circleX, circleY, circleRadius, pointX, pointY) {
        var distanceX = circleX - pointX;
        var distanceY = circleY - pointY;
        // pythagoras
        var squareDistance = distanceX * distanceX + distanceY * distanceY;
        if (squareDistance <= circleRadius * circleRadius) {
            return true;
        }
        return false;
    }
    Utilities.circlePointCollision = circlePointCollision;
    /**
     * Detects collision between a point and a box.
     */
    function pointBoxCollision(pointX, pointY, boxX, boxY, boxWidth, boxHeight) {
        if (pointX < boxX ||
            pointX > boxX + boxWidth ||
            pointY < boxY ||
            pointY > boxY + boxHeight) {
            return false;
        }
        return true;
    }
    Utilities.pointBoxCollision = pointBoxCollision;
    // ---------- Events ---------- //
    /**
     * Numeric code of each key.
     */
    Utilities.KEY_CODE = {
        backspace: 8,
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        end: 35,
        home: 36,
        leftArrow: 37,
        upArrow: 38,
        rightArrow: 39,
        downArrow: 40,
        del: 46,
        "0": 48,
        "1": 49,
        "2": 50,
        "3": 51,
        "4": 52,
        "5": 53,
        "6": 54,
        "7": 55,
        "8": 56,
        "9": 57,
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123
    };
    /**
     * Numeric code of each mouse button.
     */
    Utilities.MOUSE_CODE = {
        left: 0,
        middle: 1,
        right: 2
    };
    // ---------- Local Storage ---------- //
    /**
     * Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.
     *
     * Throws an `Error` exception if:
     * - `key` is not a string.
     * - `key` wasn't found.
     */
    function getObject(key) {
        if (!Utilities.isString(key)) {
            throw new Error("Utilities.getObject() -> Invalid 'key' argument. Not a string.");
        }
        var value = localStorage.getItem(key);
        return value && JSON.parse(value);
    }
    Utilities.getObject = getObject;
    /**
     * Saves in the `localStorage` a json string representation of the `value`.
     *
     * Throws an `Error` exception if:
     * - `key` is not a `string`.
     */
    function saveObject(key, value) {
        if (!Utilities.isString(key)) {
            throw new Error("Utilities.saveObject() -> Invalid 'key' argument. Not a string.");
        }
        localStorage.setItem(key, JSON.stringify(value));
    }
    Utilities.saveObject = saveObject;
    // ---------- Is Type ---------- //
    /**
     * @return If it is an array or not.
     */
    function isArray(element) {
        return Object.prototype.toString.call(element) === '[object Array]';
    }
    Utilities.isArray = isArray;
    /**
     * @return If it is a boolean.
     */
    function isBoolean(element) {
        return element === true || element === false || Object.prototype.toString.call(element) === '[object Boolean]';
    }
    Utilities.isBoolean = isBoolean;
    /**
     * @return If it is a function.
     */
    function isFunction(element) {
        return typeof element === 'function' && Object.prototype.toString.call(element) === '[object Function]';
    }
    Utilities.isFunction = isFunction;
    /**
     * @return If it is an integer.
     */
    function isInteger(value) {
        return Utilities.isNumber(value) && (value % 1) === 0;
    }
    Utilities.isInteger = isInteger;
    /**
     * @return If it is a number.
     */
    function isNumber(element) {
        return typeof element === 'number' && !isNaN(parseFloat(element)) && isFinite(element);
    }
    Utilities.isNumber = isNumber;
    /**
     * @return If it is a string.
     */
    function isString(element) {
        return typeof element === 'string' || element instanceof String;
    }
    Utilities.isString = isString;
    // ---------- Number Utilities ---------- //
    /**
     * Returns a random float number between `min` and `max` (inclusive).
     *
     * Throws an `Error` exception if:
     * - either `min` or `max` is not a `number`.
     * - the minimum value is bigger than the maximum.
     */
    function getRandomFloat(min, max) {
        if (!Utilities.isNumber(min) ||
            !Utilities.isNumber(max) ||
            (min > max)) {
            throw new Error("Utilities.getRandomFloat() -> Invalid arguments. Either 'min'/'max' are not numbers, or 'min' > 'max'.");
        }
        return Math.random() * (max - min) + min;
    }
    Utilities.getRandomFloat = getRandomFloat;
    /**
     * Returns a random integer number between `min` and `max` (inclusive).
     *
     * Throws an `Error` exception if:
     * - `min` or `max` isn't an integer.
     * - the minimum value is bigger than the maximum.
     */
    function getRandomInt(min, max) {
        if (!Utilities.isInteger(min) ||
            !Utilities.isInteger(max) ||
            (min > max)) {
            throw new Error("Utilities.getRandomInt() -> Invalid arguments. Either 'min'/'max' are not integers, or 'min > 'max'.");
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Utilities.getRandomInt = getRandomInt;
    /**
     * Returns several different random integers, in the range between `min` and `max` (inclusive).
     *
     * Throws an Error exception if:
     * - `min`, `max` or `howMany` isn't an integer.
     * - the minimum value is bigger than the maximum.
     * - the range is less than the number of integers required.
     */
    function getSeveralRandomInts(min, max, howMany) {
        if (!Utilities.isInteger(min) ||
            !Utilities.isInteger(max) ||
            !Utilities.isInteger(howMany) ||
            (min > max) ||
            ((max - min) < howMany - 1)) {
            throw new Error("Utilities.getSeveralRandomInts() -> Invalid arguments.");
        }
        var numbers = [];
        while (numbers.length < howMany) {
            var randomNumber = Utilities.getRandomInt(min, max);
            if (numbers.indexOf(randomNumber) < 0) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    }
    Utilities.getSeveralRandomInts = getSeveralRandomInts;
    /**
     * Returns the number of digits in a number.
     * It doesn't consider the minus signal, nor the dot (in floats) as a digit.
     *
     * Throws an `Error` exception if:
     * - the argument is not a number.
     */
    function numberOfDigits(theNumber) {
        if (!Utilities.isNumber(theNumber)) {
            throw new Error("Utilities.numberOfDigits() -> Invalid 'theNumber' argument. Not a number.");
        }
        if (theNumber < 0) {
            theNumber *= -1;
        }
        var numberString = theNumber.toString().replace('.', '');
        return numberString.length;
    }
    Utilities.numberOfDigits = numberOfDigits;
    /**
     * Rounds a number to a specified decimal case.
     *
     * Throws an `Error` exception if:
     * - `num` isn't a number.
     * - `dec` isn't an integer.
     * - `dec` is less than 0.
     */
    function round(num, dec) {
        if (!Utilities.isNumber(num) ||
            !Utilities.isInteger(dec) ||
            (dec < 0)) {
            throw new Error('Utilities.round() -> Invalid arguments.');
        }
        return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    }
    Utilities.round = round;
    // ---------- Object Utilities ---------- //
    /**
     * Returns a deep clone/copy of the object.
     */
    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    Utilities.deepClone = deepClone;
    /**
     * Enum - A way to associate a string name to a number.
     *
     * @param values The `enum` names. Each name will have an associated number.
     * @param start Starting number for the first name. The number is incremented by one for the next name.
     */
    function createEnum(values, start) {
        if (!Utilities.isArray(values)) {
            throw new Error("Utilities.createEnum() -> Invalid 'values' argument. Needs to be an array of strings.");
        }
        if (!Utilities.isNumber(start)) {
            start = 0;
        }
        var obj = {};
        var length = values.length;
        for (var a = 0; a < length; a++) {
            let name = values[a];
            obj[start] = name;
            obj[name] = start;
            start = start + 1;
        }
        return obj;
    }
    Utilities.createEnum = createEnum;
    /**
     * Used for `class` inheritance (search for parasitic combination inheritance).
     */
    function inheritPrototype(derivedClass, baseClass) {
        var f = function () { };
        f.prototype = baseClass.prototype;
        var prototype = new f();
        prototype.constructor = derivedClass;
        derivedClass.prototype = prototype;
    }
    Utilities.inheritPrototype = inheritPrototype;
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
    function timeToString(dateMilliseconds, totalUnits = 2) {
        if (!Utilities.isNumber(dateMilliseconds)) {
            throw new Error("Utilities.timeToString() -> Invalid 'dateMilliseconds' argument. Not a number.");
        }
        if (!Utilities.isNumber(totalUnits)) {
            totalUnits = 2;
        }
        // :: convert to days/hours :: //
        //in milliseconds
        var second = 1000;
        var minute = 60 * second;
        var hour = 60 * minute;
        var day = 24 * hour;
        var minutesLeft = 0;
        var hoursLeft = 0;
        var daysLeft = 0;
        var secondsLeft = 0;
        //count the days
        while (dateMilliseconds >= day) {
            daysLeft++;
            dateMilliseconds -= day;
        }
        //count the hours
        while (dateMilliseconds >= hour) {
            hoursLeft++;
            dateMilliseconds -= hour;
        }
        //count the minutes
        while (dateMilliseconds >= minute) {
            minutesLeft++;
            dateMilliseconds -= minute;
        }
        //and the seconds
        secondsLeft = Utilities.round(dateMilliseconds / second, 2);
        // :: construct the string :: //
        var theDate = [
            { name: "day", time: daysLeft },
            { name: "hour", time: hoursLeft },
            { name: "minute", time: minutesLeft },
            { name: "second", time: secondsLeft }
        ];
        var constructDate = function (dateTmp, numberOf) {
            // day to days, hour to hours...
            if (numberOf !== 1) {
                dateTmp += "s";
            }
            return numberOf + " " + dateTmp;
        };
        var date = "";
        var i;
        for (i = 0; i < theDate.length; i++) {
            // reached the limit of the units
            if (totalUnits === 0) {
                break;
            }
            let component = theDate[i];
            // only show when there's something relevant to be shown
            // (for example: 0 days 2 hours 2 minutes... no point showing the days part)
            if (component.time !== 0) {
                // add spacing between the units apart from the first one
                if (date !== '') {
                    date += ' ';
                }
                date += constructDate(component.name, component.time);
                totalUnits--;
            }
        }
        if (date === '') {
            date = '0 seconds';
        }
        return date;
    }
    Utilities.timeToString = timeToString;
    /**
     * Call a function after a certain time has passed. Uses the `window.setTimeout()`.
     */
    class Timeout {
        constructor() {
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
        start(functionToCall, interval) {
            if (!Utilities.isFunction(functionToCall) ||
                !Utilities.isNumber(interval)) {
                throw new Error('Utilities.Timeout.start() -> Invalid arguments.');
            }
            var _this = this;
            if (this.is_active) {
                this.clear();
            }
            this.is_active = true;
            this.id = window.setTimeout(function () {
                _this.is_active = false;
                functionToCall();
            }, interval);
        }
        /**
         * Cancels the timeout.
         */
        clear() {
            window.clearTimeout(this.id);
            this.is_active = false;
        }
    }
    Utilities.Timeout = Timeout;
    /**
     * Count-up or count-down timer. Can optionally update an html element.
     */
    class Timer {
        constructor(htmlElement) {
            // either don't receive an argument, or if given needs to be an HTMLElement
            if (typeof htmlElement !== 'undefined' && !(htmlElement instanceof HTMLElement)) {
                throw new Error("Utilities.Timer() -> Invalid 'htmlElement' argument. Not an HTML element.");
            }
            this.is_active = false;
            this.start_value = 0;
            this.end_value = null; // null means it doesn't have an end value
            this.end_callback = null;
            this.tick_callback = null;
            this.count_down = false;
            this.time_count = 0;
            this.interval_f = null;
            this.html_element = htmlElement;
            this.updateHtmlElement();
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
        start(args) {
            if (typeof args === 'undefined') {
                args = {};
            }
            if (!Utilities.isNumber(args.startValue)) {
                args.startValue = 0;
            }
            if (!Utilities.isNumber(args.endValue)) {
                args.endValue = null;
            }
            if (!Utilities.isFunction(args.endCallback)) {
                args.endCallback = null;
            }
            if (!Utilities.isFunction(args.tickCallback)) {
                args.tickCallback = null;
            }
            if (args.countDown !== true) {
                args.countDown = false;
            }
            if (this.is_active) {
                this.stop();
            }
            this.count_down = args.countDown;
            this.time_count = args.startValue;
            this.start_value = args.startValue;
            this.end_value = args.endValue;
            this.end_callback = args.endCallback;
            this.tick_callback = args.tickCallback;
            this.updateHtmlElement();
            this.resume();
        }
        /**
         * Resumes the timer with the same settings/values that were set before it was stopped.
         */
        resume() {
            if (this.is_active) {
                return;
            }
            var _this = this;
            var interval = 1000;
            this.is_active = true;
            this.interval_f = window.setInterval(function () {
                // update the counter
                if (_this.count_down) {
                    _this.time_count -= interval;
                }
                else {
                    _this.time_count += interval;
                }
                // if there's an end value defined, check if we reached it
                if (_this.end_value !== null) {
                    var ended = false;
                    if (_this.count_down) {
                        if (_this.time_count <= _this.end_value) {
                            ended = true;
                        }
                    }
                    else {
                        if (_this.time_count >= _this.end_value) {
                            ended = true;
                        }
                    }
                    if (ended) {
                        _this.stop();
                        if (_this.end_callback !== null) {
                            _this.end_callback();
                        }
                    }
                }
                // call the tick callback if there's one
                if (_this.tick_callback !== null) {
                    _this.tick_callback();
                }
                // update the html element with the current time
                _this.updateHtmlElement();
            }, interval);
        }
        /**
         * Stop counting.
         */
        stop() {
            if (this.interval_f) {
                window.clearInterval(this.interval_f);
                this.interval_f = null;
            }
            this.is_active = false;
        }
        /**
         * Stops and resets the count.
         */
        reset() {
            this.stop();
            this.time_count = this.start_value;
            this.updateHtmlElement();
        }
        /**
         * Restart the timer.
         */
        restart() {
            this.reset();
            this.start({
                startValue: this.start_value,
                endValue: this.end_value,
                endCallback: this.end_callback,
                tickCallback: this.tick_callback,
                countDown: this.count_down
            });
        }
        /**
         * Updates the associated html element (if was given) with the current time value.
         */
        updateHtmlElement() {
            if (this.html_element) {
                this.html_element.innerHTML = this.getTimeString();
            }
        }
        /**
         * Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.
         *
         * @param time In milliseconds.
         */
        add(time) {
            this.time_count += time;
        }
        /**
         * Returns a string with the time passed so far.
         */
        getTimeString() {
            return Utilities.timeToString(this.time_count);
        }
        /**
         * Returns the time it has passed so far, in seconds.
         */
        getTimeSeconds() {
            return this.time_count / 1000;
        }
        /**
         * Returns the time it has passed so far, in milliseconds.
         */
        getTimeMilliseconds() {
            return this.time_count;
        }
    }
    Utilities.Timer = Timer;
    // ---------- Trigonometry ---------- //
    /**
     * Returns the angle between 2 points in radians.
     * Positive in clockwise direction.
     *
     * Throws an `Error` exception if:
     * - any of the arguments isn't a number.
     */
    function calculateAngle(aX, aY, bX, bY) {
        if (!Utilities.isNumber(aX) ||
            !Utilities.isNumber(aY) ||
            !Utilities.isNumber(bX) ||
            !Utilities.isNumber(bY)) {
            throw new Error('Utilities.calculateAngle() -> Invalid arguments. Needs to be a number.');
        }
        // make a triangle from the position the objectA is in, relative to the objectB position
        var triangleOppositeSide = aY - bY;
        var triangleAdjacentSide = bX - aX;
        // find the angle, given the two sides (of a right triangle)
        return Math.atan2(triangleOppositeSide, triangleAdjacentSide);
    }
    Utilities.calculateAngle = calculateAngle;
    /**
     * Distance between 2 points.
     *
     * Throws an `Error` exception if:
     * - any of the arguments isn't a number.
     */
    function calculateDistance(aX, aY, bX, bY) {
        if (!Utilities.isNumber(aX) ||
            !Utilities.isNumber(aY) ||
            !Utilities.isNumber(bX) ||
            !Utilities.isNumber(bY)) {
            throw new Error('Utilities.calculateDistance() -> Invalid arguments. Needs to be a number.');
        }
        var opposite = bY - aY;
        var adjacent = bX - aX;
        return Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
    }
    Utilities.calculateDistance = calculateDistance;
    /**
     * Converts a number in `radians` to `degrees` and returns it.
     *
     * Throws an `Error` exception if:
     * - the argument isn't a number.
     */
    function toDegrees(radians) {
        if (!Utilities.isNumber(radians)) {
            throw new Error("Utilities.toDegrees() -> Invalid 'radians' argument. Not a number.");
        }
        return radians * 180 / Math.PI;
    }
    Utilities.toDegrees = toDegrees;
    /**
     * Converts a number in `degrees` to `radians` and returns it.
     *
     * Throws an `Error` exception if:
     * - the argument isn't a number.
     */
    function toRadians(degrees) {
        if (!Utilities.isNumber(degrees)) {
            throw new Error("Utilities.toRadians() -> Invalid 'degrees' argument. Not a number.");
        }
        return degrees * Math.PI / 180;
    }
    Utilities.toRadians = toRadians;
})(Utilities || (Utilities = {}));
