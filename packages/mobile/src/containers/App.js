import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { addNavigationHelpers } from "react-navigation"

import Screens from "screens"

@connect(({ nav }) => ({ nav }))
class App extends PureComponent {
  render() {
    return (
      <Screens
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    )
  }
}

export default App
