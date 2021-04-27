import React, { useCallback, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faMinusSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = useCallback(() => {
    onIncrement(habit);
  }, [habit.count]);

  const handleDecrement = useCallback(() => {
    onDecrement(habit);
  }, [habit.count]);

  const handleDelete = useCallback(() => {
    onDelete(habit);
  }, [habit.count]);

  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <FontAwesomeIcon icon={faMinusSquare} />
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
});

export default Habit;
