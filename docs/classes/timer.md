**[Utilities](../README.md)**

> [Globals](../README.md) / Timer

# Class: Timer

Count-up or count-down timer. Can optionally update an html element.

## Hierarchy

* **Timer**

## Index

### Constructors

* [constructor](timer.md#constructor)

### Properties

* [count\_down](timer.md#count_down)
* [end\_callback](timer.md#end_callback)
* [end\_value](timer.md#end_value)
* [html\_element](timer.md#html_element)
* [interval](timer.md#interval)
* [interval\_f](timer.md#interval_f)
* [is\_active](timer.md#is_active)
* [start\_value](timer.md#start_value)
* [tick\_callback](timer.md#tick_callback)
* [time\_count](timer.md#time_count)

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

### constructor

\+ **new Timer**(`htmlElement?`: HTMLElement): [Timer](timer.md)

*Defined in [timer.ts:19](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`htmlElement?` | HTMLElement |

**Returns:** [Timer](timer.md)

## Properties

### count\_down

• `Private` **count\_down**: boolean = false

*Defined in [timer.ts:10](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L10)*

___

### end\_callback

• `Private` `Optional` **end\_callback**: undefined \| () => any

*Defined in [timer.ts:16](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L16)*

___

### end\_value

• `Private` `Optional` **end\_value**: undefined \| number

*Defined in [timer.ts:15](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L15)*

___

### html\_element

• `Private` `Optional` **html\_element**: HTMLElement

*Defined in [timer.ts:19](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L19)*

___

### interval

• `Private` **interval**: number = 1000

*Defined in [timer.ts:12](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L12)*

___

### interval\_f

• `Private` `Optional` **interval\_f**: undefined \| number

*Defined in [timer.ts:18](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L18)*

___

### is\_active

• `Private` **is\_active**: boolean = false

*Defined in [timer.ts:8](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L8)*

___

### start\_value

• `Private` **start\_value**: number = 0

*Defined in [timer.ts:9](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L9)*

___

### tick\_callback

• `Private` `Optional` **tick\_callback**: undefined \| () => any

*Defined in [timer.ts:17](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L17)*

___

### time\_count

• `Private` **time\_count**: number = 0

*Defined in [timer.ts:11](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L11)*

## Methods

### add

▸ **add**(`time`: number): void

*Defined in [timer.ts:192](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L192)*

Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`time` | number | In milliseconds.  |

**Returns:** void

___

### getTimeMilliseconds

▸ **getTimeMilliseconds**(): number

*Defined in [timer.ts:213](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L213)*

Returns the time it has passed so far, in milliseconds.

**Returns:** number

___

### getTimeSeconds

▸ **getTimeSeconds**(): number

*Defined in [timer.ts:206](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L206)*

Returns the time it has passed so far, in seconds.

**Returns:** number

___

### getTimeString

▸ **getTimeString**(): string

*Defined in [timer.ts:199](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L199)*

Returns a string with the time passed so far.

**Returns:** string

___

### isActive

▸ **isActive**(): boolean

*Defined in [timer.ts:220](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L220)*

Returns whether the timer is currently active or not.

**Returns:** boolean

___

### reset

▸ **reset**(): void

*Defined in [timer.ts:156](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L156)*

Stops and resets the count.

**Returns:** void

___

### restart

▸ **restart**(): void

*Defined in [timer.ts:166](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L166)*

Restart the timer.

**Returns:** void

___

### resume

▸ **resume**(): void

*Defined in [timer.ts:92](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L92)*

Resumes the timer with the same settings/values that were set before it was stopped.

**Returns:** void

___

### start

▸ **start**(`args?`: undefined \| { countDown?: undefined \| false \| true ; endValue?: undefined \| number ; interval?: undefined \| number ; onEnd?: undefined \| () => void ; onTick?: undefined \| () => void ; startValue?: undefined \| number  }): void

*Defined in [timer.ts:37](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L37)*

Start counting.
If no endValue is given, it never stops counting.

`startValue` and `endValue` are in milliseconds.

`onEnd` is called when the timer ends (only if an `endValue` was provided).
`onTick` is called every second.
`countDown` if it counts up or down (default is count up).
`interval` time in between each tick (default is 1000 milliseconds).

#### Parameters:

Name | Type |
------ | ------ |
`args?` | undefined \| { countDown?: undefined \| false \| true ; endValue?: undefined \| number ; interval?: undefined \| number ; onEnd?: undefined \| () => void ; onTick?: undefined \| () => void ; startValue?: undefined \| number  } |

**Returns:** void

___

### stop

▸ **stop**(): void

*Defined in [timer.ts:144](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L144)*

Stop counting.

**Returns:** void

___

### updateHtmlElement

▸ **updateHtmlElement**(): void

*Defined in [timer.ts:181](https://github.com/noobiept/utilities/blob/4235ba9/source/timer.ts#L181)*

Updates the associated html element (if was given) with the current time value.

**Returns:** void
