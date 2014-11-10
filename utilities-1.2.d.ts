declare module Utilities
{
// ---------- Collision Detection ---------- //

export function boxBoxCollision( oneX: number, oneY: number, oneWidth: number, oneHeight: number, twoX: number, twoY: number, twoWidth: number, twoHeight: number ): boolean;

export function circleCircleCollision( x1: number, y1: number, radius1: number, x2: number, y2: number, radius2: number ): boolean;

export function circlePointCollision( circleX: number, circleY: number, circleRadius: number, pointX: number, pointY: number ): boolean;

export function pointBoxCollision( pointX: number, pointY: number, boxLeft: number, boxRight: number, boxTop: number, boxBottom: number ): boolean;


// ---------- Events ---------- //

export var KEY_CODE: {

    backspace  : number;
    tab        : number;
    enter      : number;
    esc        : number;
    space      : number;
    end        : number;
    home       : number;
    leftArrow  : number;
    upArrow    : number;
    rightArrow : number;
    downArrow  : number;
    del        : number;

    "0" : number;
    "1" : number;
    "2" : number;
    "3" : number;
    "4" : number;
    "5" : number;
    "6" : number;
    "7" : number;
    "8" : number;
    "9" : number;

    a : number;
    b : number;
    c : number;
    d : number;
    e : number;
    f : number;
    g : number;
    h : number;
    i : number;
    j : number;
    k : number;
    l : number;
    m : number;
    n : number;
    o : number;
    p : number;
    q : number;
    r : number;
    s : number;
    t : number;
    u : number;
    v : number;
    w : number;
    x : number;
    y : number;
    z : number;

    f1  : number;
    f2  : number;
    f3  : number;
    f4  : number;
    f5  : number;
    f6  : number;
    f7  : number;
    f8  : number;
    f9  : number;
    f10 : number;
    f11 : number;
    f12 : number;

};

export var MOUSE_CODE: {
    left   : number;
    middle : number;
    right  : number;
};


// ---------- Local Storage ---------- //

export function getObject( key: string ): any;

export function saveObject( key: string, value: any ): void;


// ---------- Is Type ---------- //

export function isArray( element: any ): boolean;

export function isBoolean( element: any ): boolean;

export function isFunction( element: any ): boolean;

export function isNumber( element: any ): boolean;

export function isString( element: any ): boolean;


// ---------- Number Utilities ---------- //

export function getRandomFloat( min: number, max: number ): number;

export function getRandomInt( min: number, max: number ): number;

export function getSeveralRandomInts( min: number, max: number, howMany: number ): number[];

export function numberOfDigits( theNumber: number ): number;

export function round( num: number, dec: number ): number;


// ---------- Object Utilities ---------- //

export function deepClone( obj: any ): any;

export function inheritPrototype( derivedClass: any, baseClass: any );


// ---------- Time Utilities ---------- //

export function timeToString( dateMilliseconds: number, totalUnits?: number ): string;

export class Timeout
    {
    start( functionToCall: () => any, interval: number ): void;
    clear(): void;
    }

export class Timer
    {
    constructor( htmlElement: HTMLElement );

    start(): void;
    stop(): void;
    reset(): void;
    restart(): void;
    getTimeString(): string;
    getTimeSeconds(): number;
    }


// ---------- Trigonometry ---------- //

export function calculateAngle( aX: number, aY: number, bX: number, bY: number ): number;

export function calculateDistance( aX: number, aY: number, bX: number, bY: number ): number;

export function toDegrees( radians: number ): number;

export function toRadians( degrees: number ): number;
}