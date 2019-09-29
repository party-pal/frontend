import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddParty from "./addParty";
import Tasks from './partyTasks';
import ShowParty from './showParty';


export default function AppRouter() {

    return <div>

        <div>
        <Switch>   
            
            <Route path="/parties/home" component={ShowParty}/>
            <Route path="/parties/addparty" component={AddParty}/>
            <Route path='/parties/tasks' component={Tasks} />  
        </Switch>
        
        </div>
      
    </div>
  
  }