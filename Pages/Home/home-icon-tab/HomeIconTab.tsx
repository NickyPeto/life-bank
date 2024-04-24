import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ShortcutIconsProps } from "../../../Models/SharedProps";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { GeneralComponentsStylesheet } from "../../../Stylesheets/GneralComponentsStylesheets";
import ShortcutsTab from "../../../Components/ShortcutsTab/ShortcutsTab";
import { homeStyleSheet } from "../../../Stylesheets/HomeStylesheet";

const HomeIconTab = (props: any) => {
  //This stack navigator is going to allow us to navigate on the custom tool bar.
  type ShortcutStack = NativeStackNavigationProp<any, "Shortcuts">;
  const nagivationBar = useNavigation<ShortcutStack>();

  const HomeIcons: ShortcutIconsProps[] = [
    {
      name: "shopping-outline",
      type: "material-community",
      onPress: () =>
        nagivationBar.navigate("ShortcutsNav", {
          screen: "Transactions",
          params: props,
        }),
      title: "Transactions",
    },
    {
      name: "receipt-outline",
      type: "ionicon",
      onPress: () =>
        nagivationBar.navigate("ShortcutsNav", { screen: "Bills" }),
      title: "Bills",
    },
    {
      name: "chart-line-variant",
      type: "material-community",
      onPress: () =>
        nagivationBar.navigate("ShortcutsNav", { screen: "Investments" }),
      title: "Investments",
    },
    {
      name: "qr-code-outline",
      type: "ionicon",
      onPress: () => nagivationBar.navigate("ShortcutsNav", { screen: "QR" }),
      title: "QR",
    },
  ];

  return (
    <View
      style={{
        justifyContent: "space-around",
        flexDirection: "row",
        paddingTop: 8,
        paddingBottom: 8,
      }}
    >
      {HomeIcons.map((row: any, index: number) => {
        return (
          <View
            key={index}
            style={GeneralComponentsStylesheet.shortcutTabContainer}
          >
            <ShortcutsTab {...row} />
          </View>
        );
      })}
    </View>
  );
};

export default HomeIconTab;
