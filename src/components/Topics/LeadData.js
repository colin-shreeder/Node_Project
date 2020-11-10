import React, { Component } from "react";
import axios from "axios";

export default class LeadData extends Component {
  constructor() {
    super();

    this.state = {
      leads: [],
    };
  }

  //   componentDidMount(){
  //     this.getLeads();
  // }

  getLeads() {
    axios
      .get("/leads")
      .then((res) => {
        this.setState({
          leads: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let mapLeads = this.state.leads.map((lead) => (
      <div className="mapLeads">
        <li>{lead.id}</li> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <li>{lead.name}</li> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <li>{lead.phone}</li> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <li>{lead.email}</li> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <li>{lead.disposition}</li> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <li>{lead.notes}</li>
      </div>
    ));
    return (
      <div className="leadData">
        {mapLeads}
        <button className="addButton" onClick={() => this.getLeads()}>
          {" "}
          Home{" "}
        </button>
      </div>
    );
  }
}
