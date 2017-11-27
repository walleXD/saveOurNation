import React from "react"
import { TabNavigator } from "react-navigation"
import { Provider } from "react-redux"

import ExampleScreen from "./Example"
import LandingScreen from "./Landing"
import SearchScreen, { Icon as SearchIcon } from "./Search"

import tabBarComponent from "components/BottomNav"

export default TabNavigator(
  {
    Example: {
      screen: ExampleScreen
    },
    Landing: {
      screen: LandingScreen
    },
    Search: {
      screen: SearchScreen
    }
  },
  {
    animationEnabled: true,
    tabBarPosition: "bottom",
    tabBarComponent
  }
)
