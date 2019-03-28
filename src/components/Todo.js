import React, { Component } from 'react';
import './shared/SharedStyles.css';
import './Todo.css';
import { FaCheck, FaVolume } from "react-icons/fa";

import soundfile from "./assets/sounds/Xylophone.hardrubber.ff.A4.stereo.mp3";
import ReactHowler from 'react-howler';

export default class Todo extends Component {
  state = {
    done: this.props.done,
    playSound: false
  }

  handleTodoClick = () => { this.setState({ playSound: true }) }

  handleSoundEnd = () => { this.setState({ playSound: false }) }

  handleIconClick = () => { this.setState({ done: !(this.state.done) }) }

  render() {
    return (
      <li className="Todo box center-row slide-down" onClick={this.handleTodoClick}>
        {this.state.done ? (
          <div className="center-row">
            <button className="icon center icon-done" onClick={this.handleIconClick}>
              <FaCheck size={20} />
            </button>
            <span className="text-done strike">
              {this.props.todo}
            </span>
          </div>
        ) : (
          <div className="center-row">
            <button className="icon center" onClick={this.handleIconClick}>
              <FaCheck size={20} />
            </button>
            <span>
              {this.props.todo}
            </span>
          </div>
        )}
        
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
