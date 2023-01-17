import { StyleSheet } from "react-native";
import { light, main } from "./ColorPallete";

export const tabComponentStylesheet = StyleSheet.create({
  tabMainCointainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: main,
    borderRadius: 30,
  },
  tabButtonRight: {
    backgroundColor: light,
    color: main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 40,
  },
  tabButtonLeft: {
    backgroundColor: light,
    color: main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 40,
  },
  inactiveTabButtonRight: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    borderBottomLeftRadius: 20,
    backgroundColor: main,
    color: light,
    height: 40,
  },
  inactiveTabButtonLeft: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: main,
    color: light,
    height: 40,
  },
});
