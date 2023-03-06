import { StyleSheet } from "react-native";
import { useTheme } from "../Theme/Index";

export const LoginStylesheet = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    // backgroundColor: palette.main,
  },
  typographyNormal: {
    textAlign: "center",
    fontFamily: "System",
    // color: palette.main,
    fontSize: 18,
  },
  typographyBold: {
    textAlign: "center",
    fontFamily: "System",
    fontWeight: "bold",
    // color: palette.light,
    fontSize: 18,
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  mainHeader: {
    display: "flex",
    flex: 1,
    // backgroundColor: palette.main,
  },
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    // backgroundColor: palette.main,
  },
  logo: {
    resizeMode: "contain",
    width: "85%",
    height: "35%",
    alignSelf: "center",
  },
  formWrapper: {
    display: "flex",
    flex: 2,
    paddingTop: "20%",
    overflow: "scroll",
  },
});
