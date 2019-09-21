import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function PartyCard(){
	return (
		<Link to='https://www.google.com'>
			<Card className="party-card">
				<img src="https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2054&q=80" alt="two women holding drinks" />
				<Card.Content>
					<Card.Header> White Girl Wasted</Card.Header>
					<Card.Meta> Ateending: 100 </Card.Meta>
			  		<Card.Description> Location: Mars </Card.Description>
				</Card.Content>
			</Card>
		</Link>
		)
}

export default PartyCard;