import React from 'react';
import './App.css';
import AppRouter from "./components/appRouter";
import AddParty from './components/addParty';

// import ShowParty from './components/showParty';
// import ShoppingCart from "./components/shoppingCart";

function App() {
  return (
    <div className="App">
      {/* <AppRouter/>    */}
      <AddParty/>
      {/* <ShowParty/> */}
      {/* <ShoppingCart/> */}
    </div>
  );
}

export default App;