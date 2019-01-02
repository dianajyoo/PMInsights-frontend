import React from 'react'
import { connect } from 'react-redux'

import Profile from '../Profile'

import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'

class SleepEfficiency extends React.Component {

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
          type='circle'
          width={160}
          strokeWidth={13}
          percent={efficiency}
          theme={{
            active: {
              trailColor: 'rgb(236,236,236)',
              color: 'rgba(133,207,218)'
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

export default connect(mapStateToProps)(SleepEfficiency)

// <div className='sleep-stats'>
// <h3>Date of Sleep:</h3>
// { this.props.sleep_data.sleep ? this.props.sleep_data.sleep[0].dateOfSleep : ' N/A' } <br /><br />
//
// <h3>Duration of Sleep:</h3>
// { this.props.sleep_data.sleep ? hours_slept + ' hrs' : ' N/A' }
// </div>
