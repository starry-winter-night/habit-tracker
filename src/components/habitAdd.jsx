import React, { Component } from 'react';

class HabitAdd extends Component {
  inputRef = React.createRef();
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <div>
        <form className="habit-form" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            className="habit-input"
            placeholder="Habit"
          ></input>
        </form>
        <button className="habit-addBtn" onClick={this.onSubmit}>
          Add
        </button>
      </div>
    );
  }
}

export default HabitAdd;
