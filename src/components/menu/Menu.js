import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../styling/Menu.css'

const Menu = props => {

  var show = 'hide'

  if (props.show) {
    show = 'show'
  }

  return (
    <div id='flyout-menu' className={show} onMouseDown={props.handleMouseDown}>
      <h2><NavLink to="/" className="nav-item">Home</NavLink></h2>
      <h2><a href='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DFCL&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fdashboard&scope=activity%20heartrate%20profile%20sleep%20weight&expires_in=604800&prompt=login'>Login Into Fitbit</a></h2>
    </div>
  )
}

export default Menu
