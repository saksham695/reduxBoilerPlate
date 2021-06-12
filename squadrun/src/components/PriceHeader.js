import React from "react";
import PropTypes from "prop-types";

import Text from "./SharedText/Text";

import { color } from "../utils/theme/color";
import { SESSION_KEY } from "../utils/utilities";

import "./PriceHeaderStyle.css";

function PriceHeader({
  priceRange,
  planIndex,
  totalPlans,
  selectedRange,
  onPriceRangeSelected = () => {},
}) {
  const BORDER_RIGHT_WIDTH = planIndex === totalPlans - 1 ? 0 : "2px solid";
  const BACKGROUND_COLOR =
    planIndex === selectedRange ? color.blue1 : color.grey1;
  const BORDER_LEFT_RADIUS = planIndex === 0 ? 8 : 0;
  const BORDER_RIGHT_RADIUS = planIndex === totalPlans - 1 ? 8 : 0;
  const TEXT_COLOR = planIndex === selectedRange ? color.white : color.blue1;

  const onPriceRangeClicked = () => {
    onPriceRangeSelected(planIndex);
    sessionStorage.setItem(SESSION_KEY, `${planIndex}`);
  };

  console.log("Price Header");
  return (
    <div
      onClick={onPriceRangeClicked}
      className="individual-price-range"
      style={{
        backgroundColor: BACKGROUND_COLOR,
        borderTopLeftRadius: BORDER_LEFT_RADIUS,
        borderBottomLeftRadius: BORDER_LEFT_RADIUS,
        borderTopRightRadius: BORDER_RIGHT_RADIUS,
        borderBottomRightRadius: BORDER_RIGHT_RADIUS,
        backgroundColor: BACKGROUND_COLOR,
        borderRight: BORDER_RIGHT_WIDTH,
        borderColor: color.grey2,
      }}
    >
      <Text
        text={priceRange}
        customStyle={{
          textAlign: "center",
          color: TEXT_COLOR,
          fontWeight: "bold",
        }}
      />
    </div>
  );
}

PriceHeader.propTypes = {
  priceRange: PropTypes.string.isRequired,
  planIndex: PropTypes.number.isRequired,
  totalPlans: PropTypes.number.isRequired,
  selectedRange: PropTypes.number.isRequired,
  onPriceRangeSelected: PropTypes.func.isRequired,
};

export default React.memo(PriceHeader);
