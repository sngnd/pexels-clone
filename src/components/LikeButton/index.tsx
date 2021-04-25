import { FC, useState } from "react";
import styles from "./LikeButton.module.css";

interface LikeButtonProps {
  id: number;
}

const LikeButton: FC<LikeButtonProps> = ({ id }) => {
  const [liked, setLiked] = useState(false);

  const onLikeHandler = (id: number): void => {
    let storedLikes = localStorage.getItem("likes");
    liked ? setLiked(false) : setLiked(true);
    let likes = [];
    if (storedLikes != null) {
      storedLikes = JSON.parse(storedLikes);
      if (typeof storedLikes?.length !== "undefined") {
        for (let i = 0; i < storedLikes?.length; i++) {
          likes.push(storedLikes[i]);
        }
        if (isImageLiked(id)) {
          const index = likes.indexOf(id.toString());
          console.log(index);
          likes.splice(index, 1);
        } else {
          likes.push(id.toString());
        }
      }
    }
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  const isImageLiked = (id: number) => {
    let storedLikes = localStorage.getItem("likes");
    if (storedLikes != null) {
      storedLikes = JSON.parse(storedLikes);
      if (storedLikes?.includes(id.toString())) {
        return true;
      }
    }
    return false;
  };

  return (
    <button
      className={
        isImageLiked(id) ? `${styles.like} ${styles.active}` : `${styles.like}`
      }
      onClick={(e) => {
        e.preventDefault();
        onLikeHandler(id);
      }}
    >
      ❤
    </button>
  );
};

export { LikeButton };
