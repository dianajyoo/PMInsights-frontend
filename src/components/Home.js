import React from 'react'
import MenuContainer from './menu/MenuContainer'

const Home = () => {
  return (
    <div className='welcome'>
      <MenuContainer />
      <div className='title'>
        <span id='title-1'>PM Insights</span>
      </div>
    </div>
  )
}

export default Home
