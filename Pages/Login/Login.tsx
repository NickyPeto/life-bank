import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { MainButton } from "../../Components/Button";
import { LoginStylesheet } from "../../Components/Stylesheets/LoginStylesheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import FormSheetComponent from "../../Components/FormSheetComponent/FormSheet";

const Login = () => {
  type HomeStack = NativeStackNavigationProp<RootStackParamList, "Login">;
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
          <FormSheetComponent />
        </View>
        <View>
          <MainButton title={"continue"} press={() => redirect()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
