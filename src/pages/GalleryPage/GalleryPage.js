import React from "react";

import GalleryImage from "../../assets/ngv-abf-2020-1-1.png";

import PageTitle from "../../components/PageTitle/PageTitle";

import Image from "../../components/Image/Image";

import styles from "./gallerypage.module.css";

const galleryPage = (props) => {
  return (
    <div className={styles["outer"]}>
      <div className={styles["left-col"]}>
        <PageTitle title={"GALLERY"} />
        <div className={styles["text-img"]}>
          <span>
            <h1>
              NOW SHOWING: THE ANOMALOUS
              <br />
              IMAGE, BY TRENT CRAWFORD.
            </h1>
          </span>
        </div>
      </div>

      <div className={styles[("container", "column")]}>
        <Image setImage={GalleryImage} />
        <div className={styles["textbox"]}>
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
