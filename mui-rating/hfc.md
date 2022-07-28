# mui-rating

Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.

## Basic rating

```html render
<template hfz import:mui-rating="dev" :data="{value: 2}">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
    <mui-rating :value="value" @on-change="value=$event.value"></mui-rating>
    <mui-rating :value="value" :read-only="true"></mui-rating>
    <mui-rating :value="value" :disabled="true"></mui-rating>
    <mui-rating :value="null"></mui-rating>
  </div>
</template>
```

```html
<mui-rating :value="value" @on-change="value=$event.value"></mui-rating>
<mui-rating :value="value" :read-only="true"></mui-rating>
<mui-rating :value="value" :disabled="true"></mui-rating>
<mui-rating :value="null"></mui-rating>
```

## Rating precision

The rating can display any float number with the `value` prop. Use the `precision` prop to define the minimum increment value change allowed.

```html render
<template hfz import:mui-rating="dev">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
    <mui-rating :default-value="2.5" :precision="0.5"></mui-rating>
    <mui-rating
      :default-value="2.5"
      :precision="0.5"
      :read-only="true"
    ></mui-rating></div
></template>
```

```html
<mui-rating :default-value="2.5" :precision="0.5"></mui-rating>
<mui-rating
  :default-value="2.5"
  :precision="0.5"
  :read-only="true"
></mui-rating>
```

## Hover feedback

You can display a label on hover to help the user pick the correct rating value. The demo uses the `onChangeActive` prop.

```html render
<template hfz import:mui-rating="dev" :data="{value: 2.5, hover: -1}">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
    <mui-rating
      :value="value"
      :precision="0.5"
      @on-change="value=$event.value"
      @on-change-active="hover=$event.value"
    ></mui-rating>

    {{hover}}
  </div>
</template>
```

```html
<template hfz import:mui-rating="dev" :data="{value: 2.5, hover: -1}">
  <mui-rating
    :value="value"
    :precision="0.5"
    @on-change="value=$event.value"
    @on-change-active="hover=$event.value"
  ></mui-rating>

  {{hover}}
</template>
```

## Sizes

For larger or smaller ratings use the `size` prop.

```html render
<template hfz import:mui-rating="dev">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
    <mui-rating size="small" :default-value="2"></mui-rating>
    <mui-rating :default-value="2"></mui-rating>
    <mui-rating size="large" :default-value="2"></mui-rating>
  </div>
</template>
```
