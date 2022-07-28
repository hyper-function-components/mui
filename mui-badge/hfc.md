# mui-badge

mui-badge generates a small badge to the top-right of its child(ren).

## Basic badge

Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.

```html render
<template hfz import:mui-badge="dev" import:mui-icon="1.1.0">
  <div style="display: flex; justify-content: center; padding: 12px 0">
    <mui-badge badge-content="4" color="primary"
      ><mui-icon name="mail"></mui-icon
    ></mui-badge>
  </div>
</template>
```

```html
<template hfz import:mui-badge="dev" import:mui-icon="1.1.0">
  <mui-badge badge-content="4" color="primary">
    <mui-icon name="mail"></mui-icon>
  </mui-badge>
</template>
```

## Color

Use `color` prop to apply theme palette to component.

```html render
<template hfz import:mui-badge="dev" import:mui-icon="1.1.0">
  <div
    style="display: flex; justify-content: center; gap: 32px;padding: 12px 0"
  >
    <mui-badge badge-content="4" color="primary"
      ><mui-icon name="mail"></mui-icon
    ></mui-badge>
    <mui-badge badge-content="4" color="success"
      ><mui-icon name="mail"></mui-icon
    ></mui-badge>
  </div>
</template>
```

```html
<mui-badge badge-content="4" color="primary">
  <mui-icon name="mail"></mui-icon>
</mui-badge>
<mui-badge badge-content="4" color="success">
  <mui-icon name="mail"></mui-icon>
</mui-badge>
```

## Maximum value

You can use the `max` prop to cap the value of the badge content.

```html render
<template hfz import:mui-badge="dev" import:mui-icon="1.1.0">
  <div
    style="display: flex; justify-content: center; gap: 32px;padding: 12px 0"
  >
    <mui-badge badge-content="10" :max="9" color="secondary"
      ><mui-icon name="mail"></mui-icon
    ></mui-badge>
    <mui-badge badge-content="100" :max="99" color="secondary"
      ><mui-icon name="mail"></mui-icon
    ></mui-badge>
  </div>
</template>
```

```html
<mui-badge badge-content="10" :max="9" color="secondary"
  ><mui-icon name="mail"></mui-icon
></mui-badge>
<mui-badge badge-content="100" :max="99" color="secondary"
  ><mui-icon name="mail"></mui-icon
></mui-badge>
```

## Dot badge

The `dot` prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.

```html render
<template hfz import:mui-badge="dev" import:mui-icon="1.1.0">
  <div
    style="display: flex; justify-content: center; gap: 32px;padding: 12px 0"
  >
    <mui-badge variant="dot" color="secondary"
      ><mui-icon name="mail"></mui-icon
    ></mui-badge>
  </div>
</template>
```

```html
<mui-badge variant="dot" color="secondary"
  ><mui-icon name="mail"></mui-icon
></mui-badge>
```

## Badge overlap

You can use the `overlap` prop to place the badge relative to the corner of the wrapped element.

```html render
<template hfz import:mui-badge="dev" import:mui-icon="1.1.0">
  <div
    style="display: flex; justify-content: center; gap: 32px;padding: 12px 0"
  >
    <mui-badge badge-content=" " color="secondary">
      <div style="height: 40px; width: 40px; background: cadetblue;"></div>
    </mui-badge>
    <mui-badge variant="dot" color="secondary"
      ><div style="height: 40px; width: 40px; background: cadetblue;"></div
    ></mui-badge>
    <mui-badge badge-content=" " overlap="circular" color="secondary">
      <div
        style="height: 40px; width: 40px; background: cadetblue; border-radius: 50%;"
      ></div>
    </mui-badge>
    <mui-badge variant="dot" overlap="circular" color="secondary"
      ><div
        style="height: 40px; width: 40px; background: cadetblue; border-radius: 50%;"
      ></div
    ></mui-badge>
  </div>
</template>
```

```html
<mui-badge badge-content=" " color="secondary">
  <div style="height: 40px; width: 40px; background: cadetblue;"></div>
</mui-badge>
<mui-badge variant="dot" color="secondary"
  ><div style="height: 40px; width: 40px; background: cadetblue;"></div
></mui-badge>
<mui-badge badge-content=" " overlap="circular" color="secondary">
  <div
    style="height: 40px; width: 40px; background: cadetblue; border-radius: 50%;"
  ></div>
</mui-badge>
<mui-badge variant="dot" overlap="circular" color="secondary"
  ><div
    style="height: 40px; width: 40px; background: cadetblue; border-radius: 50%;"
  ></div
></mui-badge>
```

## Badge alignment

You can use the `vertical` and `horizontal` prop to move the badge to any corner of the wrapped element.

```html render
<template hfz import:mui-badge="dev" import:mui-icon="1.1.0">
  <div
    style="display: flex; justify-content: center; gap: 32px;padding: 12px 0"
  >
    <mui-badge
      vertical="top"
      horizontal="right"
      variant="dot"
      color="secondary"
    >
      <mui-icon name="mail"></mui-icon>
    </mui-badge>
    <mui-badge vertical="top" horizontal="left" variant="dot" color="secondary"
      ><mui-icon name="mail"></mui-icon
    ></mui-badge>
    <mui-badge
      vertical="bottom"
      horizontal="right"
      variant="dot"
      color="secondary"
    >
      <mui-icon name="mail"></mui-icon>
    </mui-badge>
    <mui-badge
      vertical="bottom"
      horizontal="left"
      variant="dot"
      color="secondary"
      ><mui-icon name="mail"></mui-icon
    ></mui-badge>
  </div>
</template>
```

```html
<mui-badge vertical="top" horizontal="right" variant="dot" color="secondary">
  <mui-icon name="mail"></mui-icon>
</mui-badge>
<mui-badge vertical="top" horizontal="left" variant="dot" color="secondary"
  ><mui-icon name="mail"></mui-icon
></mui-badge>
<mui-badge vertical="bottom" horizontal="right" variant="dot" color="secondary">
  <mui-icon name="mail"></mui-icon>
</mui-badge>
<mui-badge vertical="bottom" horizontal="left" variant="dot" color="secondary"
  ><mui-icon name="mail"></mui-icon
></mui-badge>
```
