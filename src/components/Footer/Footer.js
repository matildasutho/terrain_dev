import React from "react";

import styles from "./footer.module.css";

const Footer = () => (
  <div className={styles["footer"]}>
    <div className={styles["footer-l"]}></div>
    <div className={styles["footer-section"]}>
      <span className={styles["footer-r"]}>©2023</span>
      <span>
        <p>
          <a href="/privacypolicy">Privacy Policy</a> and{" "}
          <a href="/termsconditions">Terms and Conditions</a>.<br></br>
        </p>
      </span>
      <span className="footer-txt">
        <p>This is a renewably-powered self-hosted website.</p>
      </span>
      <span className="footer-txt">
        <p>
          Built by{" "}
          <a href="https://girlonroad.tech/" target="_blank">
            Girl On Road
          </a>
          .
        </p>
      </span>
    </div>
  </div>
);

export default Footer;
