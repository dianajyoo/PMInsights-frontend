import React from 'react'

import SleepEfficiency from './analytics/SleepEfficiency'
import PieChart from './analytics/PieChart'
import Heartrate from './analytics/Heartrate'
import LineGraph from './analytics/LineGraph'

const Cards = () => {
  return (
    <div className='grid-container'>
      <div className='efficiency-card'>
        <div className='card-title'>Sleep Efficiency</div>
        <span id='efficiency'><SleepEfficiency /></span>
      </div>

      <div className='sleep-card'>
        <div className='card-title'>Sleep Cycle</div>
        <span id='piechart'><PieChart /></span>
      </div>

      <div className='heart-card'>
        <div className='card-title'>Resting HR</div>
        <Heartrate />
      </div>

      <div className='chart-card'>
        <div className='card-title'>Sleep Pattern</div>
        <span id='linegraph'><LineGraph /></span>
      </div>
    </div>
  )
}

export default Cards
