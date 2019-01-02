import React from 'react'
import DateForm from './DateForm'

import '../styling/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div id='header-1'>

        <span id='date-input'><DateForm /></span>
      </div>
    )
  }
}

export default Header

// <span id='date'>Date of Sleep:</span>
