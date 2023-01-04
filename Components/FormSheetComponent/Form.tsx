import { View } from "react-native";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";
import { Input } from "react-native-elements";

const Form = ({ props }: any) => {
  return (
    <>
      <View style={GeneralComponentsStylesheet.formContainer}>
        <Input
          placeholder={props?.login.email}
          inputContainerStyle={GeneralComponentsStylesheet.inputStyle}
        />
        <Input
          placeholder={props?.login.constrasena}
          inputContainerStyle={GeneralComponentsStylesheet.inputStyle}
        />
      </View>
    </>
  );
};

export default Form;
