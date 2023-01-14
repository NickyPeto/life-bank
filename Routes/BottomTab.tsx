import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home/Home";
import Transactions from "../Pages/Transactions/Transactions";
import Profile from "../Pages/Profile/Profile";
import { dark, light, main, mainLight } from "../Stylesheets/ColorPallete";
import { Icon } from "react-native-elements";
import { View } from "react-native";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        headerTintColor: light,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: main,
          shadowColor: dark,
        },
        tabBarActiveBackgroundColor: main,
        tabBarActiveTintColor: mainLight,
        tabBarInactiveBackgroundColor: main,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
          headerPressColor: light,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <>
                    <Icon
                      name="home-filled"
                      type="material-icon"
                      color={light}
                    />
                    <View
                      style={{
                        height: 5,
                        width: 5,
                        margin: 5,
                        backgroundColor: light,
                        borderRadius: 20,
                      }}
                    ></View>
                  </>
                ) : (
                  <Icon name="home" type="octicon" color={light} />
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
          headerPressColor: light,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Icon name="arrow-switch" type="octicon" color={light} />
                {focused ? (
                  <View
                    style={{
                      height: 5,
                      width: 5,
                      margin: 5,
                      backgroundColor: light,
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
          headerPressColor: light,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <>
                    <Icon name="user-alt" type="font-awesome-5" color={light} />
                    <View
                      style={{
                        height: 5,
                        width: 5,
                        margin: 5,
                        backgroundColor: light,
                        borderRadius: 20,
                      }}
                    ></View>
                  </>
                ) : (
                  <Icon name="user" type="feather" color={light} />
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
