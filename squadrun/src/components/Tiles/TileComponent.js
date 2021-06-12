import React from "react";
import PropTypes from "prop-types";

import Text from "../SharedText/Text";
import { color } from "../../utils/theme/color";

import "./TileStyle.css";

function TileComponent({
  text = "",
  textColor = "white",
  backgroundColor = color.blue1,
}) {
  return (
    <div style={{ backgroundColor }} className="tile-container">
      <Text
        text={text}
        customStyle={{
          color: textColor,
          textAlign: "center",
          fontWeight: "bold",
        }}
      />
    </div>
  );
}

PropTypes.TileComponent = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default React.memo(TileComponent);
