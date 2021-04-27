import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Navibar = (props) => (
  <nav className="navbar">
    <FontAwesomeIcon className="navbar-icon" icon={faLeaf} />
    <h1 className="navbar-title">Habit Tracker</h1>
    <span className="navbar-count">{props.totalNumber()}</span>
  </nav>
);

export default Navibar;
