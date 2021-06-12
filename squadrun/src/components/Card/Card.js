import React from "react";
import { color } from "../../utils/theme/color";
import Text from "../SharedText/Text";
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

  const BACKGROUND_COLOR = cardItemIndex % 2 === 0 ? color.grey1 : "white";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
      }}
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
            <div
              style={{ paddingLeft: "10%", paddingRight: "10%" }}
              key={`${index}`}
            >
              <div
                style={{
                  borderBottom: BORDER_BOTTOM,
                  borderColor: color.grey2,
                  paddingTop: "10%",
                  paddingBottom: "10%",
                }}
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
