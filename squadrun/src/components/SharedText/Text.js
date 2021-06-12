import React from "react";

export default function Text({ text, customStyle = {} }) {
  const overrideStyle = customStyle ? customStyle : { color: "black" };
  return <div style={overrideStyle}>{text}</div>;
}
