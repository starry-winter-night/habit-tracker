import React, { memo, useRef, useCallback } from 'react';

const HabitAdd = memo((props) => {
  const inputRef = useRef();
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  }, []);

  return (
    <form className="habit-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="habit-input"
        placeholder="Habit"
      ></input>

      <button className="habit-addBtn">Add</button>
    </form>
  );
});

export default HabitAdd;
