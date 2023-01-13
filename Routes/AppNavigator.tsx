import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { rootNavigationRef } from "./RootNavigationRef";

import Login from "../Pages/Login/Login";
import BottomTab from "./BottomTab";
import Bills from "../Pages/Bills/Bills";
import Investments from "../Pages/Investments/Investments";
import QrReader from "../Pages/QRReader/QRReader";
import { light, main } from "../Stylesheets/ColorPallete";

export type RootStackParamList = {
  Login: undefined;
  Tab: undefined;
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
        <Screen
          options={{ headerShown: true }}
          name="Bills"
          component={Bills}
        />
        <Screen
          options={{ headerShown: true }}
          name="Investments"
          component={Investments}
        />
        <Screen
          options={{
            headerShown: true,
            headerTintColor: light,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: main },
          }}
          name="QR"
          component={QrReader}
        />
      </Navigator>
    </NavigationContainer>
  );
}
