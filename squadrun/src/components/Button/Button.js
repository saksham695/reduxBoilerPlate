import React from "react";

function Button({ title, onButtonClicked, index }) {
  console.log("BUTTON RENDER");

  return (
    <>
      <button
        className="plan-select-btn"
        onClick={() => onButtonClicked(index)}
      >
        {title}
      </button>
    </>
  );
}

export default React.memo(Button);
