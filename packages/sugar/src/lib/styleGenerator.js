import { StyleSheet } from 'react-native'

export default (styler, props) => {
  console.log(props)
  return StyleSheet.create(styler(props))
}
