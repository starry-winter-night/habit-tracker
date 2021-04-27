import React, { useCallback, useState } from 'react';
import './app.css';
import Navibar from './components/navibar';
import Habits from './components/habits';

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]);

  const handleIncrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count > 0 ? habit.count - 1 : 0;
          return { ...habit, count };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((habit) => {
    setHabits((habits) => habits.filter((item) => item.id !== habit.id));
  }, []);

  const handleAdd = useCallback((name) => {
    const newHabit = { name, count: 0 };

    let result = true;

    setHabits((habits) => {
      for (const item of habits) {
        if (item.name === newHabit.name) {
          result = false;
          alert('이미 존재하는 Habit입니다.');
          break;
        }
        if (!result) return [...habits];
      }

      if (result) {
        newHabit.id = !habits.length ? 1 : habits[habits.length - 1].id + 1;
        return [...habits, newHabit];
      }
    });
  }, []);

  const totalNumber = useCallback(() => {
    return habits.filter((item) => item.count > 0).length;
  });

  const handleReset = useCallback(() => {
    setHabits((habits) =>
      habits.map((item) => {
        return { ...item, count: 0 };
      })
    );
  }, []);

  return (
    <>
      <Navibar totalNumber={totalNumber} />
      <Habits
        habits={habits}
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
