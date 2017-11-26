import React, { PureComponent } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, Text } from "react-native"
import { array } from "prop-types"

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
    return representatives.map(({ name, phones, photoUrl }) => (
      <RepresentativeCard
        key={phones[0]}
        phones={phones}
        name={name}
        imgSrc={photoUrl}
      />
    ))
  }

  render() {
    return (
      <View>
        <Text>Representatives</Text>
        <View>
          <Text>Senators</Text>
          {this._renderRepresentatives(this.props.senators)}
        </View>
        <View>
          <Text>Congressman</Text>
          {this._renderRepresentatives(this.props.congressman)}
        </View>
      </View>
    )
  }
}

export default SearchResult
