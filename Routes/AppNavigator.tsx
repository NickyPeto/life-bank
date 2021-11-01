import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { rootNavigationRef } from "./RootNavigationRef";
import App from "../App";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  Home: undefined;
  Register: undefined;
};
const { Screen, Navigator } = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  <NavigationContainer>
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
    </Navigator>
  </NavigationContainer>;
}
