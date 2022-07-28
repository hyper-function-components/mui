import React from "react";
import Button from "@mui/material/Button/index.js";

export default function Component(ps) {
  const children = ps.default ? <ps.default __tag="span" /> : null;

  return (
    <Button
      {...ps}
      startIcon={
        ps.startIcon ? (
          <ps.startIcon __props={{ style: { display: "contents" } }} />
        ) : null
      }
      endIcon={
        ps.endIcon ? (
          <ps.endIcon __props={{ style: { display: "contents" } }} />
        ) : null
      }
      default={null}
    >
      {children}
    </Button>
  );
}
