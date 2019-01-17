import React from 'react'
import { connect } from 'react-redux'
import { fetchHeartRate } from '../../store/actionCreators/heartRateActions'

import '../../styling/Heartrate.css'

class Heartrate extends React.Component {

  componentDidUpdate(prevProps) {
    // console.log('Props', this.props)
    // console.log('PrevProps', prevProps)

    if (this.props.date !== prevProps.date) {
      this.props.getHeartRate(this.props.date, localStorage.getItem('token'))
    }
  }

  heartActivity = () => {
    if (this.props.heartRate['activities-heart'] && this.props.heartRate['activities-heart'][0].value.restingHeartRate) {
      return this.props.heartRate['activities-heart'][0].value.restingHeartRate + ' bpm'
    } else {
      return 'No Data'
    }
  }

  render() {
    return (
      <div className='bpm'>
        <img id='heart' src={require('../../imgs/heart.png')} alt={'heart'} />
        {this.heartActivity()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.user.date,
    heartRate: state.heartRate.heartRate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHeartRate: (date, access_token) => dispatch(fetchHeartRate(date, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heartrate)
