import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => 
        <div>
          <ul>
            <h3>Name: {actor.name}</h3>
            <label>Movies: {actor.movies.join(", ")}</label>
          </ul>
        </div>
        )}
    </div>
  );
};

export default Actors;
