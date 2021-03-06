import React, { Component } from 'react';
import moment from 'moment';
import SimpleStorage from "react-simple-storage";
import { FaTrashAlt, FaGithub, FaBehance, FaInstagram } from 'react-icons/fa';

import './App.css';

import { getRandomSong, laVieEnRose } from './utils/soundFiles';
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
          "Hi there! Thanks for stopping by! Let me introduce myself :)",
          "I'm a basic to-do list app with a fun feature: I can play some tunes!",
          "Click me right *here* (come on, don't be shy) and I will play a note for you! (don't forget to turn on your volume first)",
          "(Note: if you're viewing this on a phone or tablet, the audio only works if you use your earphone. Weird, right? Is it just me?)",
          "Now, try clicking each to-do tab from top to bottom and guess what song I'm playing~~",
          "Introducing some basic to-do list features:", 
          "<-- Click the circle to mark me as 'done'", 
          "<-- Now click the checkmark to make me 'not done' again",
          "Go to the top and type in what you want to do today (press <Return> on your keyboard or click the plus icon to add that to the list)",
          "If you want to delete me :sad:, go to the top and click the trash icon to the right of the photo to enter 'Delete Mode'. Then, click the trash icon here on my right -->",
          "If you refresh or close the page, and visit me again later, I will stay the same as when you last saw me (localStorage FTW!)",
          "Have a productive day!",
          ".",
          "..",
          "...",
          "Have you guessed which song I'm playing yet?",
          "If you don't like this song, refresh the page to get a new song (you may need to refresh again because the songs are chosen randomly)",
          ".....",
          "(Just some filler text to finish the song)",
          "(Lorem Ipsum)",
          "(Meow)",
          "(Woof)",
        ],
        dones: [
          "<-- Now click the checkmark to make me 'not done' again",
          ".",
          "..",
          "...",
          "(Just some filler text to finish the song)",
          "(Woof)",
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

    let inputValue = this.state.inputValue;
    let todos = this.state.todos;
    if ((inputValue !== '') && (!todos.includes(inputValue))) {
      this.setState({
        inputValue: '',
        todos: [...todos, inputValue]
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
    /// DEBUG
    // localStorage.clear();
    /// END DEBUG

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
              className={"icon center header-trash-icon " + (this.state.isDeleting ? "active" : "")}
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
            song={getRandomSong()}
          />

          <div className="signature">
            <p>
              Created with ♥ by <a target="_blank" rel="noopener noreferrer" href="https:\\kietatr.com">Kiet Tran</a>
            </p>
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kietatr" className="signature-icon">
                <FaGithub size={25} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/kietatr" className="signature-icon">
                <FaBehance size={25} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kietatr/" className="signature-icon">
                <FaInstagram size={25} />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
