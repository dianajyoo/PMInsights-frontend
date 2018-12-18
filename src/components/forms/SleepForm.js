import React from 'react'
import { connect } from 'react-redux'
import { fetchSleepGoals } from '../../actionCreators/userActions'

import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

class SleepForm extends React.Component {

  state = {
    startDate: new Date(),
    dateEvent: {},
    bedtimeEvent: {},
    wakeupEvent: {}
  }

  handleChange = (e, date) => {
    // debugger

    this.setState({
      startDate: date,
      dateEvent: e
    })

    console.log(e.toString().split(' ').slice(0, 4).join(' '))

    return e.toString().split(' ').slice(0, 4).join(' ')
  }

  handleBedtimeChange = (e) => {

    let militaryHour = Number(e.toString().split(' ')[4].split(':')[0])
    let minutes = e.toString().split(' ')[4].split(':')[1]

    if (militaryHour > 12) {
      militaryHour -= 12
    }

    this.setState({
      bedtimeEvent: e
    })

    console.log(militaryHour.toString() + ':' + minutes)

    return militaryHour.toString() + ':' + minutes
  }

  handleWaketimeChange = (e) => {

    let militaryHour = Number(e.toString().split(' ')[4].split(':')[0])
    let minutes = e.toString().split(' ')[4].split(':')[1]

    if (militaryHour > 12) {
      militaryHour -= 12
    }

    this.setState({
      wakeupEvent: e
    })

    console.log(militaryHour.toString() + ':' + minutes)

    return militaryHour.toString() + ':' + minutes
  }

  handleSubmit = (handleChange, handleBedtimeChange, handleWaketimeChange, e) => {
    e.preventDefault()

    console.log('got here')

    this.props.fetchData(this.handleChange(this.state.dateEvent), this.handleBedtimeChange(this.state.bedtimeEvent), this.handleWaketimeChange(this.state.wakeupEvent), this.props.token)

    // console.log(this.props.token)
    console.log(this.handleBedtimeChange(this.state.bedtimeEvent))
  }

  render() {
    return (
      <div className='datetime'>

        <label>
          <h4>Goal Date:</h4>
            <form onSubmit={(e) => this.handleSubmit(this.handleChange, this.handleBedtimeChange, this.handleWaketimeChange, e)}>
              <DatePicker
                selected={this.state.startDate}
                onChange={e => this.handleChange(e)}
              />
            </form>

        </label>

        <br /><br />

        <label>
          <h4>Bedtime Target:</h4>
            <form onSubmit={e => this.handleSubmit(this.handleChange, this.handleBedtimeChange, this.handleWaketimeChange, e)}>
              <DatePicker
                selected={this.state.startDate}
                onChange={e => this.handleBedtimeChange(e)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
              />
            </form>
        </label>

        <br /><br />

        <label>
          <h4>Wakeup Target:</h4>
            <form onSubmit={e => this.handleSubmit(this.handleChange, this.handleBedtimeChange, this.handleWaketimeChange, e)}>
              <DatePicker
                selected={this.state.startDate}
                onChange={e => this.handleWaketimeChange(e)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
              />
              <br />
              <input type='submit'/>
            </form>
        </label>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    goalDate: state.goalDate,
    bedtimeTarget: state.bedtimeTarget,
    wakeupTarget: state.wakeupTarget
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (goalDate, bedtimeTarget, wakeupTarget, token) => {
      dispatch(fetchSleepGoals(goalDate, bedtimeTarget, wakeupTarget, token))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SleepForm)
