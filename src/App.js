import React from 'react';
import './App.css';
<<<<<<< HEAD
import SignUp from './components/signup'
import SignIn from './components/signIn'
import PartyList from './components/partyList';
=======
import AppRouter from "./components/appRouter";
>>>>>>> cd94738070a37c9a711720ac73ea14da9fc595b3

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        <PartyList />

        <SignUp />
        <SignIn/>




=======
      <AppRouter/>
        {/* <SignUp /> */}     
>>>>>>> cd94738070a37c9a711720ac73ea14da9fc595b3
    </div>
  );
}

export default App;