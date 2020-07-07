import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { titleField: null, descField: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    AddForm.propTypes = {
      add: PropTypes.func.isRequired,
    };
    
    this.props.add(this.state.titleField, this.state.descField);
    document.querySelector('.add-form').reset();
    this.setState({ titleField: null, descField: null });
    event.preventDefault();
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <label htmlFor="titleField">Title</label>
        <input
          className="text-input"
          id="titleField"
          type="text"
          onChange={this.handleChange}
        />
        <label htmlFor="descField">Description</label>
        <input
          className="text-input"
          id="descField"
          type="text"
          onChange={this.handleChange}
        />
        <input className="submit-button" type="submit" value="Add" />
      </form>
    );
  }
}

export default AddForm;
