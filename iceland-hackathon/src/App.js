import "./App.css";
import React, { useState } from "react";
import Deliveryoptions from "./components/Deliveryoptions";
import Scoretotals from "./components/Scoretotals";
import Header from "./components/Header";

function App() {
const [scoretotals, setScoretotals] = useState(0);
const [deliveryscore, setdeliveryscore] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="shopfront">
        <Deliveryoptions deliveryscore={deliveryscore} setdeliveryscore={setdeliveryscore}/>
        <Scoretotals scoretotals={scoretotals} deliveryscore={deliveryscore}/>
      </div>
    </div>
  );
}

export default App;
