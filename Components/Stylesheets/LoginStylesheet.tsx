import { StyleSheet } from "react-native";
import { main, dark, light } from "../ColorPallete";

export const LoginStylesheet = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: dark,
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
    color: light,
    fontSize: 18,
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: main,
  },
  logoContainer: {
    width: "100%",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "85%",
    height: "35%",
    alignSelf: "center",
  },
});
