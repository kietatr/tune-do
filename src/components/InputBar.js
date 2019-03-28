import React, { Component } from 'react';
import './shared/SharedStyles.css';
import './InputBar.css';
import { FaPlus } from "react-icons/fa";

export default class InputBar extends Component {
  render() {
    return (
      <div className="InputBar">
        <form className="box box-shadow" onSubmit={this.props.onSubmit}>
          <button className="icon center">
            <FaPlus size={20} />
          </button>
          <input
            type="text"
            placeholder="Today, I want to ..." 
            value={this.props.value} 
            onChange={this.props.onChange}
          />
        </form>
      </div>
    );
  }
}
