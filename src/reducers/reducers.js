import {combineReducers} from 'redux';

import {
  REQUEST_TWEETS,
  RECIEVED_TWEETS,
  REMOVE_TWEET
} from '../actions/actions';



function fetchTweetsFeed(state={isFetching:false, items:[] },action){
  switch (action.type) {

    case RECIEVED_TWEETS:
    let nextState = {}
    nextState[action.tweet] = Object.assign({},state,{
      isFetching: false,
      items: action.tweets,
    })
    nextState['searchWord'] = action.tweet
    nextState['loader'] = ""
      return Object.assign({}, state, nextState)

    case REQUEST_TWEETS: {
      let nextState = {}
        nextState[action.tweet] = Object.assign({},state, {
          isFetching: true,
          items: []
        })
      nextState['searchWord'] = action.tweet
      nextState['loader'] = "loader"
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
