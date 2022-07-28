import React from "react";
import Rating from "@mui/material/Rating/index.js";

export default function Component(props) {
  let onChange;
  if (props.onChange) {
    onChange = (event, value) => {
      props.onChange({ event, value });
    };
  }

  let onChangeActive;
  if (props.onChangeActive) {
    onChangeActive = (event, value) => {
      props.onChangeActive({ event, value });
    };
  }

  return (
    <Rating
      {...props}
      onChange={onChange}
      onChangeActive={onChangeActive}
    ></Rating>
  );
}
