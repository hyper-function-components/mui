interface HfcPropType {
  attrs: {
    id: HfcString;
    disabled: HfcBoolean;
    disableRipple: HfcBoolean;
    defaultValue: HfcString;
    autoComplete: HfcString;
    required: HfcBoolean;
    checked: HfcBoolean;
    value: HfcString;
    name: HfcString;
    size: HfcString;
    color: HfcString;
    label: HfcString;
    type: HfcString;
    variant: HfcString;
    inputProps: HfcAny;
    InputLabelProps: HfcAny;
    helperText: HfcString;
    error: HfcBoolean;
    multiline: HfcBoolean;
    maxRows: HfcInt;
    rows: HfcInt;
    hiddenLabel: HfcBoolean;
    fullWidth: HfcBoolean;
    focused: HfcBoolean;
  };
  events: {
    onChange: {};
  };
  slots: {};
}
