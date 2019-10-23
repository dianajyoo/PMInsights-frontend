import React from 'react';
import GoalForm from '../goals/GoalForm';
import { Modal } from 'semantic-ui-react';

import '../../stylesheets/Modal.css';

class ModalEdit extends React.Component {
  state = {
    showModal: false,
    shouldEditGoal: false
  };

  openModal = () => {
    this.setState({ showModal: true, shouldEditGoal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false, showEditGoal: false });
  };
  
  render() {
    const { showModal } = this.state;
    const { goal } = this.props;

    return (
      <Modal
        size='tiny'
        closeIcon
        onClose={this.closeModal}
        open={showModal}
        trigger={
          <span onClick={this.openModal}>
            <i className='edit outline icon large'></i>
          </span>
        }
      >
        {/* <Modal.Header id='edit-header'>Edit Sleep Goal</Modal.Header> */}
        <Modal.Content id='goalForm'>
          <GoalForm shouldEditGoal={this.state.shouldEditGoal} goal={goal} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalEdit;