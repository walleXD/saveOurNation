import React, { PureComponent } from "react"
import { StackNavigator } from "react-navigation"
import { Ionicons } from "@expo/vector-icons"
import { string } from "prop-types"

import Find from "./FindRepresentatives"
import Found from "./FoundRepresentatives"

const SearchScreen = StackNavigator(
  {
    Find: {
      screen: Find
    },
    Found: {
      screen: Found,
      navigationOptions: {
        title: "Your Representatives"
      }
    }
  },
  {
    animationEnabled: true,
    initialRouteName: "Find"
  }
)

export const Icon = ({ tintColor }) => (
  <Ionicons name="md-search" size={20} style={{ color: tintColor }} />
)

Icon.propTypes = {
  tintColor: string
}

export default SearchScreen
