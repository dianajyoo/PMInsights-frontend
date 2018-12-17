import React from 'react'
import { connect } from 'react-redux'
import { fetchUserData } from '../actionCreators/userActions'

const BASE_URL = 'http://localhost:3000'

class Profile extends React.Component {

  componentDidMount() {
    // fetch(`${BASE_URL}/user`)
    //   .then(res => res.json())
    //   .then(json => {
    //   })
    // this.props.fetchData(`${BASE_URL}/user`)
    this.props.fetchData('https://api.fitbit.com/1/user/-/profile.json')
  }

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
          {this.props.user.user ? <img src={this.props.user.user.avatar} alt=''/> : null}
          <br />
        </div>
        Height: {this.props.user.user ? this.props.user.user.height: 0} cm
        Weight: {this.props.user.user ? this.props.user.user.weight: 0} kg
        <br />
        <br />
        <br />
        My Sleep Goals (link)
        <br />
        <br/>
        <br/>
        Statistics (link)
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
    fetchData: url => dispatch(fetchUserData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
