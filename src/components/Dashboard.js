import React from 'react'
import SleepCard from './cards/SleepCard'
import GoalCard from './cards/GoalCard'
import Profile from './Profile'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Profile />
        <SleepCard />
        <GoalCard />
      </div>
    )
  }
}

export default Dashboard
