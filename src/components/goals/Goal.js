import React from 'react'
import EditGoal from './EditGoal'
import ModalManager from '../ModalManager'
import ModalEdit from '../ModalEdit'

import { connect } from 'react-redux'
import { fetchUserData, fetchDeleteGoal } from '../../store/actionCreators/userActions'

class Goal extends React.Component {

  componentDidMount() {
    const userToken = localStorage.getItem('token')

    if (userToken) {
      this.props.user('https://api.fitbit.com/1/user/-/profile.json', userToken)
    }

  }

  handleEdit = () => {
    // this.props.props.history.replace(`/my_goals/edit/${this.props.goal.id}`)

    this.props.handleClickedGoal(this.props.goal)
  }

  handleDelete = () => {
    this.props.deleteGoal(this.props.goal.id, this.props.token)
  }

  render() {
    return (
      <div className='goal'>
        <div className='two wide column'>
          <h3>{this.props.goal.goalDate}</h3>
          <h4>Bedtime Target</h4>  {this.props.goal.bedtimeTarget}
          <h4>Wakeup Time Target</h4> {this.props.goal.wakeupTarget}

          <br />

          <button id='edit-btn' className='circular ui icon button' >
            <ModalEdit editGoal={this.handleEdit} goal={this.props.goal} />
          </button>

          <button id='delete-btn' className='circular ui icon button' onClick={this.handleDelete}>
            <i className='close icon'></i>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteGoal: (goalId, access_token) => dispatch(fetchDeleteGoal(goalId, access_token)),
    user: (url, access_token) => dispatch(fetchUserData(url, access_token))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Goal)

// this.props.goal.id === parseInt(this.props.props.match.params.goalId) ?
//   <EditGoal props={this.props.props} goal={this.props.goal} handleEdit={this.handleEdit} /> :
// (<div className='goal'>
