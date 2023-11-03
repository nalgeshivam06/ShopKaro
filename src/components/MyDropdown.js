

import React, { useState } from 'react';

function MyDropdown() {
  const [selectedOption, setSelectedOption] = useState('lowtohigh');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{margin:'auto'}}>
      <label htmlFor="dropdown">Filter </label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange} style={{margin:'10px',padding:'8px',borderRadius:'10px'}}>
        <option value="lowtohigh">Price : low to high</option>
        <option value="hightolow">Price : high to low</option>
      </select>
    </div>
  );
}

export default MyDropdown;

