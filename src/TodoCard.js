import React from 'react';

const TodoCard = props => {
  const { status, info, remove, toggle, id } = props;
  const button =
    status === 'done' ? (
      <button className='remove-button' onClick={remove}>
        Remove
      </button>
    ) : null;
  return (
    <li
      className={`todo-card ${status}`}
      {...{ status }}
      onClick={toggle}
      id={id}
    >
      <h1 className='card-title'>{info.title}</h1>
      <p className='card-desc'>{info.desc}</p>
      {button}
    </li>
  );
};

export default TodoCard;
