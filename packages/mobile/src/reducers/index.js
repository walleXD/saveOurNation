import { firebaseStateReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"
import { reducer as formReducer } from "redux-form"

import example from "./example"
import nav from "./nav"

export default {
  example,
  nav,
  firebase: firebaseStateReducer,
  firestore: firestoreReducer,
  form: formReducer
}
