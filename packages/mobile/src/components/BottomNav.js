import React from "react"
import { Button, Text, Icon, Item, Footer, FooterTab, Label } from "native-base"
import { object } from "prop-types"

const BottomNav = props => (
  <Footer>
    <FooterTab>
      <Button
        vertical
        active={props.navigationState.index === 0}
        onPress={() => props.navigation.navigate("Example")}
      >
        <Icon name="bowtie" />
        <Text>Example</Text>
      </Button>
      <Button
        vertical
        active={props.navigationState.index === 1}
        onPress={() => props.navigation.navigate("Landing")}
      >
        <Icon name="briefcase" />
        <Text>Landing</Text>
      </Button>
      <Button
        vertical
        active={props.navigationState.index === 2}
        onPress={() => props.navigation.navigate("Search")}
      >
        <Icon android="md-search" ios="ios-search" />
        <Text>Search</Text>
      </Button>
    </FooterTab>
  </Footer>
)

BottomNav.propTypes = {
  navigation: object,
  navigationState: object
}

export default BottomNav
