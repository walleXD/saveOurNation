import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { addNavigationHelpers } from "react-navigation"
import { func, object } from "prop-types"

import Screens from "screens"

@connect(({ nav }) => ({ nav }))
class App extends PureComponent {
  static propTypes = {
    dispatch: func,
    nav: object
  }

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
