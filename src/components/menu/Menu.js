import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from 'semantic-ui-react'
import '../../styling/Menu.css'

const Menu = (props) => {

  var show = 'hide'

  if (props.show) {
    show = 'show'
  }

  return (
    <div id='flyout-menu' className={show} onMouseDown={props.handleMouseDown}>
      <div id='grid-user'><a href='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DFCL&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fdashboard&scope=activity%20heartrate%20profile%20sleep%20weight&expires_in=604800&prompt=login'><Button id='user' circular icon='user outline icon' size='huge'/></a></div>
      <div id='grid-chart'><NavLink to="/sleep_stats" className="nav-item"><Button id='chart' circular icon='chart bar outline icon' size='huge'/></NavLink></div>
    </div>
  )
}

export default Menu
