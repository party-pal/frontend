import React from 'react';
import './App.css';
import SignUp from './components/signup'
import SignIn from './components/signIn'
import PartyList from './components/partyList';

function App() {
  return (
    <div className="App">
        <PartyList />

        <SignUp />
        <SignIn/>




    </div>
  );
}

export default App;