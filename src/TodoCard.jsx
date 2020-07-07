import React from 'react';
import PropTypes from 'prop-types';

const TodoCard = (props) => {
  TodoCard.propTypes = {
    status: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };
  const {
    status, info, remove, toggle, id,
  } = props;
  const button = status === 'done' ? (
    <button className="remove-button" onClick={remove}>
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
      <h1 className="card-title">{info.title}</h1>
      <p className="card-desc">{info.desc}</p>
      {button}
    </li>
  );
};

export default TodoCard;
