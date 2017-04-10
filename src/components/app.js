import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todo-list';

const todos = [
  {
    task: 'dring coffe',
    isCompleted:false
  },
  {
    task: 'learn',
    isCompleted:false
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
          <h2>Enter your name</h2>
          <CreateTodo crateTask={this.createTask.bind(this)} />
          <TodosList
              todos = {this.state.todos}
              createTask = {this.createTask.bind(this)}
              />
      </div>
    );
  }
  createTask(task) {
    this.state.todos.push ({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos});
  }
}
