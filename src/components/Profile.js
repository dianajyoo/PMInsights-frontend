import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import ModalPost from './ModalPost'
import { fetchUserData } from '../store/actionCreators/userActions'

class Profile extends React.Component {

  componentDidMount() {
    const userToken = localStorage.getItem('token')

    if (userToken) {
      this.props.getUser('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }
  }

  render() {
    return (
      <div className='profile'>
        <span id='identity'>
          <span id='name'>{this.props.user.user ? this.props.user.user.firstName : null}</span>
          {this.props.user.user ? <img class='ui massive circular image' id='photo' src={this.props.user.user.avatar} alt='profile pic' /> : null}

          <span id='map'>
            <i className="map marker alternate icon"></i>
            {this.props.user.user ? this.props.user.user.timezone : null}
          </span>
        </span>

        <span id='biometrics'>
          {this.props.user.user ? this.props.user.user.height + ' cm ': null}

          {this.props.user.user ? this.props.user.user.weight + ' kg' : null}

          <span className='profile-link'>
            <i className="star outline icon"></i><ModalPost />
          </span>

          <span className='profile-link'>
            <i className="chart bar outline icon"></i><NavLink to='/sleep_stats' className='navlink'>Statistics</NavLink>
          </span>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
