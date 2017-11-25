import "rxjs/Rx"
import Expo from "expo"
import React, { Component } from "react"
import { Provider } from "react-redux"
import { addNavigationHelpers } from "react-navigation"

import Screens from "screens"

import api from "api"
import initStore from "lib/initStore"
import App from "containers/App"

const store = initStore()

api()

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

Expo.registerRootComponent(Root)

/*
Phase 1: One can look up representatives based on address & able to call 'em
Phase 2: Set up firebase account system
Phase 3: Get points for making calls
Phase 4: Get points getting others to make calls
Phase 5: Internet Defenders list

TODO: [ Phase 1 ]: Make screen for search
TODO: [ Phase 1 ]: Get results & able to make calls
TODO: [ Basic ] - Setup firebase example
*/
