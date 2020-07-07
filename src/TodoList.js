import React from 'react';
import TodoCard from './TodoCard';
import PropTypes from 'prop-types';

const TodoList = props => {
  TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  };

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
