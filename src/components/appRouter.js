import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from "./signIn";
import SignUp from "./signup";
import PartyList from './partyList';
import Tasks from './partyTasks';
import AddParty from './addParty';


export default function AppRouter() {

    return <div>
    
        <Switch>
            <Route exact path='/' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/parties' component={PartyList} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/add' component={AddParty} />
                     
                  
        </Switch>
        
    </div>
  
  }