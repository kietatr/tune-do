import React, { Component } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import InputBar from './components/InputBar';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    inputValue: '',
    todos: ["Hover over me!", "Me too!", "Go for a walk", "Create a to-do list app", "Try not to fall asleep"]
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  onInputSubmit = (event) => {
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
        <div className="AppContent box-shadow">
          <header className="AppHeader bg-img">
            <p className="time">{moment().format("dddd")}</p>
            <p className="time">{moment().format("MMMM D, YYYY")}</p>
          </header>
          <InputBar
            value={this.state.inputValue} 
            onSubmit={this.onInputSubmit}
            onChange={this.onInputChange} 
          />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
