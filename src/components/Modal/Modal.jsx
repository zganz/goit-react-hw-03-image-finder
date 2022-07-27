import React from 'react';
import PropTypes from 'prop-types';
export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape' && this.props.showModal) {
        this.props.toggleModal();
      }
    });
  }

  render() {
    return (
      <div className="Overlay" onClick={this.props.toggleModal}>
        <div className="Modal">
          <img src={this.props.modalImgUrl} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImgUrl: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
