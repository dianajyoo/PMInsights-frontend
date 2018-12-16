import React from 'react'
import SleepContainer from './SleepContainer'

export default class Home extends React.Component {

  render() {
    return (
      <div className='welcome' style={ {height: 1000, backgroundRepeat: 'no-repeat', backgroundImage: 'url(' + require('../imgs/moon.jpg') + ')'} }>
        <h1>Home</h1>
      </div>
    )
  }
}
