import React from "react";

import GalleryImage from "../../assets/ngv-abf-2020-1-1.png";

import styles from "./gallerypage.module.css";

const galleryPage = (props) => {
  return (
    <div className={styles["outer"]}>
      <div className={styles[("container", "column")]}>
        <div className={styles["left-col"]}>
          <div className={styles["fullheight"]}>
            <h1>GALLERY</h1>
          </div>
        </div>
      </div>

      <div className={styles[("container", "column")]}>
        <div className={styles["imageCont"]}>
          <img src={GalleryImage} className={styles["imageStyle"]} />
        </div>
        <div className={styles["textbox"]}>
          <div className={styles["text-img"]}>
            <span className={styles["rotation"]}>
              <span>
                NOW SHOWING: THE ANOMALOUS
                <br />
                IMAGE, BY TRENT CRAWFORD.
              </span>
            </span>
          </div>
          <p>
            I know this image is not the server but imagine we have a nice,
            well-lit photo of the server in situ.
            <br></br>
            Insert information about the server, and the artist who designed.
            Link to page with more in-depth info. Text for future exhibits will
            be placed here. Insert information about the server, and the artist
            who designed. Link to page with more in-depth info. Text for future
            exhibits will be placed here. Insert information about the server,
            and the artist who designed. Link to page with more in-depth info.
            Text for future exhibits will be placed here. Insert information
            about the server, and the artist who designed. Link to page with
            more in-depth info. Text for future exhibits will be placed here.
            <br></br>
            Insert information about the server, and the artist who designed.
            Link to page with more in-depth info. Text for future exhibits will
            be placed here. Insert information about the server, and the artist
            who designed. Link to page with more in-depth info. Text for future
            exhibits will be placed here. Insert information about the server,
            and the artist who designed. Link to page with more in-depth info.
            Text for future exhibits will be placed here. Insert information
            about the server, and the artist who designed. Link to page with
            more in-depth info. Text for future exhibits will be placed here.
            <br></br>
            Insert information about the server, and the artist who designed.
            Link to page with more in-depth info. Text for future exhibits will
            be placed here. Insert information about the server, and the artist
            who designed. Link to page with more in-depth info. Text for future
            exhibits will be placed here. Insert information about the server,
            and the artist who designed. Link to page with more in-depth info.
            Text for future exhibits will be placed here. Insert information
            about the server, and the artist who designed. Link to page with
            more in-depth info. Text for future exhibits will be placed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default galleryPage;
