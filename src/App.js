import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser, logoutFitbit } from './store/actionCreators/userActions'

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import AllGoals from './components/goals/AllGoals'
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

      if (access_token) {
        this.props.storeToken(access_token)
        this.props.user('https://api.fitbit.com/1/user/-/profile.json', access_token)
      }

      if (localStorage.length === 0) {

        this.props.logout(access_token)
        const userToken = localStorage.getItem('token')

        // if (userToken) {
        //   this.props.user('https://api.fitbit.com/1/user/-/profile.json', this.props.token)
        // }
      }
    }

    // if (access_token) {
    //   this.props.storeToken(access_token)
    // }

    // const userToken = localStorage.getItem('token')
    //
    // if (userToken) {
    //   this.props.user('https://api.fitbit.com/1/user/-/profile.json', userToken)
    // }

  }

  render() {
    console.log(this.props.token)
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/dashboard'
              render={(props) => <Dashboard {...props} />} />
            <Route
              exact path='/my_goals'
              render={(props) => <AllGoals {...props} />} />
            <Route
              exact path='/my_goals/delete/:goalId'
              render={(props) => <AllGoals {...props} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    user: (url, access_token) => dispatch(fetchUser(url, access_token)),
    storeToken: (access_token) => dispatch({type: 'STORE_TOKEN', token: access_token}),
    logout: (access_token) => dispatch(logoutFitbit(access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
