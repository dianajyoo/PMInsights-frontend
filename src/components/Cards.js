import React from 'react'
import { NavLink } from 'react-router-dom'

import SleepEfficiency from './SleepEfficiency'
import PieChart from './PieChart'
import Heartrate from './analytics/Heartrate'

const Cards = () => {
  return (
    <div className='grid-container'>
      <div className='efficiency-card'>
        <span className='card-title'>Sleep Efficiency</span>
        <SleepEfficiency />
      </div>

      <div className='sleep-card'>
        <span className='card-title'>Sleep Cycle</span>
        <span id='piechart'><PieChart /></span>
      </div>

      <div className='heart-card'>
        <span className='card-title'>Resting HR</span>
        <Heartrate />
      </div>

      <div className='goal-card'>
        <span className='card-title'>My Sleep Goals</span>
        <img src={require('../imgs/goal.png')} alt={'goal'} id='goal' />
      </div>
    </div>
  )
}

export default Cards

// <NavLink to='/sleep_stats' className='analytics'>analytics</NavLink>
// <NavLink to='/my_goals' className='goals'>my sleep goals</NavLink>
// <NavLink to='/my_goals' className='heartrate'>heart rate</NavLink>

// <img src={require('../imgs/moon.png')} alt={'moon'} id='moon' />
