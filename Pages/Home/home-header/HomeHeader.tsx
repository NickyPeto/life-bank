import { View, Text } from "react-native";
import { homeStyleSheet } from "../../../Stylesheets/HomeStylesheet";
import { typographyStylesheet } from "../../../Stylesheets/Typography";
import { Icon } from "react-native-elements";
import { useTheme } from "../../../Theme/Index";
import { Circles } from "../../../assets/svgs";
import ClipboardCopier from "../../../Components/ClipboardCopier/ClipboardCopier";

const HomeHeader = ({ props }: any) => {
  const { palette } = useTheme();
  return (
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
  );
};

export default HomeHeader;
