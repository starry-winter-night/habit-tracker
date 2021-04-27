import React, { PureComponent } from 'react';
import Habit from './habit';
import HabitAdd from './habitAdd';

class Habits extends PureComponent {
  render() {
    return (
      <>
        <HabitAdd onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
