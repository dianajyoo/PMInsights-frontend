import React from 'react'
import { connect } from 'react-redux'
import { fetchUserData } from '../actionCreators/userActions'

import Profile from './Profile'

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class SleepContainer extends React.Component {

  componentDidMount() {
    // debugger
    this.props.fetchData(`https://api.fitbit.com/1.2/user/-/sleep/date/2018-12-16.json`, this.props.token)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Profile />
        <div className='progress-circle'>
          <Progress
            type="circle"
            width={300}
            strokeWidth={10}
            percent={75}
          /><br /><br />
          Sleep Efficiency
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SleepContainer)
