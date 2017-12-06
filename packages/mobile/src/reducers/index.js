import { firebaseStateReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"
import { reducer as formReducer } from "redux-form"

import example from "./example"
import nav from "./nav"
import search from "./search"

export default {
  example,
  nav,
  search,
  firebase: firebaseStateReducer,
  firestore: firestoreReducer,
  form: formReducer
}
