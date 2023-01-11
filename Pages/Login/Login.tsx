import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { CustomButton } from "../../Components/Button";
import { LoginStylesheet } from "../../Stylesheets/LoginStylesheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import { CustomTabProps } from "../../Models/SharedProps";
import TabComponent from "../../Components/TabsComponent/TabComponent";
import Form from "../../Components/FormSheetComponent/Form";
import { FormModel, LoginModel, RegisterModel } from "../../Models/FormModels";
import SvgLogo from "../../assets/svgs";
import { light } from "../../Stylesheets/ColorPallete";

const Login = () => {
  const [login, setLogin] = useState<boolean>(true);

  function handleClick() {
    setLogin(!login);
  }

  type HomeStack = NativeStackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<HomeStack>();
  function redirect() {
    navigation.navigate("Home");
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
              <View
                style={{
                  display: "flex",
                  position: "relative",
                  top: 0,
                  bottom: 0,
                  backgroundColor: light,
                }}
              ></View>
            </>
          ) : (
            <>
              <View style={{ display: "flex", flex: 2, paddingTop: "20%" }}>
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
