import React, { PropTypes,Component } from 'react';
import TweetSearch from '../containers/TweetSearch';
import ShowTweet from '../containers/ShowTweet';
import './Feed.css';

class Feed extends Component {
  constructor(props){
    super(props)
  }

  tweets(){
    return this.props.tweets['fetchTweetsFeed'][this.props.tweets['fetchTweetsFeed']['searchWord']].items;
  }

  render(){
    return (
      <div className="container content">
          <TweetSearch/>
        <div className="feed">
            {this.tweets().map((tweet, i) =>{
              return <ShowTweet key={i} theKey={String(i)} className="card" date={String(tweet.pubDate)} link={String(tweet.link)} description={String(tweet.description)} author={String(tweet.title)}/>
              })}
          </div>
      </div>
    )
  }
}

Feed.propTypes = {
  tweets: PropTypes.object,
  searchWord: PropTypes.string
}

export default Feed;
