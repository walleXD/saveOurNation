import 'rxjs/Rx'
import Expo from 'expo'
import React from 'react'
import { View } from 'react-native'

import Screens from './screens'

class App extends React.Component {
  render() {
    return <Screens />
  }
}

Expo.registerRootComponent(App)

/*
TODO: [ Basic ] - Setup firebase example
TODO: [ Feature ] - Integrate router w/ redux
*/
