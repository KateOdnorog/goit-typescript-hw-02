import s from "./ImageModal.module.css";
import Modal from "react-modal";
import { FC } from "react";
import { TypeImages } from "../../types/types";

interface ImageModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  modalImage: TypeImages | null;
}

const ImageModal: FC<ImageModalProps> = ({
  isModalOpen,
  closeModal,
  modalImage,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "darkgrey",
    },
    content: {
      display: "flex",
      placeItems: "center",
    },
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
        style={customStyles}
      >
        <img
          className={s.imageModal}
          src={modalImage?.urls.full}
          alt={modalImage?.alt_description}
        />
      </Modal>
    </div>
  );
};

export default ImageModal;
