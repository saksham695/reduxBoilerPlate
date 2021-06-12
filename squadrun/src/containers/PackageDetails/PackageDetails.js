import React from "react";

import Card from "../../components/Card/Card";
import EmptyCard from "../../components/Card/EmptyCard";
import TileComponent from "../../components/Tiles/TileComponent";

import { color } from "../../utils/theme/color";
import {
  EMPTY_CONTAINER,
  getPlanDetails,
  MOST_POPULAR_PLAN,
  MOST_POPULAR_TEXT,
} from "../../utils/utilities";
import { useStateValue } from "../../store/StateProvider";

import "./PackageDetailsStyle.css";

function PackageDetails() {
  const [{ selectedPriceRange }] = useStateValue();
  const selectedRangePlans = getPlanDetails(selectedPriceRange);

  const getTileComponent = (
    text = "",
    backgroundColor = color.blue1,
    textColor = color.white
  ) => {
    return (
      <TileComponent
        text={text}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  const renderEmptyContainer = () => {
    return (
      <div className="empty-card-style">
        <EmptyCard />
      </div>
    );
  };

  return (
    <div className="price-card-container">
      {(selectedRangePlans[0] || []).map(
        ({ finalPrice, leadsPerMonth, platformFee, pricePerLead }, index) => {
          const cardHeader = !!leadsPerMonth
            ? `Qualified ${leadsPerMonth}`
            : "Enterprise";

          return (
            <div className="details-card-container" key={`${index}`}>
              {leadsPerMonth === MOST_POPULAR_PLAN
                ? getTileComponent(MOST_POPULAR_TEXT, color.red1)
                : getTileComponent(EMPTY_CONTAINER, color.white, color.white)}
              {getTileComponent(cardHeader)}
              <div className="cards-container" style={{ minHeight: 220 }}>
                {!!platformFee ? (
                  <Card
                    platformFee={platformFee}
                    leadsPerMonth={leadsPerMonth}
                    pricePerLead={pricePerLead}
                    cardItemIndex={index}
                    key={`${index}`}
                  />
                ) : (
                  renderEmptyContainer()
                )}
              </div>
              {finalPrice
                ? getTileComponent(`$${finalPrice}/mo`)
                : getTileComponent(EMPTY_CONTAINER, color.grey1, color.grey1)}
            </div>
          );
        }
      )}
    </div>
  );
}

export default React.memo(PackageDetails);
