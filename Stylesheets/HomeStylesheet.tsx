import { StyleSheet } from "react-native";
import { main } from "./ColorPallete";

export const homeStyleSheet = StyleSheet.create({
  homeHeader: {
    display: "flex",
    flex: 1,
    backgroundColor: main,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 48,
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
    alignItems: "flex-start",
  },
});
