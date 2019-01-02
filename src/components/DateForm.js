import React from 'react'
import { connect } from 'react-redux'
import { Form, Input } from 'semantic-ui-react'

import '../styling/DateForm.css'

class DateForm extends React.Component {

  state = {
    date: ''
  }

  handleChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log('Submitted!')
    this.props.getDate(this.state.date)
    // debugger
    // reset input field
  }

  render() {
    return (
      <div className='dateform'>
        <Form onSubmit={e => this.handleSubmit(e)} size={'small'}>
          <Form.Field inline>
            <label id='label'>DATE</label>
            <Input type='text' name='date' placeholder='yyyy-mm-dd'
              value={this.state.date} onChange={e => this.handleChange(e)} />

              <button className="circular ui icon button">
                <i className="search icon"></i>
              </button>

          </Form.Field>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.user.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDate: (date) => dispatch({type: 'STORE_DATE', date})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateForm)
