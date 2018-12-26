import React from 'react'
import Cards from './Cards'
import Profile from './Profile'

import '../styling/Dashboard.css'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Profile />
        <Cards />
        <div id='mountain'></div>
      </div>
    )
  }
}

export default Dashboard
