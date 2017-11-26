import React from "react"
import { View, Text, Image } from "react-native"
import { string, array } from "prop-types"

const RepresentativeCard = ({ name, phones, imgSrc }) => (
  <View>
    <Image style={{ width: 150, height: 150 }} source={{ uri: imgSrc }} />
    <Text>{name}</Text>
    <Text>{phones}</Text>
  </View>
)

RepresentativeCard.propTypes = {
  name: string,
  phones: array,
  imgSrc: string
}

export default RepresentativeCard
