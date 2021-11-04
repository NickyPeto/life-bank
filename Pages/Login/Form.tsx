import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";
import { GeneralComponentsStylesheet } from "../../Components/Stylesheets/GneralComponentsStylesheets";

export default function Form() {
  return (
    <View style={GeneralComponentsStylesheet.formContainer}>
      <Input
        placeholder="Email"
        inputContainerStyle={GeneralComponentsStylesheet.inputStyle}
      />
      <Input
        placeholder="Contasena"
        inputContainerStyle={GeneralComponentsStylesheet.inputStyle}
      />
    </View>
  );
}
