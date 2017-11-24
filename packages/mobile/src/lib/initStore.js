import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { createEpicMiddleware } from 'redux-observable'

import reducers from '../reducers'
import epics from '../epics'

export default (preloadedState = {}) => {
  const rootReducer = combineReducers(reducers)
  const epicMiddleware = createEpicMiddleware(epics)

  const devMiddlewares = [require('redux-immutable-state-invariant').default()]
  const prodMiddlewares = [epicMiddleware]

  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...prodMiddlewares, ...(__DEV__ && devMiddlewares))
  )(createStore)

  return createStoreWithMiddleware(rootReducer, preloadedState)
}
