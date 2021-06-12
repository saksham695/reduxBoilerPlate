import React from "react";
import PropTypes from "prop-types";

function Button({ title, onButtonClicked, index }) {
  const MARGIN_LEFT = !index ? 1 : 5;
  return (
    <>
      <button
        className="plan-select-btn"
        onClick={() => onButtonClicked(index)}
        style={{ marginLeft: MARGIN_LEFT }}
      >
        {title}
      </button>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};

export default React.memo(Button);
