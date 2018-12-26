import React from 'react'
import { connect } from 'react-redux'
import { fetchSleepData, fetchUserData } from '../actionCreators/userActions'

import Profile from './Profile'

import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"

class SleepContainer extends React.Component {

  componentDidMount() {

    const userToken = localStorage.getItem('token')

    if(userToken) {
      this.props.fetchSleepData('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }

  }

  render() {
    console.log(this.props)
    let efficiency
    let hours_slept

    if (this.props.sleep_data.sleep) {
      efficiency = this.props.sleep_data.sleep[0].efficiency
      // round to one decimal place
      hours_slept = Math.round((this.props.sleep_data.sleep[0].duration / 3600000) * 10 / 10)
    }

    return (
      <div className='progress-circle'>
        <Progress
          type="circle"
          width={175}
          strokeWidth={10}
          percent={efficiency}
          theme={{
            active: {
              trailColor: 'rgb(244,244,244)',
              color: 'rgb(228,65,4)'
            }
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    sleep_data: state.sleep
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchData: (url, access_token) => dispatch(fetchSleepData(url, access_token)),
    fetchSleepData: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SleepContainer)

// <div className='sleep-stats'>
// <h3>Date of Sleep:</h3>
// { this.props.sleep_data.sleep ? this.props.sleep_data.sleep[0].dateOfSleep : ' N/A' } <br /><br />
//
// <h3>Duration of Sleep:</h3>
// { this.props.sleep_data.sleep ? hours_slept + ' hrs' : ' N/A' }
// </div>
