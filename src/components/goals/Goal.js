import React from 'react';
import ModalEdit from '../modal/ModalEdit';
import { connect } from 'react-redux';
import { destroyGoal } from '../../store/actionCreators/goalActions';

import '../../stylesheets/Goal.css';

class Goal extends React.Component {
  handleDelete = () => {
    this.props.deleteGoal(this.props.goal.id);
  };

  render() {
    const { goal } = this.props;

    return (
      <div className='goalCard'>
        <h3 className='goalDateField'>{goal.goalDate ? goal.goalDate.split('T')[0] : null}</h3>
        <p className='goalField'>{goal.goal ? goal.goal : null}</p>
        <button id='editButton' className='circular ui icon button'>
          <ModalEdit goal={this.props.goal} />
        </button>
        <button
          id='deleteButton'
          className='circular ui icon button'
          onClick={this.handleDelete}
        >
          <i className='close icon large'></i>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteGoal: (goalId) => dispatch(destroyGoal(goalId))
  };
};

export default connect(null, mapDispatchToProps)(Goal);