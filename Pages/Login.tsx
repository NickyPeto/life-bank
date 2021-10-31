import { View, Text, SafeAreaView } from "react-native";

import React from "react";
import { LoginStylesheet } from "../Components/Stylesheets/LoginStylesheet";

const Login = () => {
  return (
    <SafeAreaView style={LoginStylesheet.container}>
      <View>
        <Text style={LoginStylesheet.typographyBold}>
          This will be the login
        </Text>
        <Text style={LoginStylesheet.typographyNormal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          dignissimos magnam doloribus quisquam odit! Molestias blanditiis nam
          nihil consequuntur est modi animi fugiat assumenda, facere harum ab
          perferendis ipsum tenetur.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
