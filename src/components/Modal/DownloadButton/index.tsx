import { Photo } from "pexels";
import { ReactNode } from "react";
import { FC, useState } from "react";
import styles from "../Modal.module.css";

interface DownloadButtonProps {
  imageSrc: Photo["src"];
}

const SIZES = ["original", "large", "medium", "small"];

const DownloadButton: FC<DownloadButtonProps> = ({ imageSrc }) => {
  const [active, setActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const getSizeList = (): ReactNode => {
    let keyArray: Array<string> = [];
    for (let key in imageSrc) {
      if (SIZES.includes(key)) {
        keyArray.push(key);
      }
    }
    return keyArray.map((key) => {
      return (
        <li
          className={styles.dropdown__menu_item}
          key={key + new Date().getMilliseconds()}
          style={
            selectedSize === `${key}`
              ? { backgroundColor: "rgb(210, 210, 210)" }
              : undefined
          }
        >
          <label htmlFor={key}>
            <input
              name="size"
              type="radio"
              id={key}
              value={key}
              className={styles.dropdown__menu_radio}
              onChange={(event) => {
                setSelectedSize(event.currentTarget.value);
                setActive(active ? false : true);
              }}
              checked={selectedSize === `${key}`}
            />
            {key}
          </label>
        </li>
      );
    });
  };

  const onDownloadHandler = () => {
    const key = selectedSize as keyof Photo["src"];
    const url = imageSrc[key];
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobURL;
        a.style.display = "none";
        a.download = selectedSize;
        a.click();
      });
  };

  return (
    <div
      className={
        active
          ? `${styles.dropdown__container} ${styles.active}`
          : styles.dropdown__container
      }
    >
      <button className={styles.dropdown__name} onClick={onDownloadHandler}>
        Download
      </button>
      <button
        className={styles.dropdown__toggle}
        onClick={() => setActive((prev: boolean) => (prev ? false : true))}
      ></button>
      <div className={styles.dropdown__menu}>
        <ul>{getSizeList()}</ul>
      </div>
    </div>
  );
};

export default DownloadButton;
