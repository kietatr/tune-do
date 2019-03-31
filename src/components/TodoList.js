import React, { Component } from 'react';

import './TodoList.css';

import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul className="TodoList">
        {
          this.props.todos.map(todo => (
            <Todo 
              key={todo.toString()}
              todo={todo}
              done={this.props.dones.includes(todo)}
              addDone={this.props.addDone}
              removeDone={this.props.removeDone}
              isDeleting={this.props.isDeleting}
              removeTodo={this.props.removeTodo} 
            />
          ))
        }
        <div className="todoList-progress">
          <h4>{this.props.dones.length + "/" + this.props.todos.length + " DONE"}</h4>
        </div>
      </ul>
    );
  }
}
