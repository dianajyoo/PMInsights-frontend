import React from 'react'
import Cards from './Cards'
import Profile from './Profile'
import Header from './Header'

import { Redirect, Route } from 'react-router-dom'

import '../styling/Dashboard.css'

class Dashboard extends React.Component {

  render() {
    let loggedIn = false

    if (window.location.search.includes("?") || localStorage.length === 3) {
      loggedIn = true
    }

    return (
      <Route
        render={props =>
      loggedIn ? (<div className='dashboard'>
        <Header />
        <Profile />
        <Cards />
      </div>) : (<Redirect to={ { pathname: '/', state: { from: props.location } }} />)} />
    )
  }
}

export default Dashboard
