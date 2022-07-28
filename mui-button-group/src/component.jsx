import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup/index.js";

export default function MuiButtonGroup(props) {
  console.log("2321");
  return (
    <ButtonGroup variant="contained" orientation="horizontal">
      <props.default />
    </ButtonGroup>
  );
}
