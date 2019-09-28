import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPage from "./userPage";
import Home from "./home"
import AddParty from "./addParty";
import Tasks from './partyTasks';




export default function AppRouter() {

    return <div>
   {/* <UserPage/> */}
        <div>
        <Switch>   
            
            <Route path="/parties/home" component={Home}/>
            <Route path="/parties/addparty" component={AddParty}/>
            <Route path='/parties/tasks' component={Tasks} />  
        </Switch>
        
        </div>
      
    </div>
  
  }