import React, { useState } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { CustomButton } from "../../Components/Button";
import { LoginStylesheet } from "../../Components/Stylesheets/LoginStylesheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import FormSheetComponent from "../../Components/FormSheetComponent/FormSheet";
import { FormModel } from "../../Models/FormModels";

const Login = () => {
  type HomeStack = NativeStackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<HomeStack>();
  function redirect() {
    navigation.navigate("Home");
  }

  //Mock data, this will be changed
  const formData: FormModel = {
    props: {
      login: {
        email: "E-mail",
        password: "Password",
      },
      register: {
        name: "Name",
        surname: "Surname",
        email: "e-mail",
        password: "Password",
      },
    },
  };
  return (
    <SafeAreaView style={LoginStylesheet.container}>
      <View style={LoginStylesheet.mainContainer}>
        <View style={LoginStylesheet.logoContainer}>
          <Image
            style={LoginStylesheet.logo}
            source={require("../../assets/Images/LIFE.BANK.WHITE.png")}
          />
        </View>
        <FormSheetComponent props={formData.props} />
        <CustomButton title={"Continue"} press={() => redirect()} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
