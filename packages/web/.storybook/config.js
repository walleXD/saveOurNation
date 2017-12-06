import { configure } from "@storybook/react"

const req = require.context("../components", true, /\__stories__\/.*.js$/)

const loadStories = () => req.keys().forEach(module => req(module))

configure(loadStories, module)
