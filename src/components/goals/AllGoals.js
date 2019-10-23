import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Goal from './Goal';
import Profile from '../Profile';
import { getGoals } from '../../store/actionCreators/goalActions';

import '../../stylesheets/AllGoals.css';

class AllGoals extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token') !== 'undefined') {
      this.props.allGoals();
    }
  }

  render() {
    let goals;
    let loggedIn = false;

    if (localStorage.getItem('token')) {
      loggedIn = true;
    }

    if (this.props.goals.length > 0) {
      goals = this.props.goals.map((goal) => (
        <Goal key={`goal-${goal.id}`} goal={goal} />
      ));
    }

    return (
      <Route
        render={(props) =>
          loggedIn ? (
            <div className='goalContainer'>
              <Profile />
              <div className='goalWrapper'>{goals}</div>
            </div>
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    goals: state.goal.goals
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allGoals: () => dispatch(getGoals())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllGoals);