import React from "react";

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
  const BORDER_RIGHT_WIDTH = planIndex === totalPlans - 1 ? 0 : "1px solid";
  const BACKGROUND_COLOR =
    planIndex === selectedRange ? color.blue1 : color.grey2;
  const BORDER_LEFT_RADIUS = planIndex === 0 ? 15 : 0;
  const BORDER_RIGHT_RADIUS = planIndex === totalPlans - 1 ? 15 : 0;
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
      }}
    >
      <div className="price-range-text-style" style={{ color: TEXT_COLOR }}>
        {priceRange}
      </div>
    </div>
  );
}

export default React.memo(PriceHeader);
