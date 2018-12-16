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
    this.props.fetchData(`${BASE_URL}/user`)
  }

  render() {
    console.log(this.props.user)
    return (
      <div className='profile'>
        <div>
          {this.props.user.firstName}
          <br />
          <br />
          <img src={this.props.user.avatar} alt='' /><br /><br />
        </div>
        Height: {this.props.user.height} cm
        Weight: {this.props.user.weight} kg
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
