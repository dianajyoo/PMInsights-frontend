import React from 'react'
import { connect } from 'react-redux'
import { fetchHeartRate } from '../../store/actionCreators/userActions'

import '../../styling/Heartrate.css'

class Heartrate extends React.Component {

  componentDidMount() {
    const userToken = localStorage.getItem('token')

    this.props.getHeartRate(userToken)
  }

  render() {
    return (
      <div className='bpm'>
        <img src={require('../../imgs/heart.png')} alt={'heart'} />
        {this.props.heartRate['activities-heart'] ? this.props.heartRate['activities-heart'][0].value.restingHeartRate + ' bpm' : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    heartRate: state.heartRate.heartRate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHeartRate: (access_token) => dispatch(fetchHeartRate(access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heartrate)
