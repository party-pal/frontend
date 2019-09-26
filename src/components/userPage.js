import React from "react"
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const HOME = createLabel("user", " Your Parties  ")
const AddParty = createLabel("add square", " Add Party ")
const Tasks = createLabel("tasks", "Tasks")

const panes = [
	{ menuItem: <Menu.Item key='home' as={Nav} to={`/parties/home`} content={HOME} /> },
	{ menuItem: <Menu.Item key='characters' as={Nav} to={`/parties/addparty`} content={AddParty} /> },
	{ menuItem: <Menu.Item key='location' as={Nav} to={`/parties/tasks`} content={Tasks} /> }
	
]

const UserPage =()=> <Tab panes={panes} renderActiveOnly={false} />
export default UserPage;