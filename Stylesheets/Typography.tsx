import { StyleSheet } from "react-native";
import { light, main } from "./ColorPallete";

export const typographyStylesheet = StyleSheet.create({
  typographyNormal: {
    textAlign: "center",
    fontFamily: "System",
    color: main,
    fontSize: 18,
  },
  typographyNormalSmallerWhite: {
    textAlign: "center",
    fontFamily: "System",
    color: light,
    fontSize: 18,
  },
  typographyBold: {
    textAlign: "center",
    fontFamily: "System",
    fontWeight: "bold",
    color: main,
    fontSize: 18,
  },
  typographyNormalWhite: {
    textAlign: "center",
    fontFamily: "System",
    color: light,
    fontSize: 30,
  },
  typographyNormalBoldWhite: {
    textAlign: "center",
    fontFamily: "System",
    color: light,
    fontSize: 25,
    fontWeight: "bold",
  },
  typographyCaptionWhite: {
    textAlign: "center",
    fontFamily: "System",
    color: light,
    opacity: 0.7,
    fontSize: 16,
  },
  typographyCaptionBoldWhite: {
    textAlign: "center",
    fontFamily: "System",
    color: light,
    opacity: 0.7,
    fontSize: 16,
    fontWeight: "bold",
  },
  typographyBoldWhite: {
    textAlign: "center",
    fontFamily: "System",
    fontWeight: "bold",
    color: light,
    fontSize: 40,
  },
});
