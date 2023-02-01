import React from 'react';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="container">
        <h2 className="logo">Logo</h2>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
