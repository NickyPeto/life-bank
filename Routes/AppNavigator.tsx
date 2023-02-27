import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { rootNavigationRef } from "./RootNavigationRef";

import Login from "../Pages/Login/Login";
import BottomTab from "./BottomTab";
import ShortcutsNavigator from "./ShortcutsNavigator";

export type RootStackParamList = {
  Login: undefined;
  Tab: undefined;
  HomeNavigator: undefined;
  Home: undefined;
  ShortcutsNav: undefined;
  Bills: undefined;
  Investments: undefined;
  QR: undefined;
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const linking = {
    prefixes: ["lifebank://", "https://lifebank.com"],
  };
  return (
    <NavigationContainer linking={linking} ref={rootNavigationRef}>
      <Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Tab" component={BottomTab} />
      </Navigator>
    </NavigationContainer>
  );
}
