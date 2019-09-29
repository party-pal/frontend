import React from 'react';
import './App.css';
import AppRouter from "./components/appRouter";
import Nav from './components/header'

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter/>

        {/* <SignUp /> */}     
    </div>
  );
}

export default App;