import React from "react";

import TodoTextComponent from "./TodoTextComponent";

export default function HashTagTextComponent({ text }) {
  return (
    <div style={styles.containerStyle}>
      <TodoTextComponent text={text} customStyle={styles.textStyle} />
    </div>
  );
}

const styles = {
  containerStyle: {
    backgroundColor: "rgb(238,234,250)",
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 4,
    marginTop: 4,
  },

  textStyle: {
    color: "rgb(139,109,221)",
  },
};
