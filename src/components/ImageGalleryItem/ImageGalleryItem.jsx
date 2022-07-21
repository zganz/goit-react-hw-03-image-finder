export const ImageGalleryItem = ({ image, id }) => {
  const handleLoad = () => {
    console.log(id);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        onLoad={handleLoad}
        src={image}
        alt=""
      />
    </li>
  );
};
