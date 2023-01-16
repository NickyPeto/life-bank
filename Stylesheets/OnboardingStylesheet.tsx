import { StyleSheet } from "react-native";

import { dark, light, main } from "./ColorPallete";

export const OnboardingStylesheet = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: main,
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
    backgroundColor: light,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    fontSize: 25,
    color: main,
    fontWeight: "bold",
    textAlign: "center",
    margin: 15,
  },
  content: {
    fontSize: 15,
    color: dark,
    textAlign: "left",
    margin: 10,
  },
  buttonWrapper: {
    display: "flex",
    marginTop: 30,
    flex: 1,
  },
});
