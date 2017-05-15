import { connect } from 'react-redux'
import Feed from '../components/Feed'

const mapStateToProps = (state) => {
  return {
    tweets: state,
    searchWord: state.searchWord
  }
}

const TweetFeed = connect(
  mapStateToProps
)(Feed)

export default TweetFeed
