import React, { useEffect, useRef, useState } from "react";
import styles from "./ServicesMenu.module.css";

const ServicesMenu = ({
  tabName,
  creativeRef,
  workshopsRef,
  consultancyRef,
  spacehireRef,
  scrollToSection,
}) => {
  const [activeTab, setActiveTab] = useState(null);
  const sectionRefs = {
    creativestudio: creativeRef,
    workshops: workshopsRef,
    consultancy: consultancyRef,
    spacehire: spacehireRef,
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveTab(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [observer, sectionRefs]);

  return (
    <div className={styles["ServicesMenuContainer"]}>
      <div className={styles["ServicesMenu"]}>
        <div
          className={styles["ServicesMenuSubHeading"]}
          onClick={() => scrollToSection(creativeRef)}
        >
          <span
            className={
              activeTab === "creativestudio"
                ? styles["CurrentTab"]
                : styles["NonCurrentTab"]
            }
          >
            <h3>CREATIVE STUDIO</h3>
          </span>
        </div>
        <div
          className={styles["ServicesMenuSubHeading"]}
          onClick={() => scrollToSection(workshopsRef)}
        >
          <span
            className={
              activeTab === "workshops"
                ? styles["CurrentTab"]
                : styles["NonCurrentTab"]
            }
          >
            <h3>WORKSHOPS</h3>
          </span>
        </div>
        <div
          className={styles["ServicesMenuSubHeading"]}
          onClick={() => scrollToSection(consultancyRef)}
        >
          <span
            className={
              activeTab === "consultancy"
                ? styles["CurrentTab"]
                : styles["NonCurrentTab"]
            }
          >
            <h3>CONSULTANCY</h3>
          </span>
        </div>
        <div
          className={styles["ServicesMenuSubHeading"]}
          onClick={() => scrollToSection(spacehireRef)}
        >
          <span
            className={
              activeTab === "spacehire"
                ? styles["CurrentTab"]
                : styles["NonCurrentTab"]
            }
          >
            <h3>SPACE HIRE</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
