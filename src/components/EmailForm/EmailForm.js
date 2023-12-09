import { useState } from "react";
import React from "react";

import styles from "./email.module.css";

const EmailForm = () => {
  const [emailVisibility, setEmailVisibility] = useState(false);

  const toggleEmailVisibility = () => {
    setEmailVisibility(!emailVisibility);
  };

  if (emailVisibility)
    return (
      <>
        <div className={styles["klaviyo-container"]}>
          <div
            className={styles["expand-btn"]}
            onClick={toggleEmailVisibility}
          ></div>
          <div
            className={` ${styles["klaviyo-form"]} ${
              emailVisibility ? "" : styles["hidden"]
            }`}
          >
            {" "}
            <div class="klaviyo-form-WdFuEM"></div>
          </div>
        </div>
      </>
    );
};

export default EmailForm;
