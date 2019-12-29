[Utilities](../README.md) › [Timer](timer.md)

# Class: Timer

Count-up or count-down timer. Can optionally update an html element.

## Hierarchy

* **Timer**

## Index

### Constructors

* [constructor](timer.md#constructor)

### Properties

* [count_down](timer.md#private-count_down)
* [end_callback](timer.md#private-optional-end_callback)
* [end_value](timer.md#private-optional-end_value)
* [html_element](timer.md#private-optional-html_element)
* [interval](timer.md#private-interval)
* [interval_f](timer.md#private-optional-interval_f)
* [is_active](timer.md#private-is_active)
* [start_value](timer.md#private-start_value)
* [tick_callback](timer.md#private-optional-tick_callback)
* [time_count](timer.md#private-time_count)

### Methods

* [add](timer.md#add)
* [getTimeMilliseconds](timer.md#gettimemilliseconds)
* [getTimeSeconds](timer.md#gettimeseconds)
* [getTimeString](timer.md#gettimestring)
* [isActive](timer.md#isactive)
* [reset](timer.md#reset)
* [restart](timer.md#restart)
* [resume](timer.md#resume)
* [start](timer.md#start)
* [stop](timer.md#stop)
* [updateHtmlElement](timer.md#updatehtmlelement)

## Constructors

###  constructor

\+ **new Timer**(`htmlElement?`: HTMLElement): *[Timer](timer.md)*

*Defined in [timer.ts:19](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`htmlElement?` | HTMLElement |

**Returns:** *[Timer](timer.md)*

## Properties

### `Private` count_down

• **count_down**: *boolean* = false

*Defined in [timer.ts:10](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L10)*

___

### `Private` `Optional` end_callback

• **end_callback**? : *undefined | function*

*Defined in [timer.ts:16](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L16)*

___

### `Private` `Optional` end_value

• **end_value**? : *undefined | number*

*Defined in [timer.ts:15](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L15)*

___

### `Private` `Optional` html_element

• **html_element**? : *HTMLElement*

*Defined in [timer.ts:19](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L19)*

___

### `Private` interval

• **interval**: *number* = 1000

*Defined in [timer.ts:12](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L12)*

___

### `Private` `Optional` interval_f

• **interval_f**? : *undefined | number*

*Defined in [timer.ts:18](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L18)*

___

### `Private` is_active

• **is_active**: *boolean* = false

*Defined in [timer.ts:8](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L8)*

___

### `Private` start_value

• **start_value**: *number* = 0

*Defined in [timer.ts:9](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L9)*

___

### `Private` `Optional` tick_callback

• **tick_callback**? : *undefined | function*

*Defined in [timer.ts:17](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L17)*

___

### `Private` time_count

• **time_count**: *number* = 0

*Defined in [timer.ts:11](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L11)*

## Methods

###  add

▸ **add**(`time`: number): *void*

*Defined in [timer.ts:202](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L202)*

Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`time` | number | In milliseconds.  |

**Returns:** *void*

___

###  getTimeMilliseconds

▸ **getTimeMilliseconds**(): *number*

*Defined in [timer.ts:223](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L223)*

Returns the time it has passed so far, in milliseconds.

**Returns:** *number*

___

###  getTimeSeconds

▸ **getTimeSeconds**(): *number*

*Defined in [timer.ts:216](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L216)*

Returns the time it has passed so far, in seconds.

**Returns:** *number*

___

###  getTimeString

▸ **getTimeString**(): *string*

*Defined in [timer.ts:209](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L209)*

Returns a string with the time passed so far.

**Returns:** *string*

___

###  isActive

▸ **isActive**(): *boolean*

*Defined in [timer.ts:230](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L230)*

Returns whether the timer is currently active or not.

**Returns:** *boolean*

___

###  reset

▸ **reset**(): *void*

*Defined in [timer.ts:166](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L166)*

Stops and resets the count.

**Returns:** *void*

___

###  restart

▸ **restart**(): *void*

*Defined in [timer.ts:176](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L176)*

Restart the timer.

**Returns:** *void*

___

###  resume

▸ **resume**(): *void*

*Defined in [timer.ts:102](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L102)*

Resumes the timer with the same settings/values that were set before it was stopped.

**Returns:** *void*

___

###  start

▸ **start**(`args?`: undefined | object): *void*

*Defined in [timer.ts:47](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L47)*

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`onEnd` is called when the timer ends (only if an `endValue` was provided).
`onTick` is called every second.
`countDown` if it counts up or down (default is count up).
`interval` time in between each tick (default is 1000 milliseconds).

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [timer.ts:154](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L154)*

Stop counting.

**Returns:** *void*

___

###  updateHtmlElement

▸ **updateHtmlElement**(): *void*

*Defined in [timer.ts:191](https://github.com/noobiept/utilities/blob/01c66d5/source/timer.ts#L191)*

Updates the associated html element (if was given) with the current time value.

**Returns:** *void*
