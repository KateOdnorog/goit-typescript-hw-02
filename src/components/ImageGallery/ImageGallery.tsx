import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { FC } from "react";
import { TypeImages } from "../../types/types";

interface ImageGalleryProps {
  images: TypeImages[];
  onClickImg: (id: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClickImg }) => {
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
