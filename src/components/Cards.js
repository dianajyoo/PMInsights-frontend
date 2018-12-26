import React from 'react'
import { NavLink } from 'react-router-dom'

import SleepEfficiency from './SleepEfficiency'

const Cards = () => {
  return (
    <div className='grid-container'>
      <div className='efficiency-card'>
        <span className='efficiency'>Sleep Efficiency</span>
        <SleepEfficiency />
      </div>

      <div className='sleep-card'>
        <span className='analytics'>Analytics</span>
        <img src={require('../imgs/moon.png')} alt={'moon'} id='moon' />
      </div>

      <div className='heart-card'>
        <span className='heartrate'>Heart Rate</span>
        <img src={require('../imgs/heart.png')} alt={'heart'} id='heart' />
      </div>

      <div className='goal-card'>
        <span className='goals'>My Sleep Goals</span>
        <img src={require('../imgs/goal.png')} alt={'goal'} id='goal' />
      </div>
    </div>
  )
}

export default Cards

// <NavLink to='/sleep_stats' className='analytics'>analytics</NavLink>
// <NavLink to='/my_goals' className='goals'>my sleep goals</NavLink>
// <NavLink to='/my_goals' className='heartrate'>heart rate</NavLink>
