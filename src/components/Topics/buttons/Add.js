import React, { Component } from 'react';

export default class Add extends Component {

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
        <button className="addButton" > Add </button>
      </div>
    )
  }
}