import React from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { postGoal, updateGoal } from '../../store/actionCreators/goalActions';
import { getBackendUser } from '../../store/actionCreators/userActions';
import { Form, Input, Button } from 'semantic-ui-react';

import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import '../../stylesheets/GoalForm.css';

class GoalForm extends React.Component {
  state = {
    goalDate: new Date(),
    goal: ''
  }
  
  componentDidMount() {
    const { user, backendUser } = this.props;

    if (user.user) {
      backendUser(user.user);
    }
  }

  handleDateChange = (e) => {
    this.setState({
      goalDate: new Date(e)
    });
  };

  handleChange = (e) => {
    this.setState({
      goal: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { shouldEditGoal, editGoal, addGoal, user } = this.props;
    const { goalDate, goal } = this.state;

    if (shouldEditGoal) {
      editGoal(this.props.goal.id, goalDate, goal);
    } else {
      addGoal(goalDate, goal, user);
    }
  };

  render() {
    const { goalDate } = this.state;

    return (
      <Form className='goalForm' onSubmit={this.handleSubmit}>
        <label>Date</label>
        <Input className='dateInput' size='big'>
          <DatePicker
            className='datePicker'
            selected={goalDate}
            onChange={this.handleDateChange}
          />
        </Input>

        <label>Goal</label>
        <Input
          transparent
          className='goalInput'
          size='big'
          placeholder='My goal today is...'
          onChange={this.handleChange}
        />

        <Button className='submitButton' circular icon='plus' size='large' />
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    fitBitUser: state.user.fitBitUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: (goalDate, goal, user) => {
      dispatch(postGoal(goalDate, goal, user));
    },
    backendUser: (user) => {
      dispatch(getBackendUser(user));
    },
    editGoal: (goalId, goalDate, goal) => {
      dispatch(updateGoal(goalId, goalDate, goal));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm);