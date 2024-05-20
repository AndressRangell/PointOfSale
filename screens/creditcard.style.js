import { StyleSheet } from 'react-native'
import { SIZES } from '../constants/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  text: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  }
})

export default styles