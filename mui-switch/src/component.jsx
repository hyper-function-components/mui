import React from "react";
import Switch from "@mui/material/Switch/index.js";

export default function Component(props) {
  let onChange;
  if (props.onChange) {
    onChange = (event, value) => {
      props.onChange({ event, value });
    };
  }

  return <Switch {...props} onChange={onChange}></Switch>;
}
