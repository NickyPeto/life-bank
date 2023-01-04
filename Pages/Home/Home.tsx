import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { MainButton } from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes/AppNavigator";
import { GeneralComponentsStylesheet } from "../../Components/Stylesheets/GneralComponentsStylesheets";

const Home = () => {
  type LoginStack = NativeStackNavigationProp<RootStackParamList, "Login">;
  const navigation = useNavigation<LoginStack>();
  function redirect() {
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView style={GeneralComponentsStylesheet.lightTheme}>
      <View>
        <Text style={GeneralComponentsStylesheet.typographyBold}>
          Home PAGE
        </Text>
        <MainButton title={"go back"} press={() => redirect()} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
