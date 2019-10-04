import React, { useState, useEffect } from 'react';
import PartyCard from './partyCard';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from '../utils/axiosWithAuth';
import { Container } from './styledWidgets';



function PartyList(){
	const [parties, setParties] = useState([])

	useEffect(() => {
		axios().get("/parties")
		.then((resp)=> console.log(resp))
		.catch((err)=> console.log(err))
	})

	return (

		<section className="party-list grid-view">
			<PartyCard />
			<PartyCard />
			<PartyCard />
			<PartyCard />
			<PartyCard />
			<PartyCard />
			<Link to='/add'>
				<Card className="party-card">
					<img class='addition' src='https://image.flaticon.com/icons/svg/32/32360.svg' alt='add sign'/>
					<Card.Content>
						<Card.Header> Add New Party </Card.Header>

					</Card.Content>
				</Card>
			</Link>
		</section>

		)
}


export default PartyList;