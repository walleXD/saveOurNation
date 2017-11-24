import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { createEpicMiddleware } from 'redux-observable'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebase from 'firebase'
import 'firebase/firestore'

import reducers from '../reducers'
import epics from '../epics'

import {
  API_KEY,
  AUTH_DOMAIN,
  DB_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID
} from 'react-native-dotenv'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DB_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID
}

const reduxFirebaseConfig = {
  userProfile: 'users'
}

// init firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default (preloadedState = {}) => {
  const rootReducer = combineReducers(reducers)
  const epicMiddleware = createEpicMiddleware(epics, {
    dependencies: { getFirebase, getFirestore }
  })

  const devMiddlewares = [require('redux-immutable-state-invariant').default()]
  const prodMiddlewares = [epicMiddleware]

  const createStoreWithMiddleware = composeWithDevTools(
    reactReduxFirebase(firebase, reduxFirebaseConfig),
    reduxFirestore(firebase),
    applyMiddleware(...prodMiddlewares, ...(__DEV__ && devMiddlewares))
  )(createStore)

  return createStoreWithMiddleware(rootReducer, preloadedState)
}
