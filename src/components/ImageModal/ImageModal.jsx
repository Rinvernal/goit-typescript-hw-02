import Modal from "react-modal";
import PropTypes from "prop-types";
import s from "./ImageModal.module.css";


const ImageModal = ({ isOpen, onClose, image }) => {
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

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object,
};

export default ImageModal;