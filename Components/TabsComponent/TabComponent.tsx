import { useState } from "react";
import { main } from "../ColorPallete";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";
import { View } from "react-native";
import { Button } from "react-native-elements";

export const TabComponent: React.FC<any> = (props) => {
  const [active, setActive] = useState<boolean>(true);

  function handleClick() {
    setActive(!active);
  }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
      }}
    >
      <View style={{ flex: 1 }}>
        <Button
          title={"Login"}
          titleStyle={{ color: main }}
          buttonStyle={
            active
              ? GeneralComponentsStylesheet.tabButtonLeft
              : GeneralComponentsStylesheet.inactiveTabButtonLeft
          }
          onPress={handleClick}
        ></Button>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title={"Register"}
          titleStyle={{ color: main }}
          buttonStyle={
            !active
              ? GeneralComponentsStylesheet.tabButtonRight
              : GeneralComponentsStylesheet.inactiveTabButtonRight
          }
          onPress={handleClick}
        ></Button>
      </View>
    </View>
  );
};

export default TabComponent;
