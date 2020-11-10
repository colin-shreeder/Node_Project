import React, { Component } from 'react';

export default class Edit extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  
  render() {
    return (
      <div className="button">
        <button className="confirmationButton" > Update </button>
      </div>
    )
  }
}