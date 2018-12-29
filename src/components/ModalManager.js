import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

import GoalForm from './goals/GoalForm'
import '../styling/ModalManager.css'

class ModalManager extends React.Component {

  state = {
    showModal: false
  }

  handleClose = (e) => {
    e.preventDefault()

    this.closeModal()
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const { showModal } = this.state

    return (
      <Modal className='ui tiny modal' closeIcon onClose={this.closeModal} open={showModal}
      trigger={<span onClick={() => this.setState({ showModal: true })}>Add Sleep Goal</span>}>
        <Modal.Header id='header'>Add Sleep Goal</Modal.Header>
        <Modal.Content id='content'>
          <GoalForm handleClose={this.handleClose} />
        </Modal.Content>
      </Modal>
    )
  }
}

export default ModalManager
