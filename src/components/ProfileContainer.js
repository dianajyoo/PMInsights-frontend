import React from 'react'
import { connect } from 'react-redux';
import { fetchUserData } from '../actionCreators/userActions'

const BASE_URL = 'http://localhost:3000'

class ProfileContainer extends React.Component {

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
        {this.props.user.firstName}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
