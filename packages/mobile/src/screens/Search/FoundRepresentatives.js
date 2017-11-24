import React, { PureComponent } from "react"
import { Text, View } from "react-native"

class FindRepresentatives extends PureComponent {
  static navigationOptions = {
    title: "Found Representative"
  }
  render() {
    return (
      <View>
        <Text>Find some Representatives</Text>
      </View>
    )
  }
}

export default FindRepresentatives
