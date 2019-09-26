import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import GridExampleCelled from "./partyInfo"
import ButtonSizes from "./PartyEdit";


export default class Home extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
          
 <Menu secondary>
        <Menu.Item
          name='Party'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Venue'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Tasks'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      <GridExampleCelled/>
      <ButtonSizes/>
        </div>
     
    )
  }
}


