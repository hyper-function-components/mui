# mui-text-field

Text fields let users enter and edit text.

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Basic TextField

```html render
<template hfz import:mui-text-field="dev" :data="{}">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    "
  >
    <mui-text-field
      id="standard-basic1"
      label="Standard"
      variant="standard"
    ></mui-text-field>
    <mui-text-field
      id="outlined-basic2"
      label="Outlined"
      variant="outlined"
    ></mui-text-field>
    <mui-text-field
      id="filled-basic3"
      label="Filled"
      variant="filled"
    ></mui-text-field>
  </div>
</template>
```

```html
<mui-text-field
  id="standard-basic1"
  label="Standard"
  variant="standard"
></mui-text-field>
<mui-text-field
  id="outlined-basic2"
  label="Outlined"
  variant="outlined"
></mui-text-field>
<mui-text-field
  id="filled-basic3"
  label="Filled"
  variant="filled"
></mui-text-field>
```

## Form props

Standard form attributes are supported e.g. `required`, `disabled`, `type`, etc. as well as a `helperText` which is used to give context about a field's input, such as how the input will be used.

```html render
<template hfz import:mui-text-field="dev" :data="{}">
  <div
    style="
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    "
  >
    <mui-text-field
      :required="true"
      id="outlined-required"
      label="Required"
      default-value="Hello World"
    ></mui-text-field>
    <mui-text-field
      :disabled="true"
      id="outlined-disabled"
      label="Disabled"
      default-value="Hello World"
    ></mui-text-field>
    <mui-text-field
      id="outlined-password-input"
      label="Password"
      type="password"
      auto-complete="current-password"
    ></mui-text-field>
    <mui-text-field
      id="outlined-read-only-input"
      label="Read Only"
      default-value="Hello World"
      :input-props="{readOnly: true}"
    ></mui-text-field>
    <mui-text-field
      id="outlined-number"
      label="Number"
      type="number"
      :input-label-props="{shrink: true}"
    ></mui-text-field>
    <mui-text-field
      id="outlined-search"
      label="Search field"
      type="search"
    ></mui-text-field>
    <mui-text-field
      id="outlined-helperText"
      label="Helper text"
      default-value="Default Value"
      helper-text="Some important text"
    ></mui-text-field>
  </div>
  <div
    style="
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      margin: 32px 0;
    "
  >
    <mui-text-field
      :required="true"
      id="outlined-required"
      label="Required"
      default-value="Hello World"
      variant="filled"
    ></mui-text-field>
    <mui-text-field
      :disabled="true"
      id="outlined-disabled"
      label="Disabled"
      default-value="Hello World"
      variant="filled"
    ></mui-text-field>
    <mui-text-field
      id="outlined-password-input"
      label="Password"
      type="password"
      auto-complete="current-password"
      variant="filled"
    ></mui-text-field>
    <mui-text-field
      id="outlined-read-only-input"
      label="Read Only"
      default-value="Hello World"
      :input-props="{readOnly: true}"
      variant="filled"
    ></mui-text-field>
    <mui-text-field
      id="outlined-number"
      label="Number"
      type="number"
      :input-label-props="{shrink: true}"
      variant="filled"
    ></mui-text-field>
    <mui-text-field
      id="outlined-search"
      label="Search field"
      type="search"
      variant="filled"
    ></mui-text-field>
    <mui-text-field
      id="outlined-helperText"
      label="Helper text"
      default-value="Default Value"
      helper-text="Some important text"
      variant="filled"
    ></mui-text-field>
  </div>
  <div
    style="
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    "
  >
    <mui-text-field
      :required="true"
      id="outlined-required"
      label="Required"
      default-value="Hello World"
      variant="standard"
    ></mui-text-field>
    <mui-text-field
      :disabled="true"
      id="outlined-disabled"
      label="Disabled"
      default-value="Hello World"
      variant="standard"
    ></mui-text-field>
    <mui-text-field
      id="outlined-password-input"
      label="Password"
      type="password"
      auto-complete="current-password"
      variant="standard"
    ></mui-text-field>
    <mui-text-field
      id="outlined-read-only-input"
      label="Read Only"
      default-value="Hello World"
      :input-props="{readOnly: true}"
      variant="standard"
    ></mui-text-field>
    <mui-text-field
      id="outlined-number"
      label="Number"
      type="number"
      :input-label-props="{shrink: true}"
      variant="standard"
    ></mui-text-field>
    <mui-text-field
      id="outlined-search"
      label="Search field"
      type="search"
      variant="standard"
    ></mui-text-field>
    <mui-text-field
      id="outlined-helperText"
      label="Helper text"
      default-value="Default Value"
      helper-text="Some important text"
      variant="standard"
    ></mui-text-field>
  </div>
</template>
```

```html
<mui-text-field
  :required="true"
  id="outlined-required"
  label="Required"
  default-value="Hello World"
></mui-text-field>
<mui-text-field
  :disabled="true"
  id="outlined-disabled"
  label="Disabled"
  default-value="Hello World"
></mui-text-field>
<mui-text-field
  id="outlined-password-input"
  label="Password"
  type="password"
  auto-complete="current-password"
></mui-text-field>
<mui-text-field
  id="outlined-read-only-input"
  label="Read Only"
  default-value="Hello World"
  :input-props="{readOnly: true}"
></mui-text-field>
<mui-text-field
  id="outlined-number"
  label="Number"
  type="number"
  :input-label-props="{shrink: true}"
></mui-text-field>
<mui-text-field
  id="outlined-search"
  label="Search field"
  type="search"
></mui-text-field>
<mui-text-field
  id="outlined-helperText"
  label="Helper text"
  default-value="Default Value"
  helper-text="Some important text"
></mui-text-field>
```

## Validation

The `error` prop toggles the error state. The `helperText` prop can then be used to provide feedback to the user about the error.

```html render
<template hfz import:mui-text-field="dev" :data="{}">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    "
  >
    <mui-text-field
      :error="true"
      id="outlined-error-helper-text"
      label="Error"
      default-value="Hello World"
      helper-text="Incorrect entry."
    ></mui-text-field>
    <mui-text-field
      :error="true"
      id="outlined-error-helper-text"
      label="Error"
      default-value="Hello World"
      helper-text="Incorrect entry."
      variant="outlined"
    ></mui-text-field>
    <mui-text-field
      :error="true"
      id="outlined-error-helper-text"
      label="Error"
      default-value="Hello World"
      helper-text="Incorrect entry."
      variant="filled"
    ></mui-text-field>
  </div>
</template>
```

```html
<mui-text-field
  :error="true"
  id="outlined-error-helper-text"
  label="Error"
  default-value="Hello World"
  helper-text="Incorrect entry."
></mui-text-field>
<mui-text-field
  :error="true"
  id="outlined-error-helper-text"
  label="Error"
  default-value="Hello World"
  helper-text="Incorrect entry."
  variant="outlined"
></mui-text-field>
<mui-text-field
  :error="true"
  id="outlined-error-helper-text"
  label="Error"
  default-value="Hello World"
  helper-text="Incorrect entry."
  variant="filled"
></mui-text-field>
```

## Multiline

```html render
<template hfz import:mui-text-field="dev" :data="{value: 'Controlled'}">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    "
  >
    <mui-text-field
      id="outlined-multiline-flexible"
      label="Multiline"
      :multiline="true"
      :max-rows="4"
      :value="value"
      @on-change="value=$event.target.value"
    ></mui-text-field>
    <mui-text-field
      id="outlined-textarea"
      label="Multiline Placeholder"
      placeholder="Placeholder"
      :multiline="true"
    ></mui-text-field>
    <mui-text-field
      id="outlined-multiline-static"
      label="Multiline"
      :multiline="true"
      :rows="4"
      default-value="Default Value"
    ></mui-text-field>
  </div>
</template>
```

```html
<template hfz import:mui-text-field="dev" :data="{value: 'Controlled'}">
  <mui-text-field
    id="outlined-multiline-flexible"
    label="Multiline"
    :multiline="true"
    :max-rows="4"
    :value="value"
    @on-change="value=$event.target.value"
  ></mui-text-field>
  <mui-text-field
    id="outlined-textarea"
    label="Multiline Placeholder"
    placeholder="Placeholder"
    :multiline="true"
  ></mui-text-field>
  <mui-text-field
    id="outlined-multiline-static"
    label="Multiline"
    :multiline="true"
    :rows="4"
    default-value="Default Value"
  ></mui-text-field>
</template>
```

## Size

Fancy smaller inputs? Use the `size` prop.

```html render
<template hfz import:mui-text-field="dev" :data="{}">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    "
  >
    <mui-text-field
      label="Size"
      id="standard-size-small"
      default-value="Small"
      size="small"
      variant="standard"
    ></mui-text-field>
    <mui-text-field
      label="Size"
      id="outlined-size-small"
      default-value="Small"
      size="small"
    ></mui-text-field>
    <mui-text-field
      label="Size"
      id="filled-size-small"
      default-value="Small"
      variant="filled"
      size="small"
    ></mui-text-field>
  </div>
</template>
```

```html
<mui-text-field
  label="Size"
  id="standard-size-small"
  default-value="Small"
  size="small"
  variant="standard"
></mui-text-field>
<mui-text-field
  label="Size"
  id="outlined-size-small"
  default-value="Small"
  size="small"
></mui-text-field>
<mui-text-field
  label="Size"
  id="filled-size-small"
  default-value="Small"
  variant="filled"
  size="small"
></mui-text-field>
```

The `filled` variant input height can be further reduced by rendering the label outside of it.

```html render
<template hfz import:mui-text-field="dev" :data="{}">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    "
  >
    <mui-text-field
      :hidden-label="true"
      id="filled-hidden-label-small"
      default-value="Small"
      variant="filled"
      size="small"
    ></mui-text-field>
    <mui-text-field
      :hidden-label="true"
      id="filled-hidden-label-normal"
      default-value="Normal"
      variant="filled"
    ></mui-text-field>
  </div>
</template>
```

```html
<mui-text-field
  :hidden-label="true"
  id="filled-hidden-label-small"
  default-value="Small"
  variant="filled"
  size="small"
></mui-text-field>
<mui-text-field
  :hidden-label="true"
  id="filled-hidden-label-normal"
  default-value="Normal"
  variant="filled"
></mui-text-field>
```

## Full width

`fullWidth` can be used to make the input take up the full width of its container.

```html render
<template hfz import:mui-text-field="dev" :data="{}">
  <div>
    <mui-text-field
      :full-width="true"
      label="fullWidth"
      id="fullWidth"
    ></mui-text-field>
  </div>
</template>
```

```html
<mui-text-field full-width label="fullWidth" id="fullWidth"></mui-text-field>
```

## Color

The `color` prop changes the highlight color of the text field when focused.

```html render
<template hfz import:mui-text-field="dev" :data="{}">
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    "
  >
    <mui-text-field
      label="Standard warning"
      variant="standard"
      color="warning"
      :focused="true"
    ></mui-text-field>
    <mui-text-field
      label="Outlined secondary"
      color="secondary"
      :focused="true"
    ></mui-text-field>
    <mui-text-field
      label="Filled success"
      variant="filled"
      color="success"
      :focused="true"
    ></mui-text-field>
  </div>
</template>
```

```html
<mui-text-field
  label="Standard warning"
  variant="standard"
  color="warning"
  :focused="true"
></mui-text-field>
<mui-text-field
  label="Outlined secondary"
  color="secondary"
  :focused="true"
></mui-text-field>
<mui-text-field
  label="Filled success"
  variant="filled"
  color="success"
  :focused="true"
></mui-text-field>
```
