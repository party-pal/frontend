import React from 'react';
import './App.css';
import AppRouter from "./components/appRouter";
import AddParty from './components/addParty';

function App() {
  return (
    <div className="App">
      <AppRouter/>   
      {/* <AddParty/> */}
    </div>
  );
}

export default App;