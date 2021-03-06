import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAccessToken } from './store/actionCreators/tokenActions';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AllGoals from './components/goals/AllGoals';
import NoMatch from './components/NoMatch';

import '../node_modules/semantic-ui/dist/semantic.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    // grab current url
    const current_url = window.location.href;

    // grab authorization code from url
    if (current_url.includes('code')) {
      let authCode = current_url.split('=')[1].split('#')[0];

      // store code to localStorage
      localStorage.setItem('code', authCode);

      this.props.getToken(
        process.env.REACT_APP_BASE64,
        authCode,
        process.env.REACT_APP_CLIENT_ID
      );
    }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/dashboard'
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path='/my_goals'
              render={(props) => <AllGoals {...props} />}
            />
            <Route
              exact
              path='/my_goals/delete/:goalId'
              render={(props) => <AllGoals {...props} />}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getToken: (base64, code, clientId) =>
      dispatch(getAccessToken(base64, code, clientId))
  };
};

export default connect(null, mapDispatchToProps)(App);