import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import NavBar from './components/NavBar'
import SignUpForm from './components/login/SignUpForm'
import LoginForm from './components/login/LoginForm'
import Home from './components/Home'
import SleepContainer from './components/SleepContainer'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

import '../node_modules/semantic-ui/dist/semantic.min.css'
import logo from './logo.svg'
import './App.css'

const BASE_URL = 'http://localhost:3000'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar /><br />
            <Profile />
            <Route
              exact path='/signup'
              render={(props) => <SignUpForm {...props} />} />
            <Route
              exact path='/login'
              render={(props) => <LoginForm {...props} />} />
            <Route
              exact path='/home'
              render={(props) => <Home {...props} />} />
            <Route
              exact path='/profile'
              render={(props) => <Dashboard {...props} />} />
            <Route
              exact path='/sleep_stats'
              render={(props) => <SleepContainer {...props} />} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
