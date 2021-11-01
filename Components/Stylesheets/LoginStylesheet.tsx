import React from "react";
import { StyleSheet } from "react-native";
import { main, dark, light } from "../ColorPallete";

export const LoginStylesheet = StyleSheet.create({
  container: {
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
    color: main,
    fontSize: 18,
  },
});
