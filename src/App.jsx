import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddForm from './AddForm';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { done: [], pending: [] };
    this.addCard = this.addCard.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.clg = this.clg.bind(this);
    this.state = {
      tasks: [
        {
          title: 'asdf',
          description: 'asdfadsf',
          done: false,
        },
      ],
    };
  }

  addCard(title, desc) {
    if (title || desc) {
      this.setState((prevState) => ({
        tasks: [{ title, desc, done: false }, ...prevState.tasks],
      }));
    }
  }

  toggleDone(event) {
    let index;
    if (event.target.tagName === 'LI') {
      index = parseInt(event.target.id);
    } else if (event.target.tagName === 'H1' || event.target.tagName === 'P') {
      index = parseInt(event.target.parentElement.id);
    }
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((el, i) => {
        if (i === index) {
          return {
            title: el.title,
            description: el.description,
            done: !el.done,
          };
        }
        return el;
      }),
    }));
  }

  removeTodo(event) {
    const indexInDom = event.target.parentElement.id;
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(
        (elemnt, index) => index.toString() !== indexInDom,
      ),
    }));
  }

  clg() {
    // console.table(this.state.tasks);
  }

  render() {
    return (
      <div className="todo-area" onClick={this.clg}>
        <h3 className="form-title">Add new ToDo</h3>
        <AddForm add={this.addCard} />
        <TodoList
          todos={this.state}
          remove={this.removeTodo}
          toggle={this.toggleDone}
        />
      </div>
    );
  }
}

export default App;
