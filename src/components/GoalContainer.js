import React from 'react'
import { connect } from 'react-redux'

import Goal from './Goal'
import Profile from './Profile'
import EditGoal from './EditGoal'
import { fetchGoalData } from '../actionCreators/userActions'

class GoalContainer extends React.Component {

  state = {
    editGoal: {}
  }

  componentDidMount() {
    this.props.fetchGoalData(this.props.token)
  }

  handleClickedGoal = goal => {
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

const mapStateToProps = state => {
  return {
    user: state.user,
    goals: state.goals,
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoalData: (access_token) => dispatch(fetchGoalData(access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer)
