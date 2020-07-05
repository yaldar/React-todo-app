import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddForm from './AddForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { done: [], pending: [] };
  }
  addCard = (title, desc) => {
    if (title || desc) {
      this.setState(prevState => ({
        pending: [{ title, desc }, ...prevState.pending],
      }));
    }
  };
  moveElement = (index, currentStatus) => {
    const element = this.state[currentStatus][index];
    const newStatus = currentStatus === 'done' ? 'pending' : 'done';
    this.setState(prevState => ({
      [currentStatus]: prevState[currentStatus].filter(
        (el, i) => i.toString() !== index,
      ),
      [newStatus]: [...prevState[newStatus], element],
    }));
  };
  toggleDone = event => {
    if (event.target.tagName === 'LI') {
      const index = event.target.id;
      this.moveElement(index, event.target.getAttribute('status'));
    } else if (event.target.tagName === 'H1' || event.target.tagName === 'P') {
      const index = event.target.parentElement.id;
      this.moveElement(
        index,
        event.target.parentElement.getAttribute('status'),
      );
    }
  };
  removeTodo = event => {
    const indexInDom = event.target.parentElement.id;
    this.setState(prevState => ({
      done: prevState.done.filter(
        (elemnt, index) => index.toString() !== indexInDom,
      ),
    }));
  };
  render() {
    return (
      <div className='todo-area'>
        <h3 className='form-title'>Add new ToDo</h3>
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
