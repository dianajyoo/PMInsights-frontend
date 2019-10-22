import React from 'react';
import ModalPost from './modal/ModalPost';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchUser, logoutFitbitUser } from '../store/actionCreators/userActions';
import { getAccessToken } from '../store/actionCreators/tokenActions';

import '../stylesheets/Profile.css';

class Profile extends React.Component {
  componentDidMount() {
    const URL = 'https://api.fitbit.com/1/user/-/profile.json';

    this.props.grabToken(
      process.env.REACT_APP_BASE64,
      localStorage.getItem('code'),
      process.env.REACT_APP_CLIENT_ID
    );

    if (localStorage.getItem('token') && localStorage.length > 1) {
      this.props.getUser(URL, localStorage.getItem('token'));
    }
  }

  componentDidUpdate(prevProps) {
    // console.log(localStorage.token, localStorage.length)

    if (this.props.id !== prevProps.id) {
      this.props.grabToken(
        process.env.REACT_APP_BASE64,
        localStorage.getItem('code'),
        process.env.REACT_APP_CLIENT_ID
      );
    }
  }

  logoutUser = () => {
    this.props.logout(
      process.env.REACT_APP_BASE64,
      localStorage.getItem('token')
    );

    localStorage.clear();
  };

  render() {
    return (
      <div className='profile'>
        <div className='userName'>
          <h2>
            Hi, {this.props.user.user ? this.props.user.user.firstName : null}
          </h2>
        </div>

        <div className='userPhoto'>
          {this.props.user.user ? (
            <img
              src={this.props.user.user.avatar}
              alt='profile photo'
            />
          ) : <div></div>}
        </div>

        <div className='userLocation'>
          <i className='map marker alternate icon'></i>
          {this.props.user.user ? this.props.user.user.timezone.split('/')[1] : null}
        </div>

        <div className='userHeightWeight'>
          {this.props.user.user ? this.props.user.user.height + ' cm ' : null}

          {this.props.user.user ? this.props.user.user.weight + ' kg' : null}
        </div>

        <div className='dashboardMenu'>
          <div className='menuSelect'>
            <i className='home icon'></i>
            <NavLink to='/dashboard' className='navlink'>
              Dashboard
            </NavLink>
          </div>

          <div className='menuSelect'>
            <i className='star outline icon'></i>
            <ModalPost />
          </div>

          <div className='menuSelect'>
            <i className='tasks icon'></i>
            <NavLink to='/my_goals' className='navlink'>
              My Goals
            </NavLink>
          </div>

          <div className='menuSelect'>
            <i className='arrow alternate circle right outline icon'></i>
            <NavLink to='/' onClick={this.logoutUser} className='navlink'>
              Log Out
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    date: state.user.date,
    id: state.user.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (url, access_token) => dispatch(fetchUser(url, access_token)),
    logout: (base64, access_token) =>
      dispatch(logoutFitbitUser(base64, access_token)),
    grabToken: (base64, access_token, clientId) =>
      dispatch(getAccessToken(base64, access_token, clientId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);