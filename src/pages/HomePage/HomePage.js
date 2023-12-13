import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TerrainLogoRelief from "../../assets/TERRAIN-f6f6f6-transparency-digital.png";

import ABOUT from "../../assets/hover_thumbnails/ABOUT.jpg";
import BOOKSHOP from "../../assets/hover_thumbnails/BOOKSHOP.png";
import CALENDAR from "../../assets/hover_thumbnails/CALENDAR.jpg";
import CONTACT from "../../assets/hover_thumbnails/CONTACT.jpg";
import FAQ from "../../assets/hover_thumbnails/FAQ.jpg";
import GALLERY from "../../assets/hover_thumbnails/GALLERY.jpeg";
import INDEX from "../../assets/hover_thumbnails/INDEX.jpg";
import MANIFESTO from "../../assets/hover_thumbnails/MANIFESTO.jpg";
import SERVICES from "../../assets/hover_thumbnails/SERVICES.jpg";

import styles from "./homepage.module.css";

const Homepage = () => {
  const [hoverImg, setHoverImg] = useState(null);
  const [imgPosition, setImgPosition] = useState({ x: 0, y: 0 });

  const handleButtonHover = (imagePath) => {
    setHoverImg(imagePath);
    console.log(imagePath);
  };

  const handleImageMouseMove = (e) => {
    setImgPosition({ x: e.clientX, y: e.clientY });
  };

  const imageStyle = {
    position: "absolute",
    transform: `translate(${imgPosition.x + 10}px, ${imgPosition.y + 10}px)`,
  };

  return (
    <div
      className={styles["container"]}
      onMouseMove={handleImageMouseMove}
      style={{ position: "relative" }}
    >
      <div className={styles["homepage"]}>
        <div className={styles["logotext"]}>
          <img
            src={TerrainLogoRelief}
            alt="terrainlogo"
            className={styles["terrainlogo"]}
          />
        </div>
        <div className={styles["textcontent"]}>
          <span>
            <span className={styles["para-text"]}>
              An initiative that creates playful physical and digital spaces to
              remind humans that they are embedded in a more-than-human world
              <div
                className={styles["textcontentlink"]}
                onMouseOver={() => handleButtonHover}
              >
                <Link
                  to="/manifesto"
                  className={styles[("linktext", "buttonStyle")]}
                  onMouseEnter={() => handleButtonHover(MANIFESTO)}
                  onMouseLeave={() => setHoverImg(null)}
                >
                  <span className={styles["home-a"]}>*^</span>
                </Link>
              </div>
              . We are a
              <div className={styles["textcontentlink"]}>
                <Link
                  to="/bookshop"
                  className={styles[("linktext", "buttonStyle")]}
                  onMouseEnter={() => handleButtonHover(BOOKSHOP)}
                  onMouseLeave={() => setHoverImg(null)}
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
                  onMouseEnter={() => handleButtonHover(GALLERY)}
                  onMouseLeave={() => setHoverImg(null)}
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
                  onMouseEnter={() => handleButtonHover(CALENDAR)}
                  onMouseLeave={() => setHoverImg(null)}
                >
                  <span className={styles["home-a"]}>
                    <span>CALENDAR</span>
                  </span>
                </Link>
              </div>
              . Read more
              <div className={styles["textcontentlink"]}>
                <Link
                  to="/about"
                  className={styles[("linktext", "buttonStyle")]}
                  onMouseEnter={() => handleButtonHover(ABOUT)}
                  onMouseLeave={() => setHoverImg(null)}
                >
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
                  onMouseEnter={() => handleButtonHover(INDEX)}
                  onMouseLeave={() => setHoverImg(null)}
                >
                  <span className={styles["home-a"]}>INDEX</span>
                </Link>
              </div>
              , seek our
              <div className={styles["textcontentlink"]}>
                <Link
                  to="/services"
                  className={styles[("linktext", "buttonStyle")]}
                  onMouseEnter={() => handleButtonHover(SERVICES)}
                  onMouseLeave={() => setHoverImg(null)}
                >
                  <span className={styles["home-a"]}>SERVICES</span>
                </Link>
              </div>
              &nbsp;or
              <div className={styles["textcontentlink"]}>
                <Link
                  to="/contact"
                  className={styles[("linktext", "buttonStyle")]}
                  onMouseEnter={() => handleButtonHover(CONTACT)}
                  onMouseLeave={() => setHoverImg(null)}
                >
                  <span className={styles["home-a"]}>REACH OUT</span>
                </Link>
              </div>
              &nbsp;directly. If there's any burning questions you can read the
              <div className={styles["textcontentlink"]}>
                <Link
                  to={{ pathname: "/about", search: "?section=faq" }}
                  className={styles[("linktext", "buttonStyle")]}
                  onMouseEnter={() => handleButtonHover(FAQ)}
                  onMouseLeave={() => setHoverImg(null)}
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
      {hoverImg && (
        <div className={styles["hover-img"]} style={imageStyle}>
          <img
            src={hoverImg}
            alt="hoverImage"
            style={{ position: "absolute" }}
          />
        </div>
      )}
    </div>
  );
};

export default Homepage;
