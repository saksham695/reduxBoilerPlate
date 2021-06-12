import React from "react";
import { color } from "../../utils/theme/color";
import Text from "../SharedText/Text";

export default function EmptyCard() {
  return (
    <div>
      <Text
        text="Want more than 80 qualified leads each month?"
        customStyle={{ textAlign: "center", color: color.blue1, fontSize: 18 }}
      />
    </div>
  );
}
