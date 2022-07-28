# mui-checkbox

Checkboxes allow the user to select one or more items from a set.

Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.

## Basic checkboxes

```html render
<template hfz import:mui-checkbox="dev">
  <div style="display: flex; justify-content: center;">
    <mui-checkbox :default-checked="true"></mui-checkbox>
    <mui-checkbox></mui-checkbox>
    <mui-checkbox :disabled="true"></mui-checkbox>
    <mui-checkbox :disabled="true" :checked="true"></mui-checkbox>
  </div>
</template>
```

```html
<mui-checkbox :default-checked="true"></mui-checkbox>
<mui-checkbox></mui-checkbox>
<mui-checkbox :disabled="true"></mui-checkbox>
<mui-checkbox :disabled="true" :checked="true"></mui-checkbox>
```

## Size

Use the `size` prop or customize the font size of the svg icons to change the size of the checkboxes.

```html render
<template hfz import:mui-checkbox="dev">
  <div style="display: flex; justify-content: center; align-items: center;">
    <mui-checkbox size="small" :default-checked="true"></mui-checkbox>
    <mui-checkbox :default-checked="true"></mui-checkbox>
  </div>
</template>
```

```html
<mui-checkbox size="small" :default-checked="true"></mui-checkbox>
<mui-checkbox :default-checked="true"></mui-checkbox>
```

## Color

```html render
<template hfz import:mui-checkbox="dev">
  <div style="display: flex; justify-content: center; align-items: center;">
    <mui-checkbox :default-checked="true"></mui-checkbox>
    <mui-checkbox color="secondary" :default-checked="true"></mui-checkbox>
    <mui-checkbox color="success" :default-checked="true"></mui-checkbox>
    <mui-checkbox color="default" :default-checked="true"></mui-checkbox>
  </div>
</template>
```

```html
<mui-checkbox :default-checked="true"></mui-checkbox>
<mui-checkbox color="secondary" :default-checked="true"></mui-checkbox>
<mui-checkbox color="success" :default-checked="true"></mui-checkbox>
<mui-checkbox color="default" :default-checked="true"></mui-checkbox>
```

## Controlled

You can control the checkbox with the `checked` and `onChange` props:

```html render
<template hfz import:mui-checkbox="dev" :data="{checked: false}">
  <div style="display: flex; justify-content: center; align-items: center;">
    <mui-checkbox
      :checked="checked"
      @on-change="checked = !checked"
    ></mui-checkbox>
  </div>
</template>
```

```html
<template hfz import:mui-checkbox="dev" :data="{checked: false}">
  <mui-checkbox
    :checked="checked"
    @on-change="checked = !checked"
  ></mui-checkbox>
</template>
```

## Indeterminate

A checkbox input can only have two states in a form: checked or unchecked. It either submits its value or doesn't. Visually, there are three states a checkbox can be in: checked, unchecked, or indeterminate.

```html render
<template hfz import:mui-checkbox="dev">
  <div style="display: flex; justify-content: center; align-items: center;">
    <mui-checkbox :indeterminate="true"></mui-checkbox>
  </div>
</template>
```

```html
<mui-checkbox :indeterminate="true"></mui-checkbox>
```
