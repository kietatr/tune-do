import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './TodoList.css';

import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <TransitionGroup className="TodoList" component={"ul"}>
          {
            this.props.todos.map(todo => (
              <CSSTransition
                key={todo.toString()}
                timeout={500}
                classNames="todo"
              >
                <Todo 
                  key={todo.toString()}
                  todo={todo}
                  done={this.props.dones.includes(todo)}
                  addDone={this.props.addDone}
                  removeDone={this.props.removeDone}
                  isDeleting={this.props.isDeleting}
                  removeTodo={this.props.removeTodo} 
                />
              </CSSTransition>
            ))
          }
          <div className="todoList-progress">
            <h4>{this.props.dones.length + "/" + this.props.todos.length + " DONE"}</h4>
          </div>
      </TransitionGroup>
    );
  }
}
