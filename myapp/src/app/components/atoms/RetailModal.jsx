import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RetailModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle} className={className}>
        <ModalBody>
          <h4>{props.title}</h4>
        </ModalBody>
        <ModalFooter>
          <Button color={props.color} onClick={props.toggle} >Okay</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RetailModal;