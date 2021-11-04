import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { MainButton } from "../../Components/Button";
import { LoginStylesheet } from "../../Components/Stylesheets/LoginStylesheet";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import Form from "./Form";

const Login = () => {
  type HomeStack = StackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<HomeStack>();
  function redirect() {
    navigation.navigate("Home");
  }
  return (
    <SafeAreaView style={LoginStylesheet.container}>
      <View style={LoginStylesheet.mainHeader}>
        <View style={LoginStylesheet.logoContainer}>
          <Image
            style={LoginStylesheet.logo}
            source={require("../../assets/Images/LIFE.BANK.WHITE.png")}
          />
        </View>
        <View style={LoginStylesheet.customTabLeft}>
          <Form />
          <View>
            <MainButton title={"continue"} press={() => redirect()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
