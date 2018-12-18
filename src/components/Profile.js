import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Profile extends React.Component {

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
        <NavLink to='/sleep_goal' className='goals'>Add Sleep Goal</NavLink>
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


export default connect(mapStateToProps)(Profile)
