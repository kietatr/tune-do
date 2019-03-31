import React, { Component } from 'react';
import moment from 'moment';
import SimpleStorage from "react-simple-storage";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { FaTrashAlt } from 'react-icons/fa';

import InputBar from './components/InputBar';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    inputValue: '',
    todos: [],
    dones: []
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
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

  addDone = (done) => {
    if (!this.state.dones.includes(done)) {
      this.setState({ dones: [...this.state.dones, done] })
    }
  }

  removeDone = (done) => {
    let newDones = this.state.dones;
    newDones = newDones.filter(item => item !== done);
    this.setState({ dones: newDones })
  }

  render() {
    console.log("Todos: " + this.state.todos);
    console.log("Dones: " + this.state.dones);

    return (
      <div className="App center-screen">

        <SimpleStorage parent={this} />

        <div className="AppContent box-shadow">
          <header className="AppHeader bg-img">
            <p className="header-time">{moment().format("dddd")}</p>
            <p className="header-time">{moment().format("MMMM D, YYYY")}</p>
          </header>
          <InputBar
            value={this.state.inputValue}
            onSubmit={this.onInputSubmit}
            onChange={this.onInputChange} 
          />
          <TodoList 
            todos={this.state.todos} 
            dones={this.state.dones} 
            addDone={this.addDone} 
            removeDone={this.removeDone} 
          />
        </div>
      </div>
    );
  }
}

export default App;
