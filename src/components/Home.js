import React from 'react'
import MenuContainer from './MenuContainer'

class Home extends React.Component {

  render() {
    return (
      <div className='welcome'>
        <MenuContainer />
        <h1 className='title'>sleeptracker</h1>
      </div>
    )
  }
}

export default Home
