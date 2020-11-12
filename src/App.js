import React, { Component } from 'react';
import './index.css';
import Head from '../src/components/Topics/Head'
import Search from '../src/components/Topics/Search'
import HeadTwo from '../src/components/Topics/HeadTwo'
import LeadData from '../src/components/Topics/LeadData'

class App extends Component {
  render() {
    return (
      <div className="topicBrowser">
      <Head />
      <Search />
      <HeadTwo />
      <LeadData />
    </div>
    )
  }
}

export default App;
