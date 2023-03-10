import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { rootNavigationRef } from "./RootNavigationRef";
import Login from "../Pages/Login/Login";
import BottomTab from "./BottomTab";

export type RootStackParamList = {
  Login: undefined;
  Tab: undefined;
  HomeNavigator: undefined;
  Home: undefined;
  ShortcutsNav: undefined;
  Bills: undefined;
  Investments: undefined;
  QR: undefined;
  Transactions: undefined;
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const prefix = Linking.createURL("/");
  const linking = {
    prefixes: [prefix, "lifebank://", "https://lifebank.com"],
  };

  return (
    <NavigationContainer
      linking={linking}
      ref={rootNavigationRef}
      fallback={<Text>Loading...</Text>}
    >
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
