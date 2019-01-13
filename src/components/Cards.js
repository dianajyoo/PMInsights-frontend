import React from 'react'

import SleepEfficiency from './analytics/SleepEfficiency'
import PieChart from './analytics/PieChart'
import Heartrate from './analytics/Heartrate'
import LineGraph from './analytics/LineGraph'
import Duration from './analytics/Duration'

import { connect } from 'react-redux'
import { fetchSleepData } from '../store/actionCreators/sleepActions'

class Cards extends React.Component {
  render() {
    return (
      <div className='grid-container'>
        <div className='efficiency-card'>
          <div className='card-title'>Sleep Efficiency</div>
          <span id='efficiency'><SleepEfficiency sleepInfo={this.props.sleepInfo} /></span>
        </div>

        <div className='sleep-card'>
          <div className='card-title'>Sleep Cycle</div>
          <span id='piechart'><PieChart /></span>
        </div>

        <div className='heart-card'>
          <div className='card-title'>Resting HR</div>
          <Heartrate />
        </div>

        <div className='duration-card'>
          <div className='card-title'>Duration</div>
          <span id='hours'><Duration sleepInfo={this.props.sleepInfo} /></span>
        </div>

        <div className='chart-card'>
          <div className='card-title'>Sleep Pattern</div>
          <span id='linegraph'><LineGraph sleepInfo={this.props.sleepInfo} /></span>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sleepInfo: (date, access_token) => dispatch(fetchSleepData(date, access_token))
  }
}

export default connect(null, mapDispatchToProps)(Cards)
