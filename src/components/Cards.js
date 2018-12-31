import React from 'react'

import SleepEfficiency from './analytics/SleepEfficiency'
import PieChart from './analytics/PieChart'
import Heartrate from './analytics/Heartrate'
import LineGraph from './analytics/LineGraph'

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

      <div className='chart-card'>
        <span className='card-title'>Sleep Pattern</span>
        <span id='linegraph'><LineGraph /></span>
      </div>
    </div>
  )
}

export default Cards

// <NavLink to='/sleep_stats' className='analytics'>analytics</NavLink>
// <NavLink to='/my_goals' className='goals'>my sleep goals</NavLink>
// <NavLink to='/my_goals' className='heartrate'>heart rate</NavLink>

// <img src={require('../imgs/moon.png')} alt={'moon'} id='moon' />
