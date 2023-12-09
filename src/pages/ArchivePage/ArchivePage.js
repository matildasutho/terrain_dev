import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getPastProjects } from "../../api/contenful/utils";

import styles from "./archivepage.module.css";

const ArchivePage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [archiveItems, setArchiveItems] = useState([]);
  const [filterActive, setFilterActive] = useState([]);

  const filters = [
    "PROJECT",
    "DESIGN",
    "TALK",
    "WORKSHOP",
    "MEDIA",
    "GALLERY",
    "PANEL",
    "PRESENTATION",
    "INSTALL",
    "CURATION",
    "CONSULTING",
    "RESEARCH",
    "WRITING",
    "PODCASTS",
  ];

  const handleFilterClick = (filter) => {
    const isActive = filterActive.includes(filter);
    if (isActive) {
      setFilterActive(filterActive.filter((item) => item !== filter));
    } else {
      setFilterActive([...filterActive, filter]);
    }
  };

  const handleMouseEnter = (filter) => {
    if (!selectedFilters.includes(filter) && !filterActive.includes(filter)) {
      setHoveredFilter(filter);
    }
  };

  const handleMouseLeave = () => {
    setHoveredFilter(null);
  };

  const [hoveredFilter, setHoveredFilter] = useState(null);

  useEffect(() => {
    getPastProjects().then((response) => {
      const items = response.projectsCollection.items;
      setArchiveItems(items);
    });
  }, []);

  return (
    <div className={styles["container"]}>
      {/* <div className={styles["column"]}>
        <span className={styles["rotation"]}>
          <h1>ARCHIVE</h1>
        </span>
      </div> */}
      <div className={styles["column"]}>
        <div className={styles["archivePage"]}>
          <div className={styles["archiveInner"]}>
            {filters.map((heading, index) => (
              <div key={index} className={styles["filterBox"]}>
                <span
                  className={styles["filterTag"]}
                  onClick={() => handleFilterClick(heading)}
                  onMouseEnter={() => handleMouseEnter(heading)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p>
                    {heading}
                    {selectedFilters.includes(heading) ||
                    filterActive.includes(heading)
                      ? "[x] "
                      : ""}
                    {hoveredFilter === heading &&
                    !selectedFilters.includes(heading) &&
                    !filterActive.includes(heading)
                      ? "[x]"
                      : ""}
                  </p>
                </span>
              </div>
            ))}
          </div>
          <div className={styles["archiveContent"]}>
            <div className={styles["archiveHeaders"]}>
              <div className={styles["archiveTitle"]}>
                <span className={styles["archiveTitleText"]}>
                  <span>TITLE</span>
                </span>
              </div>
              <div className={styles["archiveTitle"]}>
                <span className={styles["archiveTitleText"]}>
                  <span>CONTRIBUTOR</span>
                </span>
              </div>
              <div className={styles["archiveTitle"]}>
                <span className={styles["archiveTitleText"]}>
                  <span>LOCATION</span>
                </span>
              </div>
              <div className={styles["archiveTitle"]}>
                <span className={styles["archiveTitleText"]}>
                  <span>CATEGORY</span>
                </span>
              </div>
              <div className={styles["archiveTitle"]}>
                <span className={styles["archiveTitleText"]}>
                  <span>YEAR</span>
                </span>
              </div>
            </div>
            {/* New row creation bellow */}
            {archiveItems.map((archiveItem, index) => {
              const date = new Date(archiveItem.date);

              return (
                <Link
                  to={`/event/${archiveItem.slug}`}
                  className={styles["linktext"]}
                >
                  <div key={index} className={styles["archiveRow"]}>
                    <div className={styles["archiveTitle"]}>
                      <span className={styles["archiveRowText"]}>
                        <p>{archiveItem.title}</p>
                      </span>
                    </div>
                    <div className={styles["archiveTitle"]}>
                      <span className={styles["archiveRowText"]}>
                        <p>{archiveItem.contributor}</p>
                      </span>
                    </div>
                    <div className={styles["archiveTitle"]}>
                      <span className={styles["archiveRowText"]}>
                        <p>{archiveItem.location}</p>
                      </span>
                    </div>
                    <div className={styles["archiveTitle"]}>
                      <span className={styles["archiveRowText"]}>
                        <p>{archiveItem.category}</p>
                      </span>
                    </div>
                    <div className={styles["archiveTitle"]}>
                      <span className={styles["archiveRowText"]}>
                        <p>{date.toLocaleDateString("en-AU")}</p>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
