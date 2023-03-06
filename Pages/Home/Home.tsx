import React, { useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Clipboard from "expo-clipboard";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import { homeStyleSheet } from "../../Stylesheets/HomeStylesheet";
import ListComponent, {
  data,
} from "../../Components/ListComponent/ListComponent";
import { ShortcutIconsProps } from "../../Models/SharedProps";
import { Circles } from "../../assets/svgs";
import ClipboardCopier from "../../Components/ClipboardCopier/ClipboardCopier";
import { useTheme } from "../../Theme/Index";

const Home: React.FC<any> = () => {
  const { palette } = useTheme();
  const [copiedText, setCopiedText] = useState<string>("");

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
    fetchCopiedText();
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

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
    <SafeAreaView
      style={[
        GeneralComponentsStylesheet.lightTheme,
        { backgroundColor: palette.mainTint },
      ]}
    >
      <View
        style={[homeStyleSheet.homeHeader, { backgroundColor: palette.main }]}
      >
        <Circles height={"100%"} width={"100%"} />
        <View style={homeStyleSheet.homeHeaderRowWithicon}>
          <Text
            style={[
              typographyStylesheet.typographyHeadingBoldWhite,
              { color: palette.white },
            ]}
          >
            Nombre y apellido
          </Text>
          <Icon name="bell" type="fontisto" color={palette.white} />
        </View>
        <View style={homeStyleSheet.homeSimpleColumn}>
          <Text
            style={[
              typographyStylesheet.typographyBoldWhite,
              { color: palette.white },
            ]}
          >
            $23.000
          </Text>
        </View>
        <View style={homeStyleSheet.homeHeaderRowBottomWithicon}>
          <View style={homeStyleSheet.homeHeaderCaption}>
            <Text
              style={[
                typographyStylesheet.typographyCaptionBoldWhite,
                { color: palette.white },
              ]}
            >
              CBU
              <Text
                style={[
                  typographyStylesheet.typographyCaptionWhite,
                  { color: palette.white },
                ]}
              >
                : 023465410321456413564
              </Text>
            </Text>
            <Text
              style={[
                typographyStylesheet.typographyCaptionBoldWhite,
                { color: palette.white },
              ]}
            >
              Alias
              <Text
                style={[
                  typographyStylesheet.typographyCaptionWhite,
                  { color: palette.white },
                ]}
              >
                : CASA.MANI.TOMATE
              </Text>
            </Text>
          </View>
          <ClipboardCopier
            props={'"CBU:023465410321456413564 , Alias: CASA.MANI.TOMATE"'}
          />
        </View>
      </View>
      <View style={homeStyleSheet.homeTabContainer}>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
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
