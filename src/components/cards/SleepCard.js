import React from 'react'
import { NavLink } from 'react-router-dom'

const SleepCard = () => {
  return (
    <div className='sleep-card'>
      <NavLink to='/sleep_stats' className='sleepcard'>SLEEP</NavLink>
    </div>
  )
}

export default SleepCard
