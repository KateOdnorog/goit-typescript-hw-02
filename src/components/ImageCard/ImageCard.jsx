import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClickImg }) => {
  return (
    <div>
      <img
        className={s.imageCard}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClickImg(image.id)}
      />
    </div>
  );
};

export default ImageCard;
