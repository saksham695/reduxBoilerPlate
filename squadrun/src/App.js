import React, { useState, useEffect, useCallback } from "react";

import PriceLabels from "./containers/PriceLabels/PriceLabels";

import "./App.css";

export default function App() {
  return (
    <div className="root-container">
      <PriceLabels />
    </div>
  );
}
