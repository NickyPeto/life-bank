import { StyleSheet } from "react-native";
import { dark, main, light, mainUltraLight } from "./ColorPallete";

//FIXME: separar estilos por componente

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
  buttonMainSmall: {
    backgroundColor: main,
    justifyContent: "center",
    alignSelf: "center",
    color: light,
    width: "90%",
    height: 40,
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
    flexDirection: "column",
    justifyContent: "center",
  },
  inputContainer: {
    color: main,
    padding: 20,
    fontWeight: "500",
  },
  inputStyle: {
    borderRadius: 20,
    height: 70,
    padding: 20,
    fontWeight: "700",
    color: main,
    borderColor: "transparent",
    underlineColorAndroid: "transparent",
    fontSize: 16,
    backgroundColor: mainUltraLight,
    opacity: 0.7,
  },
  shortcutTabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  shortcutTabIconWrapper: {
    display: "flex",
    height: 80,
    width: 80,
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
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
  },
});
