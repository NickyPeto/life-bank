import { Pressable, View, Text } from "react-native";

import { tabComponentStylesheet } from "../../Stylesheets/TabComponentStyleshet";
import { Button } from "react-native-elements";
import { CustomTabProps } from "../../Models/SharedProps";
import { useTheme } from "../../Theme/Index";

export const TabComponent: React.FC<CustomTabProps> = (props) => {
  const { palette } = useTheme();
  return (
    <View
      style={[
        tabComponentStylesheet.tabMainCointainer,
        { backgroundColor: palette.main },
      ]}
    >
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
            backgroundColor: palette.main,
            height: 20,
            width: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: palette.mainTint,
            height: 20,
            width: 100,
          }}
        ></View>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          titleStyle={{ color: props.active ? palette.main : palette.mainTint }}
          title={props.title}
          buttonStyle={
            props.active
              ? [
                  tabComponentStylesheet.tabButtonLeft,
                  { backgroundColor: palette.mainTint },
                ]
              : [
                  tabComponentStylesheet.inactiveTabButtonLeft,
                  { backgroundColor: palette.main },
                ]
          }
          onPress={() => props.handleClick()}
        ></Button>
      </View>

      <View style={{ flex: 1 }}>
        <Button
          titleStyle={{
            color: !props.active ? palette.main : palette.mainTint,
          }}
          title={props.secondTitle}
          buttonStyle={
            !props.active
              ? [
                  tabComponentStylesheet.tabButtonRight,
                  { backgroundColor: palette.mainTint },
                ]
              : [
                  tabComponentStylesheet.inactiveTabButtonRight,
                  { backgroundColor: palette.main },
                ]
          }
          onPress={() => props.handleClick()}
        ></Button>
      </View>
    </View>
  );
};

export default TabComponent;
