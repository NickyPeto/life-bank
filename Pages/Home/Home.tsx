import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import { homeStyleSheet } from "../../Stylesheets/HomeStylesheet";
import { Icon } from "react-native-elements";
import { light } from "../../Stylesheets/ColorPallete";
import ListComponent, {
  data,
} from "../../Components/ListComponent/ListComponent";
import { ShortcutIconsProps } from "../../Models/SharedProps";
import { Circles } from "../../assets/svgs";

const Home: React.FC<any> = () => {
  //This stack navigator is going to allow us to navigate on the custom tool bar.
  type ShortcutStack = NativeStackNavigationProp<any, "Shortcuts">;
  const nagivationBar = useNavigation<ShortcutStack>();

  const HomeIcons: ShortcutIconsProps[] = [
    {
      name: "shopping-outline",
      type: "material-community",
      onPress: () =>
        nagivationBar.navigate("ShortcutsNav", { screen: "Transactions" }),
      title: "Transactions",
    },
    {
      name: "receipt-outline",
      type: "ionicon",
      onPress: () =>
        nagivationBar.navigate("ShortcutsNav", { screen: "Bills" }),
      title: "Bills",
    },
    {
      name: "chart-line-variant",
      type: "material-community",
      onPress: () =>
        nagivationBar.navigate("ShortcutsNav", { screen: "Investments" }),
      title: "Investments",
    },
    {
      name: "qr-code-outline",
      type: "ionicon",
      onPress: () => nagivationBar.navigate("ShortcutsNav", { screen: "QR" }),
      title: "QR",
    },
  ];

  return (
    <SafeAreaView style={GeneralComponentsStylesheet.lightTheme}>
      <View style={homeStyleSheet.homeHeader}>
        <Circles height={"100%"} width={"100%"} />
        <View style={homeStyleSheet.homeHeaderRowWithicon}>
          <Text style={typographyStylesheet.typographyHeadingBoldWhite}>
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
        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          {HomeIcons.map((row: any, index: number) => {
            return (
              <View
                key={index}
                style={GeneralComponentsStylesheet.shortcutTabContainer}
              >
                <ShortcutsTab {...row} />
              </View>
            );
          })}
        </View>
        <ListComponent
          props={data}
          hasHeader={true}
          header={"Latest Transactions"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
