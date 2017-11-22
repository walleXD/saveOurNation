import React from 'react'
import { View, Text } from 'react-native'

import Dispenser from '../Dispenser'

const styles = () => ({
  root: {
    paddingLeft: 100
  }
})

const Header = ({style, children}) =>
  <Dispenser styles={styles} render={
    ({ styles }) =>
      <View style={[styles.root]}>
        <Text>{children}</Text>
      </View>
  }/>

export default Header
