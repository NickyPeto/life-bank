import { StyleSheet } from "react-native";

import { main } from "./ColorPallete";

export const ProfileStylesheet = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  headerContainer: {
    backgroundColor: main,
    display: "flex",
    flex: 1,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-evenly",
  },
  infoSectionRowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  infoSectionRowLeftContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  infoSectionRowRightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  footerWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
