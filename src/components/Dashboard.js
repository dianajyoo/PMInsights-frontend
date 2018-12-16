import React from 'react'
import SleepCard from './cards/SleepCard'
import GoalCard from './cards/GoalCard'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='profile-container'>
        <SleepCard />
        <GoalCard />
      </div>
    )
  }
}

export default Dashboard
