import React from 'react'
import { connect } from 'react-redux'
import { fetchUserData } from '../../store/actionCreators/userActions'

import Profile from '../Profile'

import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"

class SleepEfficiency extends React.Component {

  componentDidMount() {

    const userToken = localStorage.getItem('token')

    if (userToken) {
      this.props.sleepInfo('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }

  }

  render() {
    let efficiency
    let hours_slept

    if (this.props.sleep.sleep) {
      efficiency = this.props.sleep.sleep[0].efficiency

      // round to one decimal place
      hours_slept = Math.round((this.props.sleep.sleep[0].duration / 3600000) * 10 / 10)
    }

    return (
      <div className='progress-circle'>
        <Progress
          type="circle"
          width={160}
          strokeWidth={13}
          percent={efficiency}
          theme={{
            active: {
              trailColor: 'rgb(236,236,236)',
              color: 'rgb(133,207,218)'
            }
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sleep: state.user.sleep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sleepInfo: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SleepEfficiency)

// <div className='sleep-stats'>
// <h3>Date of Sleep:</h3>
// { this.props.sleep_data.sleep ? this.props.sleep_data.sleep[0].dateOfSleep : ' N/A' } <br /><br />
//
// <h3>Duration of Sleep:</h3>
// { this.props.sleep_data.sleep ? hours_slept + ' hrs' : ' N/A' }
// </div>
