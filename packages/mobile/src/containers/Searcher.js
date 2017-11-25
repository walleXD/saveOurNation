import React, { PureComponent } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { reduxForm, Field } from "redux-form"

@reduxForm({ form: "Searcher" })
class Searcher extends PureComponent {
  state = {
    text: undefined
  }

  _onSumbit = value => {
    console.log("input value", value)
  }

  _renderInput = ({ input: { onChange, ...restInput } }) => (
    <TextInput
      style={{ height: 40 }}
      placeholder="Type here to translate!"
      onChangeText={onChange}
    />
  )

  render() {
    return (
      <View>
        {console.log(this.props)}
        <Text>Address</Text>
        <Field name="Address" component={this._renderInput} />
        <TouchableOpacity onPress={this.props.handleSubmit(this._onSumbit)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Searcher
