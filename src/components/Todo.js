import React, { Component } from 'react';
import './shared/SharedStyles.css';
import './Todo.css';
import { FaCheck, FaVolume } from "react-icons/fa";

import Sound from 'react-sound';

import soundfile from "./assets/sounds/Xylophone.hardrubber.ff.A4.stereo.mp3";

export default class Todo extends Component {
  state = {
    playSound: true
  }

  playSound = () => {
    this.setState({ playSound: true })
  }

  render() {
    return (
      <li className="Todo box center" onMouseEnter={this.playSound}>
        <button className="icon center">
          <FaCheck size={20} />
        </button>
        <span>
          {this.props.value}
        </span>
        <FaVolume className="volume-icon" size={20} />
        {this.state.playSound &&
          <Sound
            url={soundfile}
            playStatus={Sound.status.PLAYING}
          />
        }
      </li>
    );
  }
}
