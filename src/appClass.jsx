import React, { Component } from 'react';
import './app.css';
import Navibar from './components/navibar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;

    // state를 업데이트 할때는 꼭 setState를 사용해야 react가 render를 다시 호출함
    // 오브젝트를 넣어주어야 함.
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count > 0 ? count : 0;

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    let habits = [...this.state.habits];
    habits = habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const newHabit = { name, count: 0 };
    const habits = [...this.state.habits];
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

    this.setState({ habits });
  };

  totalNumber = () => {
    let count = 0;
    this.state.habits.map((item) => {
      if (item.count > 0) {
        count = count + 1;
      }
    });
    return count;
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      item.count = 0;
      return item;
    });

    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navibar totalNumber={this.totalNumber} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
