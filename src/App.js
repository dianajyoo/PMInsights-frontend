import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUserData } from './actionCreators/userActions'
// import {} from './actionCreators/userActions'

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

    // if (access_token.length > 0) {
    //   this.props.storeToken(access_token)
    // }
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <div className='App'>
          <NavBar /><br />

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

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, access_token) => dispatch(fetchUserData(url, access_token)),
    storeToken: access_token => dispatch({type: "STORE_TOKEN", token: access_token})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
