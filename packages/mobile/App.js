import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, Header } from '@saveournet/sugar'

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <Header>Hello</Header>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200
  },
});
