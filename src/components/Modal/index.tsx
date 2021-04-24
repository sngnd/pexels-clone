import { FC } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  closeModal: () => void;
  authorName: string;
  authorSrc: string;
  imageSrc: Object;
}

const Modal: FC<ModalProps> = ({
  closeModal,
  authorName,
  authorSrc,
  imageSrc,
}) => {
  return (
    <div className={styles.modal__wrapper}>
      <button className={styles.modal__close} onClick={closeModal}>
        X
      </button>
      <div className={styles.modal__content}>
        <div className={styles.modal__info}></div>
      </div>
    </div>
  );
};

export default Modal;
