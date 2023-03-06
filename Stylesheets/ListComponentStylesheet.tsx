import { StyleSheet } from "react-native";
import { useTheme } from "../Theme/Index";

// const { palette } = useTheme();

export const ListComponentStylesheet = StyleSheet.create({
  listItem: {
    display: "flex",
    flexGrow: 2,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    elevation: 10,
    // backgroundColor: palette.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  listItemContainer: {
    display: "flex",
    flex: 1,
    // backgroundColor: palette.mainUltraLight,
    borderRadius: 20,
    flexDirection: "row",
    height: 70,
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemHeader: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "flex-start",
    fontFamily: "SFUIDisplay-Bold",
  },
  textBold: {
    textAlign: "left",
    fontFamily: "SFUIDisplay-Bold",
  },
  textCaption: {
    textAlign: "left",
    fontFamily: "SFUIDisplay-Light",
  },
  listComponent: {
    display: "flex",
    flexGrow: 2,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
    elevation: 10,
    // backgroundColor: palette.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  listComponentWrapper: {
    paddingBottom: 10,
  },
});
