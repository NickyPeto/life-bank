import { StyleSheet } from "react-native";
import { dark, main, light, mainUltraLight } from "./ColorPallete";

export const GeneralComponentsStylesheet = StyleSheet.create({
  buttonContainer: {
    backgroundColor: light,
    display: "flex",
  },
  buttonTitleStyle: {
    fontSize: 20,
  },
  buttonMain: {
    backgroundColor: main,
    justifyContent: "center",
    alignSelf: "center",
    color: light,
    width: "90%",
    height: 56,
    marginBottom: 20,
    borderRadius: 10,
  },
  darkTheme: {
    backgroundColor: dark,
    flex: 1,
    justifyContent: "center",
  },
  lightTheme: {
    backgroundColor: light,
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: light,
    display: "flex",
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputStyle: {
    color: main,
    padding: 20,
    fontWeight: "500",
  },
  inputContainerStyle: {
    borderRadius: 20,
    height: 70,
    borderColor: "transparent",
    backgroundColor: mainUltraLight,
  },
  shortcutTabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    // paddingBottom: 20,
  },
  shortcutTabIconWrapper: {
    display: "flex",
    height: 70,
    width: 70,
    backgroundColor: light,
    //For android users
    elevation: 10,
    //For ios users
    zIndex: 10,
    shadowColor: dark,
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 20,
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
  },
});
