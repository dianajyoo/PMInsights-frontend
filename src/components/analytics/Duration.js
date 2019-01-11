import React from 'react'
import { connect } from 'react-redux'

class Duration extends React.Component {

  componentDidUpdate(prevProps) {
    // const userToken = localStorage.getItem('token')

    if (this.props.date !== prevProps.date) {
      this.props.sleepInfo(this.props.date, this.props.token)
    }
  }

  render() {
    let hours_slept

    if (this.props.sleep.sleep) {
      if (this.props.sleep.sleep[0]) {
        hours_slept = Math.round((this.props.sleep.sleep[0].duration / 3600000) * 10 / 10)
      }
    }

    return (
      <div id='duration'>
        { this.props.sleep.sleep ? hours_slept + ' hrs' : ' N/A' }
      </div>
    )
  }

}
  const mapStateToProps = (state) => {
    return {
      date: state.user.date,
      sleep: state.user.sleep,
      token: state.user.token
    }
  }

  export default connect(mapStateToProps)(Duration)
