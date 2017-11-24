import React, { PureComponent } from "react"
import { StackNavigator } from "react-navigation"
import { Ionicons } from "@expo/vector-icons"

import Find from "./FindRepresentatives"
import Found from "./FoundRepresentatives"

const Navigations = StackNavigator({
  Find: {
    screen: Find
  },
  Found: {
    path: "found",
    screen: Found
  }
})

class SearchScreen extends PureComponent {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="md-search" size={20} style={{ color: tintColor }} />
    )
  }

  render() {
    return <Navigations />
  }
}

export default SearchScreen
