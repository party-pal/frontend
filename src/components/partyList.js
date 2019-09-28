import React, { useState, useEffect } from 'react';
import PartyCard from './partyCard';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function PartyList(){
	const [parties, setParties] = useState([])

	useEffect(() => {
		axios.get("https://party-pal.herokuapp.com/api/parties", {'headers': {'Authorization': "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjUzLCJpYXQiOjE1Njk2MzE2NDV9.ZTEI4-5lLDO0-5WVc40ihPAuGeTAZ5nUSrJ8o2PemH4"}})
		.then((resp)=> console.log(resp))
		.catch((err)=> console.log(err))
	})

	return (
		<section className="party-list grid-view">
			<PartyCard />
			<PartyCard />
			<PartyCard />
			<Link to='./signup'>
				<Card className="party-card">
					<img src='https://image.flaticon.com/icons/svg/32/32360.svg' alt='add sign'/>
					<Card.Content>
						<Card.Header> Add New Party </Card.Header>

					</Card.Content>
				</Card>
			</Link>
		</section>
		)
}


export default PartyList;