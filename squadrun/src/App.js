import React, { useState, useCallback } from "react";

import Modal from "./components/Modal/Modal";
import PackageDetails from "./containers/PackageDetails/PackageDetails";
import PriceLabels from "./containers/PriceLabels/PriceLabels";
import SelectOptions from "./containers/ButtonContainer/SelectOptions";

import { getPlanDetails, SESSION_KEY } from "./utils/utilities";
import { useStateValue } from "./store/StateProvider";

import "./App.css";

export default function App() {
  const [{ selectedPriceRange }] = useStateValue();
  const [openModal, setModalState] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const onButtonClicked = useCallback((selectedPlan) => {
    const savedPriceRange = sessionStorage.getItem(SESSION_KEY) || 2;
    const selectedPriceRangeDetails = getPlanDetails(
      selectedPriceRange || parseInt(savedPriceRange)
    );
    const selectedPlanDetails = selectedPriceRangeDetails[0][selectedPlan];
    console.log(selectedPlanDetails);
    setModalState(!openModal);
    setModalDetails(modalDetails);
  }, []);

  const toggleModal = () => {
    openModal && setModalState(false);
  };

  return (
    <div className="root-container">
      <PriceLabels />
      <div style={{ paddingTop: 50 }}>
        <PackageDetails />
      </div>
      <div className="button-container-style" style={{ marginTop: 20 }}>
        <SelectOptions onButtonClicked={onButtonClicked} />
      </div>
      <Modal open={openModal} onClose={toggleModal}>
        Fancy Modal
      </Modal>
    </div>
  );
}
