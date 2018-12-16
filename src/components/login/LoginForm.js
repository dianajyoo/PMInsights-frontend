import React from 'react'

export default class LoginForm extends React.Component {

  state = {
    username: '',
    password: '',
    login: this.login
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
        login: () => this.login(this.state.username, this.state.password)
      })
    }
  }

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`)
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={e => this.handleSubmit(e)}>
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
          <button type='button'>Log in</button>
        </form>
      </div>
    )
  }
}
