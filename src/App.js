import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUserData } from './actionCreators/userActions'

import NavBar from './components/NavBar'
import MenuContainer from './components/menu/MenuContainer'
import Home from './components/Home'
import SignUpForm from './components/forms/SignUpForm'
import LoginForm from './components/forms/LoginForm'
import SleepForm from './components/forms/SleepForm'
import SleepContainer from './components/SleepContainer'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import GoalContainer from './components/GoalContainer'
import NoMatch from './components/NoMatch'

import '../node_modules/semantic-ui/dist/semantic.min.css'
import logo from './logo.svg'
import './App.css'


class App extends Component {

  componentDidMount() {

    let access_token
    let user_id

    // grab hash of current url
    const current_hash = window.location.hash

    // grab access token from url
    if (current_hash.includes('token') && current_hash.includes('user_id')) {
      access_token = current_hash.split('&')[0].split('=')[1]
      user_id = current_hash.split('&')[1].split('=')[1]
    }

    console.log(access_token)
    // debugger
    this.props.fetchData('https://api.fitbit.com/1/user/-/profile.json', access_token)

    if (access_token) {
      this.props.storeToken(access_token)
    }
  }

  render() {
    console.log(this.props.token)
    return (
      <Router>
        <div className='App'>
        <span className='overlay'></span>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/login' component={LoginForm} />
            <Route path='/add_goal' component={SleepForm} />
            <Route
              exact path='/my_goals'
              render={(props) => <GoalContainer {...props} />} />
            <Route
              path='/dashboard'
              render={(props) => <Dashboard {...props} />} />
            <Route
              path='/sleep_stats'
              render={(props) => <SleepContainer {...props} />} />
            <Route
              exact path='/my_goals/edit/:goalId'
              render={(props) => <GoalContainer {...props} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, access_token) => dispatch(fetchUserData(url, access_token)),
    storeToken: access_token => dispatch({type: 'STORE_TOKEN', token: access_token})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
