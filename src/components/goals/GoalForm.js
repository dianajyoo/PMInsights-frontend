import React from 'react'
import { connect } from 'react-redux'
import { fetchSleepGoals, fetchBackendUserData, fetchUserData, fetchEditedGoals } from '../../actionCreators/userActions'

import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

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
      this.props.fetchSleepData('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }

    if (this.props.user.user) {
      this.props.fetchUserData(this.props.token, this.props.user.user)
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

    if (window.location.href.includes('edit')) {
      this.props.fetchEditedGoals(this.props.id,
        this.handleChange(this.state.dateEvent), this.handleBedtimeChange(this.state.bedtimeEvent), this.handleWaketimeChange(this.state.wakeupEvent), this.props.token)
    }
    else {
      this.props.fetchData(this.handleChange(this.state.dateEvent), this.handleBedtimeChange(this.state.bedtimeEvent), this.handleWaketimeChange(this.state.wakeupEvent), this.props.fitBitUser, this.props.token)
    }
  }

  render() {
    return (
      <div className='goal-form'>
        <Container>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <Form onSubmit={(e) => this.handleSubmit(this.handleChange, this.handleBedtimeChange, this.handleWaketimeChange, e)}>

                  <label>
                    <h4>Goal Date:</h4>
                      <Form.Group >
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={e => this.handleChange(e)}
                        />
                      </Form.Group>
                  </label>

                  <br /><br />

                  <label>
                    <h4>Bedtime Target:</h4>
                      <Form.Group >
                        <DatePicker
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

                  <br /><br />

                  <label>
                    <h4>Wakeup Time Target:</h4>
                      <Form.Group >
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={e => this.handleWaketimeChange(e)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          dateFormat='h:mm aa'
                          timeCaption='Time'
                        />
                        <br /><br />
                        <input type='submit'/>
                      </Form.Group>
                  </label>

                </Form>
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
    user: state.user,
    token: state.token,
    goalDate: state.goalDate,
    bedtimeTarget: state.bedtimeTarget,
    wakeupTarget: state.wakeupTarget,
    fitBitUser: state.fitBitUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (goalDate, bedtimeTarget, wakeupTarget, user, token) => {
      console.log("in mapDispatchToProps", user);
      dispatch(fetchSleepGoals(goalDate, bedtimeTarget, wakeupTarget, user, token))
    },
    fetchUserData: (token, user) => {
      dispatch(fetchBackendUserData(token, user))
    },
    fetchEditedGoals: (goalId, goalDate, bedTimeTarget, wakeupTarget, token) => {
      dispatch(fetchEditedGoals(goalId, goalDate, bedTimeTarget, wakeupTarget, token))
    },
    fetchSleepData: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)
