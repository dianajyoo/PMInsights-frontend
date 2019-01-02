import React from 'react'
import Cards from './Cards'
import Profile from './Profile'
import Header from './Header'

import '../styling/Dashboard.css'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Header />
        <Profile />
        <Cards />
      </div>
    )
  }
}

export default Dashboard
