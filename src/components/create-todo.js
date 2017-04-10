import React from 'react';

export default class CreateTodo extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
          <input type="text" placeholder="what you want" ref="createInput" />
          <button> Add </button>
      </form>
    );
  }
  handleCreate(event) {
      event.preventDefault();

      this.props.createTask(this.refs.createInput.value);
  }
}
