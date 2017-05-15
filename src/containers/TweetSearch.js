import { connect } from 'react-redux'
import {fetchTweets} from '../actions/actions'
import Query from '../components/Query'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (tweet) => {
      dispatch(fetchTweets(tweet))
    }
  }
}

const TweetSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Query)


export default TweetSearch
