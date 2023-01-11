import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { CustomButton } from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import { homeStyleSheet } from "../../Stylesheets/HomeStylesheet";
import { Icon } from "react-native-elements";
import { light } from "../../Stylesheets/ColorPallete";
import ListComponent from "../../Components/ListComponent/ListComponent";

const Home = () => {
  type LoginStack = NativeStackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<LoginStack>();
  function redirect() {
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView style={GeneralComponentsStylesheet.lightTheme}>
      <View style={homeStyleSheet.homeHeader}>
        <View style={homeStyleSheet.homeHeaderRowWithicon}>
          <Text style={typographyStylesheet.typographyNormalBoldWhite}>
            Nombre y apellido
          </Text>
          <Icon name="bell" type="fontisto" color={light} />
        </View>
        <View style={homeStyleSheet.homeSimpleColumn}>
          <Text style={typographyStylesheet.typographyBoldWhite}>$23.000</Text>
        </View>
        <View style={homeStyleSheet.homeHeaderRowBottomWithicon}>
          <View style={homeStyleSheet.homeHeaderCaption}>
            <Text style={typographyStylesheet.typographyCaptionBoldWhite}>
              CBU
              <Text style={typographyStylesheet.typographyCaptionWhite}>
                : 023465410321456413564
              </Text>
            </Text>
            <Text style={typographyStylesheet.typographyCaptionBoldWhite}>
              Alias
              <Text style={typographyStylesheet.typographyCaptionWhite}>
                : CASA.MANI.TOMATE
              </Text>
            </Text>
          </View>

          <Icon name="content-copy" type="material-community" color={light} />
        </View>
      </View>
      <View style={homeStyleSheet.homeTabContainer}>
        <ShortcutsTab />
        <ListComponent />
        {/* <CustomButton title={"go back"} press={() => redirect()} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
