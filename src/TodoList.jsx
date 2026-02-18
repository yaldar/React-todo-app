import React from 'react';
import TodoCard from './TodoCard';

const TodoList = (props) => {
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
