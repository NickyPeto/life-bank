import { StyleSheet } from "react-native";
import { light, main } from "./ColorPallete";

export const homeStyleSheet = StyleSheet.create({
  homeHeader: {
    display: "flex",
    flex: 1,
    backgroundColor: main,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingLeft: 20,
    paddingTop: 20,
  },
  homeTabContainer: {
    display: "flex",
    flex: 2,
  },
  homeHeaderCaption: {
    display: "flex",
    alignItems: "flex-start",
  },
  homeHeaderRowWithicon: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 40,
    paddingTop: 40,
  },
  homeSimpleColumn: {
    display: "flex",
    flexDirection: "column",
  },
  homeHeaderRowBottomWithicon: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 40,
  },
});
