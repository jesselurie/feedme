import {combineReducers} from 'redux';

import {
  REQUEST_TWEETS,
  RECIEVED_TWEETS,
  REMOVE_TWEET
} from '../actions/actions';




function tweets(state = { isFetching:false, items:[] }, action){
  switch (action.type) {
    case REQUEST_TWEETS:
      return Object.assign({},state, {
        isFetching: true,
        items: []
      })
    case RECIEVED_TWEETS:
      return Object.assign({},state,{
        isFetching: false,
        items: action.tweets,
      })
    default:
      return state
  }
}

function fetchTweetsFeed(state={},action){
  switch (action.type) {
    case RECIEVED_TWEETS:
    let nextState = {}
    nextState[action.tweet] = tweets(state[action.tweet], action)
    nextState['searchWord'] = action.tweet
      return Object.assign({}, state, nextState)
    case REQUEST_TWEETS: {
      let nextState = {}
      nextState[action.tweet] = tweets(state[action.tweet], action)
      nextState['searchWord'] = action.tweet
      return Object.assign({}, state, nextState)
    }
    case REMOVE_TWEET:{
      let nextState = {}
      nextState[action.tweet] = state[state.searchWord].items.splice(action.key,1)
      nextState['searchWord'] = state.searchWord
      return Object.assign({}, state, nextState)
    }

    default:
      return state
  }
}


const rootReducer = combineReducers({
  fetchTweetsFeed,
})


export default rootReducer
