import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home/Home";
import { main } from "../Stylesheets/ColorPallete";
import { RootStackParamList } from "./AppNavigator";
import ShortcutsNavigator from "./ShortcutsNavigator";

export default function HomeNavigator() {
  const { Screen, Navigator } =
    createNativeStackNavigator<RootStackParamList>();
  return (
    <Navigator initialRouteName="HomeNavigator">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: main,
          },
        }}
      />
      <Screen
        name="ShortcutsNav"
        component={ShortcutsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
