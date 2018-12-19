import React from 'react'
import { connect } from 'react-redux'
import { fetchGoalData } from '../actionCreators/userActions'

class Goals extends React.Component {

  componentDidMount() {
    this.props.fetchGoalData(this.props.token)
  }

  render() {

    const goalDate = this.props.goals.map( goal => goal.goalDate )
    const bedtimeTarget = this.props.goals.map( goal => goal.bedtimeTarget )
    const wakeupTarget = this.props.goals.map( goal => goal.wakeupTarget )

    return (
      <div className='goals'>
        LIST OF GOALS HERE

        <br /><br />

        <h4>Goal Date:</h4> {goalDate}
        <h4>Bedtime Target:</h4> {bedtimeTarget}
        <h4>Wakeup Time Target:</h4> {wakeupTarget}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    goals: state.goals,
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoalData: (access_token) => dispatch(fetchGoalData(access_token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals)
