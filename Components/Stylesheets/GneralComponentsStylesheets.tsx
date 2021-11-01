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
});
