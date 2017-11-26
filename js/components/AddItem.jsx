import React, { Component } from 'react';
import propTypes from 'prop-types';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const task = this.TaskText.value;
    if (task) {
      this.props.onAddTask(task);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add tasks to your list"
          ref={input => this.TaskText = input}
          type="text"
        />
        <button>Add</button>
      </form>
    );
  }
}

AddItem.propTypes = {
  onAddTask: propTypes.func,
};

export default AddItem;
