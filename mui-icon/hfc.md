# mui-icon

Material UI Icons with HFC.

find name at https://fonts.google.com/icons and set the `name` prop

## Basic

```html render
<template hfz import:mui-icon="dev">
  <div style="display: flex; gap: 16px;">
    <mui-icon name="search"></mui-icon>
    <mui-icon name="home"></mui-icon>
    <mui-icon name="account_circle"></mui-icon>
    <mui-icon name="settings"></mui-icon>
    <mui-icon name="done"></mui-icon>
  </div>
</template>
```

```html
<mui-icon name="search"></mui-icon>
<mui-icon name="home"></mui-icon>
<mui-icon name="account_circle"></mui-icon>
<mui-icon name="settings"></mui-icon>
<mui-icon name="done"></mui-icon>
```

## Color

```html render
<template hfz import:mui-icon="dev">
  <div style="display: flex; gap: 16px;">
    <mui-icon name="search" color="red"></mui-icon>
    <mui-icon name="home" color="pink"></mui-icon>
    <mui-icon name="account_circle" color="#9c27b0"></mui-icon>
    <mui-icon name="settings" color="rgb(46, 125, 50)"></mui-icon>
    <mui-icon name="done"></mui-icon>
  </div>
</template>
```

```html
<mui-icon name="search" color="red"></mui-icon>
<mui-icon name="home" color="pink"></mui-icon>
<mui-icon name="account_circle" color="#9c27b0"></mui-icon>
<mui-icon name="settings" color="rgb(46, 125, 50)"></mui-icon>
<mui-icon name="done"></mui-icon>
```

## Size

```html render
<template hfz import:mui-icon="dev">
  <div style="display: flex; gap: 16px;">
    <mui-icon name="home" size="16"></mui-icon>
    <mui-icon name="home" size="24"></mui-icon>
    <mui-icon name="home" size="32"></mui-icon>
    <mui-icon name="home" size="40"></mui-icon>
    <mui-icon name="home" size="48"></mui-icon>
  </div>
</template>
```

```html
<mui-icon name="home" size="16"></mui-icon>
<mui-icon name="home" size="24"></mui-icon>
<mui-icon name="home" size="32"></mui-icon>
<mui-icon name="home" size="40"></mui-icon>
<mui-icon name="home" size="48"></mui-icon>
```

## Style

```html render
<template hfz import:mui-icon="dev">
  <div style="display: flex; gap: 16px;">
    <mui-icon name="home" icon-style="outlined"></mui-icon>
    <mui-icon name="home" icon-style="filled"></mui-icon>
    <mui-icon name="home" icon-style="round"></mui-icon>
    <mui-icon name="home" icon-style="sharp"></mui-icon>
    <mui-icon name="home" icon-style="two-tone"></mui-icon>
  </div>
</template>
```

```html
<mui-icon name="home" icon-style="outlined"></mui-icon>
<mui-icon name="home" icon-style="filled"></mui-icon>
<mui-icon name="home" icon-style="round"></mui-icon>
<mui-icon name="home" icon-style="sharp"></mui-icon>
<mui-icon name="home" icon-style="two-tone"></mui-icon>
```

## Host

default host is `https://unpkg.com/@material-design-icons/svg/`

you can change `host` prop

```html render
<template hfz import:mui-icon="dev">
  <div style="display: flex; gap: 16px;">
    <mui-icon name="home"></mui-icon>
  </div>
</template>
```

```html
<mui-icon
  name="home"
  host="https://unpkg.com/@material-design-icons/svg/"
></mui-icon>
```
