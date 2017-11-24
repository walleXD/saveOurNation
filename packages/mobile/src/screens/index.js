import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'

import ExampleScreen from './Example'
import LandingScreen from './Landing'

import initStore from '../lib/initStore'

const store = initStore()

const MainNav = TabNavigator(
  {
    Example: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: 'Example'
      }
    },
    Landing: {
      screen: LandingScreen,
      navigationOptions: {
        tabBarLabel: 'Landing'
      }
    }
  },
  {
    animationEnabled: true,
    tabBarPosition: 'bottom'
  }
)

export default () => (
  <Provider store={store}>
    <MainNav />
  </Provider>
)
