import React, { Component } from 'react';
import './shared/SharedStyles.css';
import './Todo.css';
import { FaCheck, FaVolume } from "react-icons/fa";

import soundfile from "./assets/sounds/Xylophone.hardrubber.ff.A4.stereo.mp3";
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

  render() {
    return (
      <li 
        className={"Todo box center-row slide-down" + " " + (this.state.done ? "todo-done" : "")} 
        onClick={this.handleTodoClick}
      >
        <div className="center-row">
          <button 
            className={"icon center check-icon" + " " + (this.state.done ? "check-icon-done" : "")} 
            onClick={this.handleCheckIconClick}
          >
            <FaCheck size={20} />
          </button>
          <span className={this.state.done ? "text-done" : ""}>
            {this.props.todo}
          </span>
        </div>
        
        <span className="volume-icon">
          <FaVolume size={20} />
        </span>

        <ReactHowler
          src={soundfile}
          playing={this.state.playSound}
          onEnd={this.handleSoundEnd}
        />
      </li>
    );
  }
}
