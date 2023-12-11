import React, { useEffect, useState } from "react";

import { getResources } from "../../api/contenful/utils.js";

import IndexItem from "./IndexList/IndexList.js";
import Resource from "./Resource/Resource.js";
import styles from "./garden.module.css";
import SearchBar from "./SearchBar/SearchBar.js";

const GardenPage = () => {
  const [searchString, setSearchString] = useState(null);
  const [gardenItems, setGardenItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [counts, setCounts] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  const [mobileView, setMobileView] = useState(false);

  const handleFilter = (tag, index) => {
    if (tag === "All") {
      setFilteredItems(gardenItems);
    } else {
      const filtered = gardenItems.filter((item) => {
        return item.contentfulMetadata.tags.some((tagObj) => tagObj.id === tag);
      });
      setFilteredItems(filtered);
    }
    setActiveIndex(index); // Update the active index when an item is clicked
  };

  useEffect(() => {
    getResources()
      .then((response) => {
        const items = response.resourcesCollection.items;
        setGardenItems(items);
        setFilteredItems(items);
        // Initialize counts with zeros
        const initialCounts = {
          all: 0,
          Academic: 0,
          publications: 0,
          Organisations: 0,
          Podcasts: 0,
          films: 0,
          Artists: 0,
          "News Articles": 0,
        };

        setCounts(initialCounts);

        // Create a copy of counts
        const updatedCounts = { ...initialCounts };

        // Update the counts
        items.forEach((item) => {
          const tags = item.contentfulMetadata.tags;
          tags.forEach((tagObj) => {
            const text = tagObj.name;
            updatedCounts[text]++;
          });
        });

        // Update the state with the modified counts
        setCounts(updatedCounts);

        if (searchString) {
          const filteredItems = items.filter((item) => {
            return item.title
              .toLowerCase()
              .includes(searchString.toLowerCase());
          });
          setFilteredItems(filteredItems);
        }
      })
      .catch((error) => {
        console.error("Error fetching resources:", error);
      });
  }, [searchString]);

  useEffect(() => {
    // Check the viewport width to determine mobile view
    const handleResize = () => {
      if (window.innerWidth < 970) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles["container"]}>
      {/* <div className={styles["column"]}>
        <span className={styles["rotation"]}>
          <h1>DIGITAL GARDEN</h1>
        </span>
      </div> */}
      <div className={styles["column"]}>
        <div className={styles["digital-garden"]}>
          <div className={styles["gardenMenu"]}>
            <SearchBar
              searchString={searchString}
              setSearchString={setSearchString}
            />
            {mobileView ? (
              <div>
                <div
                  className={styles["drop-down"]}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>Select Filters</span>
                  <span className={styles["float-right"]}>+</span>

                  {showDropdown && (
                    <div className={styles["dropdownContent"]}>
                      {/* Render dropdown items */}
                      <IndexItem
                        text="all"
                        onClick={(tag) => handleFilter(tag, 0)}
                        counts={counts}
                        isActive={activeIndex === 0}
                      />
                      <IndexItem
                        text="Academic"
                        onClick={(tag) => handleFilter(tag, 1)}
                        counts={counts}
                        isActive={activeIndex === 1}
                      />

                      <IndexItem
                        text="publications"
                        onClick={(tag) => handleFilter(tag, 2)}
                        counts={counts}
                        isActive={activeIndex === 2}
                      />
                      <IndexItem
                        text="Organisations"
                        onClick={(tag) => handleFilter(tag, 3)}
                        counts={counts}
                        isActive={activeIndex === 3}
                      />
                      <IndexItem
                        text="Podcasts"
                        onClick={(tag) => handleFilter(tag, 4)}
                        counts={counts}
                        isActive={activeIndex === 4}
                      />
                      <IndexItem
                        text="films"
                        onClick={(tag) => handleFilter(tag, 5)}
                        counts={counts}
                        isActive={activeIndex === 5}
                      />
                      <IndexItem
                        text="Artists"
                        onClick={(tag) => handleFilter(tag, 6)}
                        counts={counts}
                        isActive={activeIndex === 6}
                      />
                      <IndexItem
                        text="News Articles"
                        onClick={(tag) => handleFilter(tag, 7)}
                        counts={counts}
                        isActive={activeIndex === 7}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <IndexItem
                  text="all"
                  onClick={(tag) => handleFilter(tag, 0)}
                  counts={counts}
                  isActive={activeIndex === 0}
                />
                <IndexItem
                  text="Academic"
                  onClick={(tag) => handleFilter(tag, 1)}
                  counts={counts}
                  isActive={activeIndex === 1}
                />

                <IndexItem
                  text="publications"
                  onClick={(tag) => handleFilter(tag, 2)}
                  counts={counts}
                  isActive={activeIndex === 2}
                />
                <IndexItem
                  text="Organisations"
                  onClick={(tag) => handleFilter(tag, 3)}
                  counts={counts}
                  isActive={activeIndex === 3}
                />
                <IndexItem
                  text="Podcasts"
                  onClick={(tag) => handleFilter(tag, 4)}
                  counts={counts}
                  isActive={activeIndex === 4}
                />
                <IndexItem
                  text="films"
                  onClick={(tag) => handleFilter(tag, 5)}
                  counts={counts}
                  isActive={activeIndex === 5}
                />
                <IndexItem
                  text="Artists"
                  onClick={(tag) => handleFilter(tag, 6)}
                  counts={counts}
                  isActive={activeIndex === 6}
                />
                <IndexItem
                  text="News Articles"
                  onClick={(tag) => handleFilter(tag, 7)}
                  counts={counts}
                  isActive={activeIndex === 7}
                />
              </>
            )}
          </div>

          <div className={styles["gardenOuter"]}>
            <div className={styles["gardenContent"]}>
              {filteredItems.map((item, index) => (
                <Resource key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenPage;
