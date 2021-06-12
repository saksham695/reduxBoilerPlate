import React from "react";
import PropTypes from "prop-types";

import { color } from "../../utils/theme/color";
import Text from "../SharedText/Text";

import "./Card.css";

export default function Card({
  platformFee,
  leadsPerMonth,
  pricePerLead,
  cardItemIndex,
}) {
  const details = [
    {
      text: `$${pricePerLead}`,
      description: "Per Qualified lead",
      customTextStyle: styles.largeTextStyle,
      customDescriptionStyle: styles.smallTextStyle,
    },
    {
      text: `Qualified Leads Per Month`,
      description: leadsPerMonth,
      customTextStyle: styles.smallTextStyle,
      customDescriptionStyle: styles.priceTextStyle,
    },
    {
      text: `Platform Fee Per Month`,
      description: `$${platformFee}`,
      customTextStyle: styles.smallTextStyle,
      customDescriptionStyle: styles.priceTextStyle,
    },
  ];

  const BACKGROUND_COLOR = cardItemIndex % 2 === 0 ? color.grey1 : color.white; // even container background color will be grey and odd will be white

  return (
    <div
      style={{ backgroundColor: BACKGROUND_COLOR }}
      className="card-details-container"
    >
      {details.map(
        (
          {
            text = "",
            description = "",
            customTextStyle,
            customDescriptionStyle,
          },
          index
        ) => {
          const BORDER_BOTTOM = details.length - 1 === index ? 0 : "1px dashed";
          const bottomTextStyle = {
            ...customDescriptionStyle,
            ...styles.descriptionTextStyle,
          };
          return (
            <div className="plan-description-container" key={`${index}`}>
              <div
                className="plan-description-style"
                style={{ borderBottom: BORDER_BOTTOM }}
              >
                <Text text={text} customStyle={customTextStyle} />
                <Text text={description} customStyle={bottomTextStyle} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

Card.propTypes = {
  platformFee: PropTypes.number.isRequired,
  leadsPerMonth: PropTypes.number.isRequired,
  pricePerLead: PropTypes.number.isRequired,
  cardItemIndex: PropTypes.number.isRequired,
};

const styles = {
  smallTextStyle: {
    color: color.blue1,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 10,
  },
  priceTextStyle: {
    color: color.blue1,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },
  largeTextStyle: {
    color: color.blue1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
  },
  descriptionTextStyle: {
    marginTop: 5,
  },
};
