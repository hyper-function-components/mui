# mui-switch

Switches toggle the state of a single setting on or off.

Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it's in, should be made clear from the corresponding inline label.

## Basic switches

```html render
<template hfz import:mui-switch="dev">
  <div style="display: flex; justify-content: center; gap: 16px">
    <mui-switch :default-checked="true"></mui-switch>
    <mui-switch></mui-switch>
    <mui-switch :disabled="true" :default-checked="true"></mui-switch>
    <mui-switch :disabled="true"></mui-switch>
  </div>
</template>
```

```html
<mui-switch :default-checked="true"></mui-switch>
<mui-switch></mui-switch>
<mui-switch :disabled="true" :default-checked="true"></mui-switch>
<mui-switch :disabled="true"></mui-switch>
```

## Size

```html render
<template hfz import:mui-switch="dev">
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px
    "
  >
    <mui-switch size="small"></mui-switch>
    <mui-switch></mui-switch>
  </div>
</template>
```

```html
<mui-switch size="small"></mui-switch> <mui-switch></mui-switch>
```

## Color

```html render
<template hfz import:mui-switch="dev">
  <div style="display: flex; justify-content: center; gap: 16px">
    <mui-switch :default-checked="true"></mui-switch>
    <mui-switch color="secondary" :default-checked="true"></mui-switch>
    <mui-switch color="warning" :default-checked="true"></mui-switch>
    <mui-switch color="default" :default-checked="true"></mui-switch>
  </div>
</template>
```

```html
<mui-switch :default-checked="true"></mui-switch>
<mui-switch></mui-switch>
<mui-switch :disabled="true" :default-checked="true"></mui-switch>
<mui-switch :disabled="true"></mui-switch>
```

## Controlled

You can control the switch with the `checked` and `onChange` props:

```html render
<template hfz import:mui-switch="dev" :data="{checked: true}">
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px
    "
  >
    <mui-switch
      :checked="checked"
      @on-change="checked=$event.value"
    ></mui-switch>
  </div>
</template>
```

```html
<template hfz import:mui-switch="dev" :data="{checked: true}">
  <mui-switch :checked="checked" @on-change="checked=$event.value"></mui-switch>
</template>
```
