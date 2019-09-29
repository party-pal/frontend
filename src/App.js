import React from 'react';
import './App.css';
import AppRouter from "./components/appRouter";
import { Route } from 'react-router-dom';
import LoginPage from "./components/login-Page";
import SignUp from "./components/signup";
import userPage from "./components/userPage";


function App() {
  return (
    <div className="App">
      <h1>Party planner</h1>
    
      <Route exact path='/' component={LoginPage} />
      <Route path='/parties' component={userPage} />
      <Route  exact path='/signup' component={SignUp} />
      <AppRouter/>
     
    </div>
  );
}

export default App;