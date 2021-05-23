import React from "react";
import HashTagTextComponent from "./HashTagTextComponent";

export default function TodoTextComponent({ text = "", customStyle = {} }) {
  return (
    <div style={customStyle}>
      {text}
      {/* {modifiedText.map((text) => {
        text.includes("#") ? text : <HashTagTextComponent text={text} />;
      })} */}
    </div>
  );
}
