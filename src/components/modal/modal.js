import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import GenericButton from '../button/genericButton';

const GenericModal = (props) => {
  const {name, mainForm, mainFunc} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onClickHandler = () => {
    mainFunc();
    handleClose();
  }

  return (
    <>
      <GenericButton buttonName={name} buttonClass="buttonClass" clickFunc={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mainForm}
        </Modal.Body>
        <Modal.Footer>
        <GenericButton buttonName="Close" buttonClass="buttonClass" clickFunc={handleClose}/>
        <GenericButton buttonName={name} buttonClass="buttonClass" clickFunc={onClickHandler}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GenericModal