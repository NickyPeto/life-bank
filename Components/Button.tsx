import React from "react";
import { Button } from "react-native-elements";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";
import { View } from "react-native";
import { ButtonProps } from "../Models/SharedProps";
import { useTheme } from "../Theme/Index";

export const CustomButton: React.FC<ButtonProps> = ({ title, press }) => {
  const { palette } = useTheme();
  return (
    <View
      style={[
        GeneralComponentsStylesheet.buttonContainer,
        { backgroundColor: palette.light },
      ]}
    >
      <Button
        titleStyle={GeneralComponentsStylesheet.buttonTitleStyle}
        title={title}
        buttonStyle={[
          GeneralComponentsStylesheet.buttonMain,
          { backgroundColor: palette.main },
        ]}
        onPress={press}
      />
    </View>
  );
};
