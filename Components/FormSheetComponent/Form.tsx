import { View } from "react-native";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";
import { Input } from "react-native-elements";
import { FormModel } from "../../Models/FormModels";
import CustomInputs from "../CustomInputs/CustomInputs";

const Form: React.FC<FormModel> = ({ props }) => {
  return (
    <View style={GeneralComponentsStylesheet.formContainer}>
      <CustomInputs props={props?.login.email} />
      <CustomInputs props={props?.login.password} />
    </View>
  );
};

export default Form;
