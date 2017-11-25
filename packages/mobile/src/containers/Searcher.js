import React, { PureComponent } from "react"
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native"
import { reduxForm, Field } from "redux-form"

import states from "assets/states.json"

@reduxForm({ form: "Searcher" })
class Searcher extends PureComponent {
  state = {
    text: undefined
  }

  _onSumbit = value => {
    console.log("input value", value)
  }

  _renderStreetInput({ input }) {
    return (
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter Street Address"
        onChangeText={input.onChange}
      />
    )
  }

  _renderCityInput({ input }) {
    return (
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter City or Town"
        onChangeText={input.onChange}
      />
    )
  }

  _renderStateInput({ input }) {
    const Item = Picker.Item
    return (
      <Picker
        selectedValue={input.value}
        onValueChange={value => input.onChange(value)}
        style={{ width: 200 }}
      >
        {Object.keys(states).map(stateAbv => (
          <Item key={stateAbv} label={states[stateAbv]} value={stateAbv} />
        ))}
      </Picker>
    )
  }

  _renderZipcodeInput({ input }) {
    return (
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter Zipcode"
        onChangeText={input.onChange}
      />
    )
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text>Street</Text>
          <Field name="Street" component={this._renderStreetInput} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>City or Town</Text>
          <Field name="City" component={this._renderCityInput} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>State</Text>
          <Field name="State" component={this._renderStateInput} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Zipcode</Text>
          <Field name="Zipcode" component={this._renderZipcodeInput} />
        </View>
        <TouchableOpacity onPress={this.props.handleSubmit(this._onSumbit)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Searcher
