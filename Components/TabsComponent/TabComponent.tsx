import { light, main } from "../../Stylesheets/ColorPallete";
import { Pressable, View, Text } from "react-native";
import { CustomTabProps } from "../../Models/SharedProps";
import { tabComponentStylesheet } from "../../Stylesheets/TabComponentStyleshet";
import { Button } from "react-native-elements";

export const TabComponent: React.FC<CustomTabProps> = (props) => (
  <View style={tabComponentStylesheet.tabMainCointainer}>
    {/* 
    FIXME: MOVE THIS TO STYLESHEET */}
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        position: "absolute",
        width: 100,
        zIndex: 0,
        marginLeft: 100,
      }}
    >
      <View
        style={{
          backgroundColor: main,
          height: 20,
          width: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: light,
          height: 20,
          width: 100,
        }}
      ></View>
    </View>
    <View style={{ flex: 1 }}>
      <Button
        titleStyle={{ color: props.active ? main : light }}
        title={props.title}
        buttonStyle={
          props.active
            ? tabComponentStylesheet.tabButtonLeft
            : tabComponentStylesheet.inactiveTabButtonLeft
        }
        onPress={() => props.handleClick()}
      ></Button>
    </View>

    <View style={{ flex: 1 }}>
      <Button
        titleStyle={{ color: !props.active ? main : light }}
        title={props.secondTitle}
        buttonStyle={
          !props.active
            ? tabComponentStylesheet.tabButtonRight
            : tabComponentStylesheet.inactiveTabButtonRight
        }
        onPress={() => props.handleClick()}
      ></Button>
    </View>
  </View>
);

export default TabComponent;
