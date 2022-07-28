interface HfcPropType {
  attrs: {
    id: HfcString;
    disabled: HfcBoolean;
    disableSwap: HfcBoolean;
    value: HfcString;
    name: HfcString;
    size: HfcString;
    color: HfcString;
    defaultValue: HfcInt;
    precision: HfcInt;
    valueLabelDisplay: HfcString;
    step: HfcInt;
    min: HfcInt;
    max: HfcInt;
    marks: HfcBoolean;
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
