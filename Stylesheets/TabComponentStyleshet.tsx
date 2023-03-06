import { StyleSheet } from "react-native";
import { useTheme } from "../Theme/Index";

// const { palette } = useTheme();

export const tabComponentStylesheet = StyleSheet.create({
  tabMainCointainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: palette.main,
    borderRadius: 30,
  },
  tabButtonRight: {
    // backgroundColor: palette.light,
    // color: palette.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 40,
  },
  tabButtonLeft: {
    // backgroundColor: palette.light,
    // color: palette.main,
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
    // backgroundColor: palette.main,
    // color: palette.light,
    height: 40,
  },
  inactiveTabButtonLeft: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    // backgroundColor: palette.main,
    // color: palette.light,
    height: 40,
  },
});
