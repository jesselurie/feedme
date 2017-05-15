import { connect } from 'react-redux'
import Feed from '../components/Feed'

const mapStateToProps = (state) => {
  console.log(state.fetchTweetsFeed)
  return {
    tweets: state,
    searchWord: state.searchWord,
    loading: state.fetchTweetsFeed.loader
  }
}

const TweetFeed = connect(
  mapStateToProps
)(Feed)

export default TweetFeed
