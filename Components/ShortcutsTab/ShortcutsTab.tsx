import { View } from "react-native";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { Icon } from "react-native-elements";

//FIXME: fix typing
const ShortcutsTab = () => {
  return (
    <View style={GeneralComponentsStylesheet.shortcutTabContainer}>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon
          name="shopping-outline"
          type="material-community"
          size={40}
          color="#8b31fd"
        />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon name="receipt-outline" type="ionicon" size={40} color="#8b31fd" />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon
          name="chart-line-variant"
          type="material-community"
          size={40}
          color="#8b31fd"
        />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon name="qr-code-outline" type="ionicon" size={40} color="#8b31fd" />
      </View>
    </View>
  );
};

export default ShortcutsTab;
