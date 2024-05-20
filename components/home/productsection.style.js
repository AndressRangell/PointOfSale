import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginHorizontal: 18,
    marginBottom: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'semiBold',
    fontSize: SIZES.large,
    color: COLORS.gray
  },
  listContainer: {
    marginTop: SIZES.medium
  },
  list: {
    columnGap: SIZES.medium
  }
})

export default styles