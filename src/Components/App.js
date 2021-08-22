import React from 'react';
import logo from '../Assets/nasa-worm-logo.png'
import "../Styles/App.css";
import Search from './Search';


function App() {
  return (
    <div className="App">
      <img className="Logo" src={logo} alt="logo" />
      <Search />
    </div>
  );
};

export default App;
