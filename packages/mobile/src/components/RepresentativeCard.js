import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { string, array } from "prop-types"
import Communications from "react-native-communications"

const RepresentativeCard = ({ name, phones, imgSrc }) => (
  <View>
    <Image style={{ width: 150, height: 150 }} source={{ uri: imgSrc }} />
    <Text>{name}</Text>
    <TouchableOpacity
      onPress={() =>
        Communications.phonecall(phones[0].replace(/-/g, ""), false)
      }
    >
      <Text>{phones[0]}</Text>
    </TouchableOpacity>
  </View>
)

RepresentativeCard.propTypes = {
  name: string,
  phones: array,
  imgSrc: string
}

export default RepresentativeCard
