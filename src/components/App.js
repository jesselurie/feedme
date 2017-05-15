import React, { Component } from 'react';
import Header from './Header';
import TweetFeed from '../containers/TweetFeed';
class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Header/>
        <TweetFeed/>
      </div>
    );
  }
}

export default App;
