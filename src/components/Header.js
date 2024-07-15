import React, { useState } from 'react';

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className='header'>
      <h1 className='header--title'>Movie Library</h1>
      <input
        type='text'
        placeholder='Search movies...'
        value={searchTerm}
        onChange={handleSearch}
        className='search-input'
      />
    </div>
  );
}
