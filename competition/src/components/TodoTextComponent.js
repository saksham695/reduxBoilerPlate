import React from "react";

export default function TodoTextComponent({ text = "", customStyle = {} }) {
  return <div style={customStyle}>{text}</div>;
}
