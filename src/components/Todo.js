import React, { Component } from 'react';
import './shared/SharedStyles.css';
import './Todo.css';
import { FaCheck } from "react-icons/fa";

export default class Todo extends Component {
  render() {
    return (
      <li className="Todo box center">
        <button className="icon center">
          <FaCheck size={20} />
        </button>
        <span className="music">{this.props.value}</span>
      </li>
    );
  }
}
