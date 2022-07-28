import React, { useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar/index.js";
import AvatarGroup from "@mui/material/AvatarGroup/index.js";

export default function Component(props) {
  const children = props.default ? (
    <props.default __props={{ style: { display: "contents" } }} />
  ) : null;

  const avatarRef = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    if (props.group) {
      props.default.render(groupRef.current);
    } else {
      const parent = avatarRef.current.parentNode;
      parent.replaceWith(parent.firstChild);
    }
  });

  if (props.group) {
    return (
      <AvatarGroup ref={groupRef} max={props.max} total={props.total}>
        {children}
      </AvatarGroup>
    );
  }

  const size = props.size || "40";
  const color = props.bgColor;

  props = Object.assign({}, props);
  delete props.bgColor;
  delete props.default;

  return (
    <Avatar
      ref={avatarRef}
      {...props}
      sx={{ bgcolor: color, height: size + "px", width: size + "px" }}
    >
      {children}
    </Avatar>
  );
}
