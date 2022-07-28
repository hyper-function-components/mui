# mui-button

Buttons allow users to take actions, and make choices, with a single tap.

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Modal windows
- Forms
- Cards
- Toolbars

## Basic button

The `Button` comes with three variants: text (default), contained, and outlined.

```html render
<template hfz import:mui-button="dev">
  <div
    style="
      display: flex;
      justify-content: center;
      gap: 32px;
      margin: 0 auto;
    "
  >
    <mui-button variant="text">Text</mui-button>
    <mui-button variant="contained"> Contained </mui-button>
    <mui-button variant="outlined">Outlined</mui-button>
  </div>
</template>
```

```html
<mui-button variant="text">Text</mui-button>
<mui-button variant="contained">Contained</mui-button>
<mui-button variant="outlined">Outlined</mui-button>
```

## Text button

[Text buttons](https://material.io/components/buttons#text-button) are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.

```html render
<template hfz import:mui-button="dev">
  <div
    style="
      display: flex;
      justify-content: center;
      gap: 32px;
      margin: 0 auto;
    "
  >
    <mui-button>Primary</mui-button>
    <mui-button disabled>Disabled</mui-button>
    <mui-button href="#text-buttons">Link</mui-button>
  </div>
</template>
```

```html
<mui-button>Primary</mui-button>
<mui-button disabled>Disabled</mui-button>
<mui-button href="#text-buttons">Link</mui-button>
```

## Contained button

[Contained buttons](https://material.io/components/buttons#contained-button)
are high-emphasis, distinguished by their use of elevation and fill.
They contain actions that are primary to your app.

```html render
<template hfz import:mui-button="dev">
  <div
    style="
      display: flex;
      justify-content: center;
      gap: 32px;
      margin: 0 auto;
    "
  >
    <mui-button variant="contained">Contained</mui-button>
    <mui-button variant="contained" disabled> Disabled</mui-button>
    <mui-button variant="contained" href="#contained-buttons"> Link</mui-button>
  </div>
</template>
```

```html
<mui-button variant="contained">Contained</mui-button>
<mui-button variant="contained" disabled>Disabled</mui-button>
<mui-button variant="contained" href="#contained-buttons">Link</mui-button>
```

You can remove the elevation with the `disable-elevation` attr.

```html render
<template hfz import:mui-button="dev">
  <div
    style="
      display: flex;
      justify-content: center;
    "
  >
    <mui-button variant="contained" disable-elevation>
      Disable elevation
    </mui-button>
  </div>
</template>
```

```html
<mui-button variant="contained" disable-elevation>
  Disable elevation
</mui-button>
```

## Outlined button

[Outlined buttons](https://material.io/components/buttons#outlined-button) are medium-emphasis buttons.
They contain actions that are important but aren't the primary action in an app.

Outlined buttons are also a lower emphasis alternative to contained buttons,
or a higher emphasis alternative to text buttons.

```html render
<template hfz import:mui-button="dev">
  <div
    style="
      display: flex;
      justify-content: center;
      gap: 32px;
      margin: 0 auto;
    "
  >
    <mui-button variant="outlined">Primary</mui-button>
    <mui-button variant="outlined" disabled>Disabled</mui-button>
    <mui-button variant="outlined" href="#text-buttons">Link</mui-button>
  </div>
</template>
```

```html
<mui-button variant="outlined">Primary</mui-button>
<mui-button variant="outlined" disabled>Disabled</mui-button>
<mui-button variant="outlined" href="#text-buttons">Link</mui-button>
```

## Handling clicks

All components accept an @on-click handler that is applied to the root DOM element.

```html render
<template hfz import:mui-button="dev">
  <div
    style="
      display: flex;
      justify-content: center;
    "
  >
    <mui-button @on-click="doSomeThing"> Click me </mui-button>
  </div>
</template>
```

```html
<mui-button @on-click="doSomeThing"> Click me </mui-button>
```

## Color

```html render
<template hfz import:mui-button="dev">
  <div
    style="
      display: flex;
      justify-content: center;
      gap: 32px;
      margin: 0 auto;
    "
  >
    <mui-button color="secondary">Secondary</mui-button>
    <mui-button variant="contained" color="success"> Success</mui-button>
    <mui-button variant="outlined" color="error"> Error</mui-button>
  </div>
</template>
```

## Sizes

For larger or smaller buttons, use the `size` attr.

```html render
<template hfz import:mui-button="dev">
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      margin: 0 auto;
    "
  >
    <mui-button size="small">Small</mui-button>
    <mui-button size="medium">Medium</mui-button>
    <mui-button size="large">Large</mui-button>
  </div>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      margin: 12px auto;
    "
  >
    <mui-button variant="outlined" size="small">Small</mui-button>
    <mui-button variant="outlined" size="medium">Medium</mui-button>
    <mui-button variant="outlined" size="large">Large</mui-button>
  </div>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      margin: 0 auto;
    "
  >
    <mui-button variant="contained" size="small">Small</mui-button>
    <mui-button variant="contained" size="medium">Medium</mui-button>
    <mui-button variant="contained" size="large">Large</mui-button>
  </div>
</template>
```

## Buttons with icons and label

Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.

```html render
<template hfz import:mui-button="dev" import:mui-icon="1.1.0">
  <div
    style="
      display: flex;
      justify-content: center;
      gap: 32px;
      margin: 0 auto;
    "
  >
    <mui-button variant="outlined">
      Delete
      <template #start-icon>
        <mui-icon name="delete" color="rgb(25, 118, 210)"></mui-icon>
      </template>
    </mui-button>
    <mui-button variant="contained">
      Send
      <template #end-icon>
        <mui-icon
          name="send"
          icon-style="round"
          color="#FFF"
        ></mui-icon> </template
    ></mui-button>
  </div>
</template>
```

```html
<mui-button variant="outlined">
  Delete
  <template #start-icon>
    <mui-icon name="delete" color="rgb(25, 118, 210)"></mui-icon>
  </template>
</mui-button>
<mui-button variant="contained">
  Send
  <template #end-icon>
    <mui-icon name="send" icon-style="round" color="#FFF"></mui-icon>
  </template>
</mui-button>
```
