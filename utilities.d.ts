declare module Utilities {
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
    function boxBoxCollision(oneX: any, oneY: any, oneWidth: any, oneHeight: any, twoX: any, twoY: any, twoWidth: any, twoHeight: any): boolean;
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
    function circleCircleCollision(x1: any, y1: any, radius1: any, x2: any, y2: any, radius2: any): boolean;
    /**
        Detects collision between a circle and a point.
    
        @param {Number} circleX
        @param {Number} circleY
        @param {Number} circleRadius
        @param {Number} pointX
        @param {Number} pointY
        @return {Boolean}
     */
    function circlePointCollision(circleX: any, circleY: any, circleRadius: any, pointX: any, pointY: any): boolean;
    /**
        Detects collision between a point and a box.
    
        @param {Number} pointX
        @param {Number} pointY
        @param {Number} boxX
        @param {Number} boxY
        @param {Number} boxWidth
        @param {Number} boxHeight
        @return {Boolean}
     */
    function pointBoxCollision(pointX: any, pointY: any, boxX: any, boxY: any, boxWidth: any, boxHeight: any): boolean;
    var KEY_CODE: {
        "0": number;
        "1": number;
        "2": number;
        "3": number;
        "4": number;
        "5": number;
        "6": number;
        "7": number;
        "8": number;
        "9": number;
        backspace: number;
        tab: number;
        enter: number;
        esc: number;
        space: number;
        end: number;
        home: number;
        leftArrow: number;
        upArrow: number;
        rightArrow: number;
        downArrow: number;
        del: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
        h: number;
        i: number;
        j: number;
        k: number;
        l: number;
        m: number;
        n: number;
        o: number;
        p: number;
        q: number;
        r: number;
        s: number;
        t: number;
        u: number;
        v: number;
        w: number;
        x: number;
        y: number;
        z: number;
        f1: number;
        f2: number;
        f3: number;
        f4: number;
        f5: number;
        f6: number;
        f7: number;
        f8: number;
        f9: number;
        f10: number;
        f11: number;
        f12: number;
    };
    var MOUSE_CODE: {
        left: number;
        middle: number;
        right: number;
    };
    /**
        Gets an object (parsed with json) from localStorage.
    
        Throws an Error exception if:
            - key is not a string
            - it doesn't find
    
        @param {String} key
     */
    function getObject(key: any): any;
    /**
        Saves in the localStorage a json string representation of the value.
    
        Throws an Error exception if:
            - key is not a string
    
        @param {String} key
        @param value
     */
    function saveObject(key: any, value: any): void;
    /**
        @return {Boolean}
     */
    function isArray(element: any): boolean;
    /**
        @return {Boolean}
     */
    function isBoolean(element: any): boolean;
    /**
        @return {Boolean}
     */
    function isFunction(element: any): boolean;
    /**
        @return {Boolean}
     */
    function isNumber(element: any): boolean;
    /**
        @return {Boolean}
     */
    function isString(element: any): boolean;
    /**
        Returns a random float number between 'min' and 'max' (inclusive).
    
        Throws an Error exception if:
            - either min or max is not a number
            - the minimum value is bigger than the maximum.
    
        @param {Number} min
        @param {Number} max
        @return {Number}
     */
    function getRandomFloat(min: any, max: any): any;
    /**
        Returns a random integer number between 'min' and 'max' (inclusive).
    
        Throws an Error exception if:
            - min or max isn't a number
            - the minimum value is bigger than the maximum.
    
        @param {Number} min
        @param {Number} max
        @return {Number}
     */
    function getRandomInt(min: any, max: any): any;
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
    function getSeveralRandomInts(min: any, max: any, howMany: any): any[];
    /**
        Returns the number of digits in a number.
        It doesn't consider the minus signal, nor the dot (in floats) as a digit.
    
        Throws an Error exception if:
            - the argument is not a number
    
        @param {Number} theNumber
        @return {Number}
     */
    function numberOfDigits(theNumber: any): any;
    /**
        Rounds a number to a specified decimal case.
    
        Throws an Error exception if:
            - num or dec isn't a number
            - dec is less than 0
    
        @param {Number} num
        @param {Number} dec
        @return {Number}
     */
    function round(num: any, dec: any): number;
    function deepClone(obj: any): any;
    /**
        Enum - A way to associate a string name to a number.
    
        @param {String[]} values - enum names. Each name will have an associated number.
        @param {Number} [start=0] - Starting number for the first name. The number is incremented by one for the next name.
     */
    function createEnum(values: any, start: any): {};
    function inheritPrototype(derivedClass: any, baseClass: any): void;
    /**
        Converts a time (in milliseconds) to a string (with the number of days/hours...).
        The number of units to be shown can be set (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a totalUnits of 2)).
        The units available are: day/hour/minute/second.
    
        Throws an Error exception if:
            - the dateMilliseconds argument isn't a number
    
        @param {Number} dateMilliseconds
        @param {Number} [totalUnits=2]
        @return {String}
     */
    function timeToString(dateMilliseconds: any, totalUnits?: any): string;
    class Timeout {
        is_active: boolean;
        id: number;
        constructor();
        /**
            Starts the timeout. If there was an active timeout already, it is canceled.
        
            Throws an Error exception if:
                - functionToCall isn't a function
                - interval isn't a number
        
            @param {Function} functionToCall
            @param {Number} interval
         */
        start(functionToCall: any, interval: any): void;
        clear(): void;
    }
    /**
        Count-up or count-down timer. Updates directly to the html element.
    
        @constructor Timer
        @param {HTMLElement} htmlElement
     */
    class Timer {
        is_active: boolean;
        start_value: number;
        end_value: number;
        end_callback: () => any;
        tick_callback: () => any;
        count_down: boolean;
        time_count: number;
        interval_f: number;
        html_element: HTMLElement;
        constructor(htmlElement: any);
        /**
            Start counting.
            If no endValue is given, it never stops counting.
        
            @param {Object=} args
            @param {Number=} args.startValue - in milliseconds
            @param {Number=} args.endValue - in milliseconds
            @param {Function=} args.endCallback - To be called when the timer ends (only if an endValue is provided)
            @param {Function=} args.tickCallback - To be called every second.
            @param {Boolean=} args.countDown - count down or count up
         */
        start(args: any): void;
        resume(): void;
        stop(): void;
        reset(): void;
        restart(): void;
        /**
            Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.
        
            @param {Number} time - in milliseconds
         */
        add(time: any): void;
        getTimeString(): string;
        getTimeSeconds(): number;
        getTimeMilliseconds(): number;
    }
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
    function calculateAngle(aX: any, aY: any, bX: any, bY: any): number;
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
    function calculateDistance(aX: any, aY: any, bX: any, bY: any): number;
    /**
        Converts a number in radians to degrees and returns it.
    
        Throws an Error exception if:
            - the argument isn't a number
    
        @param {Number} radians
        @return {Number}
     */
    function toDegrees(radians: any): number;
    /**
        Converts a number in degrees to radians and returns it.
    
        Throws an Error exception if:
            - the argument isn't a number
    
        @param {Number} degrees
        @return {Number}
     */
    function toRadians(degrees: any): number;
}
