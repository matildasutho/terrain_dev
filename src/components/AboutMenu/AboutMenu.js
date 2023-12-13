import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutMenu.module.css";

const AboutMenu = ({
  tabName,
  landRef,
  accessibilityRef,
  businessModelRef,
  faqRef,
  scrollToSection,
}) => {
  const [activeTab, setActiveTab] = useState(null);
  const sectionRefs = {
    landAcknowledgement: landRef,
    accessibility: accessibilityRef,
    businessModel: businessModelRef,
    faq: faqRef,
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
    <div className={styles["AboutMenuContainer"]}>
      <div className={styles["AboutMenu"]}>
        <div
          className={styles["AboutMenuSubHeading"]}
          onClick={() => scrollToSection(landRef)}
        >
          <span
            className={
              activeTab === "landAcknowledgement"
                ? styles["CurrentTab"]
                : styles["NonCurrentTab"]
            }
          >
            <h3>LAND ACKNOWLEDGEMENT</h3>
          </span>
        </div>

        <div
          className={styles["AboutMenuSubHeading"]}
          onClick={() => scrollToSection(accessibilityRef)}
        >
          <span
            className={
              activeTab === "accessibility"
                ? styles["CurrentTab"]
                : styles["NonCurrentTab"]
            }
          >
            <h3>ACCESSIBILITY</h3>
          </span>
        </div>

        <div
          className={styles["AboutMenuSubHeading"]}
          onClick={() => scrollToSection(businessModelRef)}
        >
          <span
            className={
              activeTab === "businessModel"
                ? styles["CurrentTab"]
                : styles["NonCurrentTab"]
            }
          >
            <h3>BUSINESS MODEL</h3>
          </span>
        </div>

        <div
          className={styles["AboutMenuSubHeading"]}
          onClick={() => scrollToSection(faqRef)}
        >
          <span
            className={
              activeTab === "faq"
                ? styles["CurrentTab"]
                : styles["NonCurrentTab"]
            }
          >
            <h3>FAQ</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
