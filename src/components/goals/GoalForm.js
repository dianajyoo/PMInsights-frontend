import React from 'react'
import { connect } from 'react-redux'
import { addSleepGoal, updateGoal } from '../../store/actionCreators/goalActions'
import { fetchBackendUserData } from '../../store/actionCreators/userActions'

import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import '../../styling/GoalForm.css'

import { Form, Container, Grid } from 'semantic-ui-react'

class GoalForm extends React.Component {

  state = {
    startDate: new Date(),
    bedtime: "",
    wakeupTime: ""
  }

  componentDidMount() {

    if (this.props.user.user) {
      this.props.backendUser(this.props.user.user)
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
      // dateEvent: e
    })
  }

  // handleChange = (e, date) => {
  //
  //   this.setState({
  //     startDate: date,
  //     dateEvent: e
  //   })
  //
  //   return e.toString().split(' ').slice(0, 4).join(' ')
  // }

  handleBedtimeChange = (date) => {

    let hours = date.getHours(),
        minutes = '0' + date.getMinutes(),
        formattedTime = hours + ':' + minutes.substr(-2)

    this.setState({
      bedtime: formattedTime
    })
  }

  // handleBedtimeChange = (e) => {
  //
  //   let militaryHour = Number(e.toString().split(' ')[4].split(':')[0])
  //   let minutes = e.toString().split(' ')[4].split(':')[1]
  //
  //   this.setState({
  //     bedtimeEvent: e
  //   })
  //
  //   if (militaryHour > 12) {
  //     militaryHour -= 12
  //     return militaryHour.toString() + ':' + minutes + ' PM'
  //   } else {
  //     return militaryHour.toString() + ':' + minutes + ' AM'
  //   }
  // }

  handleWaketimeChange = (date) => {

    let hours = date.getHours(),
        minutes = '0' + date.getMinutes(),
        formattedTime = hours + ':' + minutes.substr(-2)

    this.setState({
      wakeupTime: formattedTime
    })
  }

  // handleWaketimeChange = (date) => {
  //
  //   let militaryHour = Number(e.toString().split(' ')[4].split(':')[0])
  //   let minutes = e.toString().split(' ')[4].split(':')[1]
  //
  //   this.setState({
  //     wakeupEvent: e
  //   })
  //
  //   if (militaryHour > 12) {
  //     militaryHour -= 12
  //     return militaryHour.toString() + ':' + minutes + ' PM'
  //   } else {
  //     return militaryHour.toString() + ':' + minutes + ' AM'
  //   }
  // }

  handleSubmit = (handleChange, handleBedtimeChange, handleWaketimeChange, e) => {
    e.preventDefault()

    if (this.props.editGoal) {
      this.props.editedGoal(this.props.goal.id,
        this.state.startDate, this.state.bedtime,
        this.state.wakeupTime)
        // this.props.editedGoal(this.props.goal.id,
        //   this.handleChange(this.state.dateEvent), this.handleBedtimeChange(this.state.bedtimeEvent),
        //   this.handleWaketimeChange(this.state.wakeupEvent))
    } else {
      // this.props.sleepGoal(this.handleChange(this.state.dateEvent), this.handleBedtimeChange(this.state.bedtimeEvent),
      // this.handleWaketimeChange(this.state.wakeupEvent), this.props.fitBitUser)
      this.props.sleepGoal(this.state.startDate, this.state.bedtime, this.state.wakeupTime, this.props.fitBitUser)
    }
  }

  render() {
    return (
      <div className='goal-form'>
        <Container>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <div className='form'>
                  <Form onSubmit={(e) => this.handleSubmit(this.handleChange, this.handleBedtimeChange, this.handleWaketimeChange, e)}>

                    <label>
                      Goal Date
                        <Form.Group >
                          <DatePicker
                            className='datepicker'
                            selected={this.state.startDate}
                            // onChange={e => this.handleChange(e)}
                            onChange={this.handleChange}
                          />
                        </Form.Group>
                    </label>

                    <label>
                      Bedtime Target
                        <Form.Group >
                          <DatePicker
                            className='datepicker'
                            onChange={this.handleBedtimeChange}
                            selected={this.state.startDate}
                            // dateFormat="Pp"
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeFormat='HH:mm'
                            dateFormat='h:mm aa'
                            timeCaption='Time'
                          />
                        </Form.Group>
                    </label>

                    <label>
                      Wakeup Time Target
                        <Form.Group >
                          <DatePicker
                            className='datepicker'
                            onChange={this.handleWaketimeChange}
                            selected={this.state.startDate}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeFormat='HH:mm'
                            dateFormat='h:mm aa'
                            timeCaption='Time'
                          />
                        </Form.Group>
                    </label>

                    <button className="circular ui icon button">
                      <i className="plus icon"></i>
                    </button>

                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    fitBitUser: state.user.fitBitUser,
    goalDate: state.goal.goalDate,
    bedtimeTarget: state.goal.bedtimeTarget,
    wakeupTarget: state.goal.wakeupTarget
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sleepGoal: (goalDate, bedtimeTarget, wakeupTarget, user) => {
      console.log("in mapDispatchToProps", user);
      dispatch(addSleepGoal(goalDate, bedtimeTarget, wakeupTarget, user))
    },
    backendUser: (user) => {
      dispatch(fetchBackendUserData(user))
    },
    editedGoal: (goalId, goalDate, bedTimeTarget, wakeupTarget) => {
      dispatch(updateGoal(goalId, goalDate, bedTimeTarget, wakeupTarget))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)
