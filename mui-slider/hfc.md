# mui-slider

Sliders allow users to make selections from a range of values.

Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.

## Continuous sliders

Continuous sliders allow users to select a value along a subjective range.

```html render
<template hfz import:mui-slider="dev" import:mui-icon="1.0.0">
  <div style="width: 300px; margin: auto">
    <mui-slider :default-value="30"></mui-slider>
    <mui-slider :disabled="true" :default-value="30"></mui-slider>
  </div>
</template>
```

```html
<mui-slider :default-value="30"></mui-slider>
<mui-slider :disabled="true" :default-value="30"></mui-slider>
```

## Sizes

For smaller slider, use the prop `size="small"`.

```html render
<template hfz import:mui-slider="dev" import:mui-icon="1.0.0">
  <div style="width: 300px; margin: 0 auto; padding-top: 32px">
    <mui-slider
      :default-value="30"
      size="small"
      value-label-display="auto"
    ></mui-slider>
    <mui-slider :default-value="30" value-label-display="auto"></mui-slider>
  </div>
</template>
```

```html
<mui-slider :default-value="30" value-label-display="auto"></mui-slider>
<mui-slider
  :disabled="true"
  :default-value="30"
  value-label-display="auto"
></mui-slider>
```

## Discrete sliders

Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with `marks`.

```html render
<template hfz import:mui-slider="dev" import:mui-icon="1.0.0">
  <div style="width: 300px; margin: 0 auto; padding-top: 32px">
    <mui-slider
      :default-value="30"
      :step="10"
      :marks="true"
      :min="10"
      :max="110"
      value-label-display="auto"
    ></mui-slider>
    <mui-slider
      :disabled="true"
      :default-value="30"
      :step="10"
      :marks="true"
      :min="10"
      :max="110"
      value-label-display="auto"
    ></mui-slider>
  </div>
</template>
```

```html
<mui-slider
  :default-value="30"
  :step="10"
  :marks="true"
  :min="10"
  :max="110"
  value-label-display="auto"
></mui-slider>
<mui-slider
  :disabled="true"
  :default-value="30"
  :step="10"
  :marks="true"
  :min="10"
  :max="110"
  value-label-display="auto"
></mui-slider>
```

## Range slider

The slider can be used to set the start and end of a range by supplying an array of values to the `value` prop.

```html render
<template hfz import:mui-slider="dev" :data="{value: [20, 37]}">
  <div style="width: 300px; margin: 0 auto; padding-top: 32px">
    <mui-slider
      :value="value"
      @on-change="value=$event.value"
      value-label-display="auto"
    ></mui-slider>
  </div>
</template>
```

```html
<template hfz import:mui-slider="dev" :data="{value: [20, 37]}">
  <mui-slider
    :value="value"
    @on-change="value=$event.value"
    value-label-display="auto"
  ></mui-slider>
</template>
```

## Color

```html render
<template hfz import:mui-slider="dev" import:mui-icon="1.0.0">
  <div style="width: 300px; margin: 0 auto; padding-top: 32px">
    <mui-slider color="secondary" :default-value="30"></mui-slider>
  </div>
</template>
```

```html
<mui-slider color="secondary" :default-value="30"></mui-slider>
```
