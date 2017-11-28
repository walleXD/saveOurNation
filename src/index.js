import "expo"
import "rxjs/Rx"
import Expo from "expo"
import React, { PureComponent } from "react"
import { Provider } from "react-redux"
import { addNavigationHelpers } from "react-navigation"

import Screens from "screens"

import initStore from "lib/initStore"
import App from "containers/App"

const store = initStore()

class Root extends PureComponent {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    })
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Expo.registerRootComponent(Root)

/*
Phase 1: One can look up representatives based on address & able to call 'em
Phase 2: Set up firebase account system
Phase 3: Get points for making calls
Phase 4: Get points getting others to make calls
Phase 5: Internet Defenders list

TODO: [ Phase 1.5 ] - Clean up styling quirks
TODO: [ Phase 1.7 ] - Figure out the details of campaign mode
TODO: [ Phase 2 ] - Setup auth for campaign login w/ firebase
TODO: [ Phase 2 ] - Add campaign mode tab
*/
