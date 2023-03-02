import { StyleSheet } from "react-native";
import { light, main } from "./ColorPallete";

//TODO: Move all text to this file
export const typographyStylesheet = StyleSheet.create({
  typographyCaption: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Black",
    color: main,
    fontSize: 18,
  },
  typographyCaptionWhite: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Light",
    color: light,
    fontSize: 18,
  },
  typographyBold: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Bold",
    color: main,
    fontSize: 18,
    paddingTop: 18,
  },
  typographyHeaderWhite: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Bold",
    color: light,
    fontSize: 30,
  },
  typographyHeadingBoldWhite: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Bold",
    color: light,
    fontSize: 25,
  },
  typographyNormalBoldWhite: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Bold",
    color: light,
    fontSize: 20,
  },
  typographyDimmedCaptionWhite: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Light",
    color: light,
    opacity: 0.7,
    fontSize: 16,
  },
  typographyCaptionBoldWhite: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Bold",
    color: light,
    opacity: 0.7,
    fontSize: 16,
  },
  typographyBoldWhite: {
    textAlign: "center",
    fontFamily: "SFUIDisplay-Bold",
    color: light,
    fontSize: 40,
  },
  shortcutTitle: {
    color: main,
    fontFamily: "SFUIDisplay-Medium",
    fontSize: 12,
    textAlign: "center",
  },
});
