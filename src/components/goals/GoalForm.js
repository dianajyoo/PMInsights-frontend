import React from 'react'
import { connect } from 'react-redux'
import { fetchSleepGoals,fetchBackendUserData, fetchUserData, fetchEditedGoals } from '../../store/actionCreators/userActions'

import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import '../../styling/GoalForm.css'

import { Form, Container, Grid } from 'semantic-ui-react'

class GoalForm extends React.Component {

  state = {
    startDate: new Date(),
    dateEvent: {},
    bedtimeEvent: {},
    wakeupEvent: {}
  }

  componentDidMount() {

    const userToken = localStorage.getItem('token')

    if (userToken) {
      this.props.sleepInfo('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }

    if (this.props.user.user) {
      this.props.backendUser(this.props.token, this.props.user.user)
    }
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

    this.setState({
      bedtimeEvent: e
    })

    if (militaryHour > 12) {
      militaryHour -= 12
      console.log(militaryHour.toString() + ':' + minutes + ' PM')
      return militaryHour.toString() + ':' + minutes + ' PM'
    } else {
      console.log(militaryHour.toString() + ':' + minutes + ' AM')
      return militaryHour.toString() + ':' + minutes + ' AM'
    }
  }

  handleWaketimeChange = (e) => {

    let militaryHour = Number(e.toString().split(' ')[4].split(':')[0])
    let minutes = e.toString().split(' ')[4].split(':')[1]

    this.setState({
      wakeupEvent: e
    })

    if (militaryHour > 12) {
      militaryHour -= 12
      console.log(militaryHour.toString() + ':' + minutes + ' PM')
      return militaryHour.toString() + ':' + minutes + ' PM'
    } else {
      console.log(militaryHour.toString() + ':' + minutes + ' AM')
      return militaryHour.toString() + ':' + minutes + ' AM'
    }
  }

  handleSubmit = (handleChange, handleBedtimeChange, handleWaketimeChange, e) => {
    e.preventDefault()

    if (window.location.href.includes('edit')) {
      this.props.editedGoals(this.props.id,
        this.handleChange(this.state.dateEvent), this.handleBedtimeChange(this.state.bedtimeEvent),
        this.handleWaketimeChange(this.state.wakeupEvent), this.props.token)
    }
    else {
      this.props.sleepGoal(this.handleChange(this.state.dateEvent), this.handleBedtimeChange(this.state.bedtimeEvent), this.handleWaketimeChange(this.state.wakeupEvent), this.props.fitBitUser, this.props.token)
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
                        <Form.Group style={{minWidth:3}} >
                          <DatePicker
                            className='datepicker'
                            isClearable={false}
                            selected={this.state.startDate}
                            onChange={e => this.handleChange(e)}
                          />
                        </Form.Group>
                    </label>

                    <label>
                      Bedtime Target
                        <Form.Group >
                          <DatePicker
                            className='datepicker'
                            isClearable={false}
                            selected={this.state.startDate}
                            onChange={e => this.handleBedtimeChange(e)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
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
                            isClearable={false}
                            selected={this.state.startDate}
                            onChange={e => this.handleWaketimeChange(e)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat='h:mm aa'
                            timeCaption='Time'
                          />
                        </Form.Group>
                    </label>

                    <button className="circular ui icon button" id='submit-btn'>
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
    token: state.user.token,
    fitBitUser: state.user.fitBitUser,
    goalDate: state.setGoal.goalDate,
    bedtimeTarget: state.setGoal.bedtimeTarget,
    wakeupTarget: state.setGoal.wakeupTarget
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sleepGoal: (goalDate, bedtimeTarget, wakeupTarget, user, token) => {
      console.log("in mapDispatchToProps", user);
      dispatch(fetchSleepGoals(goalDate, bedtimeTarget, wakeupTarget, user, token))
    },
    backendUser: (token, user) => {
      dispatch(fetchBackendUserData(token, user))
    },
    editedGoals: (goalId, goalDate, bedTimeTarget, wakeupTarget, token) => {
      dispatch(fetchEditedGoals(goalId, goalDate, bedTimeTarget, wakeupTarget, token))
    },
    sleepInfo: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)
