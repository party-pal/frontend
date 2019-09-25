import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from "./login-Page";
import SignUp from "./signup";
import PartyList from './partyList';
import Tasks from './partyTasks'

export default function AppRouter() {

    return <div>
    
        <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/parties' component={PartyList} />
            <Route path='/tasks/:id' component={Tasks} />


            
        
        </Switch>
        
    </div>
  
  }