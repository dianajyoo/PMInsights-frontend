import React from 'react';
import { connect } from 'react-redux';
import { getUserActivity } from '../../store/actionCreators/activityActions';

import '../../stylesheets/Activity.css';

class Activity extends React.Component {
  componentDidUpdate(prevProps) {
    const { date } = this.props;

    if(prevProps.date !== date) {
      this.props.getActivity(date, localStorage.getItem('token'));
    }
  }

  render() {
    let activeMinutes;
    const { activity } = this.props;

    if(activity.summary) {
      activeMinutes = activity.summary.fairlyActiveMinutes + activity.summary.lightlyActiveMinutes + activity.summary.veryActiveMinutes;
    };

    return (
      <div className='activityData'>
        <div className='numberOfSteps'>
          <img src={require('../../images/steps.png')} alt='shoes' />
          <span>{activity.summary ? activity.summary.steps + ' steps' : 0}</span>
        </div>
        <div className='distance'>
          <img src={require('../../images/distance.png')} alt='marker' />
          <span>{activity.summary ? activity.summary.distances[0].distance + ' km' : 0}</span>
        </div>
        <div className='timeActive'>
          <img src={require('../../images/time.png')} alt='clock' />
          <span>{activity.summary ? activeMinutes + ' min active' : 0}</span>
        </div>
        <div className='calories'>
          <img src={require('../../images/apple.png')} alt='apple' />
          <span>{activity.summary ? activity.summary.caloriesOut + ' cal' : 0}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.user.date,
    activity: state.activity.activity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getActivity: (date, token) => {
      dispatch(getUserActivity(date, token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);