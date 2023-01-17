import { View } from "react-native";
import { Icon } from "react-native-elements";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";

//FIXME: fix typing
const ShortcutsTab = () => {
  type ShortcutStack = NativeStackNavigationProp<any, "Shortcuts">;
  const navigation = useNavigation<ShortcutStack>();

  navigation.getParent();

  return (
    <View style={GeneralComponentsStylesheet.shortcutTabContainer}>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon
          name="shopping-outline"
          type="material-community"
          size={40}
          color="#8b31fd"
          onPress={() => navigation.navigate("Transactions")}
        />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon
          name="receipt-outline"
          type="ionicon"
          size={40}
          color="#8b31fd"
          onPress={() => navigation.navigate("Bills")}
        />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon
          name="chart-line-variant"
          type="material-community"
          size={40}
          color="#8b31fd"
          onPress={() => navigation.navigate("Investments")}
        />
      </View>
      <View style={GeneralComponentsStylesheet.shortcutTabIconWrapper}>
        <Icon
          name="qr-code-outline"
          type="ionicon"
          size={40}
          color="#8b31fd"
          onPress={() => navigation.navigate("QR")}
        />
      </View>
    </View>
  );
};

export default ShortcutsTab;
