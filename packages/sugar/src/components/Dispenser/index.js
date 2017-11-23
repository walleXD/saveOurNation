import React, { Children } from  'react'
import { Subscriber } from 'react-broadcast'

import styleGenerator from '../../lib/styleGenerator'

const Dispenser = ({ render, styles, ...restProps }) =>
  <Subscriber channel="theme">
    {
      theme => render({
        styles: styleGenerator(styles, {...restProps, theme}),
        ...restProps
      })
    }
  </Subscriber>

export default Dispenser
