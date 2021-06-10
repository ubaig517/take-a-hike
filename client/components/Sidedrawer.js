import React from 'react';
import { Link } from 'react-router-dom';
import './Sidedrawer.css';

const Sidedrawer = ({ show, click }) => {
  const sideDrawerClass = ['sidedrawer'];

  if (show) {
    sideDrawerClass.push('show');
  }
  return <div className={sideDrawerClass.join(' ')}>
    <ul className="sidedrawer__links" onClick={click}>
      <li>
        <Link to="/">
            Home
        </Link>
      </li>
      <li>
        <Link to="/admin">Add Trail</Link>
      </li>
    </ul>
  </div>;
};

export default Sidedrawer;
