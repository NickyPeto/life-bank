import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import Transactions from "../Pages/Transactions/Transactions";
import Profile from "../Pages/Profile/Profile";
import { Icon } from "react-native-elements";
import { View } from "react-native";
import HomeNavigator from "./HomeNavigator";
import { useTheme } from "../Theme/Index";

export default function BottomTab() {
  const { palette } = useTheme();

  const ScreenOptions: BottomTabNavigationOptions = {
    headerShown: true,
    tabBarShowLabel: false,
    headerTintColor: palette.white,
    headerTitleAlign: "center",
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: palette.bottomTab,
      shadowColor: palette.contrast,
    },
    tabBarStyle: {
      height: 60,
      borderTopWidth: 0,
    },
    tabBarActiveBackgroundColor: palette.bottomTab,
    tabBarActiveTintColor: palette.mainLight,
    tabBarInactiveBackgroundColor: palette.bottomTab,
  };

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Tab" screenOptions={ScreenOptions}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <>
                    <Icon
                      name="home-filled"
                      type="material-icon"
                      size={32}
                      color={palette.focusedTab}
                    />
                    <View
                      style={{
                        height: 5,
                        width: 5,
                        margin: 5,
                        backgroundColor: palette.focusedTab,
                        borderRadius: 20,
                      }}
                    ></View>
                  </>
                ) : (
                  <Icon name="home" type="octicon" color={palette.white} />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          headerPressColor: palette.white,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <>
                    <Icon
                      name="arrow-switch"
                      type="octicon"
                      size={32}
                      color={palette.focusedTab}
                    />
                    <View
                      style={{
                        height: 5,
                        width: 5,
                        margin: 5,
                        backgroundColor: palette.focusedTab,
                        borderRadius: 20,
                      }}
                    ></View>
                  </>
                ) : (
                  <Icon
                    name="arrow-switch"
                    type="octicon"
                    color={palette.white}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: palette.main,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <>
                    <Icon
                      name="user-alt"
                      type="font-awesome-5"
                      size={32}
                      color={palette.focusedTab}
                    />
                    <View
                      style={{
                        height: 5,
                        width: 5,
                        margin: 5,
                        backgroundColor: palette.focusedTab,
                        borderRadius: 20,
                      }}
                    ></View>
                  </>
                ) : (
                  <Icon
                    name="user-o"
                    solid={true}
                    type="font-awesome"
                    color={palette.white}
                  />
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
