import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { ImageModalProps } from "../../types";


const ImageModal : React.FC <ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
    >
      <button className={s.close} onClick={onClose}>
        Close
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={s.image}
      />
      <h3>{image.description || "No description available"}</h3>
      <p>Likes: {image.likes}</p>
      <p>Author: {image.user.name || "Unknown"}</p>
    </Modal>
  );
};

export default ImageModal;