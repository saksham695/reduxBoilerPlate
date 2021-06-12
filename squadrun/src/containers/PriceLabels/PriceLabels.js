import React, { useEffect, useCallback } from "react";

import PriceHeader from "../../components/PriceHeader";

import { ACTIONS } from "../../store/action";
import { useStateValue } from "../../store/StateProvider";
import { priceRangeHeaders, SESSION_KEY } from "../../utils/utilities";

const DEFAULT_SELECTED_RANGE = 2;

function PriceLabels() {
  const [{ selectedPriceRange }, dispatch] = useStateValue();

  useEffect(() => {
    const selectedPriceRange = sessionStorage.getItem(SESSION_KEY);
    dispatch({
      type: ACTIONS.SET_PRICE_RANGE,
      payload: parseInt(selectedPriceRange || DEFAULT_SELECTED_RANGE),
    });
  }, []);

  const onPriceRangeChanged = useCallback(
    (priceRangeIndex) => {
      dispatch({
        type: ACTIONS.SET_PRICE_RANGE,
        payload: priceRangeIndex,
      });
    },
    [selectedPriceRange]
  );

  return (
    <div className="price-range-container">
      {priceRangeHeaders.map(({ priceRange, planIndex }, index) => {
        return (
          <PriceHeader
            priceRange={priceRange}
            planIndex={planIndex}
            totalPlans={priceRangeHeaders.length}
            selectedRange={selectedPriceRange}
            onPriceRangeSelected={onPriceRangeChanged}
            key={`${index}`}
          />
        );
      })}
    </div>
  );
}

export default React.memo(PriceLabels);
