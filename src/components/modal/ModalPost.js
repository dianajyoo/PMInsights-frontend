import React from 'react';
import GoalForm from '../goals/GoalForm';
import { Modal } from 'semantic-ui-react';

import '../../stylesheets/Modal.css';

class ModalPost extends React.Component {
  state = {
    showModal: false
  };

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;

    return (
      <Modal
        size='tiny'
        closeIcon
        onClose={this.closeModal}
        open={showModal}
        trigger={
          <span className='addGoal' onClick={this.openModal}>
            Add Goal
          </span>
        }
      >
        {/* <Modal.Header className='goalHeader'>Goal</Modal.Header> */}
        <Modal.Content id='goalForm'>
          <GoalForm />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalPost;