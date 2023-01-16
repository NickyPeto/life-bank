import { Input } from "react-native-elements";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { mainLighter } from "../../Stylesheets/ColorPallete";

type PlaceholderProps = {
  placeholder: string | undefined;
  icon?: any;
};

export const CustomInputs: React.FC<PlaceholderProps> = (props) => {
  return (
    <Input
      inputStyle={GeneralComponentsStylesheet.inputStyle}
      placeholder={props.placeholder}
      placeholderTextColor={mainLighter}
      inputContainerStyle={GeneralComponentsStylesheet.inputContainerStyle}
      rightIcon={props.placeholder === "password" ? props.icon : null}
    />
  );
};

export default CustomInputs;
