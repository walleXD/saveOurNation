import { StyleSheet } from 'react-native'

export default (styler, props) => {
  return StyleSheet.create(styler(props))
}
