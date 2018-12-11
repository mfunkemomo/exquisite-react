import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    const initState = {};
    props.fields.forEach((field) => {
      if (field.key) {
        initState[ field.key ] = '';
      }
    });
    this.state = initState;
  }

  resetForm() {
    const state = {};
    this.props.fields.forEach((field) => {
      if (field.key) {
        state[ field.key ] = '';
      }
    });
    this.setState( state );
  }

  onPoemInputChange = (val, id) => {
    this.setState({
      [id]: val,
    });
  }

  sendSubmission = (e) => {
    e.preventDefault();
    const submission = this.props.fields.map((field) => {
      if (field.key) {
        return this.state[field.key];
      } else {
        return field;
      }
    });
    this.props.sendSubmission(submission.join(" "));
    this.resetForm();
  }

  isValidInput = (val) => {
    return val.length;
  }

  render() {

    const inputContent = this.props.fields.map( (field, i) => {
      if (field.key) {
        return <input
          key={ i }
          placeholder={ field.placeholder }
          value={ this.state[field.key] }
          onChange={ (e) => { this.onPoemInputChange(e.target.value, field.key) } }
          type="text"
          className={this.isValidInput(this.state[field.key]) ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
        />;
      } else {
        return field;
      }
    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.index }</h3>

        <form
          onSubmit={ this.sendSubmission }
          className="PlayerSubmissionForm__form">

          <div className="PlayerSubmissionForm__poem-inputs">

            {inputContent}

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
