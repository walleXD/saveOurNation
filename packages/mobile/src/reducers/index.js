import { firebaseStateReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"
import { reducer as formReducer } from "redux-form"

import example from "./example"

export default {
  example,
  firebase: firebaseStateReducer,
  firestore: firestoreReducer,
  form: formReducer
}
