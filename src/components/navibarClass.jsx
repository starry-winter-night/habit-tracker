import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

class Navibar extends Component {
  render() {
    return (
      <nav className="navbar">
        <FontAwesomeIcon className="navbar-icon" icon={faLeaf} />
        <h1 className="navbar-title">Habit Tracker</h1>
        <span className="navbar-count">{this.props.totalNumber()}</span>
      </nav>
    );
  }
}

export default Navibar;
