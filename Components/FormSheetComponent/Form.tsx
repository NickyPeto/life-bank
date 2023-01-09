import { View, Text } from "react-native";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";
import CustomInputs from "../CustomInputs/CustomInputs";

import { useEffect } from "react";
import { LoginModel } from "../../Models/FormModels";

type Inputs = {
  placeholder: string[];
};

const Form: React.FC<LoginModel> = (props) => {
  const array = Object.keys(props);
  return (
    <View style={GeneralComponentsStylesheet.formContainer}>
      {array.map((values) => {
        return (
          <View key={values}>
            <CustomInputs placeholder={values} />
          </View>
        );
      })}
      <Text style={{ color: "red" }}></Text>
    </View>
  );
};

export default Form;
