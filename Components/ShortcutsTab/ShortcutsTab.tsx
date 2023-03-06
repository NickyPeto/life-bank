import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { ShortcutIconsProps } from "../../Models/SharedProps";
import { typographyStylesheet } from "../../Stylesheets/Typography";
import { useTheme } from "../../Theme/Index";

const ShortcutsTab: React.FC<ShortcutIconsProps> = (
  props: ShortcutIconsProps
) => {
  const { palette } = useTheme();
  return (
    <View
      style={[
        GeneralComponentsStylesheet.shortcutTabIconWrapper,
        { backgroundColor: palette.light },
      ]}
    >
      <Icon
        name={props.name}
        type={props.type}
        size={40}
        color="#8b31fd"
        onPress={() => props.onPress()}
      />
      {props.title ? (
        <Text
          style={[typographyStylesheet.shortcutTitle, { color: palette.main }]}
        >
          {props?.title}
        </Text>
      ) : null}
    </View>
  );
};

export default ShortcutsTab;
