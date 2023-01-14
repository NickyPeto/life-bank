import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { light, main } from "../../Stylesheets/ColorPallete";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";

const Profile = (props: any) => {
  return (
    <View
      style={{
        display: "flex",
        flex: 2,
      }}
    >
      <View
        style={{
          backgroundColor: main,
          display: "flex",
          padding: 40,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Icon name="user" type="feather" color={light} size={100} />
        <Text style={typographyStylesheet.typographyNormalSmallerWhite}>
          Nombre y apellido
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
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
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Icon name="content-copy" type="material-community" color={light} />
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ShortcutsTab />
        <ShortcutsTab />
      </View>
    </View>
  );
};

export default Profile;
