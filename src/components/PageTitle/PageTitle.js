import React from "react";
import styles from "./pagetitle.module.css";

const PageTitle = ({ title }) => {
  return (
    <span className={styles["rotation"]}>
      <h1>{title}</h1>
    </span>
  );
};

export default PageTitle;
