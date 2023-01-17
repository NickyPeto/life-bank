import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../Routes/AppNavigator";
import { CustomTabProps } from "../../Models/SharedProps";
import TabComponent from "../../Components/TabsComponent/TabComponent";
import Form from "../../Components/FormSheetComponent/Form";
import { FormModel } from "../../Models/FormModels";
import SvgLogo from "../../assets/svgs";
import { CustomButton } from "../../Components/Button";
import { LoginStylesheet } from "../../Stylesheets/LoginStylesheet";

const Login = () => {
  const [login, setLogin] = useState<boolean>(true);

  function handleClick() {
    setLogin(!login);
  }

  type HomeStack = NativeStackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<HomeStack>();
  function redirect() {
    navigation.navigate("Tab");
  }

  //Mock data, this will be changed
  const tabdata: CustomTabProps = {
    active: login,
    title: "Login",
    secondTitle: "Register",
    handleClick: handleClick,
  };
  const loginData: FormModel = {
    placeholders: {
      email: "E-mail",
      password: "Password",
    },
    extraData: true,
  };
  const registerData: FormModel = {
    placeholders: {
      name: "Name",
      surname: "Surname",
      email: "E-mail",
      password: "Password",
    },
  };

  return (
    <SafeAreaView style={LoginStylesheet.container}>
      <View style={LoginStylesheet.mainContainer}>
        <>
          {login ? (
            <>
              <View style={LoginStylesheet.logoContainer}>
                <View style={LoginStylesheet.logo}>
                  <SvgLogo height={"100%"} width={"100%"} fill={"#fff"} />
                </View>
              </View>
              <TabComponent {...tabdata} />
              <Form {...loginData}></Form>
            </>
          ) : (
            <>
              <View style={LoginStylesheet.formWrapper}>
                <TabComponent {...tabdata} />
                <Form {...registerData} />
              </View>
            </>
          )}
        </>
        <CustomButton title={"Continue"} press={() => redirect()} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
