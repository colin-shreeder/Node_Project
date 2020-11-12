import React, { Component } from "react";
import axios from "axios";
import Update from './buttons/Update'
import Add from './buttons/Add'
import Home from './buttons/Home'
import Delete from './buttons/Delete'
import Edit from './buttons/Edit'

export default class LeadData extends Component {
  constructor() {
    super();

    this.state = {
      leads: [],
      id: 0,
      phone: '',
      name: '',
      notes: '',
      disposition: '',
      email: ''
    }
    this.getLeads = this.getLeads.bind(this)
    this.updateLeads = this.updateLeads.bind(this)
    this.addLead = this.addLead.bind(this)
    this.deleteLead = this.deleteLead.bind(this)
    this.formChange = this.formChange.bind(this)
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

  updateLeads() {
    axios
      .put('/leads/:leadId', {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        notes: this.state.notes,
        disposition: this.state.disposition,
        id: this.state.id
      })
      .then((res) => {
        this.setState({
          leads: [res.data, ...this.state.leads],
        });
      })
      .catch((err) => console.log(err));
  }

  deleteLead() {
    axios
      .delete('/leads/:leadId', {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        notes: this.state.notes,
        disposition: this.state.disposition,
        id: this.state.id
      })
      .then((res) => {
        this.setState({
          leads: [res.data],
        });
      })
      .catch((err) => console.log(err));
  }

  addLead() {
    axios
      .post('/leads', {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        notes: this.state.notes,
        disposition: this.state.disposition,
        id: this.state.id})
      .then((res) => {
        console.log(res.data);
        this.setState({
          leads: [res.data, ...this.state.leads],
        });
      })
      .catch((err) => console.log(err));
  }

  formChange(e){
    console.log(e);
    this.setState({
        [e.target.name]: e.target.value
    })
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
        <Update 
        formChange={this.formChange}
        name={this.state.name}
        email={this.state.email}
        disposition={this.state.disposition}
        notes={this.state.notes}
        phone={this.state.phone}
        id={this.state.id}/>
        <Home getLeads={this.getLeads} />
        <Delete deleteLead={this.deleteLead} />
        <Edit updateLeads={this.updateLeads} />
        <Add addLead={this.addLead} />
      </div>
    );
  }
}
