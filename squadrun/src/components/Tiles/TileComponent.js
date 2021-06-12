import React from "react";
import { color } from "../../utils/theme/color";

import Text from "../SharedText/Text";

export default function TileComponent({
  text = "",
  textColor = "white",
  backgroundColor = color.blue1,
}) {
  return (
    <div
      style={{
        flex: 1,
        marginLeft: "1%",
        marginRight: "1%",
        backgroundColor: backgroundColor,
        paddingTop: "2%",
        paddingBottom: "2%",
      }}
    >
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
