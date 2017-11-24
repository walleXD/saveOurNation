import React from "react"
import { TabNavigator } from "react-navigation"
import { Provider } from "react-redux"
import { SafeAreaView } from "react-native"

import ExampleScreen from "./Example"
import LandingScreen from "./Landing"
import SearchScreen from "./Search"

import initStore from "lib/initStore"

const store = initStore()

const MainNav = TabNavigator(
  {
    Example: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: "Example"
      }
    },
    Landing: {
      screen: LandingScreen,
      navigationOptions: {
        tabBarLabel: "Landing"
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search"
      }
    }
  },
  {
    animationEnabled: true,
    tabBarPosition: "bottom"
  }
)

const Screens = () => (
  <Provider store={store}>
    <MainNav />
  </Provider>
)

export default Screens
