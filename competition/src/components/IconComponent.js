import React from "react";

export default function IconComponent({
  customStyle,
  iconName,
  onIconClicked = () => {},
}) {
  return (
    <i
      className="material-icons"
      style={customStyle}
      onClick={() => onIconClicked()}
    >
      {iconName}
    </i>
  );
}
