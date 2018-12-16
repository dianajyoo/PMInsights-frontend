import React from 'react'

class SignUpForm extends React.Component {

  state = {
    name: '',
    username: '',
    password: '',
    signup: this.signup
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.username !== '' && this.state.password !== '') {
      this.setState({
        signup: () => this.signup(this.state.username, this.state.password)
      })
    }
  }

  signup = ({ username, password }) => {
    console.log(`Signing up ${username} with password ${password}`)
  }

  render() {
    return (
      <div className='signup'>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Name
            <input type='text' name='name' value={this.state.name} onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <label>
            Username
            <input type='text' name='username' value={this.state.username} onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <label>
            Password
            <input type='password' name='password' value={this.state.password} onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <button type='button'>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm
