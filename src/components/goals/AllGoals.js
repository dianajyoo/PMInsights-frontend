import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

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
    // if (this.props.token !== '') {
    //   this.props.goal(this.props.token)
    // }
  }

  handleClickedGoal = (goal) => {
    this.setState({
      editGoal: goal
    })
  }

  render() {

    let goals
    let loggedIn = false

    if (localStorage.getItem('token')) {
      loggedIn = true
    }

    if (this.props.goals.length > 0) {
      console.log(this.props.goals)
      goals = this.props.goals.map(goal => <Goal goal={goal} handleClickedGoal={this.handleClickedGoal} />)
    }

    return (
      <Route
        render={props =>
        loggedIn ? (<div className='goal-container'>
          <Header />
          <span id='profile'><Profile /></span>
          {this.state.editGoal.id ? <EditGoal goal={this.state.editGoal} /> :
          <div className='ui grid'> {goals} </div>}
        </div>) : (<Redirect to={ { pathname: '/', state: { from: props.location } }} />)} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    goals: state.goal.goals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goal: () => dispatch(getGoal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGoals)
