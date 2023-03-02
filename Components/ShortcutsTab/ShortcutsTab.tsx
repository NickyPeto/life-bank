import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { ShortcutIconsProps } from "../../Models/SharedProps";
import { typographyStylesheet } from "../../Stylesheets/Typography";

const ShortcutsTab: React.FC<ShortcutIconsProps> = (
  props: ShortcutIconsProps
) => (
  <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
    <Icon
      name={props.name}
      type={props.type}
      size={40}
      color="#8b31fd"
      onPress={() => props.onPress()}
    />
    {props.title ? (
      <Text style={typographyStylesheet.shortcutTitle}>{props?.title}</Text>
    ) : null}
  </View>
);

export default ShortcutsTab;
