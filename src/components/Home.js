import React from 'react'
import moon from '../img/moon.jpg'

const divStyle = {
    height: 1356,
    backgroundImage: `url(${"src/img/moon.jpg"})`
}

export default class Home extends React.Component {

  render() {
    return (
      <div className='welcome' style={{backgroundImage: `url(${"src/img/moon.jpg"})`}}>
      </div>
    )
  }
}
