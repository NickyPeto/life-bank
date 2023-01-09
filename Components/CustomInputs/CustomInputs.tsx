import { Input } from "react-native-elements";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";

type PlaceholderProps = {
  placeholder: string | undefined;
};

export const CustomInputs: React.FC<PlaceholderProps> = (props) => {
  return (
    <Input
      inputStyle={{
        color: "black",
        padding: 20,
      }}
      placeholder={props.placeholder}
      inputContainerStyle={GeneralComponentsStylesheet.inputStyle}
    />
  );
};

export default CustomInputs;
