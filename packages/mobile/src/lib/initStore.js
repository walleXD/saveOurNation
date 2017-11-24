import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'

import reducers from '../reducers'

export default (preloadedState = {}) => {
  const rootReducer = combineReducers(reducers)
  return createStore(rootReducer, preloadedState, composeWithDevTools())
}
