import { Platform } from 'react-native'

export default {
  basePrimaryColor: '#3F51B5',
  darkPrimaryColor: '#1976D2',
  lightPrimaryColor: '#BBDEFB',
  secondaryColor: '#FF4081',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  lightTextColor: '#FFFFFF',
  dividerColor: '#BDBDBD',
  fontFamily: Platform.OS === 'iOS' ? 'San Francisco' : 'Roboto',
  breakpoints: [480, 960, 1280, 1600, 1920]
}
