import React from "react";

import styles from "./image.module.css";

const Image = ({ setImage, imageTitle }) => {
  return (
    <div className={styles["imageCont"]}>
      <img src={setImage} className={styles["imageStyle"]} alt={imageTitle} />
    </div>
  );
};

export default Image;
