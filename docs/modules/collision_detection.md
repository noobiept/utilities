[Utilities](../README.md) / collision_detection

# Module: collision\_detection

## Table of contents

### Functions

- [boxBoxCollision](collision_detection.md#boxboxcollision)
- [circleCircleCollision](collision_detection.md#circlecirclecollision)
- [circlePointCollision](collision_detection.md#circlepointcollision)
- [pointBoxCollision](collision_detection.md#pointboxcollision)

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

[collision_detection.ts:4](https://github.com/noobiept/utilities/blob/03a3e48/source/collision_detection.ts#L4)

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

[collision_detection.ts:25](https://github.com/noobiept/utilities/blob/03a3e48/source/collision_detection.ts#L25)

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

[collision_detection.ts:49](https://github.com/noobiept/utilities/blob/03a3e48/source/collision_detection.ts#L49)

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

[collision_detection.ts:72](https://github.com/noobiept/utilities/blob/03a3e48/source/collision_detection.ts#L72)
