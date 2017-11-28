import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import { string, array } from "prop-types"
import { phonecall, web } from "react-native-communications"
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base"

const RepresentativeCard = props => (
  <Card>
    <CardItem header>
      <Left>
        <Thumbnail source={{ uri: props.imgSrc }} />
        <Body>
          <Text>{props.name}</Text>
          <Text note>{props.party}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Left>
        <Button
          iconLeft
          transparent
          onPress={() => phonecall(props.phones[0].replace(/-/g, ""), false)}
        >
          <Icon android="md-call" ios="ios-call" />
          <Text>Call</Text>
        </Button>
      </Left>
      <Body>
        <Button
          iconLeft
          transparent
          onPress={() => web(`https://facebook.com/${props.channels[0].id}`)}
        >
          <Icon name="logo-facebook" />
          <Text>Post</Text>
        </Button>
      </Body>
      <Right>
        <Button
          iconLeft
          transparent
          onPress={() => web(`https://twitter.com/${props.channels[1].id}`)}
        >
          <Icon name="logo-twitter" />
          <Text>Tweet</Text>
        </Button>
      </Right>
    </CardItem>
  </Card>
)

RepresentativeCard.propTypes = {
  name: string,
  phones: array,
  imgSrc: string,
  party: string,
  channels: array
}

export default RepresentativeCard
