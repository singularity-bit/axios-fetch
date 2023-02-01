import React from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const SearchBar = () => {
  return (
    <div className="container">
      <Input />
      <Button label="Press me" className="button" />
    </div>
  );
};

export default SearchBar;
