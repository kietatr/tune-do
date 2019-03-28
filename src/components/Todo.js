import React, { Component } from 'react';
import './shared/SharedStyles.css';
import './Todo.css';
import { FaCheck, FaVolume } from "react-icons/fa";

import Sound from 'react-sound';

import soundfile from "./assets/sounds/Xylophone.hardrubber.ff.A4.stereo.mp3";

export default class Todo extends Component {
  state = {
    playSound: false
  }

  playSound = () => {
    this.setState({ playSound: true })
  }

  stopSound = () => {
    this.setState({ playSound: false })
  }

  render() {
    console.log(">>>> " + this.props.value + " " + this.state.playSound);

    return (
      <li className="Todo box center" onMouseEnter={this.playSound}>
        <button className="icon center">
          <FaCheck size={20} />
        </button>
        <span>
          {this.props.value}
        </span>
        <span className="volume-icon">
          <FaVolume size={20} />
        </span>

        {this.state.playSound &&
          <div>
            <h1>Playing</h1>
            <Sound
              url={soundfile}
              playStatus={Sound.status.PLAYING}
              onFinishedPlaying={this.stopSound}
            />
          </div>
        }
      </li>
    );
  }
}
