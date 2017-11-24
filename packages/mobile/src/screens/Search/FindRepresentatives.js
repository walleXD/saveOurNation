import React, { PureComponent } from "react"
import { Text, View, Button } from "react-native"

class FindRepresentatives extends PureComponent {
  static navigationOptions = {
    title: "Find Representatives"
  }
  _find = () => {
    this.props.navigation.navigate("Found")
  }

  render() {
    return (
      <View>
        {console.log(this.props)}
        <Text>Find some Representatives</Text>
        <Button onPress={this._find} title="Find" />
      </View>
    )
  }
}

export default FindRepresentatives
