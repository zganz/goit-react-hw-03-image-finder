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
