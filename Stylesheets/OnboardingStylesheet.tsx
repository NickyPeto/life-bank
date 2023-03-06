import { StyleSheet } from "react-native";
import { useTheme } from "../Theme/Index";
// const { palette } = useTheme();
export const OnboardingStylesheet = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    // backgroundColor: palette.main,
  },
  imageContainer: {
    display: "flex",
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  footerContainer: {
    display: "flex",
    flex: 1,
    // backgroundColor: palette.light,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    fontSize: 25,
    // color: palette.main,
    fontWeight: "bold",
    textAlign: "center",
    margin: 15,
  },
  content: {
    fontSize: 15,
    // color: palette.dark,
    textAlign: "left",
    margin: 10,
  },
  buttonWrapper: {
    display: "flex",
    marginTop: 30,
    flex: 1,
  },
});
