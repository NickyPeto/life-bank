import { Icon } from "react-native-elements";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";

import { TextInput } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { useTheme } from "../../Theme/Index";

type PlaceholderProps = {
  placeholder: string | undefined;
  icon?: any;
};

export const CustomInputs: React.FC<PlaceholderProps> = (props) => {
  const [visible, setVisible] = useState<boolean>(true);
  const { palette } = useTheme();
  const isSecure =
    props.placeholder === "Password" || props.placeholder?.includes("password");

  const toggleVisiblePassword = () => {
    setVisible(!visible);
  };
  return (
    <View
      style={{
        paddingRight: 16,
        paddingLeft: 16,
        paddingBottom: 8,
        paddingTop: 8,
      }}
    >
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder={props.placeholder}
          style={[
            GeneralComponentsStylesheet.inputStyle,
            {
              backgroundColor: palette.mainUltraLight,
              color: palette.typographyMain,
            },
          ]}
          placeholderTextColor={palette.mainLighter}
          secureTextEntry={isSecure && visible}
        />
        {isSecure ? (
          visible ? (
            <View style={{ position: "absolute", zIndex: 1, right: 10 }}>
              <Icon
                name={"eye-off-outline"}
                type={props.icon.type}
                color={props.icon.color}
                style={{ marginRight: 20 }}
                onPress={() => toggleVisiblePassword()}
              />
            </View>
          ) : (
            <View style={{ position: "absolute", zIndex: 1, right: 10 }}>
              <Icon
                name={"eye-outline"}
                type={props.icon.type}
                color={props.icon.color}
                style={{ marginRight: 20 }}
                onPress={() => toggleVisiblePassword()}
              />
            </View>
          )
        ) : null}
      </View>
    </View>
  );
};

export default CustomInputs;
