import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import { light } from "../../Stylesheets/ColorPallete";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";
import { ProfileStylesheet } from "../../Stylesheets/ProfileStylesheet";
import { CustomLabels } from "../../assets/svgs";
import { ShortcutIconsProps } from "../../Models/SharedProps";
import { useState } from "react";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";

const Profile = (props: any) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const IconSets: ShortcutIconsProps[] = [
    {
      name: isDark ? "weather-sunny" : "weather-night",
      type: "material-community",
      onPress: () => setIsDark(!isDark),
      title: isDark ? "Light Mode" : "Dark Mode",
    },
    {
      name: "settings-outline",
      type: "ionicon",
      onPress: () => "",
      title: "Settings",
    },
    {
      name: "newspaper-outline",
      type: "ionicon",
      onPress: () => "",
      title: "Terms",
    },
    {
      name: "logout",
      type: "material-community",
      onPress: () => "",
      title: "Log out",
    },
  ];

  return (
    <View style={ProfileStylesheet.container}>
      <View style={ProfileStylesheet.headerContainer}>
        <Icon name="user" type="feather" color={light} size={120} />
        <Text style={typographyStylesheet.typographyNormalBoldWhite}>
          Nombre y apellido
          <CustomLabels height={"100%"} width={"100%"} fill={"#fff"} />
        </Text>
        <View style={ProfileStylesheet.infoSectionRowContainer}>
          <View style={ProfileStylesheet.infoSectionRowLeftContainer}>
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
          <View style={ProfileStylesheet.infoSectionRowRightContainer}>
            <Icon name="content-copy" type="material-community" color={light} />
          </View>
        </View>
      </View>
      <View style={ProfileStylesheet.footerWrapper}>
        {IconSets.map((row, index) => (
          <View
            style={GeneralComponentsStylesheet.shortcutTabContainer}
            key={index}
          >
            <ShortcutsTab {...row} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Profile;
