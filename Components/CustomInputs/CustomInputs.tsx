import { Input } from "react-native-elements";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";

export const CustomInputs: React.FC<any> = (props) => {
  return (
    <Input
      inputStyle={{
        color: "black",
        padding: 20,
      }}
      placeholder={props}
      inputContainerStyle={GeneralComponentsStylesheet.inputStyle}
    />
  );
};

export default CustomInputs;
