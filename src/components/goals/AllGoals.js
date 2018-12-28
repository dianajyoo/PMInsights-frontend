import React from 'react'
import { connect } from 'react-redux'

import Goal from './Goal'
import Profile from '../Profile'
import EditGoal from './EditGoal'
import { fetchUserData, fetchGoalData } from '../../store/actionCreators/userActions'

class AllGoals extends React.Component {

  state = {
    editGoal: {}
  }

  componentDidMount() {

    const userToken = localStorage.getItem('token')

    if (userToken) {
      this.props.user('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }

    this.props.goal(userToken)
  }

  handleClickedGoal = (goal) => {
    this.setState({
      editGoal: goal
    })
  }

  render() {
    console.log(this.state.editGoal)
    let goals

    if (this.props.goals.length > 0) {
        goals = this.props.goals.map(goal => <Goal props={this.props} goal={goal} handleClickedGoal={this.handleClickedGoal} />)
    }

    return (
      <div className='goal-container'>
        {this.state.editGoal.id ? <EditGoal goal={this.state.editGoal}  /> :
        <div> {goals} </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    goals: state.setGoal.goals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goal: (access_token) => dispatch(fetchGoalData(access_token)),
    user: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGoals)
