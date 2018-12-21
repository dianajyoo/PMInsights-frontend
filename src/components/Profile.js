import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { fetchData, fetchUserData } from '../actionCreators/userActions'

class Profile extends React.Component {

  componentDidMount() {
    const userToken = localStorage.getItem('token')
    console.log('in home with helen')
    if(userToken) {
      this.props.fetchData('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }
  }

  render() {
    if (this.props.user.user) {
      console.log(this.props.user)
    }

    return (
      <div className='profile'>
        <div>
          <h2>{this.props.user.user ? this.props.user.user.firstName.toUpperCase() : null}</h2>
          <br />
          {this.props.user.user ? <img src={this.props.user.user.avatar} alt='profile pic' /> : null}
          <br />
        </div>
        <h4>Height:</h4> {this.props.user.user ? this.props.user.user.height : 'N/A'} cm
        <h4>Weight:</h4> {this.props.user.user ? this.props.user.user.weight : 'N/A'} kg
        <br />
        <br />
        <br />
        <NavLink to='/add_goal' className='goals'>Add Sleep Goal</NavLink>
        <br />
        <br/>
        <br/>
        <NavLink to='/sleep_stats' className='statistics'>Statistics</NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    hasErrored: state.fetchHasErrored,
    isLoading: state.fetchIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
