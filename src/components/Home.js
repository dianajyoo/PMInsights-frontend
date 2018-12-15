import React from 'react'
import SleepContainer from './SleepContainer'

export default class Home extends React.Component {

  render() {
    return (
      <div className='welcome' style={ {height: 1000, backgroundRepeat: 'no-repeat', backgroundImage: 'url(' + require('../imgs/clouds.jpg') + ')'} }>
      </div>
    )
  }
}
