import React from "react";

import styles from "./contact.module.css";

import PageTitle from "../../components/PageTitle/PageTitle";

const ContactPage = () => {
  return (
    <div className={styles["outer"]}>
      <div className={styles["contactPage"]}>
        <div className={styles["container"]}>
          <div className={styles["textbox"]}>
            General enquiries: hello@terrain.earth
            <br></br>
            Book related enquiries: books@terrain.earth
            <br></br>
            <br></br>
            Subscribe to our mailing list if you would prefer to hear from us
            and what’s happening.
            <br></br>
            <br></br>
            <a href="/privacypolicy">Privacy Policy</a> and{" "}
            <a href="/termsconditions">Terms and Conditions</a>.<br></br>
            <br></br>
            This is a renewably-powered self-hosted website.
          </div>

          <div className={styles["column"]}>
            <div className={styles["row-col"]}>
              <span className={styles["rotation"]}>
                <h1>PHYSICAL</h1>

                {/* <PageTitle title={"PHYSICAL"} /> */}
              </span>
              <span>
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
              </span>
            </div>
          </div>
          <div className={styles["column"]}>
            <div className={styles["row-col"]}>
              <span className={styles["rotation"]}>
                <h1>DIGITAL</h1>
              </span>
              {/* <PageTitle title={"DIGITAL"} /> */}
              <span className={styles["links"]}>
                <div>
                  <a
                    href="https://www.instagram.com/terrain.earth/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
                <div>
                  <a href="https://www.are.na/terrain" target="_blank">
                    Are.na
                  </a>
                </div>
                <div>
                  <a
                    href="https://open.spotify.com/user/1232587233?si=00d0fc16457843a0"
                    target="_blank"
                  >
                    Spotify
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
