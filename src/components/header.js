import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab, Menu, Icon } from 'semantic-ui-react'



const Header = props => (
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
	{ menuItem: <Menu.Item key='home' as={Header} to={`/parties/`} content={HOME} /> },
	{ menuItem: <Menu.Item key='characters' as={Header} to={`/add`} content={AddParty} /> },
	{ menuItem: <Menu.Item key='location' as={Header} to={`/tasks`} content={Tasks} /> }
	
]

const Nav =()=> <Tab panes={panes} renderActiveOnly={false} />

export default Nav;