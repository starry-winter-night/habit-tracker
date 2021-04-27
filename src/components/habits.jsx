import React from 'react';
import Habit from './habit';
import HabitAdd from './habitAdd';

const Habits = ({
  habits,
  onAdd,
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
}) => {
  return (
    <>
      <HabitAdd onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habit-reset" onClick={onReset}>
        Reset All
      </button>
    </>
  );
};

export default Habits;
