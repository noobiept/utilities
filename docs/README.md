Utilities

# Utilities

## Table of contents

### Enumerations

- [DialogButtons](enums/DialogButtons.md)
- [DialogPosition](enums/DialogPosition.md)
- [MouseButton](enums/MouseButton.md)

### Classes

- [Dialog](classes/Dialog.md)
- [EventDispatcher](classes/EventDispatcher.md)
- [Preload](classes/Preload.md)
- [Timeout](classes/Timeout.md)
- [Timer](classes/Timer.md)

### Interfaces

- [DialogArgs](interfaces/DialogArgs.md)
- [PreloadArgs](interfaces/PreloadArgs.md)
- [TimeToStringArgs](interfaces/TimeToStringArgs.md)
- [TimerArgs](interfaces/TimerArgs.md)
- [TimerStartArgs](interfaces/TimerStartArgs.md)

### Type aliases

- [DialogButtonsArg](README.md#dialogbuttonsarg)
- [FileInfoType](README.md#fileinfotype)
- [ManifestData](README.md#manifestdata)
- [PreloadData](README.md#preloaddata)
- [PreloadEvent](README.md#preloadevent)
- [UpdateElement](README.md#updateelement)
- [UpdateFormat](README.md#updateformat)

### Functions

- [boxBoxCollision](README.md#boxboxcollision)
- [calculateAngle](README.md#calculateangle)
- [calculateDistance](README.md#calculatedistance)
- [circleCircleCollision](README.md#circlecirclecollision)
- [circlePointCollision](README.md#circlepointcollision)
- [createEnum](README.md#createenum)
- [deepClone](README.md#deepclone)
- [getObject](README.md#getobject)
- [getRandomFloat](README.md#getrandomfloat)
- [getRandomInt](README.md#getrandomint)
- [getSeveralRandomInts](README.md#getseveralrandomints)
- [isArray](README.md#isarray)
- [isBoolean](README.md#isboolean)
- [isFunction](README.md#isfunction)
- [isInteger](README.md#isinteger)
- [isNumber](README.md#isnumber)
- [isString](README.md#isstring)
- [numberOfDigits](README.md#numberofdigits)
- [pointBoxCollision](README.md#pointboxcollision)
- [range](README.md#range)
- [round](README.md#round)
- [saveObject](README.md#saveobject)
- [shuffle](README.md#shuffle)
- [timeToString](README.md#timetostring)
- [toDegrees](README.md#todegrees)
- [toRadians](README.md#toradians)

## Type aliases

### DialogButtonsArg

Ƭ **DialogButtonsArg**: [`DialogButtons`](enums/DialogButtons.md) \| `HTMLElement`[]

#### Defined in

[dialog.ts:13](https://github.com/noobiept/utilities/blob/66bf665/source/dialog.ts#L13)

___

### FileInfoType

Ƭ **FileInfoType**: keyof typeof `FileInfo`

#### Defined in

[preload.ts:45](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L45)

___

### ManifestData

Ƭ **ManifestData**: { `id`: `string` ; `path`: `string` ; `type?`: [`FileInfoType`](README.md#fileinfotype)  }[]

#### Defined in

[preload.ts:8](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L8)

___

### PreloadData

Ƭ **PreloadData**: `Object`

#### Index signature

▪ [id: `string`]: `any`

#### Defined in

[preload.ts:4](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L4)

___

### PreloadEvent

Ƭ **PreloadEvent**: ``"complete"`` \| ``"error"`` \| ``"abort"`` \| ``"progress"`` \| ``"fileload"``

#### Defined in

[preload.ts:14](https://github.com/noobiept/utilities/blob/66bf665/source/preload.ts#L14)

___

### UpdateElement

Ƭ **UpdateElement**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `format?` | [`UpdateFormat`](README.md#updateformat) |

#### Defined in

[timer.ts:8](https://github.com/noobiept/utilities/blob/66bf665/source/timer.ts#L8)

___

### UpdateFormat

Ƭ **UpdateFormat**: `Omit`<[`TimeToStringArgs`](interfaces/TimeToStringArgs.md), ``"time"``\> \| (`timer`: [`Timer`](classes/Timer.md)) => `string`

#### Defined in

[timer.ts:4](https://github.com/noobiept/utilities/blob/66bf665/source/timer.ts#L4)

## Functions

### boxBoxCollision

▸ **boxBoxCollision**(`oneX`, `oneY`, `oneWidth`, `oneHeight`, `twoX`, `twoY`, `twoWidth`, `twoHeight`): `boolean`

Detects collision between 2 boxes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `oneX` | `number` |
| `oneY` | `number` |
| `oneWidth` | `number` |
| `oneHeight` | `number` |
| `twoX` | `number` |
| `twoY` | `number` |
| `twoWidth` | `number` |
| `twoHeight` | `number` |

#### Returns

`boolean`

#### Defined in

[collision_detection.ts:4](https://github.com/noobiept/utilities/blob/66bf665/source/collision_detection.ts#L4)

___

### calculateAngle

▸ **calculateAngle**(`aX`, `aY`, `bX`, `bY`): `number`

Returns the angle between 2 points in radians.
Positive in clockwise direction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `aX` | `number` |
| `aY` | `number` |
| `bX` | `number` |
| `bY` | `number` |

#### Returns

`number`

#### Defined in

[trigonometry.ts:5](https://github.com/noobiept/utilities/blob/66bf665/source/trigonometry.ts#L5)

___

### calculateDistance

▸ **calculateDistance**(`aX`, `aY`, `bX`, `bY`): `number`

Distance between 2 points.

#### Parameters

| Name | Type |
| :------ | :------ |
| `aX` | `number` |
| `aY` | `number` |
| `bX` | `number` |
| `bY` | `number` |

#### Returns

`number`

#### Defined in

[trigonometry.ts:17](https://github.com/noobiept/utilities/blob/66bf665/source/trigonometry.ts#L17)

___

### circleCircleCollision

▸ **circleCircleCollision**(`x1`, `y1`, `radius1`, `x2`, `y2`, `radius2`): `boolean`

Detects collision between two circles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `radius1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius2` | `number` |

#### Returns

`boolean`

#### Defined in

[collision_detection.ts:25](https://github.com/noobiept/utilities/blob/66bf665/source/collision_detection.ts#L25)

___

### circlePointCollision

▸ **circlePointCollision**(`circleX`, `circleY`, `circleRadius`, `pointX`, `pointY`): `boolean`

Detects collision between a circle and a point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `circleX` | `number` |
| `circleY` | `number` |
| `circleRadius` | `number` |
| `pointX` | `number` |
| `pointY` | `number` |

#### Returns

`boolean`

#### Defined in

[collision_detection.ts:49](https://github.com/noobiept/utilities/blob/66bf665/source/collision_detection.ts#L49)

___

### createEnum

▸ **createEnum**(`values`, `start?`): `Object`

Enum - A way to associate a string name to a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `string`[] | The `enum` names. Each name will have an associated number. |
| `start?` | `number` | Starting number for the first name. The number is incremented by one for the next name. |

#### Returns

`Object`

#### Defined in

[object.ts:16](https://github.com/noobiept/utilities/blob/66bf665/source/object.ts#L16)

___

### deepClone

▸ **deepClone**(`obj`): `any`

Returns a deep clone/copy of the object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Defined in

[object.ts:6](https://github.com/noobiept/utilities/blob/66bf665/source/object.ts#L6)

___

### getObject

▸ **getObject**(`key`): `any`

Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[local_storage.ts:4](https://github.com/noobiept/utilities/blob/66bf665/source/local_storage.ts#L4)

___

### getRandomFloat

▸ **getRandomFloat**(`min`, `max`): `number`

Returns a random float number between `min` and `max` (inclusive).

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[number.ts:6](https://github.com/noobiept/utilities/blob/66bf665/source/number.ts#L6)

___

### getRandomInt

▸ **getRandomInt**(`min`, `max`): `number`

Returns a random integer number between `min` and `max` (inclusive).

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[number.ts:17](https://github.com/noobiept/utilities/blob/66bf665/source/number.ts#L17)

___

### getSeveralRandomInts

▸ **getSeveralRandomInts**(`min`, `max`, `howMany`): `number`[]

Returns several different random integers, in the range between `min` and `max` (inclusive).

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |
| `howMany` | `number` |

#### Returns

`number`[]

#### Defined in

[number.ts:28](https://github.com/noobiept/utilities/blob/66bf665/source/number.ts#L28)

___

### isArray

▸ **isArray**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`boolean`

If it is an array or not.

#### Defined in

[is_type.ts:4](https://github.com/noobiept/utilities/blob/66bf665/source/is_type.ts#L4)

___

### isBoolean

▸ **isBoolean**(`element`): element is boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

element is boolean

If it is a boolean.

#### Defined in

[is_type.ts:11](https://github.com/noobiept/utilities/blob/66bf665/source/is_type.ts#L11)

___

### isFunction

▸ **isFunction**(`element`): element is Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

element is Function

If it is a function.

#### Defined in

[is_type.ts:23](https://github.com/noobiept/utilities/blob/66bf665/source/is_type.ts#L23)

___

### isInteger

▸ **isInteger**(`value`): value is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is number

If it is an integer.

#### Defined in

[is_type.ts:33](https://github.com/noobiept/utilities/blob/66bf665/source/is_type.ts#L33)

___

### isNumber

▸ **isNumber**(`element`): element is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

element is number

If it is a number.

#### Defined in

[is_type.ts:40](https://github.com/noobiept/utilities/blob/66bf665/source/is_type.ts#L40)

___

### isString

▸ **isString**(`element`): element is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

element is string

If it is a string.

#### Defined in

[is_type.ts:51](https://github.com/noobiept/utilities/blob/66bf665/source/is_type.ts#L51)

___

### numberOfDigits

▸ **numberOfDigits**(`theNumber`): `number`

Returns the number of digits in a number.
It doesn't consider the minus signal, nor the dot (in floats) as a digit.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theNumber` | `number` |

#### Returns

`number`

#### Defined in

[number.ts:65](https://github.com/noobiept/utilities/blob/66bf665/source/number.ts#L65)

___

### pointBoxCollision

▸ **pointBoxCollision**(`pointX`, `pointY`, `boxX`, `boxY`, `boxWidth`, `boxHeight`): `boolean`

Detects collision between a point and a box.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointX` | `number` |
| `pointY` | `number` |
| `boxX` | `number` |
| `boxY` | `number` |
| `boxWidth` | `number` |
| `boxHeight` | `number` |

#### Returns

`boolean`

#### Defined in

[collision_detection.ts:72](https://github.com/noobiept/utilities/blob/66bf665/source/collision_detection.ts#L72)

___

### range

▸ **range**(`start`, `end`): `number`[]

Create an array with all the numbers in-between the 'start' and 'end' (inclusive).

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`number`[]

#### Defined in

[number.ts:89](https://github.com/noobiept/utilities/blob/66bf665/source/number.ts#L89)

___

### round

▸ **round**(`num`, `dec`): `number`

Rounds a number to a specified decimal case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `dec` | `number` |

#### Returns

`number`

#### Defined in

[number.ts:78](https://github.com/noobiept/utilities/blob/66bf665/source/number.ts#L78)

___

### saveObject

▸ **saveObject**(`key`, `value`): `void`

Saves in the `localStorage` a json string representation of the `value`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[local_storage.ts:13](https://github.com/noobiept/utilities/blob/66bf665/source/local_storage.ts#L13)

___

### shuffle

▸ **shuffle**(`array`): `any`[]

Shuffle an array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`any`[]

#### Defined in

[array.ts:4](https://github.com/noobiept/utilities/blob/66bf665/source/array.ts#L4)

___

### timeToString

▸ **timeToString**(`args`): `string`

Converts a time (in milliseconds) to a string (with the number of days/hours...).
The units available are: day/hour/minute/second.

There's 3 possible display formats.
daytime:
    `dd hh:mm:ss` or `hh:mm:ss` (where d=day, h=hour, m=minute, s=second)
partial_daytime:
     `ss`, `mm:ss`, `hh:mm:ss` or "dd hh:mm:ss", depending on the time value.
string:
    `(d) days (h) hours (m) minutes (s) seconds`

The number of `units` can limit the number of units shown only in the string format (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `units` with value 2)).

Defaults:
    units: undefined (shows all non-zero if format is type `string`)
    format: string

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TimeToStringArgs`](interfaces/TimeToStringArgs.md) |

#### Returns

`string`

#### Defined in

[time_to_string.ts:28](https://github.com/noobiept/utilities/blob/66bf665/source/time_to_string.ts#L28)

___

### toDegrees

▸ **toDegrees**(`radians`): `number`

Converts a number in `radians` to `degrees` and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `radians` | `number` |

#### Returns

`number`

#### Defined in

[trigonometry.ts:32](https://github.com/noobiept/utilities/blob/66bf665/source/trigonometry.ts#L32)

___

### toRadians

▸ **toRadians**(`degrees`): `number`

Converts a number in `degrees` to `radians` and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `degrees` | `number` |

#### Returns

`number`

#### Defined in

[trigonometry.ts:39](https://github.com/noobiept/utilities/blob/66bf665/source/trigonometry.ts#L39)
