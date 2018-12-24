import React from 'react'
import { connect } from "react-redux"
import { fetchUserData } from "../actionCreators/userActions"

import MenuContainer from './menu/MenuContainer'

class Home extends React.Component {

  componentDidMount(){
    const userToken = localStorage.getItem('token')

    if (userToken) {
      this.props.fetchData('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className='welcome'>
        <MenuContainer />
        <div className='title'>
          <span id='title-1'>SLEEPTRACKER</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
