import React from "react"
import { storiesOf } from "@storybook/react-native"

import Button from "../"

storiesOf("Button", module).add("base", () => (
  <Button title="hello" onPress={() => {}} />
))
