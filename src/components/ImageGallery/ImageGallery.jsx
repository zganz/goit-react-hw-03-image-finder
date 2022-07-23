import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(function (image) {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image.webformatURL}
            id={image.id}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};
