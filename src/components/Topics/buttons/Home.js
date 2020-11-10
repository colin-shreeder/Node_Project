import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

  constructor() {
    super();

    this.state = {
      leads: [],
      
    };
  }

  getLeads(){
    axios.get("http://localhost:3014/leads")
    .then(res=>{
        this.setState({
            cards: res.data
        })
    }).catch( err=>console.log(err))
}

  render() {
    return (
      <div className="button">
        <button className="addButton" onClick={this.getLeads} > Home </button>
      </div>
    )
  }
}