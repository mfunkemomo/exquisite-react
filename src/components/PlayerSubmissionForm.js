import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    }
  }

  onSubmitPoem = (event) => {
    event.preventDefault();

    const {adjective1, noun1, adverb, verb, adjective2, noun2} = this.state;
    const recentLine = `The ${adjective1} ${noun1} ${adverb} ${verb} the ${adjective2} ${noun2}`;

    this.props.addPoemLineCallback(recentLine);

    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  emptyInput = (input) => {
    if (input === ''){
      return true 
    }
  }

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitPoem}>

          <div className="PlayerSubmissionForm__poem-inputs">

            <p>The</p>
            <input
              name="adjective1"
              placeholder="adjective"
              type="text" 
              onChange={this.onInputChange}
              value={this.state.adjective1}
              className={this.emptyInput(this.state.adjective1) ? 'PlayerSubmissionForm__input--empty' : ''}
            />
            <input
              name="noun1"
              placeholder="noun"
              type="text" 
              onChange={this.onInputChange}
              value={this.state.noun1}
              className={this.emptyInput(this.state.noun1) ? 'PlayerSubmissionForm__input--empty' : ''}
            />
            <input
              name="adverb"
              placeholder="adverb"
              type="text" 
              onChange={this.onInputChange}
              value={this.state.adverb}
              className={this.emptyInput(this.state.adverb) ? 'PlayerSubmissionForm__input--empty' : ''}
            />
            <input
              name="verb"
              placeholder="verb"
              type="text" 
              onChange={this.onInputChange}
              value={this.state.verb}
              className={this.emptyInput(this.state.verb) ? 'PlayerSubmissionForm__input--empty' : ''}
            />
            <p>the</p>
            <input
              name="adjective2"
              placeholder="adjective"
              type="text" 
              onChange={this.onInputChange}
              value={this.state.adjective2}
              className={this.emptyInput(this.state.adjective2) ? 'PlayerSubmissionForm__input--empty' : ''}
            />
            <input
              name="noun2"
              placeholder="noun"
              type="text" 
              onChange={this.onInputChange}
              value={this.state.noun2}
              className={this.emptyInput(this.state.noun2) ? 'PlayerSubmissionForm__input--empty' : ''}
            />
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
