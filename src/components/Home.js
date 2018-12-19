import React from 'react'
import { connect } from "react-redux"
import { fetchUserData } from "../actionCreators/userActions"
// import MenuContainer from './menu/MenuContainer'

class Home extends React.Component {

  componentDidMount(){
    // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRGQ0wiLCJzdWIiO…TE2fQ.bfo808LLLcgxd_4kz0DSKfm4M23QZLkoU3BXjCi-y4Q
    // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRGQ0wiLCJzdWIiOiI3MkNWUzMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyd2VpIHJhY3QgcmhyIHJwcm8gcnNsZSIsImV4cCI6MTU0NTY4NTc5NywiaWF0IjoxNTQ1MTgwMTM3fQ.hy_t_6ObKuXTjgGGB1cS_gwRRQkwrEfHB9JO2us_DOA
    // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRGQ0wiLCJzdWIiOiI3MkNWUzMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyd2VpIHJociByYWN0IHJwcm8gcnNsZSIsImV4cCI6MTU0NTY4NTc5NywiaWF0IjoxNTQ1MTgwMjcyfQ.RiEwRU-wHy4P_4BrDuPRlvVqN7CdrSr0Ar5kImEcZNU

      const userToken = localStorage.getItem("token")
      if(userToken) {
        this.props.fetchData('https://api.fitbit.com/1/user/-/profile.json', userToken)
      }
  }

  render() {
    console.log(this.props)
    return (
      <div className='welcome'>
        <h1 className='title'>sleeptracker</h1>
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
    fetchData: (url, access_token) => dispatch(fetchUserData(url, access_token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
