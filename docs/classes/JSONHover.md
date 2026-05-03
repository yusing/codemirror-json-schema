[**codemirror-json-schema**](../README.md)

---

[codemirror-json-schema](../README.md) / JSONHover

# Class: JSONHover

Defined in: [src/features/hover.ts:270](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L270)

## Constructors

### Constructor

> **new JSONHover**(`opts?`): `JSONHover`

Defined in: [src/features/hover.ts:273](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L273)

#### Parameters

##### opts?

[`HoverOptions`](../type-aliases/HoverOptions.md)

#### Returns

`JSONHover`

## Methods

### doHover()

> **doHover**(`view`, `pos`, `side`): `Promise`\<`Tooltip` \| `null`\>

Defined in: [src/features/hover.ts:412](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L412)

#### Parameters

##### view

`EditorView`

##### pos

`number`

##### side

`Side`

#### Returns

`Promise`\<`Tooltip` \| `null`\>

---

### getDataForCursor()

> **getDataForCursor**(`view`, `pos`, `side`): [`CursorData`](../type-aliases/CursorData.md) \| `null`

Defined in: [src/features/hover.ts:280](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L280)

#### Parameters

##### view

`EditorView`

##### pos

`number`

##### side

`Side`

#### Returns

[`CursorData`](../type-aliases/CursorData.md) \| `null`

---

### getHoverTexts()

> **getHoverTexts**(`data`, `draft`): `HoverTexts`

Defined in: [src/features/hover.ts:369](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L369)

#### Parameters

##### data

[`FoundCursorData`](../type-aliases/FoundCursorData.md)

##### draft

`SchemaNode`

#### Returns

`HoverTexts`
