import React from "react";

import Card from "../../components/Card/Card";
import EmptyCard from "../../components/Card/EmptyCard";
import TileComponent from "../../components/Tiles/TileComponent";

import { color } from "../../utils/theme/color";
import { getPlanDetails } from "../../utils/utilities";
import { useStateValue } from "../../store/StateProvider";

function PackageDetails() {
  const [{ selectedPriceRange }] = useStateValue();
  const selectedRangePlans = getPlanDetails(selectedPriceRange);

  const getTileComponent = (
    text = "",
    backgroundColor = color.blue1,
    textColor = "white"
  ) => {
    return (
      <TileComponent
        text={text}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  console.log("PackageDetails RENDER");
  return (
    <div className="price-card-container">
      {(selectedRangePlans[0] || []).map(
        ({ finalPrice, leadsPerMonth, platformFee, pricePerLead }, index) => {
          const cardHeader = !!leadsPerMonth
            ? `Qualified ${leadsPerMonth}`
            : "Enterprise";

          return (
            <div className="details-card-container" key={`${index}`}>
              {leadsPerMonth === 40
                ? getTileComponent("Most Popular!", color.red1)
                : getTileComponent("Empty Container", "white", "white")}
              {getTileComponent(cardHeader)}
              <div style={styles.detailsStyle}>
                {!!platformFee ? (
                  <Card
                    platformFee={platformFee}
                    leadsPerMonth={leadsPerMonth}
                    pricePerLead={pricePerLead}
                    cardItemIndex={index}
                    key={`${index}`}
                  />
                ) : (
                  <div className="empty-card-style">
                    <EmptyCard />
                  </div>
                )}
              </div>
              {finalPrice
                ? getTileComponent(`$${finalPrice}/mo`)
                : getTileComponent("Empty Container", color.grey1, color.grey1)}
            </div>
          );
        }
      )}
    </div>
  );
}

const styles = {
  detailsStyle: {
    minHeight: 220,
    display: "flex",
  },
};

export default React.memo(PackageDetails);
