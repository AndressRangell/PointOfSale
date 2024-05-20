import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants/theme"

const styles = StyleSheet.create({
  container: {
    marginBottom: 120
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
    justifyContent: "space-between"
  },
  title: {
    fontFamily: "bold",
    color: COLORS.gray,
    fontSize: 22
  },
  cartContainer: {
    alignItems: "flex-end"
  },
  cartCount: {
    position: "absolute",
    left: 12,
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999
  },
  cartNumber: {
    fontWeight: "bold",
    fontSize: 10,
    color: COLORS.lightWhite
  }
})

export default styles