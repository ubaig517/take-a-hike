import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ click }) => {

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <h2>Take A Hike</h2>
      </Link>

      <ul className="navbar__links">
        {/* <li>
          <Link to="/" className="home__link">
            Home
          </Link>
        </li> */}
        <li>
          <Link to="/add-trail" className="admin__link">Add Trail</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;