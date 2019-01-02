import React from 'react'
import { connect } from 'react-redux'
import { fetchHeartRate } from '../../store/actionCreators/userActions'

import '../../styling/Heartrate.css'

class Heartrate extends React.Component {

  componentDidUpdate(prevProps) {
    const userToken = localStorage.getItem('token')
    console.log(this.props)
    console.log(prevProps)

    if (this.props.date !== prevProps.date) {
      this.props.getHeartRate(this.props.date, userToken)
    }
  }

  render() {
    return (
      <div className='bpm'>
        <img id='heart' src={require('../../imgs/heart.png')} alt={'heart'} />
        {this.props.heartRate['activities-heart'] ? this.props.heartRate['activities-heart'][0].value.restingHeartRate + ' bpm' : null}
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
