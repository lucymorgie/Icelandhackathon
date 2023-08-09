import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Mission from './components/Mission/mission';
import ProductTile from './components/ProductTile/ProductTile';

function App() {
  return (
    <div className="App">
     {/* <Deliveryoptions/> */}
     {/* <Scoretotals/> */}
     <Header/>
     <Mission/>
     <ProductTile/>

    </div>
  );
}

export default App;
