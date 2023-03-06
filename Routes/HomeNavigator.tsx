import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home/Home";
import { useTheme } from "../Theme/Index";
import { RootStackParamList } from "./AppNavigator";
import ShortcutsNavigator from "./ShortcutsNavigator";

export default function HomeNavigator() {
  const { Screen, Navigator } =
    createNativeStackNavigator<RootStackParamList>();

  const { palette } = useTheme();
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
            backgroundColor: palette.main,
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
