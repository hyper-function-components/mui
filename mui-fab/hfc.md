# mui-fab

A floating action button (FAB) performs the primary, or most common, action on a screen.

A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended.

Only use a FAB if it is the most suitable way to present a screen's primary action. Only one component is recommended per screen to represent the most common action.

## Basic FAB

```html render
<template hfz import:mui-fab="dev" import:mui-icon="1.1.0">
  <div
    style="display: flex; justify-content: center; align-items: center; gap: 16px; padding: 12px"
  >
    <mui-fab color="primary">
      <mui-icon name="add" color="#FFF"></mui-icon>
    </mui-fab>
    <mui-fab color="secondary">
      <mui-icon name="edit" icon-style="filled" color="#FFF"></mui-icon>
    </mui-fab>
    <mui-fab variant="extended">
      <mui-icon name="add"></mui-icon>
      Navigate</mui-fab
    >
    <mui-fab disabled
      ><mui-icon name="favorite" color="#999"></mui-icon
    ></mui-fab>
  </div>
</template>
```

```html
<mui-fab color="primary">
  <mui-icon name="add" color="#FFF"></mui-icon>
</mui-fab>
<mui-fab color="secondary">
  <mui-icon name="edit" icon-style="filled" color="#FFF"></mui-icon>
</mui-fab>
<mui-fab variant="extended">
  <mui-icon name="add"></mui-icon>
  Navigate
</mui-fab>
<mui-fab disabled>
  <mui-icon name="favorite" color="#999"></mui-icon>
</mui-fab>
```

## Size

By default, the size is `large`. Use the `size` prop for smaller floating action buttons.

```html render
<template hfz import:mui-fab="dev" import:mui-icon="1.1.0">
  <div
    style="display: flex; justify-content: center; align-items: center; gap: 16px; padding: 12px"
  >
    <mui-fab size="small" color="secondary">
      <mui-icon name="add" color="#FFF"></mui-icon></mui-fab>
    <mui-fab size="medium" color="secondary">
      <mui-icon name="add" color="#FFF"></mui-icon></mui-fab>
    <mui-fab color="secondary">
      <mui-icon name="add" color="#FFF"></mui-icon></mui-fab>
</template>
```

```html
<mui-fab size="small" color="secondary">
  <mui-icon name="add" color="#FFF"></mui-icon>
</mui-fab>
<mui-fab size="medium" color="secondary">
  <mui-icon name="add" color="#FFF"></mui-icon>
</mui-fab>
<mui-fab color="secondary">
  <mui-icon name="add" color="#FFF"></mui-icon>
</mui-fab>
```

```html render
<template hfz import:mui-fab="dev" import:mui-icon="1.1.0">
  <div
    style="display: flex; justify-content: center; align-items: center; gap: 16px; padding: 12px"
  >
    <mui-fab size="small" variant="extended" color="primary">
      <mui-icon name="navigation" color="#FFF" icon-style="filled"></mui-icon>Extended</mui-fab>
    <mui-fab size="medium" variant="extended" color="primary">
      <mui-icon name="navigation" color="#FFF" icon-style="filled"></mui-icon>Extended</mui-fab>
    <mui-fab variant="extended" color="primary">
      <mui-icon name="navigation" color="#FFF" icon-style="filled"></mui-icon>Extended</mui-fab>
</template>
```

```html
<mui-fab size="small" variant="extended" color="primary">
  <mui-icon name="navigation" color="#FFF" icon-style="filled"></mui-icon>
  Extended
</mui-fab>
<mui-fab size="medium" variant="extended" color="primary">
  <mui-icon name="navigation" color="#FFF" icon-style="filled"></mui-icon>
  Extended
</mui-fab>
<mui-fab variant="extended" color="primary">
  <mui-icon name="navigation" color="#FFF" icon-style="filled"></mui-icon>
  Extended
</mui-fab>
```
