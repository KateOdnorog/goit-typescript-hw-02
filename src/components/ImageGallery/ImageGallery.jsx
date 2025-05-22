import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onClickImg }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClickImg={onClickImg} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
