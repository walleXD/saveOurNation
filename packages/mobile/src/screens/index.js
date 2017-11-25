import { TabNavigator } from "react-navigation"
import { Provider } from "react-redux"

import ExampleScreen from "./Example"
import LandingScreen from "./Landing"
import SearchScreen, { Icon as SearchIcon } from "./Search"

export default TabNavigator(
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
        tabBarLabel: "Search",
        tabBarIcon: SearchIcon
      }
    }
  },
  {
    animationEnabled: true,
    tabBarPosition: "bottom"
  }
)
