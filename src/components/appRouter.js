import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from "./login-Page";
import SignUp from "./signup";
import Home from "./home"



export default function AppRouter() {

    return <div>
    
        <Switch>
            <Route exact path='/' render={(props)=>(<LoginPage {...props}/>)} />
            <Route path='/signup' render={(props)=>(<SignUp {...props}/>)} />
            <Route path="/home" component={Home}/>
        
        
        </Switch>
        
    </div>
  
  }