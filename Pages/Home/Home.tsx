import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { CustomButton } from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import { GeneralComponentsStylesheet } from "../../Components/Stylesheets/GneralComponentsStylesheets";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";

const Home = () => {
  type LoginStack = NativeStackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<LoginStack>();
  function redirect() {
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView style={GeneralComponentsStylesheet.lightTheme}>
      <View style={GeneralComponentsStylesheet.homeHeader}>
        <Text style={GeneralComponentsStylesheet.typographyNormalWhite}>
          Nombre Y apellido
        </Text>
        <Text style={GeneralComponentsStylesheet.typographyBoldWhite}>
          $23.000
        </Text>
        <Text style={GeneralComponentsStylesheet.typographyCaptionWhite}>
          CBU: CASA.MANI.TOMATE
        </Text>
      </View>
      <View style={GeneralComponentsStylesheet.homeTabContainer}>
        <ShortcutsTab />
        <CustomButton title={"go back"} press={() => redirect()} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
