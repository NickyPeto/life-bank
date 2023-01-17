import { StyleSheet } from "react-native";
import { lightGray } from "./ColorPallete";

export const SearchbarStylesheet = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  inputContainerStyle: {
    backgroundColor: lightGray,
    borderBottomWidth: 0,
    borderRadius: 10,
    opacity: 0.6,
  },
});
