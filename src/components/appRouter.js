import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from "./login-Page";
import SignUp from "./signup";
import Home from "./home"




export default function AppRouter() {

    return <div>
    
        <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route path='/signup' component={SignUp} />
            <Route path="/home" component={Home}/>
        </Switch>
        
    </div>
  
  }