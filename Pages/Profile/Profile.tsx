import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import { light } from "../../Stylesheets/ColorPallete";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";
import { ProfileStylesheet } from "../../Stylesheets/ProfileStylesheet";

const Profile = (props: any) => {
  return (
    <View style={ProfileStylesheet.container}>
      <View style={ProfileStylesheet.headerContainer}>
        <Icon name="user" type="feather" color={light} size={100} />
        <Text style={typographyStylesheet.typographyNormalBoldWhite}>
          Nombre y apellido
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
        <ShortcutsTab />
        <ShortcutsTab />
      </View>
    </View>
  );
};

export default Profile;
