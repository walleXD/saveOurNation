import { firebaseStateReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import example from './example'

export default {
  example,
  firebase: firebaseStateReducer,
  firestore: firestoreReducer
}
