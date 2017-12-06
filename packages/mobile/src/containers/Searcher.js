import React, { PureComponent } from "react"
import { View, Picker as RawPicker, Platform } from "react-native"
import { reduxForm, Field } from "redux-form"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { func } from "prop-types"
import {
  Picker,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon
} from "native-base"

import {
  setAddress,
  findRepresentatives,
  setLoadingStatus
} from "actions/search"
import states from "assets/states.json"

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setAddress, findRepresentatives, setLoadingStatus },
    dispatch
  )

@reduxForm({ form: "Searcher" })
@connect(undefined, mapDispatchToProps)
class Searcher extends PureComponent {
  static propTypes = {
    setAddress: func,
    handleSubmit: func,
    findRepresentatives: func,
    setLoadingStatus: func
  }

  _onSumbit = value => {
    this.props.setLoadingStatus(true)
    this.props.setAddress(value)
    this.props.findRepresentatives()
  }

  _renderInput({ input }) {
    return (
      <Item>
        <Label>{input.name}</Label>
        <Input {...input} />
      </Item>
    )
  }

  _renderStateInput({ input }) {
    return (
      <Item>
        <Label>{input.name}</Label>
        <Picker
          iosHeader="State"
          style={{ width: Platform.OS === "ios" ? undefined : 200 }}
          selectedValue={input.value}
          onValueChange={value => input.onChange(value)}
          mode="dropdown"
          placeholder="Choose your state"
        >
          {Object.keys(states).map(stateAbv => (
            <Item key={stateAbv} label={states[stateAbv]} value={stateAbv} />
          ))}
        </Picker>
      </Item>
    )
  }

  render() {
    return (
      <Form>
        <Field name="Street" component={this._renderInput} />
        <Field name="City" component={this._renderInput} />
        <Field name="State" component={this._renderStateInput} />
        <Field name="Zipcode" component={this._renderInput} />
        <Button
          iconRight
          rounded
          block
          style={{ marginTop: 20 }}
          onPress={this.props.handleSubmit(this._onSumbit)}
        >
          <Text>Submit</Text>
          <Icon ios="ios-send" android="md-send" />
        </Button>
      </Form>
    )
  }
}

export default Searcher
