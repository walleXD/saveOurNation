import { combineEpics } from "redux-observable"

import example from "./example"
import search from "./search"

export default combineEpics(...example, ...search)
