[**codemirror-json-schema**](../README.md)

---

[codemirror-json-schema](../README.md) / HoverOptions

# Type Alias: HoverOptions

> **HoverOptions** = `object`

Defined in: [src/features/hover.ts:25](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L25)

## Properties

### formatHover?

> `optional` **formatHover?**: (`data`) => `HTMLElement`

Defined in: [src/features/hover.ts:34](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L34)

Generate the hover tooltip HTML

#### Parameters

##### data

`HoverTexts`

#### Returns

`HTMLElement`

---

### getHoverTexts?

> `optional` **getHoverTexts?**: (`data`) => `HoverTexts`

Defined in: [src/features/hover.ts:30](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L30)

Generate the text to display in the hover tooltip

#### Parameters

##### data

[`FoundCursorData`](FoundCursorData.md)

#### Returns

`HoverTexts`

---

### mode?

> `optional` **mode?**: `JSONMode`

Defined in: [src/features/hover.ts:26](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L26)

---

### parser?

> `optional` **parser?**: (`text`) => `any`

Defined in: [src/features/hover.ts:39](https://github.com/yusing/codemirror-json-schema/blob/fb45409b68ffa7d8448a92d2119035f373bcab3d/src/features/hover.ts#L39)

Provide a custom parser for the document

#### Parameters

##### text

`string`

#### Returns

`any`

#### Default

```ts
JSON.parse;
```
