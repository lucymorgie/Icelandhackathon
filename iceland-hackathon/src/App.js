import "./App.css";
import React from "react";
import Deliveryoptions from "./components/Deliveryoptions";
import Scoretotals from "./components/Scoretotals";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="shopfront">
        <Deliveryoptions />
        <Scoretotals />
      </div>
    </div>
  );
}

export default App;
