interface HfcPropType {
  attrs: {
    id: HfcString;
    disabled: HfcBoolean;
    disableRipple: HfcBoolean;
    required: HfcBoolean;
    checked: HfcBoolean;
    value: HfcString;
    name: HfcString;
    size: HfcString;
    color: HfcString;
    inputProps: HfcAny;
  };
  events: {
    onChange: {};
  };
  slots: {};
}
