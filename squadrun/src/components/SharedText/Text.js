import React from "react";

function Text({ text, customStyle = {} }) {
  const overrideStyle = customStyle ? customStyle : { color: "black" };
  return <div style={overrideStyle}>{text}</div>;
}
export default React.memo(Text);
