import React, { Component } from 'react';
import './shared/SharedStyles.css';
import './Todo.css';
import { FaCheck, FaTrashAlt, FaVolume } from "react-icons/fa";

import ReactHowler from 'react-howler';

export default class Todo extends Component {
  state = {
    done: false,
    playSound: false
  }

  componentDidMount() {
    this.setState({ done: this.props.done });
  }

  handleTodoClick = () => { this.setState({ playSound: true }) }

  handleSoundEnd = () => { this.setState({ playSound: false }) }

  handleCheckIconClick = () => {
    this.setState(
      { done: !this.state.done }, 
      () => {
        if (this.state.done) {
          this.props.addDone(this.props.todo);
        }
        else {
          this.props.removeDone(this.props.todo);
        }
      }
    )
  }

  handleTrashIconClick = () => {
    this.props.removeTodo(this.props.todo)
  }

  render() {
    return (
      <li 
        className={"Todo box center-row " + (this.state.done ? "todo-done" : "")} 
        onClick={this.handleTodoClick}
      >
        {/* Check icon */}
        <button 
          className={"icon center check-icon " + (this.state.done ? "check-icon-done" : "")} 
          onClick={this.handleCheckIconClick}
        >
          <FaCheck size={20} />
        </button>

        {/* Todo text */}
        <span className={"text " + (this.state.done ? "text-done" : "")}>
          {this.props.todo}
        </span>

        {/* Trash icon */}
        {
          this.props.isDeleting &&
          <button 
            className="icon center trash-icon"
            onClick={this.handleTrashIconClick}
          >
            <FaTrashAlt size={20} />
          </button>
        }

        {/* Volume icon */}
        {/*
          this.state.playSound &&
          <div className="center volume-icon">
            <FaVolume size={22} />
          </div>
        */}

        <ReactHowler
          src={this.props.song[this.props.index % this.props.song.length]}
          playing={this.state.playSound}
          onEnd={this.handleSoundEnd}
        />
      </li>
    );
  }
}
