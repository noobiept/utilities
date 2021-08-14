[Utilities](../README.md) / preload

# Module: preload

## Table of contents

### Classes

- [Preload](../classes/preload.Preload.md)

### Interfaces

- [PreloadArgs](../interfaces/preload.PreloadArgs.md)

### Type aliases

- [FileInfoType](preload.md#fileinfotype)
- [ManifestData](preload.md#manifestdata)
- [PreloadData](preload.md#preloaddata)
- [PreloadEvent](preload.md#preloadevent)

## Type aliases

### FileInfoType

Ƭ **FileInfoType**: keyof typeof `FileInfo`

#### Defined in

[preload.ts:45](https://github.com/noobiept/utilities/blob/03a3e48/source/preload.ts#L45)

___

### ManifestData

Ƭ **ManifestData**: { `id`: `string` ; `path`: `string` ; `type?`: [`FileInfoType`](preload.md#fileinfotype)  }[]

#### Defined in

[preload.ts:8](https://github.com/noobiept/utilities/blob/03a3e48/source/preload.ts#L8)

___

### PreloadData

Ƭ **PreloadData**: `Object`

#### Index signature

▪ [id: `string`]: `any`

#### Defined in

[preload.ts:4](https://github.com/noobiept/utilities/blob/03a3e48/source/preload.ts#L4)

___

### PreloadEvent

Ƭ **PreloadEvent**: ``"complete"`` \| ``"error"`` \| ``"abort"`` \| ``"progress"`` \| ``"fileload"``

#### Defined in

[preload.ts:14](https://github.com/noobiept/utilities/blob/03a3e48/source/preload.ts#L14)
