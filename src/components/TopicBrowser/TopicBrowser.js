import React, { Component } from 'react';

import Head from '../Topics/Head'
import LeadData from '../Topics/LeadData'
import Buttons from '../Topics/Buttons'
import Search from '../Topics/Search'
import HeadTwo from '../Topics/HeadTwo'
import Update from '../Topics/Update'

class TopicBrowser extends Component {
    render() {
        return (
            <div className="topicBrowser">
            <Head />
            <Search />
            <HeadTwo />
            <LeadData />
            <Update />
            <Buttons />
          </div>
        )
      }
}
export default TopicBrowser;