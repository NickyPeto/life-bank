import { HeaderHeightContext } from "@react-navigation/stack";
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
    color: light,
    fontSize: 18,
  },
  mainHeader: {
    //  flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: main,
  },
  logoContainer: {
    width: "100%",
    height: "30%",
    marginTop: "15%",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "85%",
    height: "35%",
    alignSelf: "center",
  },
  customTabLeft: {
    flex: 1,
    backgroundColor: light,
    width: "100%",
    height: "70%",
    justifyContent: "flex-end",
    alignContent: "center",
    paddingBottom: 20,
  },
});
