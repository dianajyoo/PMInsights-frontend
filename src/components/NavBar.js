import React from 'react'

import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {

  render() {
    return (
      <Menu id='navbar' >
        <Menu.Item name='home' >
          <NavLink to="/home" className="nav-item">Home</NavLink>
        </Menu.Item>

        <Menu.Item name='signup'>
          <NavLink to="/signup" className="nav-signup"><i class="user plus icon"></i></NavLink>
        </Menu.Item>

        <Menu.Item name='login' >
          <NavLink to="/login" className="nav-login"><i class="user icon"></i></NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}
