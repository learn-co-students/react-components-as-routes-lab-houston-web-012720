import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>
        Movies Page
      </h1>
        {movies.map(movie => 
          <div>
            <ul>
              <h4>Title {movie.title}</h4>
              <label>Moive Time {movie.time}</label><br/>
              <label>Moive genres {movie.genres.join(", ")}</label>
            </ul>
          </div>
        )}
    </div>
  );
};

export default Movies;
