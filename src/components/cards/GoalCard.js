import React from 'react'
import { NavLink } from 'react-router-dom'

const GoalCard = () => {
  return (
    <div className='goal-card'>
      <NavLink to='/my_goals' className='sleep-goal-form'>MY SLEEP GOALS</NavLink>
    </div>
  )
}

export default GoalCard
