interface HfcPropType {
  attrs: {
    disabled: HfcBoolean;
    readOnly: HfcBoolean;
    value: HfcString;
    name: HfcString;
    size: HfcString;
    defaultValue: HfcInt;
    precision: HfcInt;
  };
  events: {
    onChange: {
      value: HfcInt;
    };
    onChangeActive: {
      value: HfcInt;
    };
  };
  slots: {};
}
