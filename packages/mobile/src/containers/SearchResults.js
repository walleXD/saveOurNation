import React, { PureComponent } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, ScrollView } from "react-native"
import { array } from "prop-types"
import { Text } from "native-base"

import RepresentativeCard from "components/RepresentativeCard"

const mapStateToProps = ({ search: { senators, congressman } }) => ({
  senators,
  congressman
})

@connect(mapStateToProps)
class SearchResult extends PureComponent {
  static propTypes = {
    senators: array,
    congressman: array
  }

  _renderRepresentatives(representatives) {
    return representatives.map(
      ({ name, phones, photoUrl, party, channels, urls }) => (
        <RepresentativeCard
          key={phones[0]}
          phones={phones}
          name={name}
          imgSrc={photoUrl}
          party={party}
          url={urls[0]}
          channels={channels}
        />
      )
    )
  }

  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <View>
          <Text H3>Senators</Text>
          {this._renderRepresentatives(this.props.senators)}
        </View>
        <View>
          <Text h1>Congressman</Text>
          {this._renderRepresentatives(this.props.congressman)}
        </View>
      </ScrollView>
    )
  }
}

export default SearchResult
