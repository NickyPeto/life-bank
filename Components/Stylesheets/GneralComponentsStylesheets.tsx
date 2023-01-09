import { StyleSheet } from "react-native";
import { dark, main, light, disabled } from "../ColorPallete";

export const GeneralComponentsStylesheet = StyleSheet.create({
  buttonContainer: {
    backgroundColor: light,
    display: "flex",
    flex: 1,
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
    padding: 10,
    height: 70,
    borderRadius: 20,
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
  typographyNormal: {
    textAlign: "center",
    fontFamily: "System",
    color: main,
    fontSize: 18,
  },
  typographyBold: {
    textAlign: "center",
    fontFamily: "System",
    fontWeight: "bold",
    color: main,
    fontSize: 18,
  },
  formContainer: {
    backgroundColor: light,
    display: "flex",
    flex: 2,
    paddingTop: 45,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
  },

  inputStyle: {
    color: main,
    borderRadius: 20,
    height: 70,
    borderColor: "transparent",
    backgroundColor: disabled,
  },
  tabButtonRight: {
    backgroundColor: light,
    color: main,
    display: "flex",
    justifyContent: "center",
    borderTopRightRadius: 20,
  },
  tabButtonLeft: {
    backgroundColor: light,
    color: main,
    display: "flex",
    justifyContent: "center",
    borderTopLeftRadius: 20,
  },
  inactiveTabButtonRight: {
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: disabled,
  },
  inactiveTabButtonLeft: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: disabled,
  },
});
