import { View, Text, Pressable } from "react-native";
import Slider from "@react-native-community/slider";

import { ListComponentStylesheet } from "../../Stylesheets/ListComponentStylesheet";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { useTheme } from "../../Theme/Index";

const InvestmentsBottomTab: React.FC<any> = () => {
  const { palette } = useTheme();
  //FIXME: move all to stylesheet
  return (
    <View
      style={{
        display: "flex",
        alignContent: "flex-end",
        justifyContent: "space-evenly",
        elevation: 10,
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: palette.light,
        paddingTop: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          backgroundColor: palette.mainUltraLight,
          borderRadius: 20,
          flexDirection: "row",
          height: 80,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={ListComponentStylesheet.listItemHeader}>
          <Text style={ListComponentStylesheet.textBold}>$ 150000</Text>
          <Text>SBAB</Text>
        </View>

        <View style={ListComponentStylesheet.listItemHeader}>
          <Text
            style={[
              ListComponentStylesheet.textBold,
              { color: palette.confirm, textAlign: "right" },
            ]}
          >
            $200
          </Text>
          <Text>12/01/2022</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Slider
          style={{
            width: "100%",
            height: 40,
          }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={palette.mainLighter}
          maximumTrackTintColor={palette.main}
          thumbTintColor={palette.main}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            backgroundColor: palette.light,
            justifyContent: "center",
            alignSelf: "center",
            width: "40%",
            borderColor: palette.main,
            borderWidth: 2,
            height: 40,
            borderRadius: 10,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color: palette.main,
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Sell
          </Text>
        </Pressable>
        <Pressable
          style={[
            GeneralComponentsStylesheet.buttonMainSmall,
            { width: "40%", marginLeft: 10, backgroundColor: palette.main },
          ]}
        >
          <Text
            style={{
              color: palette.light,
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Buy
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default InvestmentsBottomTab;
