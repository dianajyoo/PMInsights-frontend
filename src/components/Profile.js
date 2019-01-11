import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import ModalPost from './modal/ModalPost'
import { fetchUser, logoutFitbit } from '../store/actionCreators/userActions'

class Profile extends React.Component {

  componentDidMount() {
    this.props.getUser('https://api.fitbit.com/1/user/-/profile.json', this.props.token)
  }

  handleLogout = () => {
    this.props.logout(this.props.token)
    localStorage.clear()
  }

  render() {
    return (
      <div className='profile'>
        <span id='identity'>
          <span id='name'>{this.props.user.user ? this.props.user.user.firstName : null}</span>
          {this.props.user.user ? <img className='ui massive circular image' id='photo' src={this.props.user.user.avatar} alt='profile pic' /> : null}

          <span id='map'>
            <i className="map marker alternate icon"></i>
            {this.props.user.user ? this.props.user.user.timezone : null}
          </span>
        </span>

        <span id='biometrics'>
          {this.props.user.user ? this.props.user.user.height + ' cm ': null}

          {this.props.user.user ? this.props.user.user.weight + ' kg' : null}

          <span>
            <i className="home icon"></i>
            <NavLink to='/dashboard' className='navlink'>Dashboard</NavLink>
          </span>

          <span>
            <i className="star outline icon"></i>
            <ModalPost />
          </span>

          <span>
            <i className="tasks icon"></i>
            <NavLink to='/my_goals' className='navlink'>My Goals</NavLink>
          </span>

          <span>
            <i className="arrow alternate circle right outline icon"></i>
            <NavLink to='/' onClick={this.handleLogout} className='navlink'>Log Out</NavLink>
          </span>

        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    date: state.user.date,
    token: state.user.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (url, access_token) => dispatch(fetchUser(url, access_token)),
    logout: (access_token) => dispatch(logoutFitbit(access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
