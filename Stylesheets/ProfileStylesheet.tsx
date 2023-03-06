import { StyleSheet } from "react-native";
import { useTheme } from "../Theme/Index";

// const { palette } = useTheme();

export const ProfileStylesheet = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  headerContainer: {
    //backgroundColor: palette.main,
    display: "flex",
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-evenly",
  },
  infoSectionRowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
  infoSectionRowLeftContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingRight: 20,
  },
  infoSectionRowRightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingLeft: 20,
  },
  footerWrapper: {
    display: "flex",
    //flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
  },
});
