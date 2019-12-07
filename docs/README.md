[Utilities](README.md)

# Utilities

## Index

### Enumerations

* [DialogPosition](enums/dialogposition.md)

### Classes

* [Dialog](classes/dialog.md)
* [Timeout](classes/timeout.md)
* [Timer](classes/timer.md)

### Interfaces

* [DialogArgs](interfaces/dialogargs.md)
* [TimeToStringArgs](interfaces/timetostringargs.md)

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
* [isArray](README.md#isarray)
* [isBoolean](README.md#isboolean)
* [isFunction](README.md#isfunction)
* [isInteger](README.md#isinteger)
* [isNumber](README.md#isnumber)
* [isString](README.md#isstring)
* [numberOfDigits](README.md#numberofdigits)
* [pointBoxCollision](README.md#pointboxcollision)
* [round](README.md#round)
* [saveObject](README.md#saveobject)
* [shuffle](README.md#shuffle)
* [timeToString](README.md#timetostring)
* [toDegrees](README.md#todegrees)
* [toRadians](README.md#toradians)

### Object literals

* [KEY_CODE](README.md#key_code)
* [MOUSE_CODE](README.md#mouse_code)

## Functions

###  boxBoxCollision

▸ **boxBoxCollision**(`oneX`: number, `oneY`: number, `oneWidth`: number, `oneHeight`: number, `twoX`: number, `twoY`: number, `twoWidth`: number, `twoHeight`: number): *boolean*

*Defined in [collision_detection.ts:4](https://github.com/noobiept/utilities/blob/773a505/source/collision_detection.ts#L4)*

Detects collision between 2 boxes.

**Parameters:**

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

**Returns:** *boolean*

___

###  calculateAngle

▸ **calculateAngle**(`aX`: number, `aY`: number, `bX`: number, `bY`: number): *number*

*Defined in [trigonometry.ts:10](https://github.com/noobiept/utilities/blob/773a505/source/trigonometry.ts#L10)*

Returns the angle between 2 points in radians.
Positive in clockwise direction.

Throws an `Error` exception if:
- any of the arguments isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`aX` | number |
`aY` | number |
`bX` | number |
`bY` | number |

**Returns:** *number*

___

###  calculateDistance

▸ **calculateDistance**(`aX`: number, `aY`: number, `bX`: number, `bY`: number): *number*

*Defined in [trigonometry.ts:31](https://github.com/noobiept/utilities/blob/773a505/source/trigonometry.ts#L31)*

Distance between 2 points.

Throws an `Error` exception if:
- any of the arguments isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`aX` | number |
`aY` | number |
`bX` | number |
`bY` | number |

**Returns:** *number*

___

###  circleCircleCollision

▸ **circleCircleCollision**(`x1`: number, `y1`: number, `radius1`: number, `x2`: number, `y2`: number, `radius2`: number): *boolean*

*Defined in [collision_detection.ts:25](https://github.com/noobiept/utilities/blob/773a505/source/collision_detection.ts#L25)*

Detects collision between two circles.

**Parameters:**

Name | Type |
------ | ------ |
`x1` | number |
`y1` | number |
`radius1` | number |
`x2` | number |
`y2` | number |
`radius2` | number |

**Returns:** *boolean*

___

###  circlePointCollision

▸ **circlePointCollision**(`circleX`: number, `circleY`: number, `circleRadius`: number, `pointX`: number, `pointY`: number): *boolean*

*Defined in [collision_detection.ts:49](https://github.com/noobiept/utilities/blob/773a505/source/collision_detection.ts#L49)*

Detects collision between a circle and a point.

**Parameters:**

Name | Type |
------ | ------ |
`circleX` | number |
`circleY` | number |
`circleRadius` | number |
`pointX` | number |
`pointY` | number |

**Returns:** *boolean*

___

###  createEnum

▸ **createEnum**(`values`: string[], `start?`: undefined | number): *object*

*Defined in [object.ts:16](https://github.com/noobiept/utilities/blob/773a505/source/object.ts#L16)*

Enum - A way to associate a string name to a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | string[] | The `enum` names. Each name will have an associated number. |
`start?` | undefined &#124; number | Starting number for the first name. The number is incremented by one for the next name.  |

**Returns:** *object*

* \[ **key**: *string*\]: string | number

___

###  deepClone

▸ **deepClone**(`obj`: any): *any*

*Defined in [object.ts:6](https://github.com/noobiept/utilities/blob/773a505/source/object.ts#L6)*

Returns a deep clone/copy of the object.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *any*

___

###  getObject

▸ **getObject**(`key`: string): *any*

*Defined in [local_storage.ts:10](https://github.com/noobiept/utilities/blob/773a505/source/local_storage.ts#L10)*

Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.

Throws an `Error` exception if:
- `key` is not a string.
- `key` wasn't found.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

###  getRandomFloat

▸ **getRandomFloat**(`min`: number, `max`: number): *number*

*Defined in [number.ts:12](https://github.com/noobiept/utilities/blob/773a505/source/number.ts#L12)*

Returns a random float number between `min` and `max` (inclusive).

Throws an `Error` exception if:
- either `min` or `max` is not a `number`.
- the minimum value is bigger than the maximum.

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  getRandomInt

▸ **getRandomInt**(`min`: number, `max`: number): *number*

*Defined in [number.ts:29](https://github.com/noobiept/utilities/blob/773a505/source/number.ts#L29)*

Returns a random integer number between `min` and `max` (inclusive).

Throws an `Error` exception if:
- `min` or `max` isn't an integer.
- the minimum value is bigger than the maximum.

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  getSeveralRandomInts

▸ **getSeveralRandomInts**(`min`: number, `max`: number, `howMany`: number): *number[]*

*Defined in [number.ts:47](https://github.com/noobiept/utilities/blob/773a505/source/number.ts#L47)*

Returns several different random integers, in the range between `min` and `max` (inclusive).

Throws an Error exception if:
- `min`, `max` or `howMany` isn't an integer.
- the minimum value is bigger than the maximum.
- the range is less than the number of integers required.

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |
`howMany` | number |

**Returns:** *number[]*

___

###  isArray

▸ **isArray**(`element`: any): *boolean*

*Defined in [is_type.ts:4](https://github.com/noobiept/utilities/blob/773a505/source/is_type.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is an array or not.

___

###  isBoolean

▸ **isBoolean**(`element`: any): *element is boolean*

*Defined in [is_type.ts:11](https://github.com/noobiept/utilities/blob/773a505/source/is_type.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *element is boolean*

If it is a boolean.

___

###  isFunction

▸ **isFunction**(`element`: any): *boolean*

*Defined in [is_type.ts:22](https://github.com/noobiept/utilities/blob/773a505/source/is_type.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a function.

___

###  isInteger

▸ **isInteger**(`value`: any): *value is number*

*Defined in [is_type.ts:32](https://github.com/noobiept/utilities/blob/773a505/source/is_type.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is number*

If it is an integer.

___

###  isNumber

▸ **isNumber**(`element`: any): *element is number*

*Defined in [is_type.ts:39](https://github.com/noobiept/utilities/blob/773a505/source/is_type.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *element is number*

If it is a number.

___

###  isString

▸ **isString**(`element`: any): *element is string*

*Defined in [is_type.ts:50](https://github.com/noobiept/utilities/blob/773a505/source/is_type.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *element is string*

If it is a string.

___

###  numberOfDigits

▸ **numberOfDigits**(`theNumber`: number): *number*

*Defined in [number.ts:86](https://github.com/noobiept/utilities/blob/773a505/source/number.ts#L86)*

Returns the number of digits in a number.
It doesn't consider the minus signal, nor the dot (in floats) as a digit.

Throws an `Error` exception if:
- the argument is not a number.

**Parameters:**

Name | Type |
------ | ------ |
`theNumber` | number |

**Returns:** *number*

___

###  pointBoxCollision

▸ **pointBoxCollision**(`pointX`: number, `pointY`: number, `boxX`: number, `boxY`: number, `boxWidth`: number, `boxHeight`: number): *boolean*

*Defined in [collision_detection.ts:72](https://github.com/noobiept/utilities/blob/773a505/source/collision_detection.ts#L72)*

Detects collision between a point and a box.

**Parameters:**

Name | Type |
------ | ------ |
`pointX` | number |
`pointY` | number |
`boxX` | number |
`boxY` | number |
`boxWidth` | number |
`boxHeight` | number |

**Returns:** *boolean*

___

###  round

▸ **round**(`num`: number, `dec`: number): *number*

*Defined in [number.ts:110](https://github.com/noobiept/utilities/blob/773a505/source/number.ts#L110)*

Rounds a number to a specified decimal case.

Throws an `Error` exception if:
- `num` isn't a number.
- `dec` isn't an integer.
- `dec` is less than 0.

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |
`dec` | number |

**Returns:** *number*

___

###  saveObject

▸ **saveObject**(`key`: string, `value`: any): *void*

*Defined in [local_storage.ts:28](https://github.com/noobiept/utilities/blob/773a505/source/local_storage.ts#L28)*

Saves in the `localStorage` a json string representation of the `value`.

Throws an `Error` exception if:
- `key` is not a `string`.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

###  shuffle

▸ **shuffle**(`array`: any[]): *any[]*

*Defined in [array.ts:6](https://github.com/noobiept/utilities/blob/773a505/source/array.ts#L6)*

Shuffle an array.

**Parameters:**

Name | Type |
------ | ------ |
`array` | any[] |

**Returns:** *any[]*

___

###  timeToString

▸ **timeToString**(`args`: [TimeToStringArgs](interfaces/timetostringargs.md)): *string*

*Defined in [time_to_string.ts:29](https://github.com/noobiept/utilities/blob/773a505/source/time_to_string.ts#L29)*

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

Throws an `Error` exception if:
- the `time` argument isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TimeToStringArgs](interfaces/timetostringargs.md) |

**Returns:** *string*

___

###  toDegrees

▸ **toDegrees**(`radians`: number): *number*

*Defined in [trigonometry.ts:55](https://github.com/noobiept/utilities/blob/773a505/source/trigonometry.ts#L55)*

Converts a number in `radians` to `degrees` and returns it.

Throws an `Error` exception if:
- the argument isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

###  toRadians

▸ **toRadians**(`degrees`: number): *number*

*Defined in [trigonometry.ts:71](https://github.com/noobiept/utilities/blob/773a505/source/trigonometry.ts#L71)*

Converts a number in `degrees` to `radians` and returns it.

Throws an `Error` exception if:
- the argument isn't a number.

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

## Object literals

###  KEY_CODE

### ▪ **KEY_CODE**: *object*

*Defined in [events.ts:4](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L4)*

Numeric code of each key.

###  0

• **0**: *number* = 48

*Defined in [events.ts:18](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L18)*

###  1

• **1**: *number* = 49

*Defined in [events.ts:19](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L19)*

###  2

• **2**: *number* = 50

*Defined in [events.ts:20](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L20)*

###  3

• **3**: *number* = 51

*Defined in [events.ts:21](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L21)*

###  4

• **4**: *number* = 52

*Defined in [events.ts:22](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L22)*

###  5

• **5**: *number* = 53

*Defined in [events.ts:23](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L23)*

###  6

• **6**: *number* = 54

*Defined in [events.ts:24](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L24)*

###  7

• **7**: *number* = 55

*Defined in [events.ts:25](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L25)*

###  8

• **8**: *number* = 56

*Defined in [events.ts:26](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L26)*

###  9

• **9**: *number* = 57

*Defined in [events.ts:27](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L27)*

###  a

• **a**: *number* = 65

*Defined in [events.ts:29](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L29)*

###  b

• **b**: *number* = 66

*Defined in [events.ts:30](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L30)*

###  backspace

• **backspace**: *number* = 8

*Defined in [events.ts:5](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L5)*

###  c

• **c**: *number* = 67

*Defined in [events.ts:31](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L31)*

###  d

• **d**: *number* = 68

*Defined in [events.ts:32](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L32)*

###  del

• **del**: *number* = 46

*Defined in [events.ts:16](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L16)*

###  downArrow

• **downArrow**: *number* = 40

*Defined in [events.ts:15](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L15)*

###  e

• **e**: *number* = 69

*Defined in [events.ts:33](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L33)*

###  end

• **end**: *number* = 35

*Defined in [events.ts:10](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L10)*

###  enter

• **enter**: *number* = 13

*Defined in [events.ts:7](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L7)*

###  esc

• **esc**: *number* = 27

*Defined in [events.ts:8](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L8)*

###  f

• **f**: *number* = 70

*Defined in [events.ts:34](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L34)*

###  f1

• **f1**: *number* = 112

*Defined in [events.ts:56](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L56)*

###  f10

• **f10**: *number* = 121

*Defined in [events.ts:65](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L65)*

###  f11

• **f11**: *number* = 122

*Defined in [events.ts:66](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L66)*

###  f12

• **f12**: *number* = 123

*Defined in [events.ts:67](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L67)*

###  f2

• **f2**: *number* = 113

*Defined in [events.ts:57](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L57)*

###  f3

• **f3**: *number* = 114

*Defined in [events.ts:58](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L58)*

###  f4

• **f4**: *number* = 115

*Defined in [events.ts:59](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L59)*

###  f5

• **f5**: *number* = 116

*Defined in [events.ts:60](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L60)*

###  f6

• **f6**: *number* = 117

*Defined in [events.ts:61](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L61)*

###  f7

• **f7**: *number* = 118

*Defined in [events.ts:62](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L62)*

###  f8

• **f8**: *number* = 119

*Defined in [events.ts:63](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L63)*

###  f9

• **f9**: *number* = 120

*Defined in [events.ts:64](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L64)*

###  g

• **g**: *number* = 71

*Defined in [events.ts:35](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L35)*

###  h

• **h**: *number* = 72

*Defined in [events.ts:36](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L36)*

###  home

• **home**: *number* = 36

*Defined in [events.ts:11](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L11)*

###  i

• **i**: *number* = 73

*Defined in [events.ts:37](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L37)*

###  j

• **j**: *number* = 74

*Defined in [events.ts:38](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L38)*

###  k

• **k**: *number* = 75

*Defined in [events.ts:39](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L39)*

###  l

• **l**: *number* = 76

*Defined in [events.ts:40](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L40)*

###  leftArrow

• **leftArrow**: *number* = 37

*Defined in [events.ts:12](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L12)*

###  m

• **m**: *number* = 77

*Defined in [events.ts:41](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L41)*

###  n

• **n**: *number* = 78

*Defined in [events.ts:42](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L42)*

###  o

• **o**: *number* = 79

*Defined in [events.ts:43](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L43)*

###  p

• **p**: *number* = 80

*Defined in [events.ts:44](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L44)*

###  q

• **q**: *number* = 81

*Defined in [events.ts:45](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L45)*

###  r

• **r**: *number* = 82

*Defined in [events.ts:46](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L46)*

###  rightArrow

• **rightArrow**: *number* = 39

*Defined in [events.ts:14](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L14)*

###  s

• **s**: *number* = 83

*Defined in [events.ts:47](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L47)*

###  space

• **space**: *number* = 32

*Defined in [events.ts:9](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L9)*

###  t

• **t**: *number* = 84

*Defined in [events.ts:48](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L48)*

###  tab

• **tab**: *number* = 9

*Defined in [events.ts:6](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L6)*

###  u

• **u**: *number* = 85

*Defined in [events.ts:49](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L49)*

###  upArrow

• **upArrow**: *number* = 38

*Defined in [events.ts:13](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L13)*

###  v

• **v**: *number* = 86

*Defined in [events.ts:50](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L50)*

###  w

• **w**: *number* = 87

*Defined in [events.ts:51](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L51)*

###  x

• **x**: *number* = 88

*Defined in [events.ts:52](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L52)*

###  y

• **y**: *number* = 89

*Defined in [events.ts:53](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L53)*

###  z

• **z**: *number* = 90

*Defined in [events.ts:54](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L54)*

___

###  MOUSE_CODE

### ▪ **MOUSE_CODE**: *object*

*Defined in [events.ts:73](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L73)*

Numeric code of each mouse button.

###  left

• **left**: *number* = 0

*Defined in [events.ts:74](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L74)*

###  middle

• **middle**: *number* = 1

*Defined in [events.ts:75](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L75)*

###  right

• **right**: *number* = 2

*Defined in [events.ts:76](https://github.com/noobiept/utilities/blob/773a505/source/events.ts#L76)*
