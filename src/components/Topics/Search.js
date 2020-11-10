import React, { Component } from 'react';

export default class Search extends Component{
    constructor() {
        super();
        this.state = {
        
        };
    }


     

    render() {
        return (
          <div className="search">
            <input className="searchLine" onChange={(e)=>this.handleChange(e.target.value)} />
            <button className="searchButton"> Search </button>
          </div>
        )
      }
}
