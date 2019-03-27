import React, { Component } from 'react';
import './Todo.css';
import { FaCheck } from "react-icons/fa";

export default class Todo extends Component {
  render() {
    return (
      <li className="Todo box box-hover">
        <button className="icon center">
          <FaCheck size={20} />
        </button>
        <span className="text">{this.props.value}</span>
      </li>
    );
  }
}
