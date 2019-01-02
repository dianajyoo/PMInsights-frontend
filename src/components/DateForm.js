import React from 'react'
import { connect } from 'react-redux'

class DateForm extends React.Component {

  handleChange = (e) => {
    // debugger
    this.props.getDate(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log('Submitted!')
    // debugger
    // reset input field
  }

  render() {
    return (
      <div className='dateform'>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type='text' name='date' placeholder='yyyy-mm-dd'
            value={this.props.date} onChange={e => this.handleChange(e)} />
        </form>
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
