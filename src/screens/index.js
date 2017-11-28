import React from "react"
import { TabNavigator } from "react-navigation"
import { Provider } from "react-redux"

import ExampleScreen from "./Example"
import LandingScreen from "./Landing"
import SearchScreen, { Icon as SearchIcon } from "./Search"

import tabBarComponent from "components/BottomNav"

export default TabNavigator(
  {
    Search: {
      screen: SearchScreen
    },
    Landing: {
      screen: LandingScreen
    },
    Example: {
      screen: ExampleScreen
    }
  },
  {
    animationEnabled: true,
    tabBarPosition: "bottom",
    tabBarComponent
  }
)
