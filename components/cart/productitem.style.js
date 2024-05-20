import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 110,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginBottom: 20
  },
  imageContainer: {
    width: 120,
    height: 100,
    margin: 6,
    borderRadius: SIZES.small,
    overflow: 'hidden'
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    padding: SIZES.small
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 1
  },
  supplier: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.gray
  },
  price: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginTop: SIZES.small
  },
  addButton: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginStart: SIZES.large,
    marginTop: SIZES.large
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'medium',
    paddingHorizontal: SIZES.xSmall
  }
})

export default styles