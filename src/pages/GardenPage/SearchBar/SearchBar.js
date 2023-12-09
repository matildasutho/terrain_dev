import React from "react";

import styles from './SearchBar.module.css'

const SearchBar = ({ searchString, setSearchString }) => {
    // Create a function to handle user input and update the searchString state.
    const handleInputChange = (e) => {
      const userInput = e.target.value;
      setSearchString(userInput);
    };
  
    return (
      <div className={styles['searchBar']}>
        <div className={styles['overlap-group']}>
          <div className={styles['div-wrapper']}>
            <input
              type="text"
              value={searchString}
              onChange={handleInputChange}
              placeholder="Forage..."
            />
          </div>
          <div className="div">Ƹӝʒ</div>
        </div>
      </div>
    );
  };

export default SearchBar
