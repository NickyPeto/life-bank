import { StyleSheet } from "react-native";
import { light, mainUltraLight } from "./ColorPallete";

export const ListComponentStylesheet = StyleSheet.create({
  listItem: {
    display: "flex",
    flexGrow: 2,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    elevation: 10,
    backgroundColor: light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  listItemContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: mainUltraLight,
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
  },
  textBold: {
    fontWeight: "bold",
    textAlign: "left",
  },
  listComponent: {
    display: "flex",
    flexGrow: 2,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    elevation: 10,
    backgroundColor: light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  listComponentWrapper: {
    marginBottom: 10,
  },
});
