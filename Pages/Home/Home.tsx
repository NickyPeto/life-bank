import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { dark, light, main } from "../../Components/ColorPallete";
import { MainButton } from "../../Components/Button";
import { GeneralComponentsStylesheet } from "../../Components/Stylesheets/GneralComponentsStylesheets";

const Home = () => {
  return (
    <SafeAreaView style={GeneralComponentsStylesheet.lightTheme}>
      <View>
        <Text style={GeneralComponentsStylesheet.typographyBold}>
          Home PAGE
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
