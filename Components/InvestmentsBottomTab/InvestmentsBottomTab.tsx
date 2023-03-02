import { View, Text, Pressable } from "react-native";
import Slider from "@react-native-community/slider";

import {
  light,
  main,
  mainLighter,
  mainUltraLight,
} from "../../Stylesheets/ColorPallete";
import { ListComponentStylesheet } from "../../Stylesheets/ListComponentStylesheet";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";

const InvestmentsBottomTab: React.FC<any> = () => {
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
        backgroundColor: light,
        paddingTop: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          backgroundColor: mainUltraLight,
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
              { color: "lightgreen", textAlign: "right" },
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
          minimumTrackTintColor={mainLighter}
          maximumTrackTintColor={main}
          thumbTintColor={main}
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
            backgroundColor: light,
            justifyContent: "center",
            alignSelf: "center",
            width: "40%",
            borderColor: main,
            borderWidth: 2,
            height: 40,
            borderRadius: 10,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color: main,
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
            { width: "40%", marginLeft: 10 },
          ]}
        >
          <Text
            style={{
              color: light,
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
