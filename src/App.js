import React, { Component } from 'react';
import moment from 'moment';
import SimpleStorage from "react-simple-storage";
import { FaTrashAlt } from 'react-icons/fa';
import ReactCSSTransitionGroup from 'react-transition-group';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import InputBar from './components/InputBar';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    isDeleting: false,
    inputValue: '',
    todos: [],
    dones: []
  }

  componentDidMount() {
    this.setDefaultStates();
  }

  setDefaultStates = () => {
    // If there's nothing in localStorage (i.e. first time using the app)
    if (localStorage.length === 0) {
      this.setState({
        todos: [
          "Hi there! Thanks for stopping by!",
          "Click me right *here* (come on, don't be shy) and I will play some tunes for you", 
          "<-- Click the circle to mark me as 'done'", 
          "<-- Now click the checkmark to make me normal again",
          "Go to the top and type in what you want to do today (^_^) (press <Return> on your keyboard or click the plus icon to add to the list)"
        ],
        dones: [
          "<-- Now click the checkmark to make me normal again"
        ]
      })
    }
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

  handleTrashIconClick = (event) => {
    let isPrevDeleting = this.state.isDeleting;
    this.setState({ isDeleting: !isPrevDeleting })
  }

  removeTodo = (todo) => {
    // Remove from todos
    let newTodos = this.state.todos;
    newTodos = newTodos.filter(item => item !== todo);
    this.setState({ todos: newTodos })

    // Remove from dones, if dones has the todo
    if (this.state.dones.includes(todo)) {
      let newDones = this.state.dones;
      newDones = newDones.filter(item => item !== todo);
      this.setState({ dones: newDones })
    }
  }

  render() {
    /////// DEBUG
    localStorage.clear();
    /////// END OF DEBUG

    return (
      <div className="App center-screen">

        <SimpleStorage parent={this} />

        <div className="AppContent">
          <header className="AppHeader bg-img">
            <div>
              <p className="header-time">{moment().format("dddd")}</p>
              <p className="header-time">{moment().format("MMMM D, YYYY")}</p>
            </div>
            <button 
              className={"icon header-trash-icon " + (this.state.isDeleting ? "active" : "")}
              onClick={this.handleTrashIconClick}
            >
              <FaTrashAlt size={20} />
            </button>
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
            isDeleting={this.state.isDeleting}
            removeTodo={this.removeTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
