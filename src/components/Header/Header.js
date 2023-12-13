import React from "react";
import { Link, useLocation } from "react-router-dom";
import TerrainLogo from "../../assets/TERRAIN-logo-scaleable 1.svg";
import styles from "./header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [burgerContent, setBurgerContent] = useState("burger");

  const toggleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
    setBurgerContent(menuVisibility ? "burger" : "exit");
  };

  const isHomePage = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuVisibility(false);
    setBurgerContent("burger");
    console.log("Location changed:", location.pathname);
  }, [location]);

  let currentPage = "";
  if (pathname === "/") {
    currentPage = "home";
  } else if (pathname === "/about") {
    currentPage = "about";
  } else if (pathname === "/archive") {
    currentPage = "archive";
  } else if (pathname === "/bookshop") {
    currentPage = "bookshop";
  } else if (pathname === "/calendar") {
    currentPage = "calendar";
  } else if (pathname === "/contact") {
    currentPage = "contact";
  } else if (pathname === "/event/:slug") {
    currentPage = "event/:slug";
  } else if (pathname === "/gallery") {
    currentPage = "gallery";
  } else if (pathname === "/garden") {
    currentPage = "garden";
  } else if (pathname === "/manifesto") {
    currentPage = "manifesto";
  } else if (pathname === "/services") {
    currentPage = "services";
  }

  return (
    <div className={!isHomePage ? styles["header"] : styles["headerHidden"]}>
      {!isHomePage && (
        <div className={styles["row"]}>
          {/* Header content */}
          <div className={styles["terrainlogoscaleable"]}>
            <Link to="/">
              <img
                src={TerrainLogo}
                alt="terrainlogo"
                className={styles["terrainlogo"]}
              />
            </Link>
          </div>
          {/* Navigation */}
          <div className={styles["navigation"]}>
            <div className={styles["menucolumn"]}>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/about"
                  className={
                    currentPage === "about"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  ABOUT
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/manifesto"
                  className={
                    currentPage === "manifesto"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  MANIFESTO
                </Link>
              </div>
            </div>
            <div className={styles["menucolumn"]}>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/bookshop"
                  className={
                    currentPage === "bookshop"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  BOOKSHOP
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/gallery"
                  className={
                    currentPage === "gallery"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  GALLERY
                </Link>
              </div>
            </div>

            {/* <div className={styles["mainmenu"]}>
                <Link
                  to="/calendar"
                  className={
                    currentPage === "calendar"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  CALENDAR
                </Link>
              </div> */}

            <div className={styles["menucolumn"]}>
              {/* <div className={styles["mainmenu"]}>
                <Link
                  to="/garden"
                  className={
                    currentPage === "garden"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  INDEX
                </Link>
              </div> */}
              {/* <div className={styles["mainmenu"]}>
                <Link
                  to="/archive"
                  className={
                    currentPage === "archive"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  ARCHIVE
                </Link>
              </div> */}
              <div className={styles["mainmenu"]}>
                <Link
                  to="/services"
                  className={
                    currentPage === "services"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  SERVICES
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/contact"
                  className={
                    currentPage === "contact"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          {/* Burger Menu */}
          <div className={styles["burger-outer"]}>
            <div className={styles["burger"]} onClick={toggleMenuVisibility}>
              {burgerContent === "burger" ? (
                <React.Fragment>
                  <span>---</span>
                  <span>---</span>
                  <span>---</span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <span>\_/</span>
                  <br></br>
                  <span>/ \</span>
                </React.Fragment>
              )}
            </div>
          </div>
          {/* Mobile Navigation */}
          <div
            className={` ${styles["mobile-nav"]} ${
              menuVisibility ? "" : styles["hidden"]
            }`}
          >
            <div className={styles["menucolumn"]}>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/about"
                  className={
                    currentPage === "about"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  ABOUT
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/bookshop"
                  className={
                    currentPage === "bookshop"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  BOOKSHOP
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/gallery"
                  className={
                    currentPage === "gallery"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  GALLERY
                </Link>
              </div>

              <div className={styles["mainmenu"]}>
                <Link
                  to="/manifesto"
                  className={
                    currentPage === "manifesto"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  MANIFESTO
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/services"
                  className={
                    currentPage === "services"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  SERVICES
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/calendar"
                  className={
                    currentPage === "calendar"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  CALENDAR
                </Link>
              </div>

              <div className={styles["mainmenu"]}>
                <Link
                  to="/garden"
                  className={
                    currentPage === "garden"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  INDEX
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/archive"
                  className={
                    currentPage === "archive"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  ARCHIVE
                </Link>
              </div>
              <div className={styles["mainmenu"]}>
                <Link
                  to="/contact"
                  className={
                    currentPage === "contact"
                      ? styles["currentpagemainmenu"]
                      : styles["linktext"]
                  }
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
