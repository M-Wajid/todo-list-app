import Modal from 'react-bootstrap/Modal';
import GenericButton from '../button/genericButton';

const GenericModal = (props) => {
  const {show, setShow, name, mainForm, mainFunc} = props;

  const handleClose = () => setShow(false);

  const onClickHandler = () => {
    mainFunc();
    handleClose();
  }

  return (
    <>
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