import React, { Component } from 'react';
import './shared/SharedStyles.css';
import './Todo.css';
import { FaCheck, FaVolume } from "react-icons/fa";

import soundfile from "./assets/sounds/Xylophone.hardrubber.ff.A4.stereo.mp3";
import ReactHowler from 'react-howler';

export default class Todo extends Component {
  state = {
    playSound: false
  }

  handleClick = () => { this.setState({ playSound: true }) }

  handleSoundEnd = () => { this.setState({ playSound: false }) }

  render() {
    console.log(this.props.todo + " " + this.state.playSound);

    return (
      <li className="Todo box center slide-down" onClick={this.handleClick}>
        <button className="icon center">
          <FaCheck size={20} />
        </button>
        <span>
          {this.props.todo}
        </span>
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
