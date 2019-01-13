import React from 'react'
import { connect } from 'react-redux'

import Goal from './Goal'
import Profile from '../Profile'
import EditGoal from './EditGoal'
import Header from '../Header'
import { getGoal } from '../../store/actionCreators/goalActions'

class AllGoals extends React.Component {

  state = {
    editGoal: {}
  }

  componentDidMount() {

    // const userToken = localStorage.getItem('token')

    // if (userToken) {
    //   this.props.user('https://api.fitbit.com/1/user/-/profile.json', userToken)
    // }

    if (this.props.token !== '') {
      this.props.goal(this.props.token)
    }
  }

  handleClickedGoal = (goal) => {
    this.setState({
      editGoal: goal
    })
  }

  render() {
    let goals
    if (this.props.goals.length > 0) {
      console.log(this.props.goals)
      goals = this.props.goals.map(goal => <Goal goal={goal} handleClickedGoal={this.handleClickedGoal} />)
    }

    return (
      <div className='goal-container'>
        <Header />
        <span id='profile'><Profile /></span>
        {this.state.editGoal.id ? <EditGoal goal={this.state.editGoal} /> :
        <div className='ui grid'> {goals} </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    goals: state.goal.goals,
    token: state.user.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goal: (access_token) => dispatch(getGoal(access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGoals)
