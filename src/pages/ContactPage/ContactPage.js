import React from "react";

import styles from "./contact.module.css";

import PageTitle from "../../components/PageTitle/PageTitle";

const ContactPage = () => {
  return (
    <div className={styles["outer"]}>
      <div className={styles["contactPage"]}>
        <PageTitle title={"CONTACT"} />
        <div className={styles[("container", "column")]}>
          <div className={styles["fullheight"]}>
            <div className={styles["textbox"]}>
              <p>
                101-103 Brunswick Street, Fitzroy, VIC, 3065, Australia
                <br />
                P.O Box 4196, Fitzroy, VIC, 3065, Australia
                <br />
                <br />
                M Closed <br />
                T Closed <br />
                W 12 - 19:00 <br />
                T 12 - 19:00 <br />
                F 12 - 19:00 <br />
                S 11 - 17:00 <br />
                S 11 - 17:00 <br />
                <br />
                Telephone: +03 9969 7111 <br />
                <br />
                General enquiries: hello@terrain.earth <br />
                Book related enquiries: books@terrain.earth <br />
              </p>
              <br />
              <a>Instagram</a>, <a>Are.na</a> <br />
            </div>
          </div>
        </div>

        <div className={styles[("container", "column")]}>
          <div className={styles["textbox"]}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
