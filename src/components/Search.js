import React from 'react';

export default function Search() {
  return (
    <div>
      <select>
        <option value="origin">Origin</option>
        <option value="xbl">Xbox One</option>
        <option value="psn">PlayStation 4</option>
      </select>
      <input placeholder='Search Profile...' />
      <button>Search</button>
    </div>
  )
}
