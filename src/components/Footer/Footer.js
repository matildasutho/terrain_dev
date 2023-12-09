import React from "react";

import styles from "./footer.module.css";

const Footer = () => (
  <div className={styles["footer"]}>
    <div className={styles["footer-section"]}>
      {/* <span className={styles["titletext"]}>
        <span className={styles["footer-rotation"]}>PHYSICAL</span>
      </span>
      <div className={styles["hours"]}>
        <p>
          <b>
            BOOKSHOP & <br></br>
            GALLERY OPEN
          </b>
        </p>

        <p>WED-FRI</p>
        <p>1200H-1900H</p>
        <p>SAT-SUN</p>
        <p>1100H-1700H</p>
      </div>

      <div className={styles["address"]}>
        <p>37.80444° S 144.97729° E</p>
        <p>101-103 BRUNSWICK ST</p>
        <p>NGÁR-GO/FITZROY</p>
        <p>WURUNDJERI LAND</p>
      </div>
      <br></br> */}
    </div>
    <div className={styles["footer-section"]}>
      {/* <span className={styles["titletext"]}>
        <span className={styles["footer-rotation"]}>DIGITAL</span>
      </span>

      <div className={styles["links"]}>
        <a>INSTAGRAM</a>

        <a>ARE.NA</a>

        <a>URBIT</a>

        <a>TWITTER</a>

        <a>SPOTIFY</a>
      </div> */}
    </div>
    <div className={styles["footer-section"]}>
      <span className={styles["footer-r"]}>
        ©2023
        {/* <p>
          Copyright&nbsp;
          <h2>TERRAIN</h2>
          &nbsp;2023. For further information please read our &nbsp;
          <span>
            <a>Privacy Policy</a>
          </span>
          &nbsp;and&nbsp;
          <span>
            <a>Terms and Conditions</a>
          </span>
          .
        </p> */}
      </span>
    </div>
  </div>
);

export default Footer;
