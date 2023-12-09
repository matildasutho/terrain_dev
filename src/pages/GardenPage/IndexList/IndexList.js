import React from "react";
import styles from "./indexlist.module.css";

const IndexItem = ({ text, onClick, counts, isActive }) => (
  <div
    className={styles["resourceMenuItem"]}
    onClick={() => onClick(text?.toLowerCase())}
  >
    <div
      className={`${styles["list-cat"]} ${
        isActive ? styles["activeItem"] : ""
      }`}
    >
      <div className={styles["text-wrapper"]}>{text}</div>
      <div className={styles["counter"]}>{counts[text]}</div>
    </div>
  </div>
);

export default IndexItem;
