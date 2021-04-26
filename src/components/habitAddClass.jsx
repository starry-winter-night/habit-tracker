import React, { PureComponent } from 'react';

class HabitAdd extends PureComponent {
  inputRef = React.createRef();
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className="habit-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="habit-input"
          placeholder="Habit"
        ></input>

        <button className="habit-addBtn">Add</button>
      </form>
    );
  }
}

export default HabitAdd;
