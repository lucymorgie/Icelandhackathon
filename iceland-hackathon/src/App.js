import "./App.css";
import React from "react";
import Deliveryoptions from "./components/Deliveryoptions";
import Scoretotals from "./components/Scoretotals";
import Header from './components/Header/header';
import Mission from './components/Mission/mission';
import ProductTile from './components/ProductTile/ProductTile';

function App() {
  return (
    <div className="App">
      <Header />
     <Mission/>
     <ProductTile/>
     <div className="shopfront">
        <Deliveryoptions />
        <Scoretotals />
      </div>
    </div>
    
  );
}

export default App;
