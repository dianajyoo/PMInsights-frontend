import React from 'react'

import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

class SleepForm extends React.Component {

  state = {
    startDate: new Date()
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  render() {
    return (
      <div className='datetime'>

        <label>
          Goal Date:
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
        </label>

        <br />

        <label>
          Bedtime Target:
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              timeCaption="Time"
            />
        </label>

        <br />

        <label>
          Wakeup Target:
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              timeCaption="Time"
            />
        </label>

      </div>
    )
  }
}

export default SleepForm
