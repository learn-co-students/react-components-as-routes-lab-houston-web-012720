import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <button>
        <NavLink to="/">Home</NavLink>
      </button>
      <button>
        <NavLink to="/movies">Movies</NavLink>  
      </button>
      <button>
        <NavLink to="/directors">Directors</NavLink>
      </button>
      <button>
        <NavLink to="/actors">Actors</NavLink>
      </button>
      {/*{code here}*/}
    </div>
  );
};

export default NavBar;
