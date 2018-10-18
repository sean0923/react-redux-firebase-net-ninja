import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          MarioPlan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
