import React, { Component } from 'react';
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import SetProfile from './UpdateProfile';

class UpdateProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  getInitialState() {
    return { showModal: false };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  render = () => {
    return (
      <div>
        <Button onClick={this.open} bsStyle="primary">
          <h4>Update Stats</h4>
        </Button>
        <Modal
          show={this.state.showModal}
          onHide={this.close}
          style={{
            position: 'absolute',
            display: 'block',
            top: '20vh',
            margin: 'auto',
            transform: 'translate(-50%, -50%) !important'
          }}>
          <ModalHeader>
            <Modal.Title>Update your profile</Modal.Title>
          </ModalHeader>
          <ModalBody>
            <SetProfile />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.close}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };
}

export default UpdateProfileModal;
