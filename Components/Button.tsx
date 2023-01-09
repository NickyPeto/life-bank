import React from "react";
import { Button } from "react-native-elements";
import { GeneralComponentsStylesheet } from "./Stylesheets/GneralComponentsStylesheets";
import { View } from "react-native";
import { ButtonProps } from "../Models/SharedProps";

export const CustomButton: React.FC<ButtonProps> = ({ title, press }) => {
  return (
    <View style={GeneralComponentsStylesheet.buttonContainer}>
      <Button
        titleStyle={GeneralComponentsStylesheet.buttonTitleStyle}
        title={title}
        buttonStyle={GeneralComponentsStylesheet.buttonMain}
        onPress={press}
      />
    </View>
  );
};
