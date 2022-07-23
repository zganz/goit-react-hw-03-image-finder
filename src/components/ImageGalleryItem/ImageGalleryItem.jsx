import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ image, toggleModal, id }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image}
        alt=""
        onClick={() => toggleModal(id)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
