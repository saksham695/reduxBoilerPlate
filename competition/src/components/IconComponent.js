import React from "react";

export default function IconComponent({ customStyle, iconName }) {
  return (
    <i className="material-icons" style={customStyle}>
      {iconName}
    </i>
  );
}
