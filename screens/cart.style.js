import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants/theme"

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignContent: 'space-between'
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleContainer: {
    width: 210,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.large
  },
  title: {
    fontFamily: "bold",
    color: COLORS.gray,
    fontSize: 20
  },
  containerList: {
    marginHorizontal: 22,
    marginBottom: SIZES.small
  },
  buttons: {
    marginHorizontal: SIZES.large
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    fontFamily: 'semiBold',
    color: '#fff',
    fontSize: 18
  }
})

export default styles