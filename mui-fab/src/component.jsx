import React from "react";
import Fab from "@mui/material/Fab/index.js";

export default function Component(props) {
  const children = props.default ? (
    <props.default __props={{ style: { display: "contents" } }} />
  ) : null;

  return (
    <Fab {...props} default={null}>
      {children}
    </Fab>
  );
}
