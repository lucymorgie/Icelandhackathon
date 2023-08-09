import "./App.css";
import React, { useState } from "react";
import Deliveryoptions from "./components/Deliveryoptions";
import Scoretotals from "./components/Scoretotals";
import Header from "./components/Header/header";
import Mission from "./components/Mission/mission";
import ProductTile from "./components/ProductTile/ProductTile";

function App() {
  const [scoretotals, setScoretotals] = useState(0);
  const [deliveryscore, setdeliveryscore] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="shopfront"></div>
      <Mission />
      <ProductTile setScoretotals={setScoretotals} scoretotals={scoretotals} />
      <div className="stickyfooter">
      <div className="deliveryoptions">
      <Deliveryoptions
        deliveryscore={deliveryscore}
        setdeliveryscore={setdeliveryscore}
      />
      </div>
      <div className="score">
        <Scoretotals scoretotals={scoretotals} deliveryscore={deliveryscore} />
        </div>
      </div>
    </div>
  );
}

export default App;
