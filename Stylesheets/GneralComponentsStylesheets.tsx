import { StyleSheet } from "react-native";

//FIXME: separar estilos por componente

export const GeneralComponentsStylesheet = StyleSheet.create({
  buttonContainer: {
    display: "flex",
  },
  buttonTitleStyle: {
    fontSize: 20,
  },
  buttonMain: {
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
    height: 56,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonMainSmall: {
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
    height: 40,
    borderRadius: 10,
  },
  darkTheme: {
    flex: 1,
    justifyContent: "center",
  },
  lightTheme: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputContainer: {
    padding: 20,
    fontWeight: "500",
  },
  inputStyle: {
    borderRadius: 20,
    height: 70,
    padding: 20,
    fontWeight: "700",
    borderColor: "transparent",
    underlineColorAndroid: "transparent",
    fontSize: 16,
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
    //For android users
    elevation: 10,
    //For ios users
    zIndex: 10,
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
