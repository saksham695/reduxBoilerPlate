import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/Button/Button";

import { buttonTitles } from "../../utils/utilities";

function SelectOptions({ onButtonClicked }) {
  return buttonTitles.map(({ name }, index) => (
    <Button
      title={name}
      onButtonClicked={onButtonClicked}
      index={index}
      key={`${index}`}
    />
  ));
}

SelectOptions.propTypes = {
  onButtonClicked: PropTypes.func.isRequired,
};

export default React.memo(SelectOptions);
