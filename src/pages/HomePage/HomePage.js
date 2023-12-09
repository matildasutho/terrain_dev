import React from "react";
import { Link } from "react-router-dom";
import TerrainLogo from "../../assets/TERRAIN-logo-scaleable 1.svg";

import styles from "./homepage.module.css";

const Homepage = () => (
  <div className={styles["container"]}>
    <div className={styles["gradientBG"]}></div>
    <div className={styles["homepage"]}>
      <div className={styles["textcontent"]}>
        <span>
          <span className={styles["para-text"]}>
            <span className={styles["logotext"]}>
              <img
                src={TerrainLogo}
                alt="terrainlogo"
                className={styles["terrainlogo"]}
              />
            </span>{" "}
            is an initiative that creates playful physical and digital spaces to
            remind humans that they are embedded in a more-than-human world
            <div className={styles["textcontentlink"]}>
              <Link
                to="/manifesto"
                className={styles[("linktext", "buttonStyle")]}
              >
                <span className={styles["home-a"]}>*^</span>
              </Link>
            </div>
            . We are a
            <div className={styles["textcontentlink"]}>
              <Link
                to="/bookshop"
                className={styles[("linktext", "buttonStyle")]}
              >
                <span className={styles["home-a"]}>
                  <span>BOOKSHOP</span>
                </span>
              </Link>
            </div>
            ,
            <div className={styles["textcontentlink"]}>
              <Link
                to="/gallery"
                className={styles[("linktext", "buttonStyle")]}
              >
                <span className={styles["home-a"]}>
                  <span>GALLERY</span>
                </span>
              </Link>
            </div>
            , outdoors club, and studio in Ngár-go/Fitzroy on Wurundjeri Land.
            You can see what's on our
            <div className={styles["textcontentlink"]}>
              <Link
                to="/calendar"
                className={styles[("linktext", "buttonStyle")]}
              >
                <span className={styles["home-a"]}>
                  <span>CALENDAR</span>
                </span>
              </Link>
            </div>
            . Read more
            <div className={styles["textcontentlink"]}>
              <Link to="/about" className={styles[("linktext", "buttonStyle")]}>
                <span className={styles["home-a"]}>
                  <span>ABOUT US</span>
                </span>
              </Link>
            </div>
            , forage through our
            <div className={styles["textcontentlink"]}>
              <Link
                to="/garden"
                className={styles[("linktext", "buttonStyle")]}
              >
                <span className={styles["home-a"]}>INDEX</span>
              </Link>
            </div>
            , seek our
            <div className={styles["textcontentlink"]}>
              <Link
                to="/services"
                className={styles[("linktext", "buttonStyle")]}
              >
                <span className={styles["home-a"]}>SERVICES</span>
              </Link>
            </div>
            &nbsp;or
            <div className={styles["textcontentlink"]}>
              <Link
                to="/contact"
                className={styles[("linktext", "buttonStyle")]}
              >
                <span className={styles["home-a"]}>REACH OUT</span>
              </Link>
            </div>
            &nbsp;directly. If there's any burning questions you can read the
            <div className={styles["textcontentlink"]}>
              <Link
                to={{ pathname: "/about", search: "?section=faq" }}
                className={styles[("linktext", "buttonStyle")]}
              >
                <span className={styles["home-a"]}>
                  <span>FAQ</span>
                </span>
              </Link>
            </div>
            .
            <br />
            <br />
            Oh, and, this is a 100% renewably powered and self-hosted website,
            using 0.123 watts of electricity per visitor.
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default Homepage;
