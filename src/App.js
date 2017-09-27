import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/Todo/TodoForm.js';
import TodoList from './Components/Todo/TodoList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Code', 'Eat', 'Sleep']
    }
  }

  addNewTodo(todo) {
    console.log(todo)
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
      <div>
      <h1> My Todos</h1>
      <TodoForm addNewTodoFunc={this.addNewTodo.bind(this)} />
      <TodoList todo_data={this.state.todos} />
      </div>
    );
  }
}

export default App;
