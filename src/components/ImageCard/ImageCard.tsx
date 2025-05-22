import s from "./ImageCard.module.css";
import { FC } from "react";
import { TypeImages } from "../../types/types";

interface ImageCardProps {
  image: TypeImages;
  onClickImg: (id: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClickImg }) => {
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
