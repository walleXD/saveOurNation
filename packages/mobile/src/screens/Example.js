import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from '../actions/example'

const mapStateProps = ({ example }) => ({
  score: example.score
})

const mapDispatchProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      incrementAsync,
      decrementAsync
    },
    dispatch
  )

@connect(mapStateProps, mapDispatchProps)
class ExamplePage extends Component {
  static navigationOptions = {
    title: 'Example',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="md-beer" size={20} style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View>
        <Text style={{ padding: 20 }}>{this.props.score}</Text>
        <View>
          <Text>Actions</Text>
          <View style={buttonContainer}>
            <Button onPress={() => this.props.increment(1)} title="Add" />
            <Button onPress={() => this.props.decrement(1)} title="Substract" />
          </View>
        </View>
        <View>
          <Text>Async Actions</Text>
          <View style={buttonContainer}>
            <Button
              onPress={() => this.props.incrementAsync(2)}
              title="Async Add"
            />
            <Button
              onPress={() => this.props.decrementAsync(2)}
              title="Async Substract"
            />
          </View>
        </View>
      </View>
    )
  }
}

const { buttonContainer } = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  }
})

export default StackNavigator({
  Example: {
    screen: ExamplePage
  }
})
