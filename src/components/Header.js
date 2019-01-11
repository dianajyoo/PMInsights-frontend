import React from 'react'
import DateForm from './DateForm'
import { connect } from 'react-redux'

import '../styling/Header.css'
import '../imgs/moon.png'

class Header extends React.Component {
  render() {
    return (
      <div id='header-1'>
        <img src={require('../imgs/moon.png')} alt={''} />
        <span id='insights'>Insights</span>
        <span id='date-of-sleep'>{this.props.date}</span>
        <span id='date-input'><DateForm /></span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.user.date
  }
}

export default connect(mapStateToProps)(Header)

// <span id='date'>Date of Sleep:</span>
