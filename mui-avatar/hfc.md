# mui-avatar

Avatars are found throughout material design with uses in everything from tables to dialog menus.

## Image avatars

Image avatars can be created by passing standard `img` props `src` or `srcSet` to the component.

```html render
<template hfz import:mui-avatar="dev">
  <div style="display: flex; justify-content: center; gap: 16px;">
    <mui-avatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
    ></mui-avatar>
    <mui-avatar
      alt="Travis Howard"
      src="https://mui.com/static/images/avatar/2.jpg"
    ></mui-avatar>
    <mui-avatar
      alt="Cindy Baker"
      src="https://mui.com/static/images/avatar/3.jpg"
    ></mui-avatar>
  </div>
</template>
```

```html
<mui-avatar
  alt="Remy Sharp"
  src="https://mui.com/static/images/avatar/1.jpg"
></mui-avatar>
<mui-avatar
  alt="Travis Howard"
  src="https://mui.com/static/images/avatar/2.jpg"
></mui-avatar>
<mui-avatar
  alt="Cindy Baker"
  src="https://mui.com/static/images/avatar/3.jpg"
></mui-avatar>
```

## Letter avatars

Avatars containing simple characters can be created by passing a string as children.

```html render
<template hfz import:mui-avatar="dev">
  <div style="display: flex; justify-content: center; gap: 16px;">
    <mui-avatar>H</mui-avatar>
    <mui-avatar bg-color="rgb(255, 87, 34)">N</mui-avatar>
    <mui-avatar bg-color="rgb(103, 58, 183)">OP</mui-avatar>
  </div>
</template>
```

```html
<mui-avatar>H</mui-avatar>
<mui-avatar bg-color="rgb(255, 87, 34)">N</mui-avatar>
<mui-avatar bg-color="rgb(103, 58, 183)">OP</mui-avatar>
```

## Sizes

You can change the size of the avatar with the `size` prop.

```html render
<template hfz import:mui-avatar="dev">
  <div style="display: flex; justify-content: center; gap: 16px;">
    <mui-avatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
      size="24"
    ></mui-avatar>
    <mui-avatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
    ></mui-avatar>
    <mui-avatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
      size="56"
    ></mui-avatar>
  </div>
</template>
```

```html
<mui-avatar
  alt="Remy Sharp"
  src="https://mui.com/static/images/avatar/1.jpg"
  size="24"
></mui-avatar>
<mui-avatar
  alt="Remy Sharp"
  src="https://mui.com/static/images/avatar/1.jpg"
></mui-avatar>
<mui-avatar
  alt="Remy Sharp"
  src="https://mui.com/static/images/avatar/1.jpg"
  size="56"
></mui-avatar>
```

## Icon avatars

Icon avatars are created by passing an icon as children.

```html render
<template hfz import:mui-avatar="dev" import:mui-icon="1.1.0">
  <div style="display: flex; justify-content: center; gap: 16px;">
    <mui-avatar>
      <mui-icon name="folder" icon-style="filled"></mui-icon>
    </mui-avatar>
    <mui-avatar bg-color="rgb(233, 30, 99)">
      <mui-icon name="pageview" icon-style="filled"></mui-icon>
    </mui-avatar>
    <mui-avatar bg-color="rgb(76, 175, 80)">
      <mui-icon name="assignment" icon-style="filled"></mui-icon>
    </mui-avatar>
  </div>
</template>
```

```html
<mui-avatar>
  <mui-icon name="folder" icon-style="filled"></mui-icon>
</mui-avatar>
<mui-avatar bg-color="rgb(233, 30, 99)">
  <mui-icon name="pageview" icon-style="filled"></mui-icon>
</mui-avatar>
<mui-avatar bg-color="rgb(76, 175, 80)">
  <mui-icon name="assignment" icon-style="filled"></mui-icon>
</mui-avatar>
```

## Variants

If you need square or rounded avatars, use the `variant` prop.

```html render
<template hfz import:mui-avatar="dev" import:mui-icon="1.1.0">
  <div style="display: flex; justify-content: center; gap: 16px;">
    <mui-avatar variant="square" bg-color="rgb(233, 30, 99)"> N </mui-avatar>
    <mui-avatar variant="rounded" bg-color="rgb(76, 175, 80)">
      <mui-icon name="assignment" icon-style="filled"></mui-icon>
    </mui-avatar>
  </div>
</template>
```

```html
<mui-avatar variant="square" bg-color="rgb(233, 30, 99)"> N </mui-avatar>
<mui-avatar variant="rounded" bg-color="rgb(76, 175, 80)">
  <mui-icon name="assignment" icon-style="filled"></mui-icon>
</mui-avatar>
```

## Fallbacks

If there is an error loading the avatar image, the component falls back to an alternative in the following order:

- the provided children
- the first letter of the alt text
- a generic avatar icon

```html render
<template hfz import:mui-avatar="dev" import:mui-icon="1.1.0">
  <div style="display: flex; justify-content: center; gap: 16px;">
    <mui-avatar alt="Remy Sharp" src="/broken-image.jpg"> B </mui-avatar>
    <mui-avatar alt="Remy Sharp" src="/broken-image.jpg"> </mui-avatar>
    <mui-avatar src="/broken-image.jpg"> </mui-avatar>
  </div>
</template>
```

```html
<mui-avatar alt="Remy Sharp" src="/broken-image.jpg"> B </mui-avatar>
<mui-avatar alt="Remy Sharp" src="/broken-image.jpg"> </mui-avatar>
<mui-avatar src="/broken-image.jpg"> </mui-avatar>
```

## Grouped

`group` prop renders its children as a stack.

```html render
<template hfz import:mui-avatar="dev">
  <div style="display: flex; justify-content: center;">
    <mui-avatar :group="true" :total="10">
      <mui-avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      ></mui-avatar>
      <mui-avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/2.jpg"
      ></mui-avatar>
      <mui-avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
      ></mui-avatar>
      <mui-avatar
        alt="Agnes Walker"
        src="https://mui.com/static/images/avatar/4.jpg"
      ></mui-avatar>
      <mui-avatar
        alt="Trevor Henderson"
        src="https://mui.com/static/images/avatar/5.jpg"
      ></mui-avatar>
    </mui-avatar>
  </div>
</template>
```

```html
<mui-avatar :group="true" :total="10">
  <mui-avatar
    alt="Remy Sharp"
    src="https://mui.com/static/images/avatar/1.jpg"
  ></mui-avatar>
  <mui-avatar
    alt="Travis Howard"
    src="https://mui.com/static/images/avatar/2.jpg"
  ></mui-avatar>
  <mui-avatar
    alt="Cindy Baker"
    src="https://mui.com/static/images/avatar/3.jpg"
  ></mui-avatar>
  <mui-avatar
    alt="Agnes Walker"
    src="https://mui.com/static/images/avatar/4.jpg"
  ></mui-avatar>
  <mui-avatar
    alt="Trevor Henderson"
    src="https://mui.com/static/images/avatar/5.jpg"
  ></mui-avatar>
</mui-avatar>
```
