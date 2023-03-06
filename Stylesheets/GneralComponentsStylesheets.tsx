import { StyleSheet } from "react-native";
import { useTheme } from "../Theme/Index";

//FIXME: separar estilos por componente

// const { palette } = useTheme();

export const GeneralComponentsStylesheet = StyleSheet.create({
  buttonContainer: {
    // backgroundColor: palette.light,
    display: "flex",
  },
  buttonTitleStyle: {
    fontSize: 20,
  },
  buttonMain: {
    // backgroundColor: palette.main,
    justifyContent: "center",
    alignSelf: "center",
    // color: palette.light,
    width: "90%",
    height: 56,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonMainSmall: {
    // backgroundColor: palette.main,
    justifyContent: "center",
    alignSelf: "center",
    // color: palette.light,
    width: "90%",
    height: 40,
    borderRadius: 10,
  },
  darkTheme: {
    // backgroundColor: palette.dark,
    flex: 1,
    justifyContent: "center",
  },
  lightTheme: {
    // backgroundColor: palette.light,
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    // backgroundColor: palette.light,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputContainer: {
    // color: palette.main,
    padding: 20,
    fontWeight: "500",
  },
  inputStyle: {
    borderRadius: 20,
    height: 70,
    padding: 20,
    fontWeight: "700",
    // color: palette.main,
    borderColor: "transparent",
    underlineColorAndroid: "transparent",
    fontSize: 16,
    // backgroundColor: palette.mainUltraLight,
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
    // backgroundColor: palette.light,
    //For android users
    elevation: 10,
    //For ios users
    zIndex: 10,
    // shadowColor: palette.dark,
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
