import { View, Text, Pressable } from "react-native";
import { Icon } from "react-native-elements";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";

import { typographyStylesheet } from "../../Stylesheets/Typography";
import { ShortcutIconsProps } from "../../Models/SharedProps";
import { useTheme } from "../../Theme/Index";

const ShortcutsTab: React.FC<ShortcutIconsProps> = (
  props: ShortcutIconsProps
) => {
  const { palette } = useTheme();
  return (
    <View
      style={[
        GeneralComponentsStylesheet.shortcutTabIconWrapper,
        { backgroundColor: palette.shortcutsBtn },
      ]}
    >
      <Pressable onPress={() => props.onPress()}>
        <Icon
          name={props.name}
          type={props.type}
          size={40}
          color={palette.icon}
        />
        {props.title ? (
          <Text
            style={[
              typographyStylesheet.shortcutTitle,
              {
                color: palette.icon,
              },
            ]}
          >
            {props?.title}
          </Text>
        ) : null}
      </Pressable>
    </View>
  );
};

export default ShortcutsTab;
