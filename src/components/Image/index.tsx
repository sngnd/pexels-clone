import { FC, useEffect } from "react";
import styles from "./Image.module.css";
import { Photo } from "pexels";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/actions/modalActions";
import { LikeButton } from "../";

interface ImageProps {
  image: Photo;
}

const Image: FC<ImageProps> = ({ image }) => {
  const dispatch = useDispatch();

  const onImageClickHandler = (e: any, image: Photo) => {
    e.preventDefault();
    if (
      !e.target.closest(`.${styles.card__more}`) &&
      !e.target.closest(`.${styles.card__photographer}`)
    ) {
      dispatch(
        showModal({
          imageSrc: image.src,
          imageId: image.id,
        })
      );
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: `${image.avg_color}` }}
      onClick={(e) => onImageClickHandler(e, image)}
    >
      <img
        src={image.src.large}
        className={styles.card__image}
        width="100%"
      ></img>
      <a
        className={styles.card__photographer}
        onClick={() => window.open(`${image.photographer_url}`, "_blank")}
      >
        {image.photographer}
      </a>
      <div className={styles.card__more}>
        <LikeButton id={image.id} />
      </div>
    </div>
  );
};

export { Image };
