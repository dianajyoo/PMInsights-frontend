import React from 'react';
import SleepEfficiency from './analytics/SleepEfficiency';
import PieChart from './analytics/PieChart';
import Heartrate from './analytics/Heartrate';
import LineGraph from './analytics/LineGraph';
import Duration from './analytics/Duration';
import { connect } from 'react-redux';
import { fetchSleepData } from '../store/actionCreators/sleepActions';

import '../stylesheets/Cards.css';

class Cards extends React.Component {
  render() {
    return (
      <div className='gridContainer'>
        <div className='card squareCard efficiencyCard'>
          <h2 className='cardTitle'>Sleep Efficiency</h2>
          <div className='cardItem sleepEfficiency'>
            <SleepEfficiency sleepInfo={this.props.sleepInfo} />
          </div>
        </div>

        <div className='card squareCard sleepCard'>
          <h2 className='cardTitle'>Sleep Cycle</h2>
          <PieChart />
        </div>

        <div className='card squareCard heartCard'>
          <h2 className='cardTitle'>Resting HR</h2>
          <div className='cardItem'>
            <Heartrate />
          </div>
        </div>

        <div className='card squareCard durationCard'>
          <h2 className='cardTitle'>Duration</h2>
          <div className='cardItem hoursOfSleep'>
            <Duration sleepInfo={this.props.sleepInfo} />
          </div>
        </div>

        <div className='card chartCard'>
          <h2 className='cardTitle'>Sleep Pattern</h2>
          <div className='cardItem lineGraph'>
            <LineGraph sleepInfo={this.props.sleepInfo} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sleepInfo: (date, access_token) =>
      dispatch(fetchSleepData(date, access_token))
  };
};

export default connect(null, mapDispatchToProps)(Cards);