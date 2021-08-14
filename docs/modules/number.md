[Utilities](../README.md) / number

# Module: number

## Table of contents

### Functions

- [getRandomFloat](number.md#getrandomfloat)
- [getRandomInt](number.md#getrandomint)
- [getSeveralRandomInts](number.md#getseveralrandomints)
- [numberOfDigits](number.md#numberofdigits)
- [range](number.md#range)
- [round](number.md#round)

## Functions

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

[number.ts:6](https://github.com/noobiept/utilities/blob/03a3e48/source/number.ts#L6)

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

[number.ts:17](https://github.com/noobiept/utilities/blob/03a3e48/source/number.ts#L17)

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

[number.ts:28](https://github.com/noobiept/utilities/blob/03a3e48/source/number.ts#L28)

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

[number.ts:65](https://github.com/noobiept/utilities/blob/03a3e48/source/number.ts#L65)

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

[number.ts:89](https://github.com/noobiept/utilities/blob/03a3e48/source/number.ts#L89)

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

[number.ts:78](https://github.com/noobiept/utilities/blob/03a3e48/source/number.ts#L78)
