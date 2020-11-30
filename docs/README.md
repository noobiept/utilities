**[Utilities](README.md)**

> Globals

# Utilities

## Index

### Enumerations

* [DialogButtons](enums/dialogbuttons.md)
* [DialogPosition](enums/dialogposition.md)
* [MouseButton](enums/mousebutton.md)

### Classes

* [Dialog](classes/dialog.md)
* [EventDispatcher](classes/eventdispatcher.md)
* [Preload](classes/preload.md)
* [Timeout](classes/timeout.md)
* [Timer](classes/timer.md)

### Interfaces

* [DialogArgs](interfaces/dialogargs.md)
* [PreloadArgs](interfaces/preloadargs.md)
* [TimeToStringArgs](interfaces/timetostringargs.md)

### Type aliases

* [DialogButtonsArg](README.md#dialogbuttonsarg)
* [FileInfoType](README.md#fileinfotype)
* [ManifestData](README.md#manifestdata)
* [PreloadData](README.md#preloaddata)
* [PreloadEvent](README.md#preloadevent)

### Variables

* [DATA](README.md#data)
* [FileInfo](README.md#fileinfo)

### Functions

* [boxBoxCollision](README.md#boxboxcollision)
* [calculateAngle](README.md#calculateangle)
* [calculateDistance](README.md#calculatedistance)
* [circleCircleCollision](README.md#circlecirclecollision)
* [circlePointCollision](README.md#circlepointcollision)
* [createEnum](README.md#createenum)
* [deepClone](README.md#deepclone)
* [getObject](README.md#getobject)
* [getRandomFloat](README.md#getrandomfloat)
* [getRandomInt](README.md#getrandomint)
* [getSeveralRandomInts](README.md#getseveralrandomints)
* [getType](README.md#gettype)
* [isArray](README.md#isarray)
* [isBoolean](README.md#isboolean)
* [isFunction](README.md#isfunction)
* [isInteger](README.md#isinteger)
* [isNumber](README.md#isnumber)
* [isString](README.md#isstring)
* [numberOfDigits](README.md#numberofdigits)
* [pointBoxCollision](README.md#pointboxcollision)
* [range](README.md#range)
* [round](README.md#round)
* [saveObject](README.md#saveobject)
* [shuffle](README.md#shuffle)
* [timeToString](README.md#timetostring)
* [toDegrees](README.md#todegrees)
* [toRadians](README.md#toradians)

## Type aliases

### DialogButtonsArg

Ƭ  **DialogButtonsArg**: [DialogButtons](enums/dialogbuttons.md) \| HTMLElement[]

*Defined in [dialog.ts:13](https://github.com/noobiept/utilities/blob/4235ba9/source/dialog.ts#L13)*

___

### FileInfoType

Ƭ  **FileInfoType**: keyof *typeof* [FileInfo](README.md#fileinfo)

*Defined in [preload.ts:45](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L45)*

___

### ManifestData

Ƭ  **ManifestData**: { id: string ; path: string ; type?: [FileInfoType](README.md#fileinfotype)  }[]

*Defined in [preload.ts:8](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L8)*

___

### PreloadData

Ƭ  **PreloadData**: { [id:string]: any;  }

*Defined in [preload.ts:4](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L4)*

___

### PreloadEvent

Ƭ  **PreloadEvent**: \"complete\" \| \"error\" \| \"abort\" \| \"progress\" \| \"fileload\"

*Defined in [preload.ts:14](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L14)*

## Variables

### DATA

• `Const` **DATA**: [PreloadData](README.md#preloaddata)

*Defined in [preload.ts:53](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L53)*

___

### FileInfo

• `Const` **FileInfo**: object = { image: { extensions: ["png", "jpg", "jpeg"], responseType: "blob", }, json: { extensions: ["json"], responseType: "json", }, text: { extensions: ["txt"], responseType: "text", }, audio\_ogg: { extensions: ["ogg"], responseType: "arraybuffer", }, audio\_mp3: { extensions: ["mp3"], responseType: "arraybuffer", },} as const

*Defined in [preload.ts:22](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L22)*

#### Type declaration:

Name | Type |
------ | ------ |
`audio_mp3` | { extensions: [\"mp3\"] = ["mp3"]; responseType: \"arraybuffer\" = "arraybuffer" } |
`audio_ogg` | { extensions: [\"ogg\"] = ["ogg"]; responseType: \"arraybuffer\" = "arraybuffer" } |
`image` | { extensions: [\"png\", \"jpg\", \"jpeg\"] = ["png", "jpg", "jpeg"]; responseType: \"blob\" = "blob" } |
`json` | { extensions: [\"json\"] = ["json"]; responseType: \"json\" = "json" } |
`text` | { extensions: [\"txt\"] = ["txt"]; responseType: \"text\" = "text" } |

## Functions

### boxBoxCollision

▸ **boxBoxCollision**(`oneX`: number, `oneY`: number, `oneWidth`: number, `oneHeight`: number, `twoX`: number, `twoY`: number, `twoWidth`: number, `twoHeight`: number): boolean

*Defined in [collision_detection.ts:4](https://github.com/noobiept/utilities/blob/4235ba9/source/collision_detection.ts#L4)*

Detects collision between 2 boxes.

#### Parameters:

Name | Type |
------ | ------ |
`oneX` | number |
`oneY` | number |
`oneWidth` | number |
`oneHeight` | number |
`twoX` | number |
`twoY` | number |
`twoWidth` | number |
`twoHeight` | number |

**Returns:** boolean

___

### calculateAngle

▸ **calculateAngle**(`aX`: number, `aY`: number, `bX`: number, `bY`: number): number

*Defined in [trigonometry.ts:5](https://github.com/noobiept/utilities/blob/4235ba9/source/trigonometry.ts#L5)*

Returns the angle between 2 points in radians.
Positive in clockwise direction.

#### Parameters:

Name | Type |
------ | ------ |
`aX` | number |
`aY` | number |
`bX` | number |
`bY` | number |

**Returns:** number

___

### calculateDistance

▸ **calculateDistance**(`aX`: number, `aY`: number, `bX`: number, `bY`: number): number

*Defined in [trigonometry.ts:17](https://github.com/noobiept/utilities/blob/4235ba9/source/trigonometry.ts#L17)*

Distance between 2 points.

#### Parameters:

Name | Type |
------ | ------ |
`aX` | number |
`aY` | number |
`bX` | number |
`bY` | number |

**Returns:** number

___

### circleCircleCollision

▸ **circleCircleCollision**(`x1`: number, `y1`: number, `radius1`: number, `x2`: number, `y2`: number, `radius2`: number): boolean

*Defined in [collision_detection.ts:25](https://github.com/noobiept/utilities/blob/4235ba9/source/collision_detection.ts#L25)*

Detects collision between two circles.

#### Parameters:

Name | Type |
------ | ------ |
`x1` | number |
`y1` | number |
`radius1` | number |
`x2` | number |
`y2` | number |
`radius2` | number |

**Returns:** boolean

___

### circlePointCollision

▸ **circlePointCollision**(`circleX`: number, `circleY`: number, `circleRadius`: number, `pointX`: number, `pointY`: number): boolean

*Defined in [collision_detection.ts:49](https://github.com/noobiept/utilities/blob/4235ba9/source/collision_detection.ts#L49)*

Detects collision between a circle and a point.

#### Parameters:

Name | Type |
------ | ------ |
`circleX` | number |
`circleY` | number |
`circleRadius` | number |
`pointX` | number |
`pointY` | number |

**Returns:** boolean

___

### createEnum

▸ **createEnum**(`values`: string[], `start?`: undefined \| number): object

*Defined in [object.ts:16](https://github.com/noobiept/utilities/blob/4235ba9/source/object.ts#L16)*

Enum - A way to associate a string name to a number.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`values` | string[] | The `enum` names. Each name will have an associated number. |
`start?` | undefined \| number | Starting number for the first name. The number is incremented by one for the next name.  |

**Returns:** object

___

### deepClone

▸ **deepClone**(`obj`: any): any

*Defined in [object.ts:6](https://github.com/noobiept/utilities/blob/4235ba9/source/object.ts#L6)*

Returns a deep clone/copy of the object.

#### Parameters:

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** any

___

### getObject

▸ **getObject**(`key`: string): any

*Defined in [local_storage.ts:4](https://github.com/noobiept/utilities/blob/4235ba9/source/local_storage.ts#L4)*

Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### getRandomFloat

▸ **getRandomFloat**(`min`: number, `max`: number): number

*Defined in [number.ts:6](https://github.com/noobiept/utilities/blob/4235ba9/source/number.ts#L6)*

Returns a random float number between `min` and `max` (inclusive).

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### getRandomInt

▸ **getRandomInt**(`min`: number, `max`: number): number

*Defined in [number.ts:17](https://github.com/noobiept/utilities/blob/4235ba9/source/number.ts#L17)*

Returns a random integer number between `min` and `max` (inclusive).

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### getSeveralRandomInts

▸ **getSeveralRandomInts**(`min`: number, `max`: number, `howMany`: number): number[]

*Defined in [number.ts:28](https://github.com/noobiept/utilities/blob/4235ba9/source/number.ts#L28)*

Returns several different random integers, in the range between `min` and `max` (inclusive).

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |
`howMany` | number |

**Returns:** number[]

___

### getType

▸ **getType**(`file`: string): [FileInfoType](README.md#fileinfotype)

*Defined in [preload.ts:61](https://github.com/noobiept/utilities/blob/4235ba9/source/preload.ts#L61)*

Determine the type of a file based on its extension. If it can't figure it out it defaults to type 'text'.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`file` | string | The file name. |

**Returns:** [FileInfoType](README.md#fileinfotype)

The file type.

___

### isArray

▸ **isArray**(`element`: any): boolean

*Defined in [is_type.ts:4](https://github.com/noobiept/utilities/blob/4235ba9/source/is_type.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`element` | any |

**Returns:** boolean

If it is an array or not.

___

### isBoolean

▸ **isBoolean**(`element`: any): element is boolean

*Defined in [is_type.ts:11](https://github.com/noobiept/utilities/blob/4235ba9/source/is_type.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`element` | any |

**Returns:** element is boolean

If it is a boolean.

___

### isFunction

▸ **isFunction**(`element`: any): boolean

*Defined in [is_type.ts:22](https://github.com/noobiept/utilities/blob/4235ba9/source/is_type.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`element` | any |

**Returns:** boolean

If it is a function.

___

### isInteger

▸ **isInteger**(`value`: any): value is number

*Defined in [is_type.ts:32](https://github.com/noobiept/utilities/blob/4235ba9/source/is_type.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | any |

**Returns:** value is number

If it is an integer.

___

### isNumber

▸ **isNumber**(`element`: any): element is number

*Defined in [is_type.ts:39](https://github.com/noobiept/utilities/blob/4235ba9/source/is_type.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`element` | any |

**Returns:** element is number

If it is a number.

___

### isString

▸ **isString**(`element`: any): element is string

*Defined in [is_type.ts:50](https://github.com/noobiept/utilities/blob/4235ba9/source/is_type.ts#L50)*

#### Parameters:

Name | Type |
------ | ------ |
`element` | any |

**Returns:** element is string

If it is a string.

___

### numberOfDigits

▸ **numberOfDigits**(`theNumber`: number): number

*Defined in [number.ts:65](https://github.com/noobiept/utilities/blob/4235ba9/source/number.ts#L65)*

Returns the number of digits in a number.
It doesn't consider the minus signal, nor the dot (in floats) as a digit.

#### Parameters:

Name | Type |
------ | ------ |
`theNumber` | number |

**Returns:** number

___

### pointBoxCollision

▸ **pointBoxCollision**(`pointX`: number, `pointY`: number, `boxX`: number, `boxY`: number, `boxWidth`: number, `boxHeight`: number): boolean

*Defined in [collision_detection.ts:72](https://github.com/noobiept/utilities/blob/4235ba9/source/collision_detection.ts#L72)*

Detects collision between a point and a box.

#### Parameters:

Name | Type |
------ | ------ |
`pointX` | number |
`pointY` | number |
`boxX` | number |
`boxY` | number |
`boxWidth` | number |
`boxHeight` | number |

**Returns:** boolean

___

### range

▸ **range**(`start`: number, `end`: number): number[]

*Defined in [number.ts:89](https://github.com/noobiept/utilities/blob/4235ba9/source/number.ts#L89)*

Create an array with all the numbers in-between the 'start' and 'end' (inclusive).

#### Parameters:

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** number[]

___

### round

▸ **round**(`num`: number, `dec`: number): number

*Defined in [number.ts:78](https://github.com/noobiept/utilities/blob/4235ba9/source/number.ts#L78)*

Rounds a number to a specified decimal case.

#### Parameters:

Name | Type |
------ | ------ |
`num` | number |
`dec` | number |

**Returns:** number

___

### saveObject

▸ **saveObject**(`key`: string, `value`: any): void

*Defined in [local_storage.ts:13](https://github.com/noobiept/utilities/blob/4235ba9/source/local_storage.ts#L13)*

Saves in the `localStorage` a json string representation of the `value`.

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** void

___

### shuffle

▸ **shuffle**(`array`: any[]): any[]

*Defined in [array.ts:4](https://github.com/noobiept/utilities/blob/4235ba9/source/array.ts#L4)*

Shuffle an array.

#### Parameters:

Name | Type |
------ | ------ |
`array` | any[] |

**Returns:** any[]

___

### timeToString

▸ **timeToString**(`args`: [TimeToStringArgs](interfaces/timetostringargs.md)): string

*Defined in [time_to_string.ts:26](https://github.com/noobiept/utilities/blob/4235ba9/source/time_to_string.ts#L26)*

Converts a time (in milliseconds) to a string (with the number of days/hours...).
The units available are: day/hour/minute/second.

There's 2 possible display formats.
daytime:
    `dd hh:mm:ss` (where d=day, h=hour, m=minute, s=second)
string:
    `(d) days (h) hours (m) minutes (s) seconds`

The number of `units` can limit the number of units shown in the string format (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `units` with value 2)).

Defaults:
    units: 2
    format: string

#### Parameters:

Name | Type |
------ | ------ |
`args` | [TimeToStringArgs](interfaces/timetostringargs.md) |

**Returns:** string

___

### toDegrees

▸ **toDegrees**(`radians`: number): number

*Defined in [trigonometry.ts:32](https://github.com/noobiept/utilities/blob/4235ba9/source/trigonometry.ts#L32)*

Converts a number in `radians` to `degrees` and returns it.

#### Parameters:

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** number

___

### toRadians

▸ **toRadians**(`degrees`: number): number

*Defined in [trigonometry.ts:39](https://github.com/noobiept/utilities/blob/4235ba9/source/trigonometry.ts#L39)*

Converts a number in `degrees` to `radians` and returns it.

#### Parameters:

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** number
