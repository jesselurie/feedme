import fetch from 'isomorphic-fetch'
import X2JS from 'x2js'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

export const REMOVE_TWEET = 'REMOVE_TWEET'
export function removeTweet(key){
  return {
    type: REMOVE_TWEET,
    key
  }
}

//network call to request tweets from url
export const REQUEST_TWEETS = 'REQUEST_TWEETS'
function requestTweets(tweet) {
  return {
    type: REQUEST_TWEETS,
    tweet
  }
}

export const RECIEVED_TWEETS = 'RECIEVED_TWEETS'
function recievedTweets(tweet,blob){
  return {
    type: RECIEVED_TWEETS,
    tweet,
    tweets: blob.rss.channel.item.map(child=>child),
    recievedAt: Date.now(),
  }
}
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchTweets('Javascript'))
export function fetchTweets(tweet){
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function(dispatch){
    // First dispatch: the app state is updated to inform
   // that the API call is starting.
   dispatch(requestTweets(tweet))
   // The function called by the thunk middleware can return a value,
   // that is passed on as the return value of the dispatch method.
   // In this case, we return a promise to wait for.
   // This is not required by thunk middleware, but it is convenient for us.
   return fetch(proxyUrl + `https://queryfeed.net/twitter?q=${tweet}`)
      .then(response => response.text())
      .then(blob => {
        var x2js = new X2JS();
        var doc = x2js.xml2js(blob);
        // Here, we update the app state with the results of the API call.
        dispatch(recievedTweets(tweet,doc))
      })
      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
