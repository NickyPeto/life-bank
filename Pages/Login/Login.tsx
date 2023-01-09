import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { CustomButton } from "../../Components/Button";
import { LoginStylesheet } from "../../Components/Stylesheets/LoginStylesheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import { CustomTabProps } from "../../Models/SharedProps";
import TabComponent from "../../Components/TabsComponent/TabComponent";
import Form from "../../Components/FormSheetComponent/Form";
import { LoginModel, RegisterModel } from "../../Models/FormModels";
import SvgLogo from "../../assets/svgs";

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
    handleClick: handleClick,
  };
  const loginData: LoginModel = {
    email: "E-mail",
    password: "Password",
  };
  const registerData: RegisterModel = {
    name: "Name",
    surname: "Surname",
    email: "e-mail",
    password: "Password",
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
              <Form {...loginData} />
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
