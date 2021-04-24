import { useState, FC, useEffect, MouseEvent } from "react";
import styles from "./Image.module.css";
import { Photo } from "pexels";

interface ImageProps {
  image: Photo;
  openModal: (e: MouseEvent, image: Photo) => void;
  onLikeHandler: (id: number) => void;
  isImageLiked: boolean;
}

const Image: FC<ImageProps> = ({
  image,
  openModal,
  onLikeHandler,
  isImageLiked,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: `${image.avg_color}` }}
      onClick={(e) => openModal(e, image)}
    >
      <img
        src={image.src.portrait}
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
        <button
          className={
            isImageLiked
              ? `${styles.card__more_like} ${styles.active}`
              : `${styles.card__more_like}`
          }
          onClick={(e) => {
            e.preventDefault();
            onLikeHandler(image.id);
          }}
        >
          ❤
        </button>
      </div>
    </div>
  );
};

export default Image;
