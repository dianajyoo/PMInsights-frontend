import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SleepContainer from './components/SleepContainer';
import ProfileContainer from './components/ProfileContainer';

import '../node_modules/semantic-ui/dist/semantic.min.css';
import logo from './logo.svg';
import './App.css';

const BASE_URL = 'http://localhost:3000'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar /><br />
            <ProfileContainer />
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
              render={(props) => <SleepContainer {...props} />} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
