**[Utilities](README.md)**

[Globals](globals.md)

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

* [boxBoxCollision](globals.md#markdown-header-boxboxcollision)
* [calculateAngle](globals.md#markdown-header-calculateangle)
* [calculateDistance](globals.md#markdown-header-calculatedistance)
* [circleCircleCollision](globals.md#markdown-header-circlecirclecollision)
* [circlePointCollision](globals.md#markdown-header-circlepointcollision)
* [createEnum](globals.md#markdown-header-createenum)
* [deepClone](globals.md#markdown-header-deepclone)
* [getObject](globals.md#markdown-header-getobject)
* [getRandomFloat](globals.md#markdown-header-getrandomfloat)
* [getRandomInt](globals.md#markdown-header-getrandomint)
* [getSeveralRandomInts](globals.md#markdown-header-getseveralrandomints)
* [isArray](globals.md#markdown-header-isarray)
* [isBoolean](globals.md#markdown-header-isboolean)
* [isFunction](globals.md#markdown-header-isfunction)
* [isInteger](globals.md#markdown-header-isinteger)
* [isNumber](globals.md#markdown-header-isnumber)
* [isString](globals.md#markdown-header-isstring)
* [numberOfDigits](globals.md#markdown-header-numberofdigits)
* [pointBoxCollision](globals.md#markdown-header-pointboxcollision)
* [round](globals.md#markdown-header-round)
* [saveObject](globals.md#markdown-header-saveobject)
* [shuffle](globals.md#markdown-header-shuffle)
* [timeToString](globals.md#markdown-header-timetostring)
* [toDegrees](globals.md#markdown-header-todegrees)
* [toRadians](globals.md#markdown-header-toradians)

### Object literals

* [KEY_CODE](globals.md#markdown-header-key_code)
* [MOUSE_CODE](globals.md#markdown-header-mouse_code)

## Functions

###  boxBoxCollision

▸ **boxBoxCollision**(`oneX`: number, `oneY`: number, `oneWidth`: number, `oneHeight`: number, `twoX`: number, `twoY`: number, `twoWidth`: number, `twoHeight`: number): *boolean*

Defined in collision_detection.ts:4

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

Defined in trigonometry.ts:10

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

Defined in trigonometry.ts:31

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

Defined in collision_detection.ts:25

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

Defined in collision_detection.ts:49

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

Defined in object.ts:16

Enum - A way to associate a string name to a number.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | string[] | The `enum` names. Each name will have an associated number. |
`start?` | undefined \| number | Starting number for the first name. The number is incremented by one for the next name.  |

**Returns:** *object*

* \[ **key**: *string*\]: string | number

___

###  deepClone

▸ **deepClone**(`obj`: any): *any*

Defined in object.ts:6

Returns a deep clone/copy of the object.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *any*

___

###  getObject

▸ **getObject**(`key`: string): *any*

Defined in local_storage.ts:10

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

Defined in number.ts:12

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

Defined in number.ts:29

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

Defined in number.ts:47

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

Defined in is_type.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is an array or not.

___

###  isBoolean

▸ **isBoolean**(`element`: any): *boolean*

Defined in is_type.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a boolean.

___

###  isFunction

▸ **isFunction**(`element`: any): *boolean*

Defined in is_type.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a function.

___

###  isInteger

▸ **isInteger**(`value`: any): *boolean*

Defined in is_type.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

If it is an integer.

___

###  isNumber

▸ **isNumber**(`element`: any): *boolean*

Defined in is_type.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a number.

___

###  isString

▸ **isString**(`element`: any): *boolean*

Defined in is_type.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`element` | any |

**Returns:** *boolean*

If it is a string.

___

###  numberOfDigits

▸ **numberOfDigits**(`theNumber`: number): *number*

Defined in number.ts:86

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

Defined in collision_detection.ts:72

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

Defined in number.ts:110

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

Defined in local_storage.ts:28

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

Defined in array.ts:6

Shuffle an array.

**Parameters:**

Name | Type |
------ | ------ |
`array` | any[] |

**Returns:** *any[]*

___

###  timeToString

▸ **timeToString**(`args`: [TimeToStringArgs](interfaces/timetostringargs.md)): *string*

Defined in time_to_string.ts:29

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

Defined in trigonometry.ts:55

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

Defined in trigonometry.ts:71

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

Defined in events.ts:4

Numeric code of each key.

###  0

• **0**: *number* = 48

Defined in events.ts:18

###  1

• **1**: *number* = 49

Defined in events.ts:19

###  2

• **2**: *number* = 50

Defined in events.ts:20

###  3

• **3**: *number* = 51

Defined in events.ts:21

###  4

• **4**: *number* = 52

Defined in events.ts:22

###  5

• **5**: *number* = 53

Defined in events.ts:23

###  6

• **6**: *number* = 54

Defined in events.ts:24

###  7

• **7**: *number* = 55

Defined in events.ts:25

###  8

• **8**: *number* = 56

Defined in events.ts:26

###  9

• **9**: *number* = 57

Defined in events.ts:27

###  a

• **a**: *number* = 65

Defined in events.ts:29

###  b

• **b**: *number* = 66

Defined in events.ts:30

###  backspace

• **backspace**: *number* = 8

Defined in events.ts:5

###  c

• **c**: *number* = 67

Defined in events.ts:31

###  d

• **d**: *number* = 68

Defined in events.ts:32

###  del

• **del**: *number* = 46

Defined in events.ts:16

###  downArrow

• **downArrow**: *number* = 40

Defined in events.ts:15

###  e

• **e**: *number* = 69

Defined in events.ts:33

###  end

• **end**: *number* = 35

Defined in events.ts:10

###  enter

• **enter**: *number* = 13

Defined in events.ts:7

###  esc

• **esc**: *number* = 27

Defined in events.ts:8

###  f

• **f**: *number* = 70

Defined in events.ts:34

###  f1

• **f1**: *number* = 112

Defined in events.ts:56

###  f10

• **f10**: *number* = 121

Defined in events.ts:65

###  f11

• **f11**: *number* = 122

Defined in events.ts:66

###  f12

• **f12**: *number* = 123

Defined in events.ts:67

###  f2

• **f2**: *number* = 113

Defined in events.ts:57

###  f3

• **f3**: *number* = 114

Defined in events.ts:58

###  f4

• **f4**: *number* = 115

Defined in events.ts:59

###  f5

• **f5**: *number* = 116

Defined in events.ts:60

###  f6

• **f6**: *number* = 117

Defined in events.ts:61

###  f7

• **f7**: *number* = 118

Defined in events.ts:62

###  f8

• **f8**: *number* = 119

Defined in events.ts:63

###  f9

• **f9**: *number* = 120

Defined in events.ts:64

###  g

• **g**: *number* = 71

Defined in events.ts:35

###  h

• **h**: *number* = 72

Defined in events.ts:36

###  home

• **home**: *number* = 36

Defined in events.ts:11

###  i

• **i**: *number* = 73

Defined in events.ts:37

###  j

• **j**: *number* = 74

Defined in events.ts:38

###  k

• **k**: *number* = 75

Defined in events.ts:39

###  l

• **l**: *number* = 76

Defined in events.ts:40

###  leftArrow

• **leftArrow**: *number* = 37

Defined in events.ts:12

###  m

• **m**: *number* = 77

Defined in events.ts:41

###  n

• **n**: *number* = 78

Defined in events.ts:42

###  o

• **o**: *number* = 79

Defined in events.ts:43

###  p

• **p**: *number* = 80

Defined in events.ts:44

###  q

• **q**: *number* = 81

Defined in events.ts:45

###  r

• **r**: *number* = 82

Defined in events.ts:46

###  rightArrow

• **rightArrow**: *number* = 39

Defined in events.ts:14

###  s

• **s**: *number* = 83

Defined in events.ts:47

###  space

• **space**: *number* = 32

Defined in events.ts:9

###  t

• **t**: *number* = 84

Defined in events.ts:48

###  tab

• **tab**: *number* = 9

Defined in events.ts:6

###  u

• **u**: *number* = 85

Defined in events.ts:49

###  upArrow

• **upArrow**: *number* = 38

Defined in events.ts:13

###  v

• **v**: *number* = 86

Defined in events.ts:50

###  w

• **w**: *number* = 87

Defined in events.ts:51

###  x

• **x**: *number* = 88

Defined in events.ts:52

###  y

• **y**: *number* = 89

Defined in events.ts:53

###  z

• **z**: *number* = 90

Defined in events.ts:54

___

###  MOUSE_CODE

### ▪ **MOUSE_CODE**: *object*

Defined in events.ts:73

Numeric code of each mouse button.

###  left

• **left**: *number* = 0

Defined in events.ts:74

###  middle

• **middle**: *number* = 1

Defined in events.ts:75

###  right

• **right**: *number* = 2

Defined in events.ts:76