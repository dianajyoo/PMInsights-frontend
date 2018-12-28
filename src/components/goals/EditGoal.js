import React from 'react'
import GoalForm from './GoalForm'

const EditGoal = (props) => {
  return (
    <div className='edit-goal'>
      <GoalForm id={props.goal.id} />
    </div>
  )
}

export default EditGoal
