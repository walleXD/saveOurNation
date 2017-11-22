import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import Provider from '../src/components/Provider'

import 'typeface-roboto/index.css'

const req = require.context(
  '../src/components', // path where stories live
  true, // recursive?
  /\__stories__\/.*.story.js$/, // story files match this pattern
)

function loadStories() {
  req.keys().forEach(module => req(module))
}

addDecorator(story =>
  <Provider>
    {story()}
  </Provider>
)

configure(loadStories, module)
