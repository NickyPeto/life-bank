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
    headerTintColor: palette.light,
    headerTitleAlign: "center",
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: palette.main,
      shadowColor: palette.dark,
    },
    tabBarStyle: {
      height: 60,
    },
    tabBarActiveBackgroundColor: palette.main,
    tabBarActiveTintColor: palette.mainLight,
    tabBarInactiveBackgroundColor: palette.main,
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
                      color={palette.light}
                    />
                    <View
                      style={{
                        height: 5,
                        width: 5,
                        margin: 5,
                        backgroundColor: palette.light,
                        borderRadius: 20,
                      }}
                    ></View>
                  </>
                ) : (
                  <Icon name="home" type="octicon" color={palette.light} />
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
          headerPressColor: palette.light,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Icon
                  name="arrow-switch"
                  type="octicon"
                  color={palette.light}
                />
                {focused ? (
                  <View
                    style={{
                      height: 5,
                      width: 5,
                      margin: 5,
                      backgroundColor: palette.light,
                      borderRadius: 20,
                    }}
                  ></View>
                ) : null}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerPressColor: palette.light,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <>
                    <Icon
                      name="user-alt"
                      type="font-awesome-5"
                      color={palette.light}
                    />
                    <View
                      style={{
                        height: 5,
                        width: 5,
                        margin: 5,
                        backgroundColor: palette.light,
                        borderRadius: 20,
                      }}
                    ></View>
                  </>
                ) : (
                  <Icon
                    name="user-o"
                    solid={true}
                    type="font-awesome"
                    color={palette.light}
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
