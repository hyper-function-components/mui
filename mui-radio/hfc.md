# mui-radio

Radio buttons allow the user to select one option from a set.

## Standalone radio buttons

```html render
<template hfz import:mui-radio="dev" :data="{value: 'a'}">
  <div style="display: flex; justify-content: center;">
    <mui-radio
      :checked="value === 'a'"
      name="radio-buttons"
      @on-change="value='a'"
    ></mui-radio>
    <mui-radio
      :checked="value === 'b'"
      name="radio-buttons"
      @on-change="value='b'"
    ></mui-radio></div
></template>
```

```html
<template hfz import:mui-radio="dev" :data="{value: 'a'}">
  <mui-radio
    :checked="value === 'a'"
    name="radio-buttons"
    @on-change="value='a'"
  ></mui-radio>
  <mui-radio
    :checked="value === 'b'"
    name="radio-buttons"
    @on-change="value='b'"
  ></mui-radio>
</template>
```

## Size

Use the `size` prop or customize the font size of the svg icons to change the size of the radios.

```html render
<template hfz import:mui-radio="dev" :data="{value: 'a'}">
  <div
    style="display: flex; justify-content: center; align-items: center; gap: 16px; padding: 12px"
  >
    <mui-radio
      size="small"
      :checked="value === 'a'"
      name="radio-buttons"
      @on-change="value='a'"
    ></mui-radio>
    <mui-radio
      :checked="value === 'b'"
      name="radio-buttons"
      @on-change="value='b'"
    ></mui-radio></div
></template>
```

```html
<template hfz import:mui-radio="dev" :data="{value: 'a'}">
  <mui-radio
    size="small"
    :checked="value === 'a'"
    name="radio-buttons"
    @on-change="value='a'"
  ></mui-radio>
  <mui-radio
    :checked="value === 'b'"
    name="radio-buttons"
    @on-change="value='b'"
  ></mui-radio>
</template>
```

## Color

```html render
<template hfz import:mui-radio="dev" :data="{value: 'c'}">
  <div
    style="display: flex; justify-content: center; align-items: center; gap: 16px; padding: 12px"
  >
    <mui-radio
      :checked="value === 'a'"
      name="radio-buttons"
      @on-change="value='a'"
    ></mui-radio>
    <mui-radio
      color="secondary"
      :checked="value === 'b'"
      name="radio-buttons"
      @on-change="value='b'"
    ></mui-radio>
    <mui-radio
      color="success"
      :checked="value === 'c'"
      name="radio-buttons"
      @on-change="value='c'"
    ></mui-radio>
    <mui-radio
      color="default"
      :checked="value === 'd'"
      name="radio-buttons"
      @on-change="value='d'"
    ></mui-radio></div
></template>
```

```html
<template hfz import:mui-radio="dev" :data="{value: 'c'}">
  <mui-radio
    :checked="value === 'a'"
    name="radio-buttons"
    @on-change="value='a'"
  ></mui-radio>
  <mui-radio
    color="secondary"
    :checked="value === 'b'"
    name="radio-buttons"
    @on-change="value='b'"
  ></mui-radio>
  <mui-radio
    color="success"
    :checked="value === 'c'"
    name="radio-buttons"
    @on-change="value='c'"
  ></mui-radio>
  <mui-radio
    color="default"
    :checked="value === 'd'"
    name="radio-buttons"
    @on-change="value='d'"
  ></mui-radio>
</template>
```
