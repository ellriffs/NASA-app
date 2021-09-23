
import React, { useState } from 'react';
import logo from '../Assets/nasa-worm-logo.png'
import "../Styles/App.css";
import Search from './Search';
import SearchResults from './SearchResults'


function App() {
  const [searchResults, setSearchResults] = useState([])
  
  return (
    <div className="App">
      <img className="Logo" src={logo} alt="logo" />
      <Search 
      setSearchResults = {setSearchResults}
      />
      <SearchResults
      results={searchResults} 
      />
    </div>
  );
};

export default App;
