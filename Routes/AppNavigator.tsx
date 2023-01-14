import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { rootNavigationRef } from "./RootNavigationRef";

import Login from "../Pages/Login/Login";
import BottomTab from "./BottomTab";

export type RootStackParamList = {
  Login: undefined;
  Tab: undefined;
};

export type HomseStackParamList = {};
export type LoginStackParamlist = {};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer ref={rootNavigationRef}>
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
