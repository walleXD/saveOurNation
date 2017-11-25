import React, { PureComponent } from "react"
import { Text, View, Button } from "react-native"

import Searcher from "containers/Searcher"

class FindRepresentatives extends PureComponent {
  static navigationOptions = {
    title: "Find Representatives"
  }
  _find = () => {
    this.props.navigation.navigate("Found")
  }

  render() {
    return <Searcher />
  }
}

export default FindRepresentatives
