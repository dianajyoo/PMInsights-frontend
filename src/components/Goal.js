import React from 'react'
import EditGoal from './EditGoal'

class Goal extends React.Component {

  handleEdit = () => {
    this.props.props.history.replace(`/my_goals/edit/${this.props.goal.id}`)

    this.props.handleEditGoal(this.props.goal)
  }

  render() {
    return (
      this.props.goal.id === parseInt(this.props.props.match.params.goalId) ?
        <EditGoal props={this.props.props} goal={this.props.goal} handleEdit={this.handleEdit} /> :
      (<div className='grid-container'>
        <div className='grid-item'>
          <h4>Goal Date:</h4> {this.props.goal.goalDate}
          <h4>Bedtime Target:</h4>  {this.props.goal.bedtimeTarget}
          <h4>Wakeup Time Target:</h4> {this.props.goal.wakeupTarget}

          <br />

          <button type='button' onClick={this.handleEdit}>edit</button>
        </div>
      </div>)
    )
  }
}

export default Goal
