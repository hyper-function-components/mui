interface HfcPropType {
  attrs: {
    /**
     * The variant to use.
     * @default 'text'
     */
    variant: HfcString;
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: HfcString;
    /**
     * If `true`, the button will take up the full width of its container.
     * @default 'false'
     */
    fullWidth: HfcBoolean;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: HfcBoolean;
    /**
     * If `true`, the ripple effect is disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
     * @default false
     */
    disableRipple: HfcBoolean;
    /**
     * If `true`, no elevation is used.
     * @default false
     */
    disableElevation: HfcBoolean;
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple: HfcBoolean;
    className: HfcString;
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/customization/palette/#adding-new-colors).
     */
    color: HfcString;
    /**
     * Override or extend the styles applied to the component.
     */
    classes: HfcAny;
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size: HfcString;
    /**
     * @ignore
     */
    type: HfcString;
  };
  events: {
    onClick: {};
  };
  slots: {
    default: {};
    startIcon: {};
    endIcon: {};
    icon: {};
  };
}
