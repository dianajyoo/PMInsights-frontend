import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SignUpForm from './components/forms/SignUpForm'
import LoginForm from './components/forms/LoginForm'
import SleepForm from './components/forms/SleepForm'
import Home from './components/Home'
import SleepContainer from './components/SleepContainer'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import NoMatch from './components/NoMatch'

import '../node_modules/semantic-ui/dist/semantic.min.css'
import logo from './logo.svg'
import './App.css'

const BASE_URL = 'http://localhost:3000'

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar /><br />
          <Profile />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/login' component={LoginForm} />
            <Route path='/sleep_form' component={SleepForm} />
            <Route
              path='/dashboard'
              render={(props) => <Dashboard {...props} />} />
            <Route
              path='/sleep_stats'
              render={(props) => <SleepContainer {...props} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
