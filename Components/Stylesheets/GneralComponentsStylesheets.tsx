import { StyleSheet } from "react-native";
import { dark, main, light } from "../ColorPallete";

export const GeneralComponentsStylesheet = StyleSheet.create({
  buttonMain: {
    backgroundColor: main,
    justifyContent: "center",
    alignSelf: "center",
    color: light,
    width: "80%",
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
    padding: "5%",
    marginBottom: "30%",
    justifyContent: "flex-start",
  },

  inputStyle: {
    color: main,
    borderRadius: 10,
    height: 70,
    backgroundColor: main,
    opacity: 0.1,
  },
});
