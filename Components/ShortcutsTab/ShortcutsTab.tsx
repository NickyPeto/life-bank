import { View } from "react-native";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";
import { Icon } from "react-native-elements";

const ShortcutsTab = (props: any) => {
  return (
    <View style={GeneralComponentsStylesheet.shortcutTabContainer}>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon name="shopping-outline" type="material-community" size={40} />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon name="receipt-outline" type="ionicon" size={40} />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon name="chart-line-variant" type="material-community" size={40} />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon name="qr-code-outline" type="ionicon" size={40} />
      </View>
    </View>
  );
};

export default ShortcutsTab;
