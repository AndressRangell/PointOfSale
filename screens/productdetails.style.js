import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow: {
    marginHorizontal: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    marginTop: - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium
  },
  titleRow: {
    marginHorizontal: SIZES.large,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44,
    top: 20
  },
  title: {
    fontFamily: 'semiBold',
    fontSize: SIZES.large
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: 'semiBold',
    fontSize: SIZES.large
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 10,
    top: 5
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'medium',
    paddingHorizontal: SIZES.xSmall
  },
  descriptionWrapper: {
    marginTop: SIZES.medium * 2,
    marginHorizontal: SIZES.large
  },
  description: {
    fontFamily: 'medium',
    fontSize: SIZES.large - 2
  },
  descriptionText: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginVertical: SIZES.small
  },
  deliveryContainer: {
    marginBottom: SIZES.small,
    marginTop: SIZES.small
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginHorizontal: 15,
    padding: 5,
    borderRadius: SIZES.large
  },
  locationRow: {
    flexDirection: 'row'
  },
  cartRow: {
    paddingBottom: SIZES.small,
    marginTop: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width
  },
  buyButton: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.xSmall,
    paddingStart: 20,
    borderRadius: SIZES.large,
    marginLeft: 15
  },
  cartTitle: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite
  },
  addCartButton: {
    width: SIZES.width * 0.18,
    padding: SIZES.xSmall,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles