import React from 'react'
import { NavLink } from 'react-router-dom'

const GoalCard = () => {
  return (
    <div className='goal-card'>
      <NavLink to='/sleep_form' className='sleep-form'>ADD SLEEP GOAL</NavLink>
    </div>
  )
}

export default GoalCard
