import React from "react";
import Slider from "@mui/material/Slider/index.js";

export default function Component(props) {
  let onChange;
  if (props.onChange) {
    onChange = (event, value) => {
      props.onChange({ event, value });
    };
  }

  return <Slider {...props} onChange={onChange}></Slider>;
}
