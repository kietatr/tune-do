import React, { Component } from 'react';
import './InputBar.css';
import { FaPlus } from "react-icons/fa";

export default class InputBar extends Component {
  render() {
    return (
      <div id="InputBar">
        <form className="box box-shadow box-hover" onSubmit={this.props._onSubmit}>
          <button className="icon center">
            <FaPlus size={20} />
          </button>
          <input
            type="text"
            placeholder="I want to ..." 
            value={this.props.inputValue} 
            onChange={this.props._onInputChange}
          />
        </form>
      </div>
    );
  }
}
