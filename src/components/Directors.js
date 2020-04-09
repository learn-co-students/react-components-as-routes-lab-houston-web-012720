import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => 
        <div>
          <ul>
            <h3>Director name: {director.name}</h3>
            <label>Movies: {director.movies.join(", ")}</label>
          </ul>
        </div>
        )}
    </div>
  );
}

export default Directors
