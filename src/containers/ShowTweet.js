import { connect } from 'react-redux'
import {removeTweet} from '../actions/actions'
import Tweet from '../components/Tweet'

const mapStateToProps = (state) => {
  return {}
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHide: (key) => {
      dispatch(removeTweet(key))
    }
  }
}

const ShowTweet = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweet)

export default ShowTweet
