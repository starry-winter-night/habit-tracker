import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faMinusSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  
  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <FontAwesomeIcon icon={faMinusSquare} />
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    );
  }
}

export default Habit;
