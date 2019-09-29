import React ,{useState,useEffect} from 'react'
import axios from '../utils/axiosWithAuth'

import {Miv} from "./styledWidgets"



export default function ShowParty(props) {
  const [parties, setParties]= useState([])

  useEffect(()=>{
    if(props.match.params.id){
 
      axios()
      .get(`/parties/home`)
      .then(response => {
        setParties(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  
  }
  else {

    axios()
      .get(`/parties`)
      .then(response => {
        setParties(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
}, [props]);
   
 



    return (
      <section>
<h3><br/>List of parties</h3>
      
        <div>

          {parties.map((party, index)=>{
            return (
              <Miv key={index}>
               <br/>
               <h4>Name:<br/> {party.partytitle}</h4> 
               <h4>Date:<br/> {party.date}</h4> 
               <h4>Party Theme: <br/>{party.theme}</h4>
               <h4>Venue Title:<br/>{party.venuetitle}</h4>
               <h4>Number of Guests:<br/>{party.guestCount}</h4> 
               

              </Miv>
            )
          })}
 
        </div>
        </section>
    )
    }