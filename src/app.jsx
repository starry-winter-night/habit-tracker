import React, { useCallback, useState } from 'react';
import './app.css';
import Navibar from './components/navibar';
import Habits from './components/habits';

const App = () => {
  const [state, setState] = useState({
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  });

  const handleIncrement = useCallback((habit) => {
    const habits = [...state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;

    // state를 업데이트 할때는 꼭 setState를 사용해야 react가 render를 다시 호출함
    // 오브젝트를 넣어주어야 함.
    setState({ habits });
  }, []);

  const handleDecrement = useCallback((habit) => {
    const habits = [...state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count > 0 ? count : 0;

    setState({ habits });
  }, []);

  const handleDelete = useCallback((habit) => {
    let habits = [...state.habits];
    habits = habits.filter((item) => item.id !== habit.id);
    setState({ habits });
  }, []);
  const handleAdd = useCallback((name) => {
    const newHabit = { name, count: 0 };
    const habits = [...state.habits];
    let result = true;

    habits.forEach((item) => {
      if (item.name === newHabit.name) {
        alert('이미 존재하는 Habit입니다.');
        result = false;
      }
    });
    if (!result) return;

    newHabit.id = !habits.length ? 1 : habits[habits.length - 1].id + 1;

    habits.push(newHabit);

    setState({ habits });
  }, []);

  const totalNumber = useCallback(() => {
    let count = 0;
    state.habits.map((item) => {
      if (item.count > 0) {
        count = count + 1;
      }
    });
    return count;
  }, []);

  const handleReset = useCallback(() => {
    const habits = state.habits.map((item) => {
      item.count = 0;
      return item;
    });

    setState({ habits });
  }, []);

  return (
    <>
      <Navibar totalNumber={totalNumber} />
      <Habits
        habits={state.habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
