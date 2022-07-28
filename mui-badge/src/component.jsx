import React from "react";
import Badge from "@mui/material/Badge/index.js";

export default function Component(props) {
  const horizontal = props.horizontal || "right";
  const vertical = props.vertical || "top";

  const children = props.default ? <props.default /> : null;
  return (
    <Badge
      {...props}
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      default={null}
    >
      {children}
    </Badge>
  );
}
