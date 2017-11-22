import React, { Children } from  'react'
import { StyleSheet } from 'react-native'
import { Subscriber } from 'react-broadcast'

const Dispenser = ({ render, styles, ...restProps }) =>
  <Subscriber channel="theme">
    {
      theme => {
        const genStyles = StyleSheet.create(styles({...restProps, theme}))
        console.log(theme)
        return render({ styles: genStyles, ...restProps })
      }
    }
  </Subscriber>

export default Dispenser
