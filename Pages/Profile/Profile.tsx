import { View, Text, useColorScheme } from "react-native";
import { Icon } from "react-native-elements";

import { typographyStylesheet } from "../../Stylesheets/Typography";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";
import { ProfileStylesheet } from "../../Stylesheets/ProfileStylesheet";
import { CustomLabels } from "../../assets/svgs";
import { ShortcutIconsProps } from "../../Models/SharedProps";
import { useState } from "react";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { useTheme } from "../../Theme/Index";

const Profile = (props: any) => {
  const { palette, setScheme } = useTheme();
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState<boolean>(false);

  const setColorScheme = () => {
    console.log(colorScheme);
    setIsDark(!isDark);
    if (!isDark) {
      setScheme("dark");
    } else {
      setScheme("light");
    }
  };

  const IconSets: ShortcutIconsProps[] = [
    {
      name: isDark ? "weather-sunny" : "weather-night",
      type: "material-community",
      onPress: () => setColorScheme(),
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
    <View
      style={[ProfileStylesheet.container, { backgroundColor: palette.light }]}
    >
      <View
        style={[
          ProfileStylesheet.headerContainer,
          { backgroundColor: palette.main },
        ]}
      >
        <Icon name="user" type="feather" color={palette.light} size={120} />
        <Text
          style={[
            typographyStylesheet.typographyNormalBoldWhite,
            { color: palette.light },
          ]}
        >
          Nombre y apellido
          <CustomLabels height={"100%"} width={"100%"} fill={"#fff"} />
        </Text>
        <View style={ProfileStylesheet.infoSectionRowContainer}>
          <View style={ProfileStylesheet.infoSectionRowLeftContainer}>
            <Text
              style={[
                typographyStylesheet.typographyCaptionBoldWhite,
                { color: palette.light },
              ]}
            >
              CBU
              <Text
                style={[
                  typographyStylesheet.typographyCaptionWhite,
                  { color: palette.light },
                ]}
              >
                : 023465410321456413564
              </Text>
            </Text>
            <Text
              style={[
                typographyStylesheet.typographyCaptionBoldWhite,
                { color: palette.light },
              ]}
            >
              Alias
              <Text
                style={[
                  typographyStylesheet.typographyCaptionWhite,
                  { color: palette.light },
                ]}
              >
                : CASA.MANI.TOMATE
              </Text>
            </Text>
          </View>
          <View style={ProfileStylesheet.infoSectionRowRightContainer}>
            <Icon
              name="content-copy"
              type="material-community"
              color={palette.light}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          ProfileStylesheet.footerWrapper,
          { backgroundColor: palette.light },
        ]}
      >
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
