import React, { useState } from "react";
import axios from "axios";
import { View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../Routes/AppNavigator";

import TabComponent from "../../Components/TabsComponent/TabComponent";
import Form from "../../Components/FormSheetComponent/Form";

import { CustomButton } from "../../Components/Button";
import { LoginStylesheet } from "../../Stylesheets/LoginStylesheet";
import { useTheme } from "../../Theme/Index";
import { CustomTabProps } from "../../Models/SharedProps";
import { FormModel, LoginModel } from "../../Models/FormModels";
import { SvgLogo } from "../../assets/svgs";

const Login = () => {
  const [login, setLogin] = useState<boolean>(true);
  const [datas, setDatas] = useState<LoginModel>();
  const { palette } = useTheme();

  function handleClick() {
    setLogin(!login);
  }

  type HomeStack = NativeStackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<HomeStack>();

  const testFetch = async (data: any) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        data,
      });
      console.log(res);
      return res;
    } catch (e: any) {
      console.log(e.message);
    }
  };
  function redirect(data: any) {
    console.log(data, "in redirect fn");
    //commenting out the function below until API is fixed

    navigation.navigate("Tab");
    // testFetch(data).then(() => {
    //   navigation.navigate("Tab");
    // });
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
      phoneNumber: "Phone Number",
      password: "Password",
      confirmPassword: "Confirm password",
    },
  };

  return (
    <SafeAreaView
      style={[LoginStylesheet.container, { backgroundColor: palette.main }]}
    >
      <View
        style={{
          display: "flex",
          // flex: 1,
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <>
          {login ? (
            <View
              style={[
                LoginStylesheet.logoContainer,
                { backgroundColor: palette.main },
              ]}
            >
              <View style={LoginStylesheet.logo}>
                <SvgLogo height={"100%"} width={"100%"} fill={"#fff"} />
              </View>
              <TabComponent {...tabdata} />
              <Form {...loginData}></Form>
            </View>
          ) : (
            <View style={LoginStylesheet.formWrapper}>
              <TabComponent {...tabdata} />
              <Form {...registerData} />
            </View>
          )}
        </>
        <CustomButton
          title={"Continue"}
          press={() => redirect({ ...loginData })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
