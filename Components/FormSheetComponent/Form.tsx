import { View, Text } from "react-native";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";
import CustomInputs from "../CustomInputs/CustomInputs";

import { LoginModel } from "../../Models/FormModels";

const Form: React.FC<LoginModel> = (props) => {
  //FIXME: buscar un nombre mejor.
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
    </View>
  );
};

export default Form;
