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
          {this.props.user.user ? this.props.user.user.firstName : null}
          <br />
          <br />
          {this.props.user.user ? <img src={this.props.user.user.avatar} alt='profile pic' /> : null}
          <br />
        </div>
        Height: {this.props.user.user ? this.props.user.user.height : 'N/A'} cm
        Weight: {this.props.user.user ? this.props.user.user.weight : 'N/A'} kg
        <br />
        <br />
        <br />
        My Sleep Goals (link)
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
