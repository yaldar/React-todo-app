import React from 'react';
import TodoCard from './TodoCard';

const TodoList = props => {
  const { todos, toggle, remove } = props;
  const pendingCards = todos.pending.map((el, index) => (
    <TodoCard
      status='pending'
      key={index}
      id={index}
      info={el}
      toggle={toggle}
    />
  ));
  const doneCards = todos.done.map((el, index) => (
    <TodoCard
      status='done'
      key={index}
      id={index}
      info={el}
      remove={remove}
      toggle={toggle}
    />
  ));
  return (
    <ul className='todo-list'>
      {pendingCards}
      {doneCards}
    </ul>
  );
};

export default TodoList;
