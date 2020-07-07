import React from 'react';
import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

const TodoList = (props) => {
  TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  };

  const { todos, toggle, remove } = props;

  let cardList = [];
  todos.tasks.forEach((el, index) => {
    const card = (
      <TodoCard
        status={el.done ? 'done' : 'pending'}
        key={index}
        id={index}
        info={el}
        remove={remove}
        toggle={toggle}
      />
    );
    if (el.done) {
      cardList = [...cardList, card];
    } else {
      cardList = [card, ...cardList];
    }
  });

  return <ul className="todo-list">{cardList}</ul>;
};

export default TodoList;
