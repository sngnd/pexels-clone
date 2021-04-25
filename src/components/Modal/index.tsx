import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store/actions/modalActions";
import { RootState } from "../../store/reducers/rootReducer";
import styles from "./Modal.module.css";
import DownloadButton from "./DownloadButton";
import { LikeButton } from "../LikeButton";

const Modal: FC = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.modal);

  if (modal === null) {
    return null;
  }

  const closeModalHandler = (event?: any) => {
    dispatch(hideModal());
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={styles.modal__wrapper}
      onClick={(event) => closeModalHandler(event)}
    >
      <button className={styles.modal__close}>&#10005;</button>
      <div
        className={styles.modal__content}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.modal__actions}>
          <div className={styles.modal__download}>
            <DownloadButton imageSrc={modal.imageSrc} />
          </div>
          <div className={styles.modal__like}>
            <LikeButton id={modal.imageId} />
          </div>
        </div>
        <div className={styles.modal__info}>
          <div className={styles.modal__imageWrapper}>
            <img
              src={modal.imageSrc.large}
              alt=""
              className={styles.modal__image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
