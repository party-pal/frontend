import React from 'react';
import PartyCard from './partyCard';

function PartyList(){
	return (
		<section className="party-list grid-view">
			<PartyCard />
			<PartyCard />
			<PartyCard />
			<PartyCard />
		</section>
		)
}


export default PartyList;