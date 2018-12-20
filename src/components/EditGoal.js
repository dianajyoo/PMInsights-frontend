import React from 'react'
import SleepForm from './forms/SleepForm'

const EditGoal = props => {
  console.log(props)
  return (
    <div className='edit-goal'>
      <SleepForm id={props.goal.id}/>
    </div>
  )
}

export default EditGoal
