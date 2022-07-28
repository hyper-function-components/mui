import React from "react";
import Radio from "@mui/material/Radio/index.js";

export default function Component(props) {
  let onChange;
  if (props.onChange) {
    onChange = (event, value) => {
      props.onChange({ event, value });
    };
  }

  return <Radio {...props} onChange={onChange}></Radio>;
}
