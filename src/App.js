import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import SleepContainer from './components/SleepContainer'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/sleep')
      .then(res => res.json())
      .then(console.log)
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        sleepTracker
        <Router>
          <React.Fragment>
            <NavBar /><br />
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

export default App;
