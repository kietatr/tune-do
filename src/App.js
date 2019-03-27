import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import InputBar from './components/InputBar';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    inputValue: '',
    todos: []
  }

  _onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  _onSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputValue !== '') {
      this.setState({
        inputValue: '',
        todos: [...this.state.todos, this.state.inputValue]
      });
    }
  }

  render() {
    return (
      <div className="App center-screen">
        <div className="AppContent">
          <InputBar inputValue={this.state.inputValue} _onSubmit={this._onSubmit} _onInputChange={this._onInputChange} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
