import PropTypes from 'prop-types';
export const Modal = ({ modalImgUrl, toggleModal }) => {
  return (
    <div className="Overlay" onClick={toggleModal}>
      <div className="Modal">
        <img src={modalImgUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImgUrl: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
