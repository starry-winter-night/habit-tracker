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

  totalNumber = () => {
    let count = 0;
    this.state.habits.map((item) => {
      if (item.count > 0) {
        count = count + 1;
      }
    });
    return count;
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
        />
        ;
      </>
    );
  }
}

export default App;
