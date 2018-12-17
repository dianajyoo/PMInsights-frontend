import React from 'react'

import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {

  render() {
    return (
      <Menu id='navbar' >
        <Menu.Item name='home' >
          <NavLink to="/" className="nav-item">Home</NavLink>
        </Menu.Item>

        <Menu.Item name='signup'>

          <a href='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DFCL&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&scope=activity%20heartrate%20profile%20sleep%20weight&expires_in=604800&prompt=login'>SIGN IN</a>
        </Menu.Item>

        <Menu.Item name='login' >
          <NavLink to="/login" className="nav-login"><i class="user icon"></i></NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}
