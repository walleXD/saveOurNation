import React, { PureComponent } from 'react'
import { Dimensions, View } from 'react-native'
import { object, node } from 'prop-types'
import { Broadcast } from 'react-broadcast'

import defaultTheme from '../../lib/theme'

class Provider extends PureComponent {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    theme: object,
    children: node.isRequired
  }

  state = {
    theme: undefined,
    dimensions: undefined
  }

  componentWillMount() {
    const theme = this.props.theme || defaultTheme
    this.setState({ theme })
  }

  onLayout = event => {
    if (this.state.dimensions) return // layout was already called
    let { width, height } = event.nativeEvent.layout
    // TODO: [ Refactor ] cleaner way to get breakpoint index
    let breakpointNum = this.state.theme.breakpoints.filter(
      setPoint =>
        setPoint >= width && this.state.theme.breakpoints.indexOf(setPoint)
    )[0]
    const breakpoint = this.state.theme.breakpoints.indexOf(breakpointNum)
    this.setState({ dimensions: { width, height, breakpoint } })
  }

  render() {
    return (
      <View onLayout={this.onLayout}>
        <Broadcast
          channel="theme"
          value={{ ...this.state.theme, ...this.state.dimensions }}
        >
          {this.props.children}
        </Broadcast>
      </View>
    )
  }
}

export default Provider
