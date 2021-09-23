import React from 'react';
import '../Styles/SearchResults.css';

const SearchResults = ({results}) => {
  if (!results.length) {
    return null;
  } else {
    return (
      <div>
        <p className="search-result-txt">Search Results:</p>
        {results.map((images) => (
          <img className="search-result-img" src={images} alt="space"></img>
        ))}
      </div>
    );
  }
};

export default SearchResults;
