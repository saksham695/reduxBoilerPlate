import React, { useState, useCallback } from "react";

import PriceLabels from "./containers/PriceLabels/PriceLabels";
import PackageDetails from "./containers/PackageDetails/PackageDetails";

import "./App.css";
import Button from "./components/Button/Button";
import { buttonTitles, getPlanDetails, SESSION_KEY } from "./utils/utilities";
import { useStateValue } from "./store/StateProvider";

export default function App() {
  const [{ selectedPriceRange }, dispatch] = useStateValue();
  const [openModal, setModalState] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const onButtonClicked = useCallback(
    (selectedPlan) => {
      const savedPriceRange = sessionStorage.getItem(SESSION_KEY);
      const selectedPriceRangeDetails = getPlanDetails(
        selectedPriceRange || parseInt(savedPriceRange)
      );
      const selectedPlanDetails = selectedPriceRangeDetails[0][selectedPlan];
      console.log(selectedPlanDetails);
      setModalState(!openModal);
      setModalDetails(modalDetails);
    },
    [openModal]
  );

  console.log("APP RENDER");
  return (
    <div className="root-container">
      <PriceLabels />
      <div style={{ paddingTop: 50 }}>
        <PackageDetails />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <PlanButtons onButtonClicked={onButtonClicked} />
      </div>
    </div>
  );
}

const PlanButtons = React.memo(({ onButtonClicked }) => {
  return buttonTitles.map(({ name }, index) => (
    <Button
      title={name}
      onButtonClicked={onButtonClicked}
      index={index}
      key={`${index}`}
    />
  ));
});
